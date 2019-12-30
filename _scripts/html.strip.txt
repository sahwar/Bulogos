#!/bin/bash

# Most of transformations corresponded to OpenOffice sintax (f.e. lists), but amny very common.

function strip_html(){
# $1 - filaname

	sed -i 's/\s*$//g' "$1" #Все завершающие строку "пробельные" символы удаляем
	sed -i 's/^\s*//g' "$1" #Все начинающие строку "пробельные" символы удаляем

unset commment

	replace_in_file -ie \
		-w '#</?([^>]+)>\s*#ie' -t 'strtolower("$0");' -c '1) All tags to lower' \
		-w '#<\/?(meta|tbody|font)[^>]*>\s*#i' -t '' -c '2) Gone <meta>, <tbody> and <font> tags' \
		-w '#<(body|p)[^>]*>\s*#i' -t '<$1>' -c '4) Clear all attributes of <body> and <p>' \
		-w '#<td[^>]*?( (?:colspan|rowspan)=[^ ]+)?[^>]*( (?:colspan|rowspan)=[^ ]+)?[^>]*?>\s*#i' -t '<td$1$2>' -c '5) Clear all attributes of <td> except of colspan and rowspan' \
		-w '#<p>.*?</p>#ies' -t 'str_replace(array("\r\n", "\r", "\n"), " ", "$0")' -c '6) <p></p> in one line' \
		-w '#<span lang=".+?">(.*?)</span>#is' -t '$1' -c '7) <SPAN LANG="en-US"><B> LS</B></SPAN>' \
		-w '#<style[^>]*>.*?</style>#is' -t '' -c '8) <style>...</style>' \
		-w '#</(b|i|ustrong|em)><\1>#i' -t '' -c '9) </b><b>, </i><i> etc...' \
		-w '#&nbsp;(?!&nbsp;)#' -t ' ' -c '10) Single &nbsp;' \
		-w '#<p>(<br>• .*?)</p>#ies' -t '"<ul>" . preg_replace("@\s*<br>• @s", "\n\t<li>", "$1") . "\n</ul>"' -c '11) Unordered lists:' \
		-w '#<p>(<br>1. .*?)</p>#ies' -t '"<ol>" . preg_replace("@\s*<br>\d+\. @s", "\n\t<li>", "$1") . "\n</ol>"' -c '12) Ordered lists:' \
		-w '#(?<!^)<(body|title|br|table|tr|td|p|hr|col|colgroup|h[1-6]|div)#m' -t '\n<$1' -c '13) Some start tags should go from new line' \
		-w '#(?<!^)</(body|table|tr|td|div)#m' -t '\n</$1' -c '14) And some end tags too (different set of tags)' \
		-w '#<!--.*?-->#s' -t '' ${comment#"15) Strip all comments"} \
		-w '# {2,}#' -t ' ' -c '100) Multiple spaces' \
		"$1"

	# Insert charset
	replace_in_file -ie -a '#<head>#i' -t '\n<meta http-equiv="content-type" content="text/html; charset=utf-8">' "$1"

	# @TODO - add some magick to optimise and clean styles in table.
	#"`dirname $0`/html.strip.dom.php" "$1"

	# Format. --xmlout need tto do not encode all Russian letters as entities:
	# xmllint --html --format --recover --encode utf-8 --xmlout "$1" | sponge "$1"
	java -classpath '/usr/share/java/jericho-html-3.1.jar:/usr/share/doc/jericho-html-3.1/samples/console/classes/' -enableassertions FormatSource "$1" | sponge "$1"

	#101) Format spaces to tabs and delete trailings spaces
	replace_in_file -ie -w '# {2}#' -t '\t' -w '#\s+$#m' -t '' "$1"

	echo "[$1] обработан"
}

	if [ "$1" ]; then
		for file in "$@"; do
		strip_html "$file"
		done
	else
	echo 'Нету аргументов. Должен передаваться файл для обработки. Завершаю работу.'
	exit
	fi