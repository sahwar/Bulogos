#!/bin/bash
# dl: Mass download of sequential files 0.4.0
# Author: Petko Yotov http://5ko.free.fr/ 2005
# License: Public Domain


BEGUIN="$1"
END="$2"
VAR="$3"
INC="$4"
REF="$5"

# UA="Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"


if [ -z "$2" ]; then

    echo "`basename "$0"` : mass download sequential files with wget
Syntax:
  `basename "$0"` first last [ start  [inc] [ref] ]

  first   : the first part of the directory+filename
  last    : the the last part of the filename (starting with the file counter)
  start   : the starting number (if omitted: 1)
  inc     : the increment (if omitted: 1)
  referer : the HTTP_REFERER header to be sent
           (if empty, will send the directory part)

  example :  To download files
   from : http://server/path/picture001.jpg
   to   : http://server/path/picture112.jpg
   try  :
    $0 http://server/path/picture 112.jpg

  example 2 : To download files
   from : http://server/path/img0001.jpg
   to   : http://server/path/img0033.jpg
   try :
    $0 http://server/path/img00 33.jpg

  example 3 : To download files
   from : http://server/path/img0012.jpg
   to   : http://server/path/img0033.jpg
   try :
    $0 http://server/path/img00 33.jpg 12"
    exit 0
fi


n=""
n=`echo $BEGUIN | sed -e 's%^.*/%%g'`
ROOT=`echo $BEGUIN | sed -e "s%\(.*\)$n$%\1%g"`

LIMIT=`echo "$END" | sed -re 's%^([0-9]+).*$%\1%'`
LAST=`echo "$END" | sed -re 's%^[0-9]+%%g'`


if [ -z "$VAR" ]; then  VAR=1; fi
if [ -z "$INC" ]; then INC=1; fi
if [ -z "$REF" ]; then REF="$ROOT"; fi


DIR=0
DIIR="000"

while [ -d "./$DIIR" ];do
	let DIR++
  	DIIR=`printf "%03d" $DIR`
done


echo mkdir "./$DIIR"
mkdir "./$DIIR"



PRINTF="%d"
if [ "$LIMIT" -ge    10 ];	then	PRINTF="%02d";	fi
if [ "$LIMIT" -ge   100 ];	then	PRINTF="%03d";	fi
if [ "$LIMIT" -ge  1000 ];	then	PRINTF="%04d";	fi
if [ "$LIMIT" -ge 10000 ];	then	PRINTF="%05d";	fi

while [ "$VAR" -le "$LIMIT" ]; do
	INDEX=`printf "$PRINTF" $VAR`
	URL="$BEGUIN$INDEX$LAST"
	echo $URL >> ./$DIIR/00-list.txt
	let "VAR += $INC"
done

CL="wget -c -P ./$DIIR/ -i ./$DIIR/00-list.txt --referer=$REF -U \"$UA\""
echo $CL
$CL

