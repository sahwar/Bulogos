#!/usr/bin/env bash

function url2markdown()
{
    if [ -z "$1" ]; then
        echo "Usage: url2markdown <url|path> [outfile.md]"
        echo ""
        echo "  Converts the specified URL (or path) to Markdown using Pandoc."
        echo ""
        echo "  If [outfile.md] (arg 2) is not specified..."
        echo ""
        echo "    - basename of url|path is used (arg 1)"
        echo "    - whitepsaces replaced with underscores"
        echo "    - control characters replaced with underscores"
        echo "    - convert to lowercase"
        echo "    - existing file extension replaced with .md"
        echo ""
        echo " The text below was not in the original source-code and"
        echo " was added as an extra tip by ve4ernik/sahwar <ve4ernik2@gmail.com>."
        echo ""
        echo " NOTE: You can modify the source-code of this shell-script"
        echo " to include additional options, e.g. convert to CommonMark"
        echo " instead of to convert to pure Markdown, or to convert"
        echo " the URL/URI to one of the other export formats supported"
        echo " by pandoc, and you can also include an option to send"
        echo " the URL/URI to http://w3.org/services/html2txt/ and pipe"
        echo " the wget/curl-downloaded output file into pandoc."
        echo " Please refer to the http://pandoc.org Instructions Manual"
        echo " and note which version of pandoc you are using, to get"
        echo " additional information about pandoc and its features..."
        echo " I could have added a wget/curl part to this file to download (BUT YOU CAN EDIT THIS FILE TO ALSO INCLUDE THAT!) "
        echo " the latest stable source-code-for-compiling/.deb binary installer "
        echo " for Debian Linux & Ubuntu (&their derivates)/MS-Windows .exe version of pandoc "
        echo " into this bash-shellscript to make your life easier by automating "
        echo " the installation of pandoc in case you don't have a recent stable version "
        echo " of it installed within your (GNU/)Linux or MS Windows computer, BUT due to "
        echo " websites often changing the absolute URL/URL hyperlinks for direct downloads "
        echo " in order to reduce hotlinking scripted abuse of number of downloads per second "
        echo " or their number from a particular IP, etc. - just go to http://pandoc.org and "
        echo " download the file suitable for installing under your OS&hardware-platform-architecture "
        echo " and install that one BEFORE running this bash-shellscript!!! "
        echo " Also note that using this script via a JavaScript-based bookmarklet calling this script "
        echo " within Mozilla Firefox, or just using the script alongside lightweight webbrowsers such "
        echo " as dwb, suckless.org's surf+tabbed, http://uzbl.org , qutebrowser, QupZilla, and "
        echo " text-only antique webbrowsers such as lynx, links, elinks, elinks2, etc. - is quite "
        echo " useful in case you are mostly working in the bash terminal or inside emacs/spacemacs most of the time... "
        echo " Also note that pandoc can convert its export files back into html (html4.1 or html5, etc.) & that you can also "
        echo " include useful related software into this bash-shellscript, such as: img2pdf (Python3-based) & pdfarranger, "
        echo " pdf2htmlEX, imagemagick, waifu2x, shapecatcher.com, http://2cyr.com, tools.chitanka.info, (textmechanic.com, "
        echo " regex101.com, snipplr.com, pastebin.com, 0bin.net, gist.github.com), iconv&luit, awk, pcre2&perl&python3, "
        echo " fsearch/angrysearch/mlocate/find/ls&exa&'sort | uniq', google input tools online's handwriting-recognition function, "
        echo " and any other working useful script/CLI-app found on the Internet (e.g. from github.com, gitlab.org, etc.) - like "
        echo " e.g. piping a document-file for rough machine-translation via translate.google.com to get such a rough "
        echo " basic translation before sending it over to http://proz.com professional translators & local translator freelancers, etc. ... "
        echo " Please note that you can also add '$ alias' additions/modifications of this file (with additional/changed parameters) " 
        echo " to be called via your CLI-terminal-app in your (GNU/)Linux OS under some easy-to-remember text-command alias-command-name via bash... "
        return 1
    fi

    local outfile

    if [ -z "$2" ]; then
        outfile=$(basename "${1}" | sed -E 's/[_[:blank:]]+/_/g' | sed -E 's/[_[:cntrl:]]+/_/g' | tr '[:upper:]' '[:lower:]')
        outfile="${outfile%%.*}.md"
    else
        outfile="$2"
    fi

    pandoc --standalone --from html "${1}" --to markdown --output "${outfile}"
}

url2markdown "$1" "$2"
