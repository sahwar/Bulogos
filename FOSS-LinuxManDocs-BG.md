# FOSS-LinuxManDocs-BG #
-----

FOSS-LinuxManDocs-BG ще бъде сборно хранилище (repository) на файлове с преводи на (ГПИ интерфейса на) софтуер на български език, част от подпроектите <abbr title="CBASTILS = Common Application-Software Translation (t9n), Localization (l10n), and Internationalization (i18n) Strings">CBASTILS</abbr>.Bulogos.info и <abbr title="HUTPIB-bg = Help Us Translate Programs Into Bulgarian - BigGame">HUTPIB-bg</abbr>.Bulogos.info, като доста от преводите са взети от другаде и са дело на много преводачи.

Настоящият документ е опит за събиране на едно място на основните източници с полезна информация за свободен софтуер и софтуер с отворен код за българоезични ползватели. Включват се и много хипервръзки (е/URI/URL-препратки :P), които водят до помощна информация специално за българи, използващи всякакъв софтуер.



## Основни инструкции за превода на софтуер (програми за компютър, по-точно приложен софтуер) на български език плюс хранилища с файлове с български преводи на софтуер: ##
* **BGlocalize**: https://sites.google.com/site/bglocalize/
* **FOSS-BG-translators EMailList (Пощенският списък за преводи и локализация на български на Linux, познат и като „Пощенският списък за преводи и локализация на KDE“)**: <dict@ludost.net> (за записване/абониране към е-пощенския списък-дискусия: http://ludost.net/cgi-bin/mailman/listinfo/dict) (KNOWN AS ["Dict" Bulgarian free software translators mailing list](http://ludost.net/cgi-bin/mailman/listinfo/dict))
* **KDE-BG**: https://kde.lindeas.com/ (KNOWN AS [KDE in Bulgarian home page](http://kde.lindeas.com)) & https://l10n.kde.org/team-infos.php?teamcode=bg

````
* ***KDE Internationalization***
** Translatable code: http://techbase.kde.org/Development/Tutorials/Localization/i18n
** Common mistakes:
http://techbase.kde.org/Development/Tutorials/Localization/i18n_Mistakes
** Semantic translation:
http://techbase.kde.org/Development/Tutorials/Localization/i18n_Semantics
** Build systems:
http://techbase.kde.org/Development/Tutorials/Localization/i18n_Build_Systems
** Krazy checking:
http://techbase.kde.org/Development/Tutorials/Localization/i18n_Krazy
** Writing documentation:
https://l10n.kde.org/docs/

* KDE Localization:
https://l10n.kde.org/scripts/l10n-stats/documentation.php
** Translation Howto:
http://l10n.kde.org/docs/translation-howto
** Localization Guide:
http://techbase.kde.org/Localization
** Building l10n Modules:
http://techbase.kde.org/Development/Tutorials/Localization/Building_KDE%27s_l10n_Module
** Localization Tools:
https://l10n.kde.org/tools/
** KDE Localize (edit .po, .pot (.mo), and .ts/.qm (?) software-localization files):
http://userbase.kde.org/Lokalize

* _*KDE Localization Dictionary*_ (речник с преведени текстови низове за KDE):
** Search Translations: https://l10n.kde.org/dictionary/search-translations.php
** Compare Translations: https://l10n.kde.org/dictionary/compare-translations.php
https://l10n.kde.org/scripts/l10n-stats/documentation.php

* KDE5 Localization Statistics (Stats):
** https://l10n.kde.org/stats/gui/trunk-kf5/team/
** https://l10n.kde.org/stats/gui/trunk-kf5/team/bg/
** https://l10n.kde.org/stats/gui/stable-kf5/team/
** https://l10n.kde.org/stats/gui/stable-kf5/team/bg/

* KDE4 Localization Statistics (Stats):
** https://l10n.kde.org/stats/gui/stable-kde4/team/
** https://l10n.kde.org/stats/gui/stable-kde4/team/bg/

======

https://l10n.kde.org/teams-list.php
https://l10n.kde.org/team-infos.php?teamcode=bg

* _KDE in Bulgarian home page (Website):_
http://kde.lindeas.com/

* _"Dict" Bulgarian free software translators mailing list:_
http://ludost.net/cgi-bin/mailman/listinfo/dict

****A new HTML table to suggest for adding to https://sites.google.com/site/bglocalize/dict (with git diffs to the document OR to its HTML iframe table columns!!!):****

* White = the official default English text string(s)/term/collocation
* Light Blue = technical notes, context, hyperlinks about the technology and its English-language text string/term & translation problems (including images and linked videos)
* Light Green = recommended translation(s) into Bulgarian
* Light Yellow = permitted, okay-ish translations into Bulgarian
* Light Red = translations into Bulgarian which are NOT recommended (including mixed stuff like "log-нете се" и „къмътва“ и „куплунг гаджет“ :P)
* Light Purple = contributors <theircontactemail@example.com>
[git diffs of the table]
* Light Pink/Light Grey = hyperlinks to the specific version of TITLED (named) apps which utilize this localized translation strings (these localized translation strings), including a hyperlink to the source-template and localized-language-translation-strings.[someformat] for the hyperlinked version...

String Localization Statistics Coloring-Scheme (borrowed from https://l10n.kde.org/stats/gui/stable-kf5/team/ with slight modifications):

[Dark] Green (recommended translated messages) = translated
[Dark] Blue (fuzzy messages) = fuzzy translated
[Dark] Red (untranslated messages) = untranslated
[Dark] Purple (info not available) = no info (N/A, ???)

======

_KDE DE (desktop environment) apps:_
https://community.kde.org/Main_Page
https://community.kde.org/Konqi

_KDE apps for MS Windows:_
https://community.kde.org/Windows
https://chocolatey.org/profiles/KDE

KDE Localization:
https://community.kde.org/KDE_Localization
https://community.kde.org/KDE_Localization/LTMT

https://l10n.kde.org/scripts/l10n-stats/documentation.php

---

Linux From Scratch (LFS) books:
http://lfs.phayoune.org/lfs/
http://lfs.phayoune.org/blfs/
http://lfs.phayoune.org/alfs/
https://trac.clfs.org/
http://lfs.phayoune.org/blfs/downloads/stable/BLFS-BOOK-8.4-nochunks.html
http://lfs.phayoune.org/blfs/downloads/stable-systemd/BLFS-BOOK-8.4-systemd-nochunks.html
http://lfs.phayoune.org/blfs/view/8.1/lxqt/lxqt-session.html
http://lfs.phayoune.org/blfs/view/8.1/index.html
http://lfs.phayoune.org/blfs/
http://lfs.phayoune.org/blfs/read.html
http://lfs.phayoune.org/blfs/view/stable/

---

* Pootle localization servers, Weblate localization servers, Mozilla Pantoon/Pontoon localization servers & the Translate Toolkit

* You can download the complete GNOME
translation package:
https://l10n.gnome.org/
https://l10n.gnome.org/languages/bg/gnome-3-34/ui.tar.gz
https://l10n.gnome.org/languages/en/gnome-3-34/ui.tar.gz
https://l10n.gnome.org/languages/ru/gnome-3-34/ui.tar.gz

* Amagama&Pootle:
https://amagama-live.translatehouse.org/
http://amagama.translatehouse.org/
http://pootle.translatehouse.org/

* LaunchPad BZR (Bazaar) translations & PPAs (Personal Package Archive with .deb's):
https://translations.launchpad.net/

* B-Translator by Dashamir Hoxha: http://bg.btranslator.org/
Bulgarian:
https://bg.btranslator.org/translations/bg/8f840b36f96c4fd4bc078607f6bf3c00b1e2bab2
https://bg.btranslator.org/btr/project
https://bg.btranslator.org/vocabulary/ICT_bg
https://bg.btranslator.org/btr/project/ubuntu/gnome-shell/bg/dashboard
https://bg.btranslator.org/btr/project/ubuntu/gnome-shell/bg/list?list_mode=untranslated
https://bg.btranslator.org/btr/project/ubuntu/gnome-shell/bg/list?list_mode=untranslated
https://bg.btranslator.org/translations/bg/2ced57f125910a9e8ab95deea86e4ad7be418b5a
http://info.btranslator.org/
https://l10n.org.al/translations
http://info.btranslator.org/install.html
https://bg.btranslator.org/
https://l10n.org.al/
<bg@l10n.org.al>
.xbm file
The scripts I use to download the translations are here:
https://gitlab.com/b-translator/btr_server/tree/master/modules/custom/btrCore/data/get

* Pylyglot:
http://pylyglot.org/
https://omaciel.github.io/translations/life/2014/07/12/end-of-pylyglot.html
https://github.com/omaciel/pylyglot

````

* **GNOME-BG**: http://fsa-bg.org/project/gtp
https://l10n.gnome.org/teams/bg/
http://translatehouse.org/
https://l10n.gnome.org/module/gnome-latex/
http://docs.translatehouse.org/projects/translate-toolkit/en/latest/commands/pogrep.html?id=toolkit/pogrep
* https://translatehouse.org/
* https://translationproject.org/team/bg.html
For backup purposes, each month a tarball containing all the above PO files is made: https://translationproject.org/backups/last/bg.tgz
https://translationproject.org/team/index.html
https://translationproject.org/html/welcome.html
* **XFCE-BG:**
https://www.transifex.com/xfce/public/
https://wiki.xfce.org/translations
https://wiki.xfce.org/translations/translation_guidance_in_xfce
http://docs.translatehouse.org/projects/localization-guide/en/latest/guide/xfce.html
* **MATE-BG:**
https://www.transifex.com/mate/MATE/
* **LXQT-BG:** https://weblate.lxqt.org/languages/bg/
https://weblate.lxqt.org/languages/
https://weblate.lxqt.org/
https://lxqt.org/
https://github.com/lxqt/lxqt-l10n
https://pkgs.org/download/lxqt-l10n
* **[BGoffice (БГ Офис)](http://bgoffice.sourceforge.net/)**, [gbgoffice, БГ Офис помощник (GTK версия)](http://gbgoffice.info/) и https://slovored.com/english/
(* стари безплатни версии на програмата за проверка на правописа на български текстове **IDI Spellchecker/IDI Dictionary/IDI Dictionary Talking** [IDIdictionary & spellchecker (hyperlink)](http://freeplace.info/ididictionary/bulgarian_spell_checker/), WinEst, др.)
* **[ludost.net](https://ludost.net/)** - https://ludost.net/projects.html - https://marla.ludost.net/hosted/ - Ако имате проект с не-стопанска цел и се чудите къде да го приютите, пратете ни e-mail на requests[at]ludost.net. Ние ще направим всичко, което е по силите ни, за да ви помогнем. (Включва и... :P "OpenDC - An OpenDC Hub for unlicensed (e.g. legal) anime content - maintained by Vasil Kolev" и https://anime.ludost.net/ - "български откачен аниме и манга портал")
* `bglinux` — пакет за българизация и кирилизация на Linux (от Антон Кирилов Зиновиев и други); `bgtex` — пакет за българизация и кирилизация на TeX/LaTeX - вижте още XeTeX (Tex with Unicode fonts!):
https://en.wikipedia.org/wiki/List_of_TeX_extensions
https://en.wikipedia.org/wiki/Comparison_of_TeX_editors
https://en.wikipedia.org/wiki/Template:TeX_editors
http://xetex.sourceforge.net/
https://tug.org/usergroups.html#bg
https://www.ctan.org/lugs
Local Bulgarian TeX User Group (UG):
bgTEX
Bul­gar­ian LATEX Users Group
Dept. of Ap­plied Math­e­mat­ics and Statis­tics
Univer­sity of Ruse
8 Stu­dentska str.
Ruse,7017
Bul­garia
Web: groups.google.com/fo­rum/?hl=bg&from­groups#!fo­rum/bul­gar­ian-la­tex-users-group
Email: bul­gar­ian-la­tex-users-group@google­groups.com
Lan­guages: Bul­gar­ian

```
http://lml.bas.bg/~anton/linux/bglinux.html
http://lml.bas.bg/~anton/original/
http://lml.bas.bg/~anton/original/BG_Linux.html
http://lml.bas.bg/~anton/original/Bulgarization.html
http://lml.bas.bg/~anton/original/Ontogenesis.html
http://lml.bas.bg/~anton/original/bglinux.html (Антон Зиновиев и други)

https://github.com/omaciel/EmblemDivide (an example of a ebook/e-book written in TeX/LaTeX, with full .tex source code!)
https://github.com/omaciel/book-source = the source code of the boook The Joy of Clojure (изходния код на книгата „Радостта от езика за програмиране Clojure)

https://github.com/omaciel/gnome-i18n-manage-vcs
https://github.com/omaciel/python-postats

`pandoc`, `yelp` + `gnome-doc-util`, (GNU/)Linux `man`pages, http://projectmallard.org/ (a DocBook-like(?) Markdown-like(?) document lightweight markup language)

```
* Учебник за Дебиан Линукс на български език (Debian Linux): http://d.linux-bg.org/download/books/Debian-book/src/debian-book.html (за малко по-стара версия на Debian, но много от информацията е все още напълно приложима)

http://lml.bas.bg/~anton/original/bglinux.html (Антон Зиновиев и други)

* _**Transifex.com**_ (например https://www.transifex.com/mate/MATE/translate/#bg), _**[CrowdIn.com](https://crowdin.com/)**_, _**[Zanata.org](http://zanata.org/)**_, [Mojito](http://www.mojito.global/), [TranslationExchange](https://translationexchange.com/), [Localize.co](https://lokalise.co/), [GetLocalization](https://www.getlocalization.com/), 
и [други инструменти за превод (CAT, MT, TM и т.н)](https://opensource.com/article/17/6/open-source-localization-tools)
* Self-hosted **Weblate**, [Mozilla Pontoon](https://pontoon.mozilla.org/) и т.н. хранилища с преводи на софтуер и др., например https://weblate.lxqt.org/projects/lxqt/pcmanfm-qt/ и https://hosted.weblate.org/projects/tilix/translations/
* **Pylyglot** (a self-hosted web-based translation compendium = '') - https://github.com/omaciel/pylyglot

* **Linux-BG.org (уебсайт „Линукс за българи“):** http://www.linux-bg.org/cgi-bin/y/index.pl, http://www.linux-bg.org/cgi-bin/y/index.pl?page=links, http://d.linux-bg.org/, https://LaunchPad.net, https://github.com, https://gitlab.org
* **LUG-BG** (_LUG-BG (Linux Users Group - Bulgaria)_ е неформална организация на потребителите на Linux в България) - http://www.linux-bulgaria.org/ + **е-пощенски списък на LUG-BG** http://linux-bulgaria.org/mailman/listinfo/lug-bg
lug-bg@linux-bulgaria.org ; за абониране: http://linux-bulgaria.org/mailman/listinfo/lug-bg или изпратете email със Subject:/Тема: "help" (без скобите) до lug-bg-request@linux-bulgaria.org (за контакти с администратора на пощенския списък: lug-bg-owner@linux-bulgaria.org)
* Форуми, блогове, лични уебсайтове и лични/фирмени GitHub & GitLab & др. хранилища и проекти: например http://www.linux-bg.org/forum/index.php, http://hardwarebg.com/forum/, https://www.kaldata.com/forums/ и МНОГО други.
* [Учи Свободен (свободен софтуер за българските училища) - http://cd.svoboden.net/bg/index.html](http://cd.svoboden.net/bg/index.html) - ***Учи Свободен*** е диск с *безплатни за ползване* и *свободни за разпространение* програми за българските училища. Всички тези програми са свободен софтуер, така че можете [да изтеглите диска](http://cd.svoboden.net/bg/status.html)напълно безплатно \- с това не нарушавате закона. ([УРОК И ПОВЕЧЕ ИНФОРМАЦИЯ ЗА „Учи Свободен“](http://skss.learnfree.eu/archives/619))
* [Made in BG @ linux-bg.org (новини на български език и статии за софтуер (включително свободен софтуер и софтуер с отворен код), направен от българи или направен в България, плюс безплатно изтегляне и дискусии на такъв софтуер)](http://www.linux-bg.org/cgi-bin/y/index.pl?page=repository)
* https://github.com/sahwar/Best-websites-a-programmer-should-visit
* Self-hosted Pootle / [Translate Toolkit](https://toolkit.translatehouse.org/) (https://github.com/translate/translate) installations (https://translate-toolkit.readthedocs.io/en/latest/): https://pootle.translatehouse.org
* OmegaT+
* https://lokalise.co/
* https://www.localize.io/
* ...

`````
Някои от долните хипервръзки вече на са налични, но са в този документ като исторически спомен...

линукс за българи: http://linux-bg.org
FSA-BG: http://fsa-bg.org
OpenFest: http://openfest.org
FreeBSD BG: http://bg-freebsd.org
KDE-BG: http://kde.fsa-bg.org/ & kde.lindeas.net
Gnome-BG: http://gnome.cult.bg/
проект OpenFMI: http://openfmi.net
NetField Forum: http://netField.ludost.net/forum/
http://ludost.net/projects.html
Anton Zinoviev anton(at)lml(dot)bas(dot)bg - BGLinux, BGtex, изобщо - кирилизация, както и доста статии
http://www.lml.acad.bg/~anton/linux/index.html
http://archive.is/LXWYN
https://www.iro.umontreal.ca/contrib/po/HTML/team-bg.html
https://debian.fmi.uni-sofia.bg/~ogi/bulgarian.el
http://archive.is/UKrWk
http://archive.is/LXWYN
``````

## FOSS конференции и срещи от и за българи (конференции за свободен софтуер и софтуер с отворен код) ##
* **[OpenFest](http://www.openfest.org/2018/bg/)**
* * **Hackerspaces:** [initLab](https://initlab.org/) и др.
* [**FOSDEM**](https://fosdem.org/2019/)
* **[TuxCon](http://tuxcon.mobi/) (Търсят се лектори за TuxCon BG 2019!!! - info@tuxcon.mobi)** - 8-9 June 2019, Plovdiv, Bulgaria - Speakers wanted! Call for paper is open. We are looking for awesome topics related to open source software or open source hardware. Please submit your proposals to info@tuxcon.mobi. --- конференция: 8 June 2019 (25 Tsanko Diustabanov St, Plovdiv, Bulgaria), workshop (работилница, уъркшоп): 9 June 2019 (Olimex Training Building, 2 Pravda St., Plovdiv, Bulgaria)
* [PlovdivConf](http://plovdivconf.com/#schedule) (18 май 2019 @ 9:30 - SiteGroundHQ Plovdiv
* **[initLab](https://initlab.org/)** - 'the hackerspace in Sofia, Bulgaria' = 1) среда с много различни и интересни индивиди; 2) сцена, на която всеки може да бъде както учител, така и ученик; 3) свободно достъпно физическо място; 4) пространство за спокойна и плодотворна работа без разсейващи фактори;
* **[Wikimedia Conferences (Конференции на Фондация „Уикимедиа“)](https://meta.wikimedia.org/wiki/Wikimedia_Conference)** и [Wikipedia:Meetups](https://en.wikipedia.org/wiki/Wikipedia:Meetup)

Организации за свободен софтуер и софтуер с отворен код и главни FOSS портали
* **[FSFE (Free Software Foundation Europe)](https://fsfe.org/index.bg.html)**
* **[FSF (Free Software Foundation)](https://fsf.org)**
* [Kernel.org, The Linux Kernel Archives, official downloads of the Linux kernel!!!](https://www.kernel.org/)
* [The Linux Foundation](https://www.linuxfoundation.org/)
* [The GNU Project](https://www.gnu.org/)
* Linus Torvalds' Google+ blog: https://plus.google.com/+LinusTorvalds (Google+ is shutting down in April 2019, hurry & backup your data before that!)
* RMS's (Richard M. Stallman) personal website: http://stallman.org/ ;)
* 'GNU/Linux vs. Linux' debate: https://www.gnu.org/gnu/linux-and-gnu.html

* и др. (за допълване...)

## Termbanks и превод на не-свободен софтуер на Microsoft и Apple, Inc. (бази от данни с преведени термини и текстови низове за софтуер и т.н.)
````
* I18n (internationalization), l10n (localization) и t9n (translation; превод) за продукти на Apple, Inc. (Apple macOS + Apple iOS) - превод на софтуер за Apple macOS и Apple iOS:
https://developer.apple.com/internationalization/
https://developer.apple.com/download/more/?=Glossaries
https://developer.apple.com/videos/play/insights/102/

* Примерни указания за превод на софтуер за Google Android (превод на програми/приложения/apps за Android):
https://www.oneskyapp.com/academy/android-app-localization-tutorial-basics/

* I18n, l10n и t9n за продукти на Microsoft. (Microsoft Windows + Windows10 Windows-Store apps):

https://docs.microsoft.com/en-us/windows/desktop/uxguide/glossary
файловият формат .tbx (TermBank eXchange)
https://www.microsoft.com/en-us/download/details.aspx?id=22339

Microsoft Terminology Collection (base IT translation glossary):
https://www.microsoft.com/en-us/Language/Terminology (указания за превод на софтуер за Microsoft Windows и база от данни с преведени IT термини и текстови низове, които се използват в приложения (програми) за Microsoft Windows)
https://www.microsoft.com/en-us/language
https://www.microsoft.com/en-us/language/StyleGuides?rtc=1 (ръководство за стила (style guide) при превод на програми за Microsoft Windows)
https://www.microsoft.com/en-us/language/toolbox
https://hub.microsofttranslator.com/SignIn?returnURL=%2FHome%2FIndex
https://www.microsoft.com/en-us/download/details.aspx?id=41158
https://www.microsoft.com/en-us/language/Translations?rtc=1

* Templates for Microsoft Office and Microsoft Office365 (шаблони за документи в Microsoft Office (MS Word) и Microsoft Office365):
https://templates.office.com/?legRedir=true&qu=books&CorrelationId=99a64b77-15a6-4299-be0b-5dbafa63771b#ai:TC101919240|
````

## Свободно достъпни учебници по компютърно програмиране (на български език):

http://nikolay.it/Pages/About-me
* Introduction to programming with C# (English version) - http://www.introprogramming.info/english-intro-csharp-book/ - ISBN: 978-954-400-773-7
* Introduction to programming with C# (Bulgarian version) - http://www.introprogramming.info/intro-csharp-book/ - ISBN: 978-619-00-0778-4
* Programming Basics with JavaScript (Bulgarian version) - https://js-book.softuni.bg/ - ISBN: 978-619-00-0702-9
* Programming Basics with Python (Bulgarian version) - https://python-book.softuni.bg/ - ISBN: 978-619-00-0806-4
* Programming Basics with C++ (Bulgarian version) - https://cpp-book.softuni.bg/ - ISBN: TBA
* и др. (за допълване...)

### Още полезни информационни ресурси за учене на компютърно програмиране + списъци с качествен (безплатен (freeware) и свободен (F(L)OSS)) софтуер

* https://github.com/13542/Awesome-Linux-Software
* https://github.com/13542/the-book-of-secret-knowledge
* https://github.com/13542/awesome-linux
* https://github.com/13542/awesome
* https://github.com/13542/awesome-compilers

* https://github.com/13542/awesome-for-beginners
* https://github.com/13542/free-programming-books
* https://github.com/13542/Programming-Fundamentals
* https://github.com/13542/professional-programming
* https://github.com/13542/how-to-read-code
* https://github.com/13542/books

* https://github.com/13542/every-programmer-should-know
* https://github.com/sahwar/Best-websites-a-programmer-should-visit
* ( https://github.com/vkandola/Best-websites-a-programmer-should-visit )
* https://github.com/13542/coding-interview-university

* https://github.com/13542/htmlpreview.github.com (view GitHub-hosted .html rendered as HTML, NOT as 'view-source:' source-code!

__[SoftUni](https://softuni.bg)__
* https://github.com/13542/SoftUni-1
* https://github.com/13542/SoftUni-2
* https://github.com/13542/SoftUni-3
* https://github.com/13542/SoftUniJavaBasics
* https://github.com/13542/SoftUni
* https://github.com/13542/Software-Technologies
* https://github.com/13542/Java-Fundamentals-SoftUni
* https://github.com/13542/Java-Advanced
* https://github.com/13542/Java-Collection-Homework
* https://github.com/13542/Java-OOP
* https://github.com/13542/OOP-Principles-SoftUni
* https://github.com/13542/go-for-javascript-developers
* https://github.com/13542/You-Dont-Need-JavaScript

* https://github.com/13542/vscodium (Microsoft VSCode code/text-editor without the extra crap...)
* https://github.com/sahwar/LightTable (another code-/text-editor)

* https://github.com/13542/badges (code for GitHub badges
* https://github.com/13542/all-contributors (code for listing ALL contributors on a GitHub project!)
* https://github.com/13542/github-issue-templates

* https://github.com/13542/lljvm
* https://github.com/13542/cookieconsent (EU GDPR cookie-consent)
* https://github.com/13542/Stani-Bogat
* https://github.com/13542/atlg
* https://github.com/13542/the-super-tiny-compiler
* https://github.com/13542/LConsole
* https://github.com/13542/javaAdvanced
* https://github.com/13542/JavaCore
* https://github.com/13542/mo-lottery
* https://github.com/13542/drivesync (Google Drive for Linux)
* https://github.com/13542/jsJVM
* https://github.com/13542/minify (minify HTML, CSS, JavaScript)
* https://github.com/13542/go-github-subot

## Основни програми, използвани при превода на софтуер на български език ##

* Plaintext/програмистки текстов редактор по ваш избор (Notepad, Notepad++, Notepad2-mod, Vim (+VundleVim&Vim-Scripts&Vim plug-ins), Emacs (+Emacs plug-ins), Spacemacs, NeoVim, GitHub Atom, GeanyIDE и т.н.)
* POEdit (GNU gettext, .po): https://poedit.net/ ([Урок „Превод на програми на български език с POedit“](http://skss.learnfree.eu/archives/301) ([архивно копие на урока](http://archive.is/pRgL0)))
* Qt Linguist (.ts): https://github.com/thurask/Qt-Linguist/releases, https://osdn.net/projects/sfnet_tht/downloads/Other/qt-linguist-setup-4.8.4.exe/, https://doc.qt.io/qt-5/qtlinguist-index.html, https://www.opendesktop.org/p/1131386, https://www.open-tx.org/2017/03/24/QtLinguist-download )

* Lokalize:
https://github.com/KDE/lokalize
https://wiki.mageia.org/en/Translating_with_Lokalize
https://kde.org/applications/development/lokalize/
https://userbase.kde.org/Lokalize
https://translate-toolkit.readthedocs.io/en/latest/
https://binary-factory.kde.org/job/Lokalize_Release_win32/
https://binary-factory.kde.org/job/Lokalize_Nightly_win32/
* Лично хоствани екземпляри на системата за уеб-преводи Weblate
* Примерни инструкции за преводни файлове за локализация PO и TS (???): http://wiki.pointlinux.org/index.php?title=Localization
* Основни формати за превод на софтуер: .po (GNU gettext), .pot (.po Template), .mo (compiled binary .po); Qt Linguist: .ts (compiled: .qm); .lng, .lang; .txt, .conf, .config, .cfg; .json, .xaml, .haml; .tmx (Google Translate), .tbx (Microsoft Terminology), .xliff и др. ...; XLIFF (.xlf, .xliff), (.spec?)... ... ... Translation-related formats:
HTML, OpenOffice/LibreOffice .ODT, MS Office .DOC (MS Word 2003-2007) & .DOCX (MS Word 2007+), XML, RTF, Trados-Tagged RTF, DocBook, man-pages, .PO & .MO (GNU GeText's .PO format, encoded in UTF-8; and its binary .MO format), Qt Linguist .TS & .QM (Translation Source), XLIFF (XML Localisation Interchange File Format), OmegaT & OmegaT+, Properties, DTD, XLST, .csv/.tsv tables, Google Translate .TMX (the Translation Memory eXchange format), .TBX (TermBank eXchange - Microsoft Terminology), Trados .TTX, SRX (Segmentation Rules eXchange format) + Okapiframework SRX Extensions, Android resource files, iOS resource files, Java resource files, .RESX & .MUI (Windows Resource files), .lang, .lng, .ini, .conf, .config; [TBX (Term Base eXchange)](http://www.gala-global.org/oscarStandards/tbx/tbx_oscar.pdf) + TBX-Basic, [W3C ITS](https://www.w3.org/TR/its20/) (Internationalization Tag Set) + ITS XML Filter + HTML5-ITS Filter, GMX & GMX-V/GMX-C-GMX-Q (Global information management Metrics eXchange), OAXAL (Open Architecture for XML Authoring and Localization), .dic
* MT & TM databases: Google (Google Translate) MT, Microsoft Translator, Open-Tran TM, MyMemory TM, Translate Toolkit TM, Apertium MT, TDA-Search, Babelfish MT, Microsoft Bing MT, Canonical (Ubuntu & Linux Mint & Debian & etc.) launchpad.net TM, transifex.com TM/crowdin.com TM/zonata.org TM, KDE-BG TM, GNOME-BG TM, XFCE-BG TM, LXDE/LXQT TM;
* [Okapiframework Tikal](http://okapiframework.org/wiki/index.php/Tikal), [statMT Moses](http://www.statmt.org/moses/) (A decoder for phrase-based machine translation; statistical machine translation system that allows you to automatically train translation models for any language pair. All you need is a collection of translated texts (parallel corpus). Once you have a trained model, an efficient search algorithm quickly finds the highest probability translation among the exponential number of choices), [statMT Moses2 (similar to Google Translate for webpages)](http://www.statmt.org/moses/?n=Moses.WebTranslation), ...
* Okapiframework Rainbow (a toolbox to launch a large variety of localization tasks), Okapiframework CheckMate (an application to perform quality checks on bilingual files), Okapiframework Tikal (a command-line tool for basic localization tasks), Okapiframework Ratel (a WYSIWYG editor to create, test and maintain SRX segmentation rules), Okapiframework Longhorn (a batch processing server), OkapiframeworkOcelot (a XLIFF translator/reviewer workbench)
* http://localizejs.com/;
—
````
Google Translate (machine translation - машинни преводи (с termbanks, user-submitted&checked translations & artificial A.I. neural-networks) с Google Translate (Гугъл Превод(ач))): https://translate.google.com

Google Translate Toolkit & Google Translator Toolkit
https://support.google.com/translatortoolkit/answer/6306366?hl=en
https://translate.google.com/toolkit/list?hl=en&ut=e#translations/active
https://support.google.com/translatortoolkit/answer/6306375?hl=en
https://support.google.com/translatortoolkit/answer/6306366?hl=en
https://support.google.com/translatortoolkit/answer/6306380
https://support.google.com/translatortoolkit/answer/6306383
https://support.google.com/translatortoolkit/answer/6306366?hl=en
Translation Memory eXchange (.TMX) file-format (<50 MB)
https://www.dummies.com/education/internet-basics/how-to-get-started-with-google-translator-toolkit/

Google Translate Community
https://translate.google.com/community?source=web
https://translate.google.com/community?source=web#en/bg

Python Sphinx documentation&translation engine: http://www.sphinx-doc.org/en/master/
````

````
Terminology keywords: language: t9n (translation), localization (l10n), internationalization (i18n), globalization (g11n), continuous localization (cont-l10n), MT (machine translaton) & TM (translation memory), translation-tool, localization-tool, software translation management, online translation platform; [SMT Glossary v1.0](http://www.statmt.org/moses/glossary/SMT_glossary.html) (glossary includes common terms that are helpful for new users of statistical machine translation (SMT))

An [online] automation platform that enables continuous localization
````

````
GIZA++ (A tool for unsupervised word alignment)
SRILM (A toolkit for building language models)
KyTea (A word segmenter (tokenizer) for Japanese (v. 0.4.0+))
lader (A pre-orderer that can help fix the reordering problems between English and Japanese)
MT helper scripts (A variety of scripts that are useful for Machine translation)
KFTT (The Kyoto Free Translation Task)
````

### Общи инструкции за преводите („алгоритъм от стъпки за изпълнение за превеждане на конкретен текст“) ###
0. Какви са особеностите на текста за превод? Разберете translation volume/length, translation complexity, (оценете (полу-)субективно) translation quality (3 in GMX); translation cost, time taken for the completion of the translation, translation reception/feedback...
1. (тук ще копирам препечатани основните техники за превода от английски на български, взети от записките ми от курса ми по Преводи в университета...)
2. Консултирайте се с BGlocalize (и речника на BGlocalize),
`https://sites.google.com/site/bglocalize/home`
(БЕЛЕЖКА: Обърнете внимание на това коя версия на съответната страница и на речника използвате - т.е. час и дата на последна редакция на уебстраницата (version-control!))
с речника на Антон Зиновиев
(
````
http://lml.bas.bg/~anton/linux/rechnik.html ( архивно копие: http://archive.is/e7roC ) - има малко правописни грешки и някои неточности, но(,) като цяло(,) е чудесно допълнение към (или дори пряк предтеча(?) на) BGlocalize  
Anton Zinoviev anton(at)lml(dot)bas(dot)bg - BGLinux, BGtex, изобщо - кирилизация, както и доста статии
http://www.lml.acad.bg/~anton/linux/index.html
http://lml.bas.bg/~anton/linux/bglinux.html
http://lml.bas.bg/~anton/original/
````
)
, 
и с преводните текстови низове и TM (translation memory) DBs (бази от данни) на вече преведени програми (например KDE-BG, GNOME-BG, XFCE-BG, LXDE/LXQT-BG... Microsoft termbank database и на отделни програми и т.н.); консултирайте се с онлайн ръководства за стила (style guide) на превод на конкретен софтуер и онлайн двуезични корпуси (с превод от един език на други, например този с документите на Европейския съюз). 
3. The three-step translation process (primary translation -> secondary translation to improve fluency -> final check for technical terms) has been clearly recorded.
(Enables observation of how translations have been elaborated so it can be applied for uses such as research and development relevant to translation aids and error analysis of human translation.)
4. Proofreading, copyediting, copywriter, copyreader (жур. стилов редактор), final editing... Обща и стилова редакция + корекция чрез IDI-spellchecker & ръчно-мисловно-субективна корекция...
(http://okapiframework.org/wiki/index.php/CheckMate
Some of the verifications performed are:
Repeated words
Corrupted characters
Patterns in the source text that should correspond to a given pattern in the translation.
Inline codes differences.
Translation suspiciously longer or shorter than the source.
Missing translation.
Leading and trailing spaces.
And more...)
5. Краен резултат...
6. Обратна връзка (feedback) за корекции, доуточнения, редакции и т.н. + НОВИ ВЕРСИИ (document version-control)
7. Съхранение и архивиране на документа (онлайн на хардуерен сървър, физически копия на хартия, дърво, камък, стъкло, звукозапис, видеозапис и т.н.) - географско-пространствено местоположение на копието (за последващо намиране/information retrieval)...

````
(taken from Okapiframework Tikal, with modifications)
+Configuration: okf_openxml
Source language: en(,bg; OR mixed:en,bg,fr;)
Target language: fr
Input encoding: windows-1252, utf-8 // 2cyr.com & iconv IF the input encoding is garbled/unreadable (mojibake)!
Output encoding: utf-8
[... translation, editing, proofreading...]
Input document: Sample.docx
Output document: <auto-defined>
````

### Безплатни шрифтове (freeware fonts) и свободни шрифтове (free/libre/open-source fonts) ###
В GitHub и SourceForge има няколко свободни програми с отворен код, които с годините разработка станаха готови за масова употреба и които служат за създаване и редактиране на дигитални (цифрови) шрифтове в популярните файлови формати .ttf (TrueType font), .otf (OpenType font), .woff (за уебстраници), .EOT, .SVG и други: [FontForge](https://fontforge.github.io/en-US/), [Birdfont](http://www.birdfont.org/), [Trufont](http://trufont.github.io/) ([2](https://github.com/trufont/trufont)), [gbdfed (bitmap-only font editor for Linux)](http://sofia.nmsu.edu/~mleisher/Software/gbdfed/screenshots.html) и др.

По-долу са изброени хипервръзки (е-препратки) към хранилища с голям брой свободни шрифтове за изтегляне...
* [Google Fonts (and Google WebFonts)](https://fonts.google.com/)
* https://www.cssfontstack.com/Open-Sans
* [FontLibrary.org](https://fontlibrary.org/) - https://fontlibrary.org/ (хранилище за изтегляне на свободни цифрови (дигитални) шрифтове и инструкции за създаване на свободни шрифтове с FontForge и публикуването им под SIL Open Font License)
* [FontStruct fonts](https://fontstruct.com/) - безплатно създаване и изтегляне на опростени дигитални шрифтове (изисква безплатна регистрация).
* [Pentacom BitFontMaker2](http://www.pentacom.jp/pentacom/bitfontmaker2/) - предтеч на FontStruct за създаване на bitmap .ttf font в стил pixel-art, версия 2.
* [Google Noto fonts](https://www.google.com/get/noto/)
* [Шрифтът Terminus Font (от Димитър Жеков), равноширок шрифт (monospace) за програмиране](http://terminus-font.sourceforge.net/), [Terminus font patched (с кръпки)](https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Terminus/terminus-ttf-4.40.1) и [Terminus font TTF](https://files.ax86.net/terminus-ttf/) --- ([статия за свободния безплатен цифров шрифт Terminus font (направен от Димитър Жеков)](http://www.linux-bg.org/cgi-bin/y/index.pl?page=repository&key=466466108#other_comments)) (http://archive.is/fF8E2)
* Fonts in the Bulgarian Cyrillic font style(s): https://spisanie8.bg/рубрики/история/3435-за-българската-кирилица.html
* Инициатива за българската кирилица - http://cyrillic.bg/manifest/ ( https://archive.fo/CpMNk )
* Google web-search for "български шрифтове" and "кирилизирани шрифтове" and "шрифтове с поддръжка на кирилица" and "шрифтове с поддръжка на български".
* Search for 'Cyrillic', 'cyrillic', 't1', 'Bulgarian' in the Ubuntu, Debian, Linux Mint, Arch Linux, MX Linux, etc. package-repositories: https://packages.ubuntu.com/search?keywords=t1&searchon=names
https://packages.ubuntu.com/search?keywords=cyrillic&searchon=names
* @sahwar's amateur PixelArt fonts (with basic support for Cyrillic): https://fontstruct.com/fontstructors/27969/sahwar
* [Some Cyrilic fonts from Valeri Dachev](http://ludost.net/xaddfnts-1.0.tgz)
* The Sad State of Linux Fonts [Rendering] (and possible fixes): https://pandasauce.org/post/linux-fonts/
* Antialiased and Microsoft ClearType-like typographical font rendering fixes for Linux: https://novelist.xyz/tech/improve-font-rendering-arch-linux-no-infinality/
* Font updates for Windows XP (including several new letters for Bulgarian/Cyriilic):  [European Union Expansion Font Update for Windows XP](https://sahwar.wordpress.com/2008/11/02/bulgarian-gui-for-windowsxp/)

Spellchecking dictionaries / Речници за проверка на правописа (съдържат и грешки!):
* https://bgoffice.sourceforge.net (BGoffice)
* IDI Spellchecker + dictionary
* https://addons.mozilla.org/en-US/firefox/language-tools
* http://extensions.libreoffice.org/extension-center?getCategories=Dictionary&amp;getCompatibility=any&amp;sort_on=positive_ratings&amp;path=%2FLibreOffice-Extensions-and-Templates%2Fextension-center&amp;portal_type=PSCProject&amp;SearchableText=
* http://extensions.services.openoffice.org/dictionary
* http://wiki.openoffice.org/wiki/Dictionaries (outdated)
* http://hunspell.sourceforge.net ; aspell-bg; enchant spellchecker; https://wiki.gnome.org/Projects/gspell ; etc. (see **BGoffice** above)

* и други (за допълване после...)

### Преводи на български език на компютърни игри и конзолни видео игри ###

Нужно е създаването на цяло под-хранилище (repository) само с преводните файлове, което да е към подпроекта HUTPIB-bg.Bulogos.info, но тъй като някои от преводите на компютърни и видео-игри включват и файлове от оригиналните комерсиални игри, въпросът е сложен от правна (юридическа) гледна точка, но едва ли е проблем използването на предимно текстови файлове-кръпки (patches) за лична употреба в домашна среда... Трябва да се съберат и разхвърляните по целия Интернет отделни преводни файлове на български език (langpacks) за доста компютърни и видео-игри... Може би това е прекалено амбициозна и трудоемка задача, за да се изпълни успешно на практика, нужни са още сътрудници... (?)

* **AdventurersBG.info PlayOnBG** - http://adventurersbg.info/catalog/play-on-bg.php и http://adventurersbg.info/translations/games/
* **BGpatch.com** - https://www.bgpatch.com/
* [Как се превежда игра на български? (статия-урок от блога на Владислав Добрев, с Ascaron Sacred като пример)](https://vladislavdd.wordpress.com/category/%D0%BF%D1%80%D0%B5%D0%B2%D0%BE%D0%B4-%D0%BD%D0%B0-%D0%B8%D0%B3%D1%80%D0%B8-%D0%BD%D0%B0-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8/)
* [Проект за официален превод на компютърни игри на български език, започнат от WildBeast](http://hardwarebg.com/forum/showthread.php/276353-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B7%D0%B0-%D0%BE%D1%84%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B5%D0%BD-%D0%BF%D1%80%D0%B5%D0%B2%D0%BE%D0%B4-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8E%D1%82%D1%8A%D1%80%D0%BD%D0%B8-%D0%B8%D0%B3%D1%80%D0%B8-%D0%BD%D0%B0-%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8-%D0%B5%D0%B7%D0%B8%D0%BA) и [тук](http://www.xenbg.com/projects/translation/)
http://evocore.io/viewtopic.php?t=6266&start=20
* Теми за преводи на български на компютърни и видео игри в български уеб-форуми: http://forum.pulsar.bg/showthread.php?t=4503, https://www.kaldata.com/forums/topic/37629-rq%D0%BF%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8-%D0%BD%D0%B0-%D0%B8%D0%B3%D1%80%D0%B8/?page=2, https://www.kaldata.com/forums/topic/65059-link-the-half-life-2-bg-translation/,
* Хвърчащи файлове с преводи на игри, които файлове са хостнати в лични сайтове, data.bg, zamunda, arena-bg и др.
* * Платформи за купуване на компютърни и видео-игри (вкл. римейкове на стари игри): [Valve Steam](https://steamcommunity.com/) ([2](https://store.steampowered.com/)), [GOG.com](https://www.gog.com) и други. (за допълване...)

### За превода на български на субтитри за видеоклипове, филми и ТВ/уеб-сериали ###

* Програмите [Aegisub](http://www.aegisub.org/), [Subtitle Workshop v6+](http://subworkshop.sourceforge.net/index.php) ([2](https://sourceforge.net/projects/subworkshop/)), [Jubler](http://www.jubler.org/), [gnome-subtitles](http://gnomesubtitles.org/) ([2](https://github.com/GNOME/gnome-subtitles)) и др.
* Бази от данни за изтегляне на готови (направени от хора) български преводи на субтитри за филми и ТВ сериали: https://www.opensubtitles.org/en/downloads, http://dl.opensubtitles.org/addons/export/, https://www.opensubtitles.org/addons/export_languages.php, https://www.opensubtitles.org/en/downloads, ZamundaSubs, Arena-BG Subs, https://subsunacs.net/, http://www.subtitri.net/, http://www.addic7ed.com/, https://zamunda.ch/forums.php?action=viewtopic&topicid=89748, http://napred.bg/%D1%81%D1%83%D0%B1%D1%82%D0%B8%D1%82%D1%80%D0%B8.html, http://subtitri.seeadd.net/, http://kolibka.com/smf/index.php?PHPSESSID=j0la8b419i59ncndfke8p27ls2&topic=2164.0, https://kodibg.org/forum/archive/index.php?thread-150.html).
* Най-често използвани файлови формати за субтитри: .srt (SubRip; Subtitle Workshop, Aegisub, всякакъв читав текстов редактор), .ssa (SubStation Alpha; Aegisub), .ass (Advanced SubStation Alpha; Aegisub), .vtt ([WebVTT](https://en.wikipedia.org/wiki/WebVTT)), .sub, .usf и други... (https://en.wikipedia.org/wiki/Category:Subtitle_file_formats; https://en.wikipedia.org/wiki/DirectVobSub)

## `man` (manual = ръководство) страници за Linux програми ##
(От тези уебстраници (и от `man` файловете, включени в най-новите издания на Линукс дистрибуциите) ще се вземат `man` файловете за превода им на български език. Навярно ще е най-удобно да четете българския превод в tiled terminal (успоредно да четете англоезичния оригинал и българоезичния превод) или като отворите 2 прозореца на terminal-ната ви програма (по 1 за английската версия и българската версия на `man` инструкциите за съответната програма).

Преводът на техническа литература и на англоезични текстове за софтуер е нелека задача и нерядко преводът е почти невъзможен заради [идиосинкратичните](https://bg.wikipedia.org/wiki/%D0%98%D0%B4%D0%B8%D0%BE%D1%81%D0%B8%D0%BD%D0%BA%D1%80%D0%B0%D0%B7%D0%B8%D1%8F) и идиолектни сливания на англоезични неологизми и англоезични програмистки сленг (жаргон), както и граматични проблеми при превода от английски на български език, плюс проблемната англицизация на съвременния български език...

* https://wiki.archlinux.org/index.php/Man_page
* https://en.wikipedia.org/wiki/Manpage
* http://man.he.net/
* [man7.org](http://man7.org/linux/man-pages/index.html). Upstream for Arch Linux's [man\-pages](https://www.archlinux.org/packages/?name=man-pages).
* [Arch Linux man pages](https://jlk.fjfi.cvut.cz/arch/manpages/). Used for links from the wiki.
* [manned.org](https://manned.org/) — collection from various Linux distributions, BSD, etc., with multiple package versions
* [linux.die.net](https://linux.die.net/man/)
* [man.cx](https://man.cx/) (an online viewer for... a total of 207277 available manpages (including translations). The last update ran at September 2nd, 2019)
* [Debian man pages](https://manpages.debian.org/)
* [Ubuntu man pages](http://manpages.ubuntu.com/)
* [DragonFlyBSD man pages](https://leaf.dragonflybsd.org/cgi/web-man)
* [FreeBSD man pages](https://www.freebsd.org/cgi/man.cgi)
* [NetBSD man pages](http://netbsd.gw.com/cgi-bin/man-cgi)
* [OpenBSD man pages](https://man.openbsd.org)
* [Mac OS X man pages](https://developer.apple.com/documentation/Darwin/Reference/ManPages/index.html)\[[dead link](https://en.wikipedia.org/wiki/Wikipedia:Link_rot "wikipedia:Wikipedia:Link rot") 2019\-01\-17\]
* [Plan 9 Manual — Volume 1](http://man.cat-v.org/plan_9/)
* [Inferno Manual — Volume 1](http://man.cat-v.org/inferno/)
* [Storage Foundation man pages](http://sfdoccentral.symantec.com/sf/5.0MP3/linux/manpages/index.html)
* [The UNIX and Linux forums man page repository](https://www.unix.com/man-page/OpenSolaris/1/man/)
* http://man.linuxquestions.org/
* >>> https://roperzh.github.io/grapse/ = Live online `manpage` editor!

**Examples:**
* http://man7.org/linux/man-pages/man1/apropos.1.html (apropos - search the manual page names and descriptions)
* http://man7.org/linux/man-pages/man1/whereis.1.html (whereis - locate the binary, source, and manual page files for a command)
* http://man7.org/linux/man-pages/man1/locate.1.html
* https://mirrors.edge.kernel.org/pub/linux/utils/util-linux/
* https://jlk.fjfi.cvut.cz/arch/manpages/man/ascii.7
* http://man7.org/linux/man-pages/man1/xargs.1.html
* http://sox.sourceforge.net/sox.html (backup: http://archive.is/7Argx )
---
* https://en.wikipedia.org/wiki/Man_page
* https://linux.die.net/man/
* http://man7.org/linux/man-pages/index.html (e.g. http://man7.org/linux/man-pages/man1/xargs.1.html , 
* https://www.systutorials.com/docs/linux/man/
* https://linux.die.net/ ( https://linux.die.net/man/1/man )
* http://man.he.net/ (e.g. http://man.he.net/man1/detex )
* https://man.cx/
* https://ss64.com/bash/

---
* https://www.cyberciti.biz/faq/linux-unix-creating-a-manpage/
* https://serverfault.com/questions/109490/how-do-i-write-man-pages
* https://txt2tags.org/manpage.html - https://txt2tags.org/ (`txt2tags` is similar but not as powerful as `pandoc` and is akin to `markdown`)
* https://wiki.archlinux.org/index.php/Man_page
* https://curl.haxx.se/docs/manpage.html
* https://www.gnu.org/software/wget/manual/wget.html
* https://www.google.com/search?client=firefox-b-d&q=man.die+manpages
---
* https://www.tldp.org/links/nenglish.html
* https://www.tldp.org/links/nenglish.html#bulgarian
* https://www.debian.org/doc/user-manuals
* https://linuxmint.com/documentation.php
* https://linuxmint-installation-guide.readthedocs.io/bg/latest/
* https://ubuntu-manual.org/
* Командата `$ bg` в POSIX/Linux: http://man7.org/linux/man-pages/man1/bg.1p.html :smiley:
* The Jargon File (The Hacker's Dictionary): http://catb.org/jargon/html/ (най-нова версия), https://www.dourish.com/goodies/jargon.html (оригиналът), http://www.eps.mcgill.ca/jargon/jargon.html (v4.2.0, 31 JAN 2000), https://www.netmeister.org/news/jargon.html (v4.2.3, 23 NOV 2000); https://en.wikipedia.org/wiki/Jargon_File.
* _The Linux Shell Scripting Tutorial (LSST) v2.0 (free book for bash-schellscripting)_ = https://bash.cyberciti.biz/guide/Main_Page
* статии за софтуер от Wikipedia/Уикипедия, свободната онлайн енциклопедия, редактирана от потребителите си
* и други (за допълване после...)

## Полезни онлайн речници за преводачи ##
* EuroDict (BG): https://eurodict.com/ (със стария, далеч по-удобен интерфейс: http://bulgariandictionary.com/ + [GitHub gist с написан от мой познат PHP скрипт за остъргване/webscraping на bulgariandictionary.com с Ubuntu/Linux Mint/Debian с цел лична офлайн употреба на 23-те речника](deadlink?TO ADD))
* https://www.dicts.info/uddl.php (речници за генериране и изтегляне!), https://www.dicts.info, https://www.dicts.info/ud.phpq и https://www.dicts.info/dictionaries.php
* https://freedict.org/
* ОЩЕ: https://slovored.com/, https://rechnik.chitanka.info/, http://rechnik.info/, https://www.talkoven.com/, https://www.ezikov.com/, https://www.linguee.com/bulgarian-english/translation/, https://bg.glosbe.com/en/bg/, https://www.t-rechnik.info/, https://www.bgjargon.com/ и много други...
* [GoldenDict dictionary database files]()
* [AEDictionaryXP dictionary](http://www.kamburov.net/aleksandar/projects/aedict/)
* [Megadict-BG dictionary](http://www.megadict-bg.com/)
* https://sites.google.com/site/bglocalize/links
* + хипервръзки за над 6000 други онлайн речника от колекцията с речникови бази от данни за Slovnik.Bulogos.info (ЗА ДОБАВЯНЕ, но изисква МНОГО усилия и време...)...

**`DICT` протокола за опростени онлайн речници и сървър за тях**
* http://www.dict.org/links.html (RFC: https://tools.ietf.org/html/rfc2229)
* https://dikt.tv/servers
* https://github.com/freedict/fd-dictionaries/wiki/DICT-servers

## Правни въпроси
* [Electronic Frontiers Foundation (EFF) (eff.org)](https://www.eff.org)
* [Заобикаляне на DMCA (Digital Millenium Copyright Act) и DRM (Digital Rights/Restrictions Management)](https://www.eff.org/deeplinks/2018/10/new-exemptions-dmca-section-1201-are-welcome-dont-go-far-enough) ([статия](http://www.linux-bg.org/cgi-bin/y/index.pl?page=news&key=513599340))
* [USA court approves right-to-fix/DIY [bought hardware&software], win against DRM](https://www.theregister.co.uk/2018/10/26/right_to_repair/)
* http://fsf.org (Free Software Foundation)
* Creative Commons - https://creativecommons.org
* ...

## Български преводи на Debian, Ubuntu, Linux Mint и други ##

### Ubuntu (производна на Debian) ###
* https://launchpad.net/~ubuntu-l10n-bg
* http://groups.google.com/group/ubuntu-bulgarian-translators
* https://launchpad.net/1buubg
* https://launchpad.net/~ubuntu-l10n-bg/+members
* https://launchpad.net/~lp-l10n-bg
* https://packages.ubuntu.com/bg/disco/language-pack-bg-base
* **https://wiki.ubuntu.com/BulgarianTeam (Българската Убунту потребителска група)**
* **[USU Linux (основана на Ubuntu дистрибуция на български език; BG Linux distro)](http://learnfree.eu/?lang=bg)** + [блога SKSS](http://skss.learnfree.eu/)
* [StotinkaOS (BG Linux distro)](deadlink?) - [Край на проекта StotinkaOS](http://www.linux-bg.org/cgi-bin/y/index.pl?page=news&key=514896121) ;(
* **[Minimal Linux Live (BG Linux distro)](https://github.com/ivandavidov/minimal)**
* <ubuntu-bg@lists.ubuntu.com> (за абониране: https://lists.ubuntu.com/mailman/listinfo/ubuntu-bg) - [Minimal Linux Live](http://minimal.linux-bg.org/#home) ([backup at archive.today / archive.is](http://archive.is/zmd4A)) ([статия за Minimal Linux Live](http://www.linux-bg.org/cgi-bin/y/index.pl?page=repository&key=468913069#other_comments))
* https://groups.google.com/forum/#!forum/ubuntu-bg
* IRC канал (IRC): #ubuntu-bg на сървъра irc.freenode.net

### Linux Mint (производна на Ubuntu) ###
* https://launchpad.net/~linuxmint-translation-team-bulgarian
* https://translations.launchpad.net/linuxmint/latest/+lang/bg
* https://translations.launchpad.net/linuxmint/latest/+pots/mintupdate/bg/+translate
* https://translations.launchpad.net/linuxmint/latest/+pots/mint-common/li/+translate?start=0&batch=10&show=all&field.alternative_language=bg&field.alternative_language-empty-marker=1&old_show=all

### Debian (от нея произлизат Ubuntu, Linux Mint, техните прозводни и други) ###
* https://www.debian.org/international/l10n/po/bg
* https://www.debian.org/international/l10n/po/bg_BG
* https://translations.launchpad.net/ubuntu/precise/+source/debian-installer/+pots/debian-installer/bg/

### Etc. ###
Пример: https://gitlab.merchise.org/merchise/odoo/blob/790ec26efb1cfe273934c5bdfcddf223047059ff/debian/po/bg.po

* **и други (за допълване после...)**

## Международни IT стандарти, HTML, HTML5, CSS (CSSv2.1, CSSv3), JS (JavaScript) + `npm`

_Internet & Web/WWW standards:_

* **The HTML5 Living Standard:**
https://html.spec.whatwg.org/ 
https://html.spec.whatwg.org/multipage/ (The HTML5 Standard - Living Document)
https://whatwg.org/
https://spec.whatwg.org/
https://idea.whatwg.org/

* **W3C**: https://www.w3.org/
W3C All Standards and Drafts - https://www.w3.org/TR/
* http://caniuse.com
* http://w3schools.com
* 
* http://stackoverflow.com
* http://superuser.com
* http://color-hex.com
* http://colourlovers.com
* https://snipplr.com/ + https://snipplr.com/all/language/bash
* http://gist.github.com + https://gist.github.com/discover
* http://commandlinefu.com + https://www.commandlinefu.com/commands/browse
* 
* https://www.cacher.io/
* https://snipit.io/
* https://github.com/alexanderepstein/Bash-Snippets
* https://news.ycombinator.com/item?id=14769384
* http://milianw.de/code-snippets
* https://www.bbkane.com/2018/09/09/Short-BASH-Snippets.html
* http://kedar.nitty-witty.com/blog/10-useful-shell-script-code-snippets-linux
* https://formulae.brew.sh/formula/bash-snippets
* https://www.ostechnix.com/collection-useful-bash-scripts-heavy-commandline-users/
* https://stackoverflow.com/questions/965663/useful-bash-code-snippets
* 
* https://news.ycombinator.com
* https://boingboing.net

* http://html5shiv.googlecode.com/svn/trunk/html5.js
* https://cdnjs.com/libraries/html5shiv
* https://github.com/aFarkas/html5shiv

````
http://www.compciv.org/unix-tools/ (backup: https://archive.is/OQs4L )
http://www.compciv.org/bash-guide/ (backup: https://archive.fo/tnMIb )


https://en.wikipedia.org/w/index.php?title=List_of_Unix_commands&oldid=913154746
https://en.wikipedia.org/w/index.php?title=Template:Unix_commands&oldid=899945612
https://en.wikipedia.org/w/index.php?title=List_of_GNU_Core_Utilities_commands&oldid=905360389
https://en.wikipedia.org/w/index.php?title=Template:Core_Utilities_commands&oldid=888053126
https://en.wikipedia.org/w/index.php?title=List_of_Unix_daemons&oldid=884762979
https://en.wikipedia.org/w/index.php?title=Util-linux&oldid=903682516
https://translationproject.org/domain/util-linux.html
https://en.wikipedia.org/w/index.php?title=Template:GNU&oldid=902212889
http://www.math.utk.edu/~vasili/refs/commands.html (backup: https://archive.is/TvQVI )
https://www.guru99.com/must-know-linux-commands.html
https://www.google.com/search?client=avast&q=list+of+unix+commands
````

## Други важни международни стандарти
https://en.wikipedia.org/wiki/List_of_mobile_telephone_prefixes_by_country

International standards:
https://en.wikipedia.org/w/index.php?title=ISO_8601&oldid=913163505 (international datetime stamp)
https://www.w3.org/TR/NOTE-datetime-970915 (datetime stamp standards)

https://en.wikipedia.org/w/index.php?title=OSI_model&oldid=913136546

ITU-T Recommendations (Standardization, international standards):
https://www.itu.int/en/ITU-T/publications/Pages/recs.aspx

### IEEE standards:
* https://standards.ieee.org/
* https://www.ieee.org/standards/index.html
* https://standards.ieee.org/standard/index.html?utm_source=mm_link&utm_campaign=find&utm_medium=std&utm_term=find%20standards
Examples:
https://www.techstreet.com/ieee/standards/ieee-754-2019?utm_source=web&utm_medium=saprdpg&utm_campaign=product-q3&utm_term=754&utm_content=purchase&gateway_code=ieee&product_id=2033371 (IEEE 754-2019 - IEEE Standard for Floating-Point Arithmetic - STANDARD by IEEE, 07/22/2019)

### IETF standards:

* IETF documents:
https://tools.ietf.org/html/
* IETF **RFC (Request for Comments)** Index:
https://tools.ietf.org/rfc/index
* IETF RFC (Request for Comments) Index (alternative version):
https://tools.ietf.org/rfc/mini-index
https://tools.ietf.org/html/rfc70
https://tools.ietf.org/tools/rfcindex/
* IETF WGs (IETF Working Groups):
https://tools.ietf.org/wg/
Examples:
https://www.ietf.org/rfc/rfc2119.txt
https://tools.ietf.org/html/rfc3339


https://wiki.archlinux.org/index.php/list_of_applications
https://en.wikipedia.org/wiki/List_of_Latin_phrases_(full)

~

### **DIN** (German (Germany's) DIN national standards):
https://www.din.de/en/about-standards/din-standards
https://en.wikipedia.org/wiki/List_of_DIN_standards
https://en.wikipedia.org/wiki/Template:Deutsches_Institut_f%C3%BCr_Normung

### **ANSI** (the American National Standards Institute)
* https://en.wikipedia.org/w/index.php?title=American_National_Standards_Institute&oldid=910232293 (ANSI = American National Standards Institute)
* ANSI C (programming language): https://en.wikipedia.org/w/index.php?title=ANSI_C&oldid=901168093

### ISO (International Organization for Standardization) standards
* https://en.wikipedia.org/wiki/List_of_ISO_standards (International Organization for Standardization (ISO))
* https://iso.org/ , https://www.iso.org
* https://en.wikipedia.org/w/index.php?title=International_Organization_for_Standardization&oldid=912232123
* https://standards.iso.org/ittf/PubliclyAvailableStandards/index.html
* https://www.iso.org/advanced-search/x/
* https://www.iso.org/obp/ui/
* https://en.wikipedia.org/wiki/Template:ISO_standards
* Example: https://www.iso.org/member/2064.html , ISO 9000, ISO 14000, ISO 22000, ISO/IEC 20000, ISO/IEC 27000

### British (UK, United Kingdom) Standards:
* https://en.wikipedia.org/w/index.php?title=British_Standards&oldid=909897486
* https://en.wikipedia.org/wiki/BSI_Group
* https://www.bsigroup.com/
* https://www.bsigroup.com/en-GB/
* Examples: BS 25999, BS 65000

### Bulgarian national standards
* https://www.bds-bg.org/en (**The Bulgarian Institute for Standardization (BDS)** (_Българският институт за стандартизация (БДС или БИС)_) is the national executive body for standardization in the Republic of Bulgaria.
* See also:
* http://www.bas.bg/en = The Bulgarian Academy of Sciences (BAS) (_Българската академия на науките (БАН)_)

### More national and international standards (standardization)
* List of national standards institutions: https://en.wikipedia.org/w/index.php?title=Standards_organization&oldid=909918879
* https://en.wikipedia.org/wiki/List_of_IEC_standards (International Electrotechnical Commission (IEC))
* https://en.wikipedia.org/wiki/List_of_EN_standards
* https://en.wikipedia.org/wiki/List_of_ASTM_standards
* https://en.wikipedia.org/wiki/Category:Lists_of_standards
* European Committee for Standardization (CEN)
* European Committee for Electrotechnical Standardization (CENELEC)
* European Telecommunications Standards Institute (ETSI)
* International Telecommunication Union (ITU)
* The International Customer Service Institute (TICSI)
* Trading Standards Institute (TSI)
* etc.
* https://en.wikipedia.org/w/index.php?title=Category:Technical_specifications&oldid=532589764
* https://en.wikipedia.org/w/index.php?title=Product_design_specification&oldid=845239869
* https://en.wikipedia.org/w/index.php?title=Category:Product_development&oldid=824936923
* https://en.wikipedia.org/w/index.php?title=Open_standard&oldid=913281998
* https://en.wikipedia.org/w/index.php?title=Royalty-free&oldid=900980171
Tags: Management system, Standardization, Standards organization

### Stock icons, stock/production music & stock images:
* Stock icons&logos:
** The Noun Project = https://thenounproject.com/term/stock/161182/

https://en.wikipedia.org/w/index.php?title=Production_music&oldid=911594326


----

Etc.:
* `waifu2x`, etc.
* https://boingboing.net/2019/07/17/this-ai-turns-your-headshot-in.html

Scientific articles:
* https://arxiv.org/abs/1610.04265
* https://www.jstor.org/
* https://www.sciencedaily.com/news/top/science/
* https://www.livescience.com/ + https://www.livescience.com/news
* https://www.sciencenews.org/
* https://www.sciencenewsforstudents.org/
* https://www.scientificamerican.com/
* https://www.sciencemag.org/news/latest-news
* https://www.newscientist.com/section/news/
* http://www.sci-news.com/
* https://www.independent.co.uk/news/science?CMP=ILC-refresh
* https://nauka.bg/ + Европейска нощ на учените и науката („Нощ на учените“): https://nauka.bg/night/ (през 2019 г. в България ще се проведе на 27.09.2019 г.)
* https://scholar.google.bg/
* https://zajenitevnaukata.bg/
* http://www.bas.bg/
* https://www.mon.bg/
* Нощ на музеите и галериите - НОЩ/Пловдив (2005-2017 & 2019-): https://www.night.bg/

## Помощна документация за командите в `cmd.exe` и PowerShell в _Microsoft Windows_ ##
Съвет: можете да си изтеглите долните свръхполезни помощни инструкции с `wget`, `curl` или като `.txt` файл с вашия уеб-браузър, и после да ги сложите с поставяне (с админ. права) в User папката си или в `C:\Windows\System32` и после с името на файла да си ги отваряте в отделен прозорез на `cmd.exe`/PowerShell, когато ви трябват, за да се посъветвате с тях.

### За `cmd.exe` ###
* http://ss64.com/
* *https://ss64.com/nt/*
* https://ss64.com/nt/commands.html
* https://ss64.com/nt/syntax-mmc.html
* https://ss64.com/nt/shell.html
* https://ss64.com/nt/explorer.html
* https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc754340(v=ws.11)
* (!) ` https://www.microsoft.com/en-us/download/details.aspx?id=2632 ` (Windows Server 2008 R2, Windows Server 2008, Windows Server 2003, Windows 7, and Windows Vista)
* (!) https://www.microsoft.com/en-us/download/details.aspx?id=56846 (PDF, for Windows Server 2008, Windows Server 2008 R2, Windows Server 2012, Windows Server 2012 R2, Windows Server 2016)
* https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands (Windows 8.1/10/Windows Server (Semi-Annual Channel)/Server 2019/Windows Server 2008/Server 2008 R2/Server 2012/Server 2012 R2/Windows Server 2016)
* https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/cc754340(v=ws.11)
* https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-xp/bb490890(v%3dtechnet.10) (WindowsXP)
* https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-xp/bb490890(v=technet.10) (WindowsXP)
* https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands
* https://www.windows-commandline.com/
* https://www.windows-commandline.com/cmd-commands/
* https://www.thewindowsclub.com/complete-windows-command-line-tools-reference-guide-from-microsoft
* https://commandwindows.com/command3.htm
* https://fossbytes.com/complete-windows-cmd-commands-list-index/
* https://www.makeuseof.com/tag/15-cmd-commands-every-windows-user-know/
* https://developers.google.com/web/shows/ttt/series-2/windows-commandline
* https://www.watchingthenet.com/top-10-windows-command-prompt.html
* https://www.lifewire.com/list-of-command-prompt-commands-4092302
* https://www.lifewire.com/command-prompt-tricks-and-hacks-2618104
* https://www.nirsoft.net/utils/nircmd2.html & 
* https://www.raymond.cc/blog/trigger-uac-elevation-from-command-line-with-elevate-utility/
* etc.

### За `Start (бутона) -> Run...` ###
* https://ss64.com/nt/run.html

### За PowerShell (наследник на `cmd.exe`) ###
https://ss64.com/ps/

#### Полезен софтуер за `cmd.exe`/PowerShell ####
`cmd.exe`, PowerShell / PowerShell Core (open-source), [ConEmu](https://conemu.github.io/), [Clink](http://mridgers.github.io/clink), PSReadLine, PSGet, Chocolatey / NuGet / MS OneGet, Babun (optional), Process Hacker, [cmder](https://cmder.net/), [GitForWindows](https://gitforwindows.org/), [NirSoft apps](http://www.nirsoft.net/) (especially NirCmd), [Windows utilities by Code.Kliu.org](http://code.kliu.org/) (like [elevate](http://code.kliu.org/misc/elevate/)), [Babun](https://github.com/babun/babun), etc.

### Книги за програмиране и алгоритми за програмиране ###

* [https://github.com/omaciel/1001 - 1001 algorithms you must implement before you die http://nerdson.com/blog/1001-noites](https://github.com/omaciel/1001)
* programming = algorithms + programming (design?) patterns
* 

### Български езиков пакет (langpack) за Windows XP, Windows 7, Windows 8/8.1, Windows 10, (GNU/)Linux, Google Android, macOS / Mac OS X, iOS, Symbian, Amazon Kindle

* (за добавяне)...

### Списък с клавишни комбинации („горещи клавиши“, HotKeys) за Microsoft Windows (List of keyboard shortcuts in Microsoft Windows) ###
* Windows XP: https://support.microsoft.com/en-us/help/301583/list-of-the-keyboard-shortcuts-that-are-available-in-windows-xp
* Windows 7+: https://support.microsoft.com/kn-in/help/12445/windows-keyboard-shortcuts
* https://ss64.com/nt/syntax-windows.html
* https://en.wikipedia.org/wiki/Windows_key
* https://www.makeuseof.com/tag/windows-shortcuts-101-ultimate-keyboard-shortcut-guide/
* https://lifehacker.com/the-master-list-of-new-windows-7-shortcuts-5390086
* Keyboard shortcuts in Microsoft Windows 7/8.1/10 - https://support.microsoft.com/en-au/help/12445/windows-keyboard-shortcuts
* Windows keyboard shortcuts for accessibility (for Windows 7/8.1/10) - https://support.microsoft.com/en-au/help/13810/windows-keyboard-shortcuts-accessibility
* https://support.microsoft.com/en-au/help/13805/windows-keyboard-shortcuts-in-apps (for Windows 8.1 and Windows 10)
* и други (за допълване после...)

## Уебсайтове за преглед на свалени от Интернет уебстраници (deadlinks, 404 Not Found), съхранени от историческа гледна точка („Интернет археология“), защото са значими/полезни/културно интересни ##
* _Google Cache_: google.com -> [cached/кеширана версия], [1](http://cachedview.com/), [2](https://www.searchcommander.com/seo-tools/google-cache-viewer/), [3 bulk-check](https://theseotools.net/google-cache-checker)
* _Archive.org (Internet Archive's WayBack Machine)_: https://web.archive.org/ 
* _archive.is_: http://archive.is/, http://archive.today/ (поддържа и да пуснете заявка за съхранение на отделни уебстраници към архива им!!!)
* Wikimedia Downloads - изтегляне на копия на Уикипедия и на копия на други уебсайтове от групата на Wikimedia
https://dumps.wikimedia.org/ и https://en.wikipedia.org/wiki/Wikipedia:Database_download
* https://openlibrary.org/
* Wayback Machine Downloader:
https://github.com/hartator/wayback-machine-downloader
https://github.com/jsvine/waybackpack
https://websitedownloader.io/wayback-machine-downloader/ ($)
https://archive.org/details/webarchive_downloader
**https://archive.org/web**
https://en.archivarix.com/
http://www.waybackmachinedownloads.com/en/
https://www.ghacks.net/2017/04/04/website-downloader-download-entire-wayback-machine-site-archives/
https://www.reddit.com/r/thepiratebay/comments/7l5kro/the_wayback_machine_and_the_pirate_bay/

## Полезни _бази [от] данни_ с кратки програми (скриптове, scripts) и примерен код (за `CLI` програмиране)

* https://www.commandlinefu.com/commands/browse
* https://snipplr.com/
* http://windows-commandline.com/

* https://serverfault.com/
* https://superuser.com/
* https://askubuntu.com/
* https://unix.stackexchange.com/

## (GNU/)Linux `bash` fortunes (famous quotes)
* https://www.splitbrain.org/projects/fortunes
* https://man.cx/fortune
* https://man.cx/strfile

##

* и други...
