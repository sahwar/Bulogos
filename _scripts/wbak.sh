#!/bin/bash

# WebBackup script. Save some web-page for history.

MAIN_BAK_DIR='/home/pasha/_BAK'
DATE_FORMAT='%Y-%m-%d'

	if [ ! "$1" ]; then
	echo 'Нужен аргумент-файл!';
	exit 1
	fi

. /home/pasha/bin/SHARED/getopt_long.bash

GETOPT_STRING="c:"
LONG_GETOPT_STRING="cmd:"

long_getopt_parse "$@"	#To set global variables like $OPT*
TAIL=`long_getopt_parse "$@"`
set -- ${TAIL/#-- /}	#To set TAIL, what is not options

#echo OPTc=$OPTc
#echo OPTcmd=$OPTcmd
#echo "$@"
#For MC style - replace /#ftp: on ftp://
#files=${@//\/#ftp:/ftp:\/\/}
set -- ${@//\/#ftp:/ftp:\/\/}
#echo files=$files

#$1 - ЧТО бакапим
#$2 - ЧЕМ бакапим, какой коммандой (например cp, mv)



	if [ "$OPTcmd" ]; then
	cmd="$OPTcmd"
	else
		if [ "$OPTc" ]; then
		cmd="$OPTc"
		else
		cmd='wget -c -r -nH'
		fi
	fi
#############################################
#target=`echo $target | sed -r 's/ftp\:\/\/(.*?)@?(.*?)/=\1= =\2=/'`
URL_HOST=`echo "<? echo parse_url('$1', PHP_URL_HOST);?>" | php`
URL_PATH=`echo "<? echo parse_url('$1', PHP_URL_PATH);?>" | php`

#target=':'$URL_HOST$URL_PATH
#Wget will create all directories himself
dir="${MAIN_BAK_DIR}/`date +$DATE_FORMAT`/:$URL_HOST"
#echo "URL_HOST="$URL_HOST
#echo "URL_PATH="$URL_PATH
#echo "dir="$dir

#Создается иерархия
mkdir -p "${dir}"
#Main do
OLD_PWD=`pwd`
cd "${dir}"
echo $cmd $@
$cmd $@
cd $OLD_PWD
