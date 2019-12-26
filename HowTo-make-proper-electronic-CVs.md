HowTo-make-proper-electronic-CVs.md

Как правилно да си направим електронно CV (curriculum vitae, сбита/резюмирана/обобщена автобиография)

1. Напишете сбито CV с обобщения за всеки от основните раздели на съвременно CV. Напиши го във файлови формати CommonMark/Markdown, .docx (MS Office Word 2007+), .doc (MS Office Word 2003+), .odt (LibreOffice/OpenOffice.org), .tex (TeX/LaTEX + XeTEX + hyperref + ...), .html (HTMLv4.1+CSS2.1+JavaScript / HTML5+CSS3+JavaScript (ECMAScript6+) + .otf/.ttf/.woff2 fonts).
2. Проверете файла за правописни грешки плюс пунктуационни и граматически грешки, първо чрез автоматизирана програма за проверка на правописа (spellchecker, например IDI Spellchecker Free или aspell/hunspell чрез Mozilla Firefox/LibreOffice/BGoffice), после и ръчно чрез четене с разбиране и умствена проверка на правописа.
3. Конвертирайте (преобразувайте) файла към .PDF.
4. _**ВАЖНО:
Добавете оригиналния файл (.docx или .doc или .odt/.odf или ...) като закачен файл (attachment) към крайния PDF файл, който е за разпространение.**_
* **КАК ДА ДОБАВИМ ПРИКАЧЕН/ПРИКРЕПЕН ФАЙЛ КЪМ pdf? Чрез [Adobe Reader DC](https://get.adobe.com/reader/): `View -> Tools -> Comment(s) -> paperclip icon... -> (select file to attach...) + File -> Save as...`** --- https://archive.is/JT874
По желание, за удобство на четящите PDF файла, някъде в самия текст на CV-то впишите с малък шрифт, че към PDF-а има закачен оригиналният редактируем файл на CV-то (закачен като attachment, който от панела `View -> Tools -> Comment -> paperclip icon`... на PDF четеца Ви можете да запазите като отделен файл и да го отворите и редактирате със съответната програма).

По желание, въведете Metadata properties данни, които ще се показват при отваряне на „Свойства“ (Properties) на крайния PDF файл... Може да са уличаващи данни, та добре си помислете какво да впишете като PDF title, subject, tags, comment и т.н.

По желание, вътре в PDF-а (или в оригиналния файл, който после конвертирате към/в PDF) можете също да прикачите като attachments всякакви снимки на документи, дипломи, публикации и т.н. И те ще са видими в панела Attachments при отваряне на крайния PDF (работи с Adobe Reader, xPdfReader, SumatraPDF, FoxitPDF Reader, Okular (Linux), EvincePDF (Linux), MuPDF, qpdfview и други...

**Въпрос:** ЗАЩО ДА ЗАКРЕПИМ/ЗАЗИДАМЕ (embed) ОРИГИНАЛНИЯ ФАЙЛ ВЪТРЕ В НЕРЕДАКТИРУЕМИЯ КРАЕН PDF ФАЙЛ?
**Отговор:** ЗАЩОТО после при нужда просто отваряте PDF файла, натискате панела attachments (прикачените към PDF файла документи), записвате прикачения файл като отделен файл, и можете да го редактирате със съответната програма (MS Office Word 2007+, LibreOffice/OpenOffice.org и т.н.). Тоест имате интегриран редактируемият оригинален файл вътре в нередактируемия краен PDF...

* **КАК ДА ДОБАВИМ ПРИКАЧЕН ФАЙЛ КЪМ docx (например да вградим оригиналния docx или друг docx или pdf или изображения или друг файл)? MS Word 2007+ -> Insert -> Insert object... + Show as icon (вместо да се добавя първата страница от прикачвания файл)...** --- https://archive.is/jmDvE

* **КАК ДА ДОБАВИМ ПРИКАЧЕН ОРИГИНАЛНИЯ .odt ФАЙЛ КЪМ КРАЙНИЯ .pdf?** [LibreOffice](https://www.libreoffice.org/): https://help.libreoffice.org/Common/Export_as_PDF#Hybrid_PDF_.28embed_ODF_file.29 ... `LibreOffice v6+ -> File -> Export as PDF -> Hybrid PDF (embed ODF file)... + Lossless compression + Export bookmarks (+ Export comments)...` OPTIONAL: Archive PDF/A-1a (ISO 19005-1) + Tagged PDF (add document structure)...

* **КАК ДА ДОБАВИМ ПРИКАЧЕН ФАЙЛ КЪМ .html? Един хитър начин е да го вградите като HTML коментар в HTML кода:** `<!-- тук сложете превърнатия бинарен/двоичен файл, конвертиран към/в base64 encoding чрез онлайн или офлайн инструмент за превръщане на бинарни/двоични файлове към base64 (binaryfile2base64 & base64toBinaryfile), като преди това сложите друг такъв коментар с описание на файловото разширение и какъв точно е файлът... -->`... ВНИМАНИЕ: Вграждайте САМО не-зловредни файлове като base64 и имайте предвид, че без текстов редактор (като Notepad++ и т.н.) и/или най-нова версия на уеб-браузър (като Mozilla Firefox, Google Chrome/Chromium, Microsoft Edge, ...), няма да можете да отворите HTML кода и да копирате encoded-as-base64 кода, който да запазите като друг файл с друго файлово разширение, и после да конвертирате обратно към оригинала чрез base64 decoding... Също така е ЛОША ИДЕЯ вграждането в `.html/.htm` на големи като размер двоични файлове като base64!!!

* **КАК ДА ПРЕОБРАЗУВАМЕ (КОНВЕРТИРАМЕ) .doc/.docx/.odt/.html/.md/.tex към/в .pdf?** Чрез MS Word 2007+ (Export as PDF), LibreOffice (Export as PDF), [`pandoc`](https://pandoc.org/) (md2pdf, odt2pdf, docx2pdf), MikTeX и онлайн `convert {filetype} to pdf online free` (https://www.google.com/search?&q=convert+%7Bfiletype%7D+to+pdf+online+free)...

5. При нужда, изтривайте CV-то си и го пренаписвайте или променяйте (или изтривайте големи раздели от него) изцяло или почти наново, когато Ви омръзне да играете ролите, {като} които играете в обществото и за/пред себе си. После изтрийте старите си CV-та от целия Интернет. Променете вътрелния си аз-образ и как се държите в обществото и сменете какви роли играте... Ако трябва, сменете селището или се преместете в друга държава, която повече отговаря на вкусовете или нуждите Ви...
6. (преди 4. ...) **ВИНАГИ в LibreOffice или в MS Office Word 2003+/2007+ при запис на файла, който после ще конвертирате към PDF, включвайте опцията за `Attach/Embed fonts inside` output DOC/DOCX/ODT file** (в Options/Settings или във `File -> Save as... -> Save options...` в MS Office Word), и изключете опцията за не-интегриране във файла на често срещаните системни компютърни шрифтове! Изключете и опцията Include only subset of fonts!!! (т.е. и те да се включват!). Може да се наложи да включите и `File -> Save as... -> Web options... -> Encoding: UTF-8`...
Също така използвайте функцията formatting stylesheets / paragraph styles в LibreOffice / MS Office Word, а не просто да цъкате bold/italic/... на всяка дума или абзац!!! Можете да създадете и свои custom paragraph styles...
7. Поддържайте version-control за версиите на CV-тата си, най-лесно е чрез modification datetime stamp + git + различни имена на файловете.
8. При нужда изтрийте всичко и започнете живота си наново под друга самоличност (в Интернет има описани начини за това, просто потърсете в/чрез/с google.com в Incognito Mode и след изтриване на cache на уеб-браузъра си и след активиране на опцията Do not track me в уеб-браузъра).
9. По желание може да {впишете физически пол, възраст и да} сложите снимка в CV-то си, но слагането на горе-долу актуална снимка е незадължително според законодателството на Европейския съюз, например GDPR. **Също така може да напишете няколко различни или еднакви версии на CV-то си, НО написани на различни езици** (с еднакъв или донякъде различен стил на текстово форматиране и подреждане на CV-то), например на български и на английски и т.н. ...
10. **И най-важното:
НЕ лъжете прекалено много за уменията и знанията си (реалните Ви — по Ваша лична самооценка!) в CV-то си, защото впоследствие ще си проличи** при евентуални интервюта за работа, при започване на работа и при срещи с хора, чели CV-то Ви. Ако много лъжете, ще трябва да се правите (да симулирате и да импровизирате хитро и/или творчески), че имате съответните знания и умения, докато реално ги учите в движение!
НО можете да включите обобщение на умения и знания, които сте придобили чрез самообучение и самообразование, а не чрез формално образование и утвърдени частни квалификационни обучителни-опреснителни курсове, стига да имате (да сте на) поне начално или средно ниво (по лична полусубективна самооценка).

* * * 

http://khkonsulting.com/2015/10/launch-pdf-attachments/

https://support.office.com/en-us/article/add-a-pdf-to-your-office-file-74819342-8f00-4ab4-bcbe-0f3df15ab0dc

https://support.office.com/en-us/article/add-a-pdf-to-your-office-file-74819342-8f00-4ab4-bcbe-0f3df15ab0dc

https://www.google.com/search?q=attach+original+file+in+pdf+libreoffice&oq=attach+original+file+in+pdf+libreoffice&aqs=chrome..69i57.10905j1j9&client=ms-android-motorola-rev2&sourceid=chrome-mobile&ie=UTF-8

https://ask.libreoffice.org/en/question/17884/can-i-attach-doc-xls-files-to-my-pdf-file/

https://ask.libreoffice.org/en/question/175710/how-to-open-embed-pdf-file-in-libreoffice-writer/
