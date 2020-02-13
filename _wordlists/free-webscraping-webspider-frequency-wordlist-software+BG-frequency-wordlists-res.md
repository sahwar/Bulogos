## Wordlist software

Free software to use for webscraping websites via a webspider for the purposes of linguistics research about word forms, word frequencies, concordances, searching terms in context, TM DBs (translation-memories databases)
* TextSTAT
http://neon.niederlandistik.fu-berlin.de/en/textstat/
https://www.uibk.ac.at/tuxtrans/docs/TextSTATusersguide.pdf
http://neon.niederlandistik.fu-berlin.de/static/textstat/TextSTAT-Doku-EN.html
https://sourceforge.net/projects/textstat/
* https://pypi.org/project/textstat/ (NOT to be confused with TextSTAT above!)
* https://sourceforge.net/projects/tamsys/
* https://sourceforge.net/projects/textfilestatist/
* WebTooth-Extractor (webspider)
https://github.com/RedSilkSoftware/webtooth-extractor
* github.com - photon.py

## More web-resources on wordlists:

### Bulgarian-language wordlists on GitHub.com // Списъци с думи на български език в GitHub.com
* **https://github.com/stelf/en2bg4term** & **https://sites.google.com/site/bglocalize/dict**
* https://github.com/miglen/bulgarian-wordlists
* https://github.com/yradunchev/language
* https://github.com/aquilax/bg-words-dict
````
bg-words-dict
Списък с думи на български език.

За генериране на списъка:

wget https://github.com/chitanka/content-text/archive/master.zip
unzip -p content-text-master.zip | sed "s/[^а-я^А-Я]/\n/g" | awk '{print tolower($0)}' | sort -u > dict.txt
За генериране на списъка с валидните думи е използван aspell:

