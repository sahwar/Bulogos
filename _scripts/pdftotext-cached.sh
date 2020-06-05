#!/bin/bash
// https://gist.github.com/phiresky/5025490526ba70663ab3b8af6c40a8db

fname="$1"

cachedir=/tmp/pdfextract
mkdir -p "$cachedir"

mtime="$(stat -c %Y "$1")"

hash=$(echo $fname.$mtime | sha256sum |  cut -c1-64)

echo $hash $fname $mtime

cachefname="$cachedir/$hash.txt"
if [[ ! -f "$cachefname" ]]; then
	pdftotext -layout "$fname" - |
		# add "Page X: " prefix to each line
		awk 'BEGIN {page=1} /\f/{page+=1}; { sub(/\f/, ""); print "Page " page ":", $0}' > "$cachefname"
fi

exec cat "$cachefname"
