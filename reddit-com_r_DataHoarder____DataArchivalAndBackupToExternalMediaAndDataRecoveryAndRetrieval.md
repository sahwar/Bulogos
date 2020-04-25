* https://www.reddit.com/r/DataHoarder/comments/eza503/comment/fgn6435
* ...
* ...
List of recommended filetype file-formats for long-term data-archival/data-storage/web-archive-archaelogy purposes, saved on physical data-storage media devices
Списък с препоръчани формати за дългосрочно съхранение на отделни уебстраници на офлайн физически носител (вътре в internal/external-connected HDDs, SSDs, USB-flashstick, CDs/DVDs/BD-BluRay-discs, future 'quantum' computers' data-storage, etc.):
(освен онлайн запис чрез http://archive.org/web/ и/или чрез http://archive.today // http://archive.is (!!!) )

* (НАЙ-ПРЕПОРЪЧИТЕЛНО) Запис чрез най-новата версия на Mozilla Firefox / Google Chrome / Chromium / Selenium / webkit-git
като „цялата уебстраница (full archive)“ (архив от .htm/.html + прилежащите файлове в папка „{същото име като на на html-а}_folder“
* (НАЙ-ПРЕПОРЪЧИТЕЛНО) Запис чрез най-новата версия на Mozilla Firefox / Google Chrome / Chromium / Selenium / webkit-git
като „(само .htm/.html“ (архив от .htm/.html , без прилежащите файлове в папка, само с включените пряко вградени в .html-а inline-embedded CSS & .js scripts & base64-encoded binary-files (raster&vector images, videoclips, GIF animations, MathML, etc.) & .php scripts / .pl scripts / cgi scripts / , etc. ...
* (ПРЕПОРЪЧИТЕЛНО) Запис чрез най-новата версия на Mozilla Firefox / Google Chrome / Chromium / Selenium / webkit-git
като „.txt“ (regexp-based(?) XML/HTML5/XHTML/SGML/SVG/CSS/JavaScript linter на изходния код на .htm/.html-а, БЕЗ прилежащите файлове в папка „{същото име като на на html-а}_folder“
--- само че, за съжаление, липсват вложени в текста Markdown (GHFM / CommonMark.org / MediaWiki-syntax) хипервръзките, вкл. към изображения, видеоклипове, GIF анимации, .js скриптове и .css файлове, което прави архивът непълен!
--- Пробвайте Firefox View-as-lightweight-webpage button & Firefox Sync & може би и Firefox Pocket
(но офлайн запис на .html / .json bookmarks-folders чрез интерфейса на Mozilla Firefox е много по-мъдро! После сами ги слагате в .zip архиви с други такива файлове!!!)
(инсталирайте и използвайте web-browser add-ons от типа „Copy all tabs URIs (+titles?)“ + запис като {дата-и-час_заглавие_my-opened-webbrowser-tabs-list}.txt чрез безплатните протрами Notepad++ / notepad2-mod / ... след като вече сте записали тези уебстраници в Mozilla Firefox / Google Chrome в нова папка чрез Ctrl+Shift+D
* (НАЙ-ПРЕПОРЪЧИТЕЛНО) Запис като .maff или като .mht чрез най-новата версия на Mozilla Firefox / Google Chrome / Chromium / PaleMoon / ...
чрез инсалитаните добавки (add-ons, web-browser extensions) UnMHT & MAFF (Mozilla Archive Format, .zip'ped) {тези две добавки може да изискват по-стара версия на Mozilla Firefox, за да работят!!!)
* (ПРЕПОРЪЧИТЕЛНО) Запис чрез разширени CLI опции за " mirror И/ИЛИ all contents of the webpage included inside" с най-новата стабилна версия на wget / wget2 / curl / libcurl ; lftp ; httpie ; ...
* (НАЙ-ПРЕПОРЪЧИТЕЛНО) Запис чрез разширени CLI опции за "mirror as .WARC web-archive" с най-новата стабилна версия на wget / wget2 / curl / libcurl... ; lftp ; httpie ; ...
* (ПРЕПОРЪЧИТЕЛНО) Запис чрез фини прецизни настройки за full-mirror backup чрез програмата WinHTTrack/HTTrack (най-вече на .htm/.html-ите)
* (НАЙ-ПРЕПОРЪЧИТЕЛНО) Запис чрез github - WebArchive pack (.WARC) app
* Запис чрез webkit(-git)2pdf (непрепоръчително)
* Запис чрез freeware webpage to pdf virtual-printer apps
* (ПРЕПОРЪЧИТЕЛНО ЗА ПАРЧЕТА от еднотипни като структура .html's)) Запис чрез regexp-based webscraping: tooth (GitHub), Python Scrapy, etc.
* (ПРЕПОРЪЧИТЕЛНО) Запис (с партидна обработка / batch processing) чрез headless latest-git headless-webbrowsers like Selenium (потърси ги в GitHub, чрез google, в gitlab и т.н.), etc.
* Mozilla Firefox Mobile (Google Android) -> вградено „Запис като PDF“
* Google Chrome Mobile (Google Android v5–8+?) -> вградено „Запис като .mht“ {подобно на Запис като архив .mht чрез MS IE10+?} (???)

Полезни безплатни програми за търсене по име/тип на файла/дата на последна промяна - вътре във виртуални дялове (virtual partitions/volumes), форматирани като файлова система NTFS (MS Windows) или с популярни файлови системи за Linux:
* voodtools.com - Search Everything
* GitHub - FSearch app (Linux) / FSearcher ; `find`, `mlocate`