python sift.py dict.txt > dict.spellchecked.txt
Използван е корпус от https://github.com/chitanka/content-text.
````
````
https://fasttext.cc/docs/en/crawl-vectors.html
https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.bg.300.bin.gz
https://dl.fbaipublicfiles.com/fasttext/vectors-crawl/cc.bg.300.vec.gz
http://nlp.ffzg.hr/resources/corpora/setimes/
https://fasttext.cc/docs/en/language-identification.html
https://fasttext.cc/docs/en/dataset.html
````
* dcl-bas-bg_frequency-html___Frequency.zip
* https://github.com/sahwar/Dictionaries/blob/master/Bulgarian.txt
* https://github.com/sahwar/Dictionaries/blob/master/Bulgarian.aff & https://github.com/sahwar/Dictionaries/blob/master/Bulgarian.txt & https://github.com/sahwar/Dictionaries/blob/master/Bulgarian.dic
* https://github.com/vanyog/grammar-bg
* https://github.com/antouanbg/Bulgarian_Linguistic
* https://github.com/imalchev/Slovom & https://bg.wikipedia.org/wiki/Имена_на_числата
* http://bgoffice.sourceforge.net/ ; http://sourceforge.net/p/bgoffice/code/HEAD/tree/trunk/dictionaries/data/bg-en/ ; http://sourceforge.net/p/bgoffice/code/HEAD/tree/trunk/dictionaries/data/en-bg/ ;
* https://github.com/rddim/OpenTTD-Bulgarian-Town-Names
* https://github.com/quasoft/postgres-tsearch-bulgarian
* https://github.com/yoandinkov/ranlp-2019
* https://bg.wikipedia.org/wiki/Имена_на_числата `(k, K = „ка“; пример: 10k (10 ка) = 10 000)`
* Честотни речници на българския език от Института за български език (ИБЕ) към Българската академия на науките (БАН) - по стилове: администр., научен, публицистичен, художествен, научно-популярен, разг./худ.
http://dcl.bas.bg/frequency.html
http://dcl.bas.bg/Resources/Frequency/Frequency.zip
http://dcl.bas.bg/interesting_bg.html
* * https://tatoeba.org/eng/downloads
https://tatoeba.org/eng/ = отворена колекция от изречения и техните преводи на 348 езика ( https://tatoeba.org/eng/stats/sentences_by_language , https://tatoeba.org/eng/sentences/show_all_in/bul/none/none/indifferent , https://tatoeba.org/eng/downloads , https://tatoeba.org/eng/sentences_lists/index , https://github.com/Tatoeba/tatoeba2 , https://tatoeba.org/eng/audio/index )
* http://dl.opensubtitles.org/addons/export/
https://www.opensubtitles.org/addons/export_languages.php
* http://nikolay.it/Blog/2011/08/%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7-%D0%BD%D0%B0-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%8F-%D0%B5%D0%B7%D0%B8%D0%BA-%D1%87%D1%80%D0%B5%D0%B7-Wikipedia/3
* http://dumps.wikimedia.org/backup-index.html
http://download.wikimedia.org/bgwiki/20110819/bgwiki-20110819-pages-articles.xml.bz2
http://nikolay.it/content/files/2011-08/bg.wikipedia.org-words.rar
https://archive.fo/NbDQz
https://georgi.unixsol.org/programs/bg_names_stats/
https://georgi.unixsol.org/programs/num2bgmoney.php/view/ (словообразувателните модели на българските числителни имена)
https://georgi.unixsol.org/programs/egn.php/view/
Честотна статистика на глаголите в корпус от 342 642 думи download txt file. - http://dcl.bas.bg/PDF/freq_verbs.zip
http://dcl.bas.bg/PDF/ts_stats.txt.zip
http://dcl.bas.bg/PDF/zh_stats.txt.zip
http://dcl.bas.bg/PDF/sh_stats.txt.zip
* https://github.com/sahwar/stop-words
* https://archive.fo/NbDQz
* https://dumps.wikimedia.org/backup-index.html
* Etc.: ...
https://searchengines.bg/forum/tech/programming/12285-%D0%B1%D0%B0%D0%B7%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D0%B8-%D1%81-%D0%B4%D1%83%D0%BC%D0%B8-%D0%BD%D0%B0-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8
https://slovored.com/
http://www.radioenergy.bg/article/5000-novi-dumi-v-rechnika-na-bylgarskiya-ezik
http://cio.bg/5607_informacionna_sistema_za_izsledvane_na_savremenniya_balgarski_ezik
https://bg.wiktionary.org/wiki/%D0%A3%D0%B8%D0%BA%D0%B8%D1%80%D0%B5%D1%87%D0%BD%D0%B8%D0%BA:%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8/%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B5_%D0%B4%D1%83%D0%BC%D0%B8/41
https://bg.wiktionary.org/wiki/%D0%A3%D0%B8%D0%BA%D0%B8%D1%80%D0%B5%D1%87%D0%BD%D0%B8%D0%BA:%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8/%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B5_%D0%B4%D1%83%D0%BC%D0%B8/%D0%A1%D1%8A%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%BD%D0%B8_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B0_%D0%BE%D1%82_%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B8_%D1%80%D0%BE%D0%B4/%D0%A7
http://div.bg/40-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%BD%D0%B8-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8-%D0%B4%D1%83%D0%BC%D0%B8-_l.a_i.479039.html
http://creativu.org/10-%D0%BA%D1%83%D0%BB%D1%82%D0%BE%D0%B2%D0%B8-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8-%D0%B4%D1%83%D0%BC%D0%B8/
https://www.lifebites.bg/35-dumi-greshim/
https://www.manager.bg/%D0%BB%D1%8E%D0%B1%D0%BE%D0%BF%D0%B8%D1%82%D0%BD%D0%BE/25-%D1%80%D0%B5%D0%B4%D0%BA%D0%B8-%D0%B4%D1%83%D0%BC%D0%B8-%D1%81-%D0%BA%D0%BE%D0%B8%D1%82%D0%BE-%D1%89%D0%B5-%D0%B1%D0%BB%D0%B5%D1%81%D0%BD%D0%B5%D1%82%D0%B5-%D0%B2-%D1%80%D0%B0%D0%B7%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0
https://profit.bg/balgariya/nay-chesto-izpolzvanite-dumi-ot-balgarskite-polititsi/
https://news.bg/education/ban-puska-onlayn-rechnik-na-balgarskiya-ezik-sas-120-hil-dumi.html
http://ibl.bas.bg/struktura/balgarska-leksikologiya-i-leksikografiya/proekti/
http://ibl.bas.bg/struktura/kompyutarna-lingvistika/proekti/
http://dcl.bas.bg/bulnet/
http://neolex-bg.org/bg/
http://ibl.bas.bg//bulgarian_dialects/
https://bg.wiktionary.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%94%D1%83%D0%BC%D0%B8_%D0%B2_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%8F_%D0%B5%D0%B7%D0%B8%D0%BA
https://archive.fo/JoFJA
https://archive.fo/8h4cB
https://archive.fo/fjJGc
https://archive.fo/mU5Pp
http://ibl.bas.bg/Dialektna_delitba.pdf

Just for fun:
http://irccom.free.bg/funs/fun15/takova.html
