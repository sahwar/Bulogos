#!/bin/bash
# danchev: STILL NOT FULLY IMPLEMENTED AND TESTED VERY WELL, BUT WORKS for src/*.tex;-)
#
# TODO: 
# src/Makefile - we must switch or 'sed -e' windows-1251 to UTF-8
# src/debian-book.tex - \usepackage[cp1251]{inputenc} and/or \inputencoding{utf-8}

DIR=debian-book
FROM=CP1251
TO=UTF-8
NEWDIR=$DIR.$TO

if [ -d $DIR ] ; then
    if [ ! -d $NEWDIR ] ; then 
	
	mkdir $DIR.$TO
	cp -r $DIR/* $NEWDIR/
	cd           $NEWDIR/

	for file in `find ./ -name '*.tex'` ; do
	iconv -f $FROM -t $TO $file > $file.$TO 
	mv `pwd`/$file.$TO `pwd`/$file
	done

    else 
	echo "Directory $NEWDIR exists. Move it away !"
    fi    
else 
    echo "Directory $DIR not found"
fi
