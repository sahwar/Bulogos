#!/usr/bin/python

import gtk
import gobject

SELECTIONS = [
		"PRIMARY",
		"SECONDARY",
		"CLIPBOARD",
	]

def show_selection_contents(cb, contents, _):
	print "%s-%s: %r" % (contents.selection, contents.target, contents.data)

def get_selection_contents(cb, targets, _):
	for t in targets:
		cb.request_contents(t, show_selection_contents)

def get_selection_types(cb):
	cb.request_targets(get_selection_contents)

def handle_owner_change(cb, event):
	if event.type == gtk.gdk.OWNER_CHANGE:
		print "Selection %r changed: %r" % (event.selection, event.reason)
		get_selection_types(cb)

if __name__ == "__main__":
	for sel in SELECTIONS:
		cb = gtk.clipboard_get(sel)
		# Check what's currently in this selection
		get_selection_types(cb)

		# Watch this selection for changes
		cb.connect("owner-change", handle_owner_change)

	gtk.main()
