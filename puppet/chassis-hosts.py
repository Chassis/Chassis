#! /usr/bin/env python

import avahi, dbus, os, time

from watchdog.observers import Observer
from watchdog.events import PatternMatchingEventHandler
from encodings.idna import ToASCII

# From /usr/include/avahi-common/defs.h
CLASS_IN = 0x01
TYPE_CNAME = 0x05

TTL = 60 # seconds

class DomainManager(object):
	def __init__(self):
		self.registered = []
		self.groups = {}

	def update(self, domains):
		missing = self.registered[:]

		for domain in domains:
			if not domain in self.registered:
				# print("Adding {}".format(domain))
				self.add_cname(domain)
				self.registered.append(domain)
			else:
				missing.remove(domain)

		for domain in missing:
			# print("Removing {}".format(domain))
			self.remove_cname(domain)
			self.registered.remove(domain)


	def add_cname(self, cname):
		bus = dbus.SystemBus()
		server = dbus.Interface(bus.get_object(avahi.DBUS_NAME, avahi.DBUS_PATH_SERVER),
				avahi.DBUS_INTERFACE_SERVER)
		group = dbus.Interface(bus.get_object(avahi.DBUS_NAME, server.EntryGroupNew()),
				avahi.DBUS_INTERFACE_ENTRY_GROUP)

		rdata = createRR(server.GetHostNameFqdn())
		cname = encode_dns(cname)

		group.AddRecord(avahi.IF_UNSPEC, avahi.PROTO_UNSPEC, dbus.UInt32(0),
			cname, CLASS_IN, TYPE_CNAME, TTL, rdata)
		group.Commit()

		self.groups[cname] = group

	def remove_cname(self, cname):
		self.groups[cname].Reset()

def encode_dns(name):
	out = []
	for part in name.split('.'):
		if len(part) == 0: continue
		out.append(ToASCII(part))
	return '.'.join(out)

def createRR(name):
	out = []
	for part in name.split('.'):
		if len(part) == 0: continue
		out.append(chr(len(part)))
		out.append(ToASCII(part))
	out.append('\0')
	return ''.join(out)

class ContentManager(object):
	def __init__(self):
		self.files = []
		self._contents = {}

	def contents(self):
		return set(reduce(lambda x, y: x + y, self._contents.values()))

	def add(self, path):
		handle = file(path)
		contents = handle.read()
		handle.close()

		lines = contents.split("\n")
		lines = [line for line in lines if line.strip() != ""]
		self._contents[path] = lines

	def update(self, path):
		return self.add(path)

	def remove(self, path):
		try:
			del self._contents[path]
		except KeyError:
			pass

class EventHandler(PatternMatchingEventHandler):
	def __init__(self, contentmanager, domainmanager):
		self.contentmanager = contentmanager
		self.domainmanager = domainmanager
		super(EventHandler, self).__init__(ignore_directories=True)

	def update(self):
		self.domainmanager.update(self.contentmanager.contents())

	def on_created(self, event):
		if event.is_directory:
			return

		# print "Creating:", event.src_path
		self.contentmanager.add(event.src_path)
		self.update()

	def on_deleted(self, event):
		if event.is_directory:
			return

		# print "Removing:", event.src_path
		self.contentmanager.remove(event.src_path)
		self.update()

	def on_modified(self, event):
		if event.is_directory:
			return

		# print "Modifying:", event.src_path
		self.contentmanager.update(event.src_path)
		self.update()

	def on_moved(self, event):
		if event.is_directory:
			return

		# print "Moving:", event.src_path
		self.contentmanager.remove(even.src_path)
		self.contentmanager.add(even.dest_path)
		self.update()

if __name__ == '__main__':
	manager = DomainManager()
	content = ContentManager()
	handler = EventHandler(content, manager)

	rootdir = '/etc/chassis-hosts/conf.d'

	# Add files initially
	for folder, subs, files in os.walk(rootdir):
		for path in files:
			content.add(os.path.join(rootdir, path))

	manager.update(content.contents())

	# Watch for changes
	observer = Observer()
	observer.schedule(handler, rootdir, recursive=True)
	observer.start()

	# Loop forever
	try:
		while True:
			time.sleep(1)
	except KeyboardInterrupt:
		observer.stop()
	observer.join()
