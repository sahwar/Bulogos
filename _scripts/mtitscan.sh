#!/bin/sh
#====================================================================
# FILE: mtitscan.sh
#
# Version: 2.0
#
# Copyright 2012 - Linux for Bulgarians
#
# Distributed under the terms of the GNU General Public License v2 
#====================================================================

VERSION=2.0
SCANDIR="/home/scan"
OUTPUT="~/Desktop/doc.pdf"
CLEAN=0

help()
{
    printf \
"Usage: ./mtitscan.sh [-c] [-d SCANDIR] [-o OUTPUT]\n\
   or: ./mtitscan.sh -h\n\
   or: ./mtitscan.sh -v\n\
Scan a document, remove white pages and create a PDF file.\n\n\
  -c            Clean files from the scanning process\n\n\
  -d            Specify the directory where scanned files will be stored\n\n\
  -o            Specify the name of the final document\n\n\
  -h            Print this message and exit\n\n\
  -v            Print version number and exit\n\n\
With no SCANDIR, scan in /home/scan.\n\n\
With no OUTPUT, the final document is ~/Desktop/doc.pdf\n\n\
Report mtitscan.sh bugs to office@linux-bg.org\n"
}

clean()
{
    rm -f image-* doc.tif 2> /dev/null
}

# First parse command-line arguments
while getopts "cd:o:hv" option
do
    case $option in
        h)
            help
            exit 0;;
        v)
            printf '%s: version %s\n'  "$0" "$VERSION"
            exit 0;;
        c)
            CLEAN=1;;
        d)
            SCANDIR="$OPTARG";;
        o)
            OUTPUT="$OPTARG";;
        *)
            help
            exit 1;;
    esac
done

# Change current working directory to SCANDIR
# and remove files from previous runs of mtitscan (if any)
cd "$SCANDIR"
clean

# Scan the document using scanadf
/usr/bin/scanadf --source='ADF Duplex' --mode=Lineart --resolution=200 --brightness=30 --contrast=50

# Create TIFF images and remove those who are white pages
for image in image-*
do
    pnmtotiff -g4 "$image" > "$image".tif

    if convert "$image".tif -quiet -shave 1%x1% -resize 40% -blur 0x5 -fuzz 15% -trim +repage info: | grep -q ' 1x1 '
    then
        rm -f "$image".tif 2> /dev/null
    else
        echo "$image".tif
    fi
done

# Now create a TIFF document with all non-blank pages
# and, subsequently, create the PDF document OUTPUT
tiffcp image-*.tif doc.tif
tiff2pdf -j -o "$OUTPUT" doc.tif

# Finally, clean if specified
[ $CLEAN -eq 1 ] && clean
