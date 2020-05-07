#!/bin/sh
##################################################
# CheckPerms 0.1
# Written by Georgi Chorbadzhiyski (georgi AT top DOT bg)
##################################################

FIND=`which find`
STARTAT=`pwd`
EXCLUDE=""
PRINT=" -ls"

# Directories to not put in the database, which would otherwise be.
#PRUNEPATHS="/tmp /usr/tmp /var/tmp /proc /afs"
PRUNEPATHS="/proc /c /cdrom"

# The same, in the form of a regex that find can use.
PRUNEREGEX=`echo $PRUNEPATHS|sed -e 's,^,\\\(^,' -e 's, ,$\\\)\\\|\\\(^,g' -e 's,$,$\\\),'`
 
[ ! -x "$FIND" ] && {
    echo "Ugh! Can't find 'find' or it is not executable!"
    exit 1
}

echo "Not checking: $PRUNEPATHS"
#
# Directory checks
#
echo "SetUid directories...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type d -perm +4000 $PRINT
echo "SetGid directories...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type d -perm +2000 $PRINT
echo "Sticky directories...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type d -perm +1000 $PRINT
echo "World writable directories...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type d \( -perm +0002 -a ! -perm +1000 \) $PRINT
#echo "Group writable directories...."
#$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type d \( -perm +0020 -a ! -perm +1000 \) $PRINT


#
# File checks
#
echo
echo "SetUid files...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type f -perm +4000 $PRINT
echo "SetGid files...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type f -perm +2000 $PRINT
echo "Sticky files...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type f -perm +1000 $PRINT
echo "World writable files...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type f \( -perm +0002 -a ! -perm +1000 \) $PRINT
#echo "Group writable files...."
#$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type f \( -perm +0020 -a ! -perm +1000 \) $PRINT

#
# Special files check
#
echo
echo "Named pipes...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type p $PRINT
echo "Sockets...."
$FIND $STARTAT -regex $PRUNEREGEX -prune -o -type s $PRINT
