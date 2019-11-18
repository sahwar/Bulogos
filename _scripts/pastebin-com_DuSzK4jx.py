#!/usr/bin/env python3
#Written by X41
#            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
#                    Version 2, December 2004
#
# Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
#
# Everyone is permitted to copy and distribute verbatim or modified
# copies of this license document, and changing it is allowed as long
# as the name is changed.
#
#            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
#   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
#
#  0. You just DO WHAT THE FUCK YOU WANT TO.

import json
import urllib.request
import sys

links= []
page = 0
pic = 0
tag = ' '.join(sys.argv[1:])
print(len(sys.argv))
print(sys.argv)
if len(sys.argv) == 1:
	print("Usage: DerpibooruDownloader.py [tag1], [tag2], [tag3], [tag4].....")
	exit()
data = ""

while True:
	page += 1
	url = "http://derpibooru.org/search.json?q=" + str(tag) + "&page=" + str(page)
	print(url)
	print("downloading data page " + str(page))
	json_data = urllib.request.urlopen(url).read().decode("utf-8")
	if json_data == "[]":
		break
	data = json.loads(json_data)
	for entry in data:
		links.append("http:" + entry['image'])
if len(links) == 0:
	print("No pics with that tag found")
	exit()
for link in links:
	pic +=1
	print("downloading pic " + str(pic) + " of " + str(len(links)))
	try:
		urllib.request.urlretrieve(link,link.split("/")[-1])
	except:
		print("Something went wrong with picture " + str(pic) +". Continuing with other pics.")
print("All done. May Celestia be with you.")
exit()