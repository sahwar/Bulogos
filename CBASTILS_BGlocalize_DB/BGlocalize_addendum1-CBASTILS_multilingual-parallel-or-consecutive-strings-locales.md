# Допълнение1 от CBASTILS за BGlocalize

## Обяснение

Преводът на техническа литература не е същият като превода на художествена литература
или като превода на обществено-журналистическа литература. При преводите на техническа
литература е налице негласното правило едни и същи специализирани термини, основно заети
от чужди езици (най-вече от английския), да се превеждат по един и същ начин, или чрез
уеднаквени синоними, като дори нерядко се добавя оригиналния термин на английски в скоби
след превода. Подобна точност и логичност не е тъй важна за превода на художествена
литература, при който има много повече свобода на изказа при превода, а и не се цели винаги пълна
точност при предаването чрез превода на смисъла на текста-източник, а по-скоро - компромисен вариант между
точност спрямо оригинала и добро звучене на текста в целевия език (target language - TL),
което изисква и добро познаване на характерни за целевия език синтактични структури,
синонимни гнезда и идиоматични структури (например устойчиви словосъчетания - _collocations_), както
и често непреводими (или не достатъчно добре преводими) социокултурни реалии (т.е. _cultural realia_).

**През последните 15 години хора от сферата на информационните технологии (IT, ИТ), основно
полупрофесионални преводачи на книги и програмисти, успяха криво-ляво сравнително успешно
да преведат на български голям брой от англоезичните термини от техниката, информационните
технологии и компютърното програмиране ("софтуерно инженерство"). Тези ентусиасти са основно
от нишата, използваща Linux и свободен софтуер с отворен код (F(L)OSS). Немалка част от тези
преводи на термините бяха добре приети от широката българоезична общественост, но някои от тези
преводи, за съжаление, не намериха радушен прием поради ширещата се употреба на идиосинкретични
англо-български смесени професиолекти (професионални диалекти), при които са ежедневие изписвания
и произношения в стил „Bulgarianish/Bulgarish“ (побългарен английски, т.е. идиосинкратична транслитерация-транскрипция&полу-превод от английски/латиница-към-български/кирилица) като „даунлоудвам“ или „download-вам“... и/или с употреба на _шльокавица_ (= идиосинкратична транслитерация-транскрипция от български/кирилица-към-английски/латиница).**

Голям брой програми бяха преведени чрез онлайн платформите за отворени доброволчески преводи като
тези на Ubuntu LaunchPad.net, transifex.com, crowdin.com, различни Weblate инсталации, 
translateproject.com, KDE.com, GNOME, XFCE, Mozilla Pantoon, GitHub.com, GitLab.org, Gitea
и други. Проекти като **BGoffice** и **OpenOffice.org (OOo)/LibreOffice** вляха пакети със списъци
с думи към модулите за автоматична проверка на правописа в **Mozilla Firefox**, **Google Chrome/Chromium** и други 
(aspell-bg, ispell-bg, hunspell-bg, enchant-bg...). Появиха се и полезни програми като **IDI Spellechecker**,
**ItaEst/WinEst** и др. Всички тези доброволчески проекти предоставиха множество удобства за българоезичните ползватели
на софтуер чрез наличието на български програми за автоматична проверка на правописа (с приблизителна точност от 80%...), 
както и превод на български език на текстовите низове за графичния потребителски интерфейс (ГПИ, GUI) на много важни програми като
свободни безплатни уеб-браузъри, свободни безплатни офис пакети за текстообработка и други.

Въпреки тези безспорни успехи, налице е известно затишие, застой и недостиг на повече българоезични преводи
на свободен софтуер с отворен код (F(L)OSS - free, libre, and open-source software) и безплатен софует
(freeware software), особено на преводи на техническата документация и `man` (manual, ръководство)
страниците на отделни програми. Това несъмнено се дължи на некомерсиалния характер на свободния софтуер с отворен код,
т.е. липсата на парично възнаграждение за свършения преводачески труд...

Поради тази причина с времето се появиха няколко ръководства с подробни съвети как да се превежда софтуер
на български език, които включват и двуезични речници със списъци и преводи на технически и IT термини: 
`BGlocalize`, `stelf/bg2en4dict`, `речника на Антон Зиновиев`, `Bulogos/CBASTILS` и други.

------

## В това **Допълнение1 от CBASTILS за BGlocalize** се представят нови 14 начина, по които да се превежда софтуер на български език, 
които въвеждат някои полезни тънкости, които са натрупани от опита с такива преводи.

Пример за такава предложена тук новост в превода на техническа документация е наличието на оригиналния текст наред
с българския превод (това е възможно благодарение на много по-големите към 2019 г. обеми на твърдите 
дискове и много по-мощните съвременни компютри (произведените след 2005 г.)!!! Подобен способ, макар
и рядко, се използва от векове при превода на художествена литература и се нарича _gloss_ (речник: 
`III. 1. глоса, обяснение/превод на трудни думи в текст, буквален превод на текст ред по ред
2. glossary
3. коментар, тълкуване
IV. 1. снабдявам с глоси/коментар/речник`).
Методът де факто представлява включването на оригиналния текст заедно с превода, или един до друг
(хоризонтално, с пространство между двата текста), или един под друг (вертикално, отново с пространство
между двата текста). Но докато при художествените текстове това се прилага като небуквален (но достатъчно
точен или сравнително умел) превод на оригиналния текст, подреден _ред по ред_ до самия оригинален текст,
то в случая с преводите на техническа и IT литература и с превода на текстовите низови за интерфейса на
дадена компютърна програма, става дума просто за представянето (например като таблица) на двата текста (оригиналния
текст и превода му) успоредно (паралелно) - хоризонтално или вертикално, НО подравнени като абзаци (параграфи, пасажи),
а НЕ подредени ред по ред (въпречи че може да се приложи в допълнение и подредба ред по ред...).

Този похват се използва в по-професионални преводни книги, като оригиналният текст (или ако е старинен такъв - greyscale
или цветна снимка на оригиналния текст (с висококачествена лъскава гланцирана по-дебела хартия) е представен от едната страна на
страницата, а преводът му (и/или всякакви бележки, които са заместител на или се използват успоредно с бележките под линия (може
да включват и сложно текстово форматиране, хипервръзки, изображения, QR-кодове и т.н.)) се разполага от другата страна на
страницата (като таблица с 2 колонки), **_ИЛИ_** оригиналът и преводът му се разполагат в две срещуположни страница при разтворено
преглеждане на книгата:

````
/----------|----------\
|          |          |
| ORIGINAL | ПРЕВОД   |
|          |          |
\----------|----------/
````

Възможно е дори с допълнително различно подравняване на текста на отделните колони да се коментира и синтактично оцветен програмен
компютърен изходен код, например
![example-image](https://pbs.twimg.com/media/BlrPp1gIgAA4zsd.png)
(Източник: https://dzone.com/articles/convert-ruby-scripts-html-and )

### ЗАЩО ВЪОБЩЕ ДА ИЗПОЛЗВАМЕ ТЕЗИ ТЕХНИКИ?

Обяснението е просто: някои хора просто предпочитат вместо да превключват между
различните езикови версии на интерфейса на дадена ГПИ (GUI) програма (или между
различните езикови версии на дадена статия в `man` статиите с помощна документация),
просто... ДА ИМАТ налице двете езикови версии успоредно, което много улеснява IT
хората, които примерно са свикнали само с англоезичните термини, но биха искали
да четат документация или менютата от интерфейса на дадена програма - и на български!!!

Единствените реални минуси от такъв подход са малко на брой:
1. **По-големи размери на файловете** за езиковите пакети за интерфейса и във файловете с `man`
статиите с помощна документация и във вградената текстова помощна информация в самата програма,
извиквана чрез `{име на програмата като текстова команда} --help` и т.н. Но предвид по-мощните
съвременни компютри и големите обеми за данни в съвременните твърди дискове... това въобще не е проблем,
само дето малко по-бавно се зареждат тези файлове (тъй като съдържат повече текстови низове: на английския оригинал
и на българския превод!).
2. Някои англофили и програмисти, свикнали само с англоезичните IT термини и текстове, ще се мусят и ще негодуват... :D
Но такъв е животът, приятели! :D Нека има помощна документация и то двуезична и успоредно визуализарана! Все пак точно
Вие сте основната целева аудитория, пък и само по-големите патриоти сред Вас ще започнат да превеждат `man` статии и 
`--help` помощни статии и ГПИ интерфейси според някои от тези нови стилове (подходи) за превод на техническа и IT литература на български език! :) Разчитаме на Вас!
3. Някои по-непрецизни при превода и при форматирането на текстови в тези стилове... биха написали по-калпави и по-зле
текстово форматирани такива преводни низове... Но няма как да се избегне това, както е и за мързела, демотивацията и остаряването... :P

**Вижте още:**
* [gloss](https://en.wikipedia.org/wiki/Gloss)
* [interlinear gloss](https://en.wikipedia.org/wiki/Interlinear_gloss) (gloss за целите на езикознанието (лингвистиката))

_двуезични успоредни (паралелни) текстове (т.е. оригинал И превод) при превод на/в ГПИ (GUI) от английски на български (или обратно)_

А ето и 14-те варианта/стила:

0) **Основните начини за превод на български език на менютата от интерфейса на компютърни програми** (взети са от BGlocalize, текстовете на Антон Зиновиев и ръководствата на бившето „Сдружение за свободен софтуер“):

---------------------------------------------------------
| Основен стил 1 | Основен стил 2 | Основен стил 3 | Основен стил 4 | Основен стил 5 | Основен стил 6 (СИЛНО НЕПРЕПОРЪЧИТЕЛЕН) |
| --- | --- | --- | --- | --- | --- |
| Превод чрез 2 л. ед. ч. (повелителна/заповедна/императивна форма) (в Windows7 се използва този стил + отчасти и някои от другите 5 стила, описани тук) | Превод чрез 2 л. мн. ч. (повелителна/заповедна/императивна форма) | Превод предимно чрез съществителни имена, особено с отглаголни съществителни на „-не“ и „-ние“, плюс предлози (стил BGlocalize&речника на Антон Зиновиев&ръководствата от бившото „Сдружение за свободен софтуер“: **това е основният стил на превод на софтуер на български**, а и е предпочитаният за превод на свободен софтуер с отворен код (F(L)OSS)) | Смесен стил № 1 (смесване на някои от първите 3-ти стила) | Смесен стил № 2 (като смесен стил № 1, но и с използване като допълнение на някои от долните 14 нови стила/варианта за превод) | Неформален, ghetto-gangsta-underground-2000s-IT стил „Bulgarianish/Bulgarish“ (побългарен английски, т.е. идиосинкратична транслитерация-транскрипция&полу-превод от английски/латиница-към-български/кирилица) като „даунлоудвам“ или „download-вам“ и/или с употреба на _шльокавица_ (= идиосинкратична транслитерация-транскрипция от български/кирилица-към-английски/латиница) (**СИЛНО НЕПРЕПОРЪЧИТЕЛЕН**, освен при неформална устна реч) |
---------------------------------------------------------

**БЕЛЕЖКА1:** Обърнете внимание, че ВСЕКИ преводач превежда по свои си начин(и) текстовите низове от интерфейса на компютърните програми (това се дължи на различията между хората, както и различното им образование и езикови квалификации/умения, т.е. на различните им (но в същността си фундаментално подобни, тъй като всички сме хора) генотип+фенотип, автобиографии, идиосинкразии и идиолекти (идиолект = индивидуалните уникални характеристики на речта/езика на всеки човек). Точно затова бяха измислени гореизброените специализирани ръководства (упътвания) и речници (глосари, glossaries) с български преводи на специализираните термини (с цел донякъде уеднаквяването на превода на основните термини), като дори при тях се включват поне **няколко варианта за превод** (и дори със ~зачеркнат~ стил на форматирането се включват не толкова популярни или препоръчвани преводи!).

**БЕЛЕЖКА2:** Обърнете внимание, че към горните 5 основни стила за превод, може да се добавят и още 2 доуточняващи стила по отношение на `Alt` клавиатурните ускорители: чрез заместване на оригиналните англоезични `Alt` ASCII клавиатурни ускорители с нови `Alt` ускорители на неповторими отделни кирилски букви, част от българоезичния преводен текстов низ **_ИЛИ_** стила на `Alt` клавиатурни ускорители, зает от преводите на софтуер на японски и китайски език, при който СЕ ЗАПАЗВАТ оригиналните англоезични `Alt` ASCII клавиатурни ускорители, но се поставят в скоби след текста на менюто, например: `Файл (F)` (при натискане на клавиша `Alt` се подчертава буквата **F**, която е клавиатурният ускорител за бързо избиране на този елемент от менютата).

**БЕЛЕЖКА3:** При всички от гореизброените 5 стила е възможно използването на съкращения, абревиатури, акроними, както и непревеждането (буквалното включване 1-към-1 наред с преведената част от текста) на твърде специализирани англоезични технически и IT термини, дори и включването на някои не съвсем уместни „хитринки“ за съкращаване на дължината на преведения текстов низ, като премахването на прекалено многото екземпляри на често срещани думи като „на“ (и „за“) (това напомня на телеграфския официозен „висок“ бюрократичен стил от епохата на социализма в България, при който нерядко се пропускат някои думи като „на“, „за“ и се прекалява с българоезичните съкращения - http://frazite.com).

1) Вариант/стил 1 (с pipe character, т.е. със знак „права вертикална черта“):
````
File | Файл
````
`original English-language text strings | translated Bulgarian-language text strings`

ИЛИ

````
Файл | File
````
`translated Bulgarian-language text strings | original English-language text strings`

2) Вариант/стил 2 (със скоби):
````
File (Файл)
````
`original English-language text strings (translated Bulgarian-language text strings)`

ИЛИ

````
Файл (File)
````
`translated Bulgarian-language text strings (original English-language text strings)`

3) Вариант/стил 2 (със forward-slash):
````
File / Файл
````
`original English-language text strings / translated Bulgarian-language text strings`

ИЛИ

````
Файл / File
````
`translated Bulgarian-language text strings / original English-language text strings`

4) Вариант/стил 3 (с квадратни скоби):
````
File [Файл]
````
`original English-language text strings (translated Bulgarian-language text strings)`

ИЛИ

````
Файл [File]
````
`translated Bulgarian-language text strings (original English-language text strings)`

5) Вариант/стил 4 (с фигурни скоби):
````
File {Файл}
````
`original English-language text strings (translated Bulgarian-language text strings)`

ИЛИ

````
Файл {File}
````
`translated Bulgarian-language text strings (original English-language text strings)`

6) Вариант/стил 5 (оригиналния текст на английски и българския му превод, сложени **един след друг вертикално**,
с празен ред между тях, евентуално и с уточнения в скоби за езиците):
При употреба на 
`--help`, `-help`, `-h` (Linux CLI apps/commands style, `-?`, `/?` (MS Windows `cmd.exe` style)
`man curl`, `apophis curl`:

````
[(in) Bulgarian / на български] ...
/r/n (т.е. нов ред, например с <br> в HTML)
[(in) English / на английски] ...
````

ИЛИ

````
[(in) English / на английски] ...
\r\n (т.е. нов ред, например с <br> в HTML)
[(in) Bulgarian / на български] ...
````

Пример:
cmd.exe (MS Windows)

````
tree /?

[in English / на английски]
Graphically displays the folder structure of a drive or path.

TREE [drive:][path] [/F] [/A]

   /F   Display the names of the files in each folder.
   /A   Use ASCII instead of extended characters.
\r\n
[in Bulgarian / на български]
Тази команда графично (подобно на дърво) представя структурата от папки в даден драйв (монтирана файлова система или дял) или в даден(а) път(ека).

Синтаксис:
TREE [драйв:][път(ека)] [/F] [/A]
(изписва се БЕЗ знаците „[“ и „]“)

   /F   Представя имената на файловете във всяка папка (включително подпапки).
   /A   Използване на кодова таблица (кодировка) ASCII вместо на разширени знаци (т.е. Unicode).
````

7) Вариант/стил 6 (оригиналния текст на английски и българския му превод, сложени **един до друг хоризонтално**,
с ограничителни знаци-маркери между тях, евентуално в началото и с 1 или повече редове с хоризонтално подравнени
в колонки уточнения в скоби за езиците):

Максимум 80 знака (вкл. интервалите (whitespaces, шпациите / празните 
пространства) и табулаторите (TAB)!!!) на 1 ред, като във всеки 1 ред в 2
колонки _една до друга_ са версиите на 2-та езика (английския оригинал и 
българския превод), по подобие на таблица, като двата текста са разделени с 
последователност от знаци разделители/ограничители (delimiter characters),
например 1-2 броя знак табулатор (TAB = "	") или 4 или повече интервала
(защото в англоезичните технически текстове често използва 2 интервала за 
разделяне на изречения вместо 1 интервал, което много улеснява машинната 
обработка на такива текстове и използването на регулярни изрази (regex, regexp)
върху тях!!!).

<!--
delimiter = знак ограничител
(substitution characters?) = заместващи знаци
wildcards (wildcard characters)
regex/regexp characters
meta-characters in regexp = мета-знаци в регулярни изрази
-->

`MAX TOTAL OF _80-characters-per-line (including whitespaces&tabs!) TAB-separated side-by-side different language versions_ in
a table-like manner, separated by a delimiter char sequence/string, e.g. 1-2xTAB-char
or 4-or-more whitespaces`

multilingual line-by-line aligned column-/table-like parallel text layout; complex text layout
for localization purposes...

8) Използване на параметъра `LC=` за задаване на езиковия локал при пускането/стартирането на програма чрез терминала за команден ред (ред за изпълняване на (CLI/TUI-текстови или GUI-apps) команди)

GNU GetText (UTF-8 plaintext `*.po, *.pot (.po template file)` -> binary `*.mo`) CLI `LC=` (locale) switches
when running the app as a text command from the CLI Terminal emulator app (and/or as parameters in
symbolic-links (symlinks) (in Linux) or shortcut files (in MS Windows)...

9) Превключване между езиковите пакети на дадена програма с ГПИ (GUI) чрез опция в менютата и\`, като превключването
между езиците НЕ ИЗИСКВА рестартиране (подобно на KDE3+)

KDE3+-like _restartless_ (no app restart requirement!) on-the-fly/-go locale (=interface language) switching via the KDE app's GUI menu item

10) Превключване между езиковите пакети на дадена програма с ГПИ (GUI) чрез опция в менютата и`, като превключването
между езиците ИЗИСКВА рестартиране (подобно на `paint.net`)

app restart-requiring locale (=interface language) switching (e.g. `paint.net`)

11) Разни общи (за предлагане на версии на различни езици (вкл. и version-control на тези версии!) на дадена уебстраница от даден уебсайт)

11.1.

Unicode's CLDR & Unicode \[complex\] collation (sorting) algorithm, IBM's ICU, `localize.js`, `time.js`,
different URLs/URIs hyperlinks for the different language versions of a webpage in a website (& _clean URIs_ or not)
OR client-side webpage-reloadless JavaScript GetText-based (i.e. `.po`) different-language-versions of a webpage swapping/switching;

11.2.

Двуезични onmouseover/on-clocktime-delay-every-x-seconds текстови низове в ToolTips **_ИЛИ_** преводни (преведени) onmouseover/on-clocktime-delay-every-x-seconds текстови низове

12) side-by-side different language versions of a website in an oldschool HTML table or side-by-side CSSv3-based table-like
grid layout with different language versions _simultaneously_ visualized (shown) in the HTML.

13) `<Ruby></Ruby>` HTML codes for IPA (or custom) transcriptions & {some-specific-system(+its-specific-version)-for-transliteration}
Чрез HTML етикета `<ruby></ruby>` може да добавите надредова диакритична транскрипция или транслитерация (или дори gloss/бележка) на чуждоезиков или български текст.
````
40..40

39..39
````

````
EN

BG
````

or

````
BG

EN
````

Още информация:
* mozdev, MDN
* https://www.w3schools.com/tags/tag_ruby.asp

14) qTip2 (qTooltip2) for complex AJAX&HTML5-based HTML onmouseover-or-onclick/ontap tooltips & `<abbr title="text explanation or expanded abbreviation">text</abbr>` and `<acronym title="...">...</acronym>`.

* **БЕЛЕЖКА1:** Към 2019 г. дори най-новите версии на уеб-браузърите Mozilla Firefox и Google Chrome/Chromium НЕ разполагат с удобен графичен начин за визуализация на HTML `<abbr title="спомагателен текст тук">...</abbr>` и `<acronym title="спомагателно обяснение тук">...</acronym`!!!
Това може да се реши чрез визуализация на пунктирана линия под текст с такава HTML маркировка плюс визуализация при единично ИЛИ тройно тупване/щракване върху този текст, като или за няколко секунди се появява soft-wrapped спомагателния текст, или се визуализира за постоянно като
_полупрозрачно_ (например сиво или жълто) каре (може и със заоблени HTML върхове на правоъгълника...) с бутонче \[X\] за затваряне при тупване/щракване от страна на потребителя... ** ---@sahwar's ideas ****
* **БЕЛЕЖКА2:** При превода на `paint.net` забелязах някои ограничения в win32 API, в .NET и в WPF (Win10-style), които
се отнасят до как (и въобще дали...) да се визуализират текстови низове, които надскачат границите на дадена ГПИ (GUI) контрола (widget),
особено text-containing button, editable textarea и dropdown textarea option!!! Ще се наложи да предложа на Rick Brewster (програмистът зад
`paint.net` и на Microsoft няколко варианта за решаването на този досаден проблем... защото иначе не се визуализират въобще
по-дълги низове, защото надхвърлят рамките на полетата (кутийките си)...
Възможни решения:
1. Визуализация на визуално откроено многоточие `...` и показване като `word-wrapped` на целия текстов низ при onmouseover.
(донякъде е така в editable&non-editable textareas в диалоговите прозорци `Save as... / Open..` в Windows7, НО ЛИПСВА `word-wrap`,
което обезсмисля занятието, тъй като не се вижда целия дълъг текстов низ ДОРИ и при ToolTip-text onmouseover/onhover / ToolTip cooldown-lag...
2. Показване на целия текст в стил на плъзгащ се текст като HTML4 `<marquee></marquee>` (със запазване на опция за вмъкване
по всяко време на курсора за редакция на текста, ако textarea е editable, като например в `Save as... / Open..` диалогови прозорци на `explorer.exe`.
3. `word-wrap` (пренасяне на нов ред) на текста при стигане на текстовия низ до края (визуалните граници) на ГПИ (GUI) контролата (widget) (ДОРИ И ДА Е ГРЕШНО СРИЧКОПРЕНАСЯНЕТО!!!),
ИЛИ `word-wrap` на текста при стигане до предварително консенсусно уточнен regexp мета-знак, който да се вписва в изходния код (source code) на езиковия пакет,
например `<br>`, `&nbsp;` (no break space), `non-breaking hyphen`, `\r\n` (т.е. `низ за указване на нов ред в текста` в стил MS Windows), `zero-width space`, `hyphenation point` (точка, указваща място за сричкопренасяне), `zero-width joiner`, `zero-width non-joiner`, и т.н.
**НО** да се разширява и съдържащия поделемент в/на самата ГПИ контрола (GUI widget) дори след `word-wrap` (пренасянето на нов ред на дългия текстов низ)!!!
4. Подобно на MS Windows 7 taskbar (лентата на задачите)... да се показват ГПИ стрелки `<- -> {стрелка надолу} {стрелка нагоре}`
или GUI scrollbars (ленти плъзгачи)!
5. Показване на изскачащо прозорче (pop-up box) на editable textarea с бутонче `[X]` за затваряне (като текстът в него си
остава редактируем (editable)!!!). 
6. Комбинация от горните варианти...
7. Нещо друго като вариант???
(8. regexp търсачка из менютата (подобна на [Wox](https://github.com/Wox-launcher/Wox), която обаче е за всичко, а не само за търсене из текста в интерфейса) като част от ГПИ интерфейса, подобна на https://github.com/p-e-w/plotinus или на тази в www.wnsoft.com PixBuilder Studio 2.2.0 (иконката „лупа“ след менюто `Help`...).

------

ДА СЕ ОБЪРНЕ ВНИМАНИЕ ПРИ ПРЕВОДА НА `$ man {app-name}` статии (т.е. помощна документация - `RTFM` (read the fucking manual!)):
* delimiter characters (знаци разтелители/ограничители), най-често това е `\` пред друг знак (вкл. самия `\`: `\\`)...
* Microsoft (MS) Windows filename no-no-no not-allowed chars restriction:
````
Името на файл не може да съдържа никои от следните знаци:
\ / : * ? " < > |
````
&
(GNU/)Linux Terminal `bash`, `zsh`, `urxvt`, `uxterm`, etc. **unallowed chars & delimiter chars before the unallowed chars**
* `http://` / `https://` ASCII charset vs./**&** Unicode UTF-8 IDN (internationalized domain names) & IDN-normalization-to-ASCII (percent-/URL-encoding/decoding)
* base64-encoded images & multi-part MIMEs (i.e. `*.mht` webpage archives).
* при превода на интерфейс от английски на български има поне 3 стила на превод + подстилове:
виж BGlocalize:
2 л. ед. ч. (заповедна/повелителна/императивна форма); 2 л. мн. ч. (); отглаголни съществителни имена на „-не“ и „-ние“ + съществителни;
с нови `Alt` ускорители на букви от кирилицата в текстовия низ на менютата ИЛИ чрез запазване на ASCII `Alt` ускорителя
чрез добавянето му (подобно на преводите на интерфейси на японски или на китайски) по следния начин след преведения текстов низ:
 `{преведен текстов низ от меню на интерфейса} (_X_)` (т.е. в скоба и с ASCII буква, като така се запазва оригиналния
 клавиатурен `Alt` ускорител и не се налага да се научава нов ускорител на кирилска буква, която е част от преводния българоезичен текстов низ
 от ГПИ интерфейса)...   
* ???

Файлови формати, подходящи за дълготрайно архивиране на уебстраница/-и от уебсайтов(е):
* различните версии на `*.mht` (multipart MIME that is base64-ASCII-plaintext-encoded inline/linked binary files (i.e. images, some audio-files&videos, etc.)
* `.maff` (изисква специална добавка (add-on) и работи само с Mozilla Firefox
* Save as HTML (уебстраница, цялата) ( = \*.html (\*.htm) + `{webpage title}_files` folder/directory of included files)
* Save as HTML (уебстраница, само HTML) ( = \*.html, \*.html)
* base64-encoded full webpage (downloaded as `webpage, full (.htm(l) + {title}_files folder` or via `wget` / `wget2` / `curl` ... & `zip`-ped \[WITHOUT A PASSWORD/ENCRYPTION!!!\] (.zip, .bzip2, .lzip/.lzip2, .7z, .sfx (self-extracting 7zip archive), gzip, .xz (not recommened by lzip/lzip2), Google brotli, etc. ...)
* + full-webpage screenshot (OPTIONAL, does NOT include interactive elements, like AJAX controls)...

<!--

(to add to https://github.com/sahwar/Bulogos/BLSG )

Useful HTML entities for manual HTML5 text formating:
Полезни HTML entities за ръчно форматиране на HTML5:

https://www.w3schools.com/tags/ref_keyboardshortcuts.asp
https://www.w3schools.com/tags/ref_keyboardshortcuts.asp
https://www.w3schools.com/html/html_entities.asp
Non-breaking Space
A common character entity used in HTML is the non-breaking space: &nbsp;

A non-breaking space is a space that will not break into a new line.

Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.

Examples:

§ 10
10 km/h
10 PM
Another common use of the non-breaking space is to prevent browsers from truncating spaces in HTML pages.

If you write 10 spaces in your text, the browser will remove 9 of them. To add real spaces to your text, you can use the &nbsp; character entity.

The non-breaking hyphen (&#8209;) lets you use a hyphen character (‑) that won't break.

Combining Diacritical Marks
A diacritical mark is a "glyph" added to a letter.

Some diacritical marks, like grave (  ̀) and acute (  ́) are called accents.

Diacritical marks can appear both above and below a letter, inside a letter, and between two letters.

Diacritical marks can be used in combination with alphanumeric characters to produce a character that is not present in the character set (encoding) used in the page.

Here are some examples:

Mark	Character	Construct	Result
 ̀	a	a&#768;	à
 ́	a	a&#769;	á
̂	a	a&#770;	â
 ̃	a	a&#771;	ã
 ̀	O	O&#768;	Ò
 ́	O	O&#769;	Ó
̂	O	O&#770;	Ô
 ̃	O	O&#771;	Õ
You will see more HTML symbols in the next chapter of this tutorial.
-
Char	Dec	Hex	Entity	Name
 	8192	2000	 	EN QUAD
 	8193	2001	 	EM QUAD
 	8194	2002	&ensp;	EN SPACE
 	8195	2003	&emsp;	EM SPACE
 	8196	2004	 	THREE-PER-EM SPACE
 	8197	2005	 	FOUR-PER-EM SPACE
 	8198	2006	 	SIX-PER-EM SPACE
 	8199	2007	 	FIGURE SPACE
 	8200	2008	 	PUNCTUATION SPACE
 	8201	2009	&thinsp;	THIN SPACE
 	8202	200A	 	HAIR SPACE
​	8203	200B	 	ZERO WIDTH SPACE
‌	8204	200C	&zwnj;	ZERO WIDTH NON-JOINER
‍	8205	200D	&zwj;	ZERO WIDTH JOINER
‎	8206	200E	&lrm;	LEFT-TO-RIGHT MARK
‏	8207	200F	&rlm;	RIGHT-TO-LEFT MARK

‐	8208	2010	 	HYPHEN
‑	8209	2011	 	NON-BREAKING HYPHEN
‒	8210	2012	 	FIGURE DASH
–	8211	2013	&ndash;	EN DASH
—	8212	2014	&mdash;	EM DASH
―	8213	2015	 	HORIZONTAL BAR
‖	8214	2016	 	DOUBLE VERTICAL LINE
‗	8215	2017	 	DOUBLE LOW LINE
‘	8216	2018	&lsquo;	LEFT SINGLE QUOTATION MARK
’	8217	2019	&rsquo;	RIGHT SINGLE QUOTATION MARK
‚	8218	201A	&sbquo;	SINGLE LOW-9 QUOTATION MARK
‛	8219	201B	 	SINGLE HIGH-REVERSED-9 QUOTATION MARK
“	8220	201C	&ldquo;	LEFT DOUBLE QUOTATION MARK
”	8221	201D	&rdquo;	RIGHT DOUBLE QUOTATION MARK
„	8222	201E	&bdquo;	DOUBLE LOW-9 QUOTATION MARK
‟	8223	201F	 	DOUBLE HIGH-REVERSED-9 QUOTATION MARK
†	8224	2020	&dagger;	DAGGER
‡	8225	2021	&Dagger;	DOUBLE DAGGER
•	8226	2022	&bull;	BULLET
‣	8227	2023	 	TRIANGULAR BULLET
․	8228	2024	 	ONE DOT LEADER
‥	8229	2025	 	TWO DOT LEADER
…	8230	2026	&hellip;	HORIZONTAL ELLIPSIS

‧	8231	2027	 	HYPHENATION POINT
 	8232	2028	 	LINE SEPARATOR
 	8233	2029	 	PARAGRAPH SEPARATOR
‪	8234	202A	 	LEFT-TO-RIGHT EMBEDDING
‫	8235	202B	 	RIGHT-TO-LEFT EMBEDDING
‬	8236	202C	 	POP DIRECTIONAL FORMATTING
‭	8237	202D	 	LEFT-TO-RIGHT OVERRIDE
‮	8238	202E	 	RIGHT-TO-LEFT OVERRIDE
 	8239	202F	 	NARROW NON-BREAK SPACE
‰	8240	2030	&permil;	PER MILLE SIGN
‱	8241	2031	 	PER TEN THOUSAND SIGN
′	8242	2032	&prime;	PRIME
″	8243	2033	&Prime;	DOUBLE PRIME
‴	8244	2034	 	TRIPLE PRIME
‵	8245	2035	 	REVERSED PRIME
‶	8246	2036	 	REVERSED DOUBLE PRIME
‷	8247	2037	 	REVERSED TRIPLE PRIME
‸	8248	2038	 	CARET
‹	8249	2039	&lsaquo;	SINGLE LEFT-POINTING ANGLE QUOTATION MARK
›	8250	203A	&rsaquo;	SINGLE RIGHT-POINTING ANGLE QUOTATION MARK

※	8251	203B	 	REFERENCE MARK
‼	8252	203C	 	DOUBLE EXCLAMATION MARK
‽	8253	203D	 	INTERROBANG
‾	8254	203E	&oline;	OVERLINE
‿	8255	203F	 	UNDERTIE
⁀	8256	2040	 	CHARACTER TIE
⁁	8257	2041	 	CARET INSERTION POINT
⁂	8258	2042	 	ASTERISM
⁃	8259	2043	 	HYPHEN BULLET
⁄	8260	2044	&frasl;	FRACTION SLASH
⁅	8261	2045	 	LEFT SQUARE BRACKET WITH QUILL
⁆	8262	2046	 	RIGHT SQUARE BRACKET WITH QUILL
⁇	8263	2047	 	DOUBLE QUESTION MARK
⁈	8264	2048	 	QUESTION EXCLAMATION MARK
⁉	8265	2049	 	EXCLAMATION QUESTION MARK
⁊	8266	204A	 	TIRONIAN SIGN ET
⁋	8267	204B	 	REVERSED PILCROW SIGN
⁌	8268	204C	 	BLACK LEFTWARDS BULLET
⁍	8269	204D	 	BLACK RIGHTWARDS BULLET
⁎	8270	204E	 	LOW ASTERISK
⁏	8271	204F	 	REVERSED SEMICOLON
⁐	8272	2050	 	CLOSE UP
⁑	8273	2051	 	TWO ASTERISKS ALIGNED VERTICALLY
⁒	8274	2052	 	COMMERCIAL MINUS SIGN
⁓	8275	2053	 	SWUNG DASH
⁔	8276	2054	 	INVERTED UNDERTIE
⁕	8277	2055	 	FLOWER PUNCTUATION MARK
⁖	8278	2056	 	THREE DOT PUNCTUATION
⁗	8279	2057	 	QUADRUPLE PRIME
⁘	8280	2058	 	FOUR DOT PUNCTUATION
⁙	8281	2059	 	FIVE DOT PUNCTUATION
⁚	8282	205A	 	TWO DOT PUNCTUATION
⁛	8283	205B	 	FOUR DOT MARK
⁜	8284	205C	 	DOTTED CROSS
⁝	8285	205D	 	TRICOLON
⁞	8286	205E	 	VERTICAL FOUR DOTS
 	8287	205F	 	MEDIUM MATHEMATICAL SPACE
⁠	8288	2060	 	WORD JOINER
⁡	8289	2061	 	FUNCTION APPLICATION
⁢	8290	2062	 	INVISIBLE TIMES
⁣	8291	2063	 	INVISIBLE SEPARATOR
⁤	8292	2064	 	INVISIBLE PLUS
⁦	8294	2066	 	LEFT-TO-RIGHT ISOLATE
⁧	8295	2067	 	RIGHT-TO-LEFT ISOLATE
⁨	8296	2068	 	FIRST STRONG ISOLATE
⁩	8297	2069	 	POP DIRECTIONAL ISOLATE
⁪	8298	206A	 	INHIBIT SYMMETRIC SWAPPING
⁫	8299	206B	 	ACTIVATE SYMMETRIC SWAPPING
⁬	8300	206C	 	INHIBIT ARABIC FORM SHAPING
⁭	8301	206D	 	ACTIVATE ARABIC FORM SHAPING
⁮	8302	206E	 	NATIONAL DIGIT SHAPES
⁯	8303	206F	 	NOMINAL DIGIT SHAPES

Char	Dec	Hex	Entity	Name
ò	768	0300	 	GRAVE ACCENT
ó	769	0301	 	ACUTE ACCENT
ô	770	0302	 	CIRCUMFLEX ACCENT
õ	771	0303	 	TILDE
ō	772	0304	 	MACRON
o̅	773	0305	 	OVERLINE
ŏ	774	0306	 	BREVE
ȯ	775	0307	 	DOT ABOVE
ö	776	0308	 	DIAERESIS
ỏ	777	0309	 	HOOK ABOVE
o̊	778	030A	 	RING ABOVE
ő	779	030B	 	DOUBLE ACUTE ACCENT
ǒ	780	030C	 	CARON
o̍	781	030D	 	VERTICAL LINE ABOVE
o̎	782	030E	 	DOUBLE VERTICAL LINE ABOVE
ȍ	783	030F	 	DOUBLE GRAVE ACCENT
o̐	784	0310	 	CANDRABINDU
ȏ	785	0311	 	INVERTED BREVE
o̒	786	0312	 	TURNED COMMA ABOVE
o̓	787	0313	 	COMMA ABOVE
o̔	788	0314	 	REVERSED COMMA ABOVE
o̕	789	0315	 	COMMA ABOVE RIGHT
o̖	790	0316	 	GRAVE ACCENT BELOW
o̗	791	0317	 	ACUTE ACCENT BELOW
o̘	792	0318	 	LEFT TACK BELOW
o̙	793	0319	 	RIGHT TACK BELOW
o̚	794	031A	 	LEFT ANGLE ABOVE
ơ	795	031B	 	HORN
o̜	796	031C	 	LEFT HALF RING BELOW
o̝	797	031D	 	UP TACK BELOW
o̞	798	031E	 	DOWN TACK BELOW
o̟	799	031F	 	PLUS SIGN BELOW
o̠	800	0320	 	MINUS SIGN BELOW
o̡	801	0321	 	PALATALIZED HOOK BELOW
o̢	802	0322	 	RETROFLEX HOOK BELOW
ọ	803	0323	 	DOT BELOW
o̤	804	0324	 	DIAERESIS BELOW
o̥	805	0325	 	RING BELOW
o̦	806	0326	 	COMMA BELOW
o̧	807	0327	 	CEDILLA
ǫ	808	0328	 	OGONEK
o̩	809	0329	 	VERTICAL LINE BELOW
o̪	810	032A	 	BRIDGE BELOW
o̫	811	032B	 	INVERTED DOUBLE ARCH BELOW
o̬	812	032C	 	CARON BELOW
o̭	813	032D	 	CIRCUMFLEX ACCENT BELOW
o̮	814	032E	 	BREVE BELOW
o̯	815	032F	 	INVERTED BREVE BELOW
o̰	816	0330	 	TILDE BELOW
o̱	817	0331	 	MACRON BELOW
o̲	818	0332	 	LOW LINE
o̳	819	0333	 	DOUBLE LOW LINE
o̴	820	0334	 	TILDE OVERLAY
o̵	821	0335	 	SHORT STROKE OVERLAY
o̶	822	0336	 	LONG STROKE OVERLAY
o̷	823	0337	 	SHORT SOLIDUS OVERLAY
o̸	824	0338	 	LONG SOLIDUS OVERLAY
o̹	825	0339	 	RIGHT HALF RING BELOW
o̺	826	033A	 	INVERTED BRIDGE BELOW
o̻	827	033B	 	SQUARE BELOW
o̼	828	033C	 	SEAGULL BELOW
o̽	829	033D	 	X ABOVE
o̾	830	033E	 	VERTICAL TILDE
o̿	831	033F	 	DOUBLE OVERLINE
ò	832	0340	 	GRAVE TONE MARK
ó	833	0341	 	ACUTE TONE MARK
o͂	834	0342	 	GREEK PERISPOMENI (combined with theta)
o̓	835	0343	 	GREEK KORONIS (combined with theta)
ö́	836	0344	 	GREEK DIALYTIKA TONOS (combined with theta)
oͅ	837	0345	 	GREEK YPOGEGRAMMENI (combined with theta)
o͆	838	0346	 	BRIDGE ABOVE
o͇	839	0347	 	EQUALS SIGN BELOW
o͈	840	0348	 	DOUBLE VERTICAL LINE BELOW
o͉	841	0349	 	LEFT ANGLE BELOW
o͊	842	034A	 	NOT TILDE ABOVE
o͋	843	034B	 	HOMOTHETIC ABOVE
o͌	844	034C	 	ALMOST EQUAL TO ABOVE
o͍	845	034D	 	LEFT RIGHT ARROW BELOW
o͎	846	034E	 	UPWARDS ARROW BELOW
o͏	847	034F	 	GRAPHEME JOINER
o͐	848	0350	 	RIGHT ARROWHEAD ABOVE
o͑	849	0351	 	LEFT HALF RING ABOVE
o͒	850	0352	 	FERMATA
o͓	851	0353	 	X BELOW
o͔	852	0354	 	LEFT ARROWHEAD BELOW
o͕	853	0355	 	RIGHT ARROWHEAD BELOW
o͖	854	0356	 	RIGHT ARROWHEAD AND UP ARROWHEAD BELOW
o͗	855	0357	 	RIGHT HALF RING ABOVE
o͘	856	0358	 	DOT ABOVE RIGHT
o͙	857	0359	 	ASTERISK BELOW
o͚	858	035A	 	DOUBLE RING BELOW
o͛	859	035B	 	ZIGZAG ABOVE
͜o	860	035C	 	DOUBLE BREVE BELOW
͝o	861	035D	 	DOUBLE BREVE
͞o	862	035E	 	DOUBLE MACRON
͟o	863	035F	 	DOUBLE MACRON BELOW
͠o	864	0360	 	DOUBLE TILDE
͡o	865	0361	 	DOUBLE INVERTED BREVE
͢o	866	0362	 	DOUBLE RIGHTWARDS ARROW BELOW
oͣ	867	0363	 	LATIN SMALL LETTER A
oͤ	868	0364	 	LATIN SMALL LETTER E
oͥ	869	0365	 	LATIN SMALL LETTER I
oͦ	870	0366	 	LATIN SMALL LETTER O
oͧ	871	0367	 	LATIN SMALL LETTER U
oͨ	872	0368	 	LATIN SMALL LETTER C
oͩ	873	0369	 	LATIN SMALL LETTER D
oͪ	874	036A	 	LATIN SMALL LETTER H
oͫ	875	036B	 	LATIN SMALL LETTER M
oͬ	876	036C	 	LATIN SMALL LETTER R
oͭ	877	036D	 	LATIN SMALL LETTER T
oͮ	878	036E	 	LATIN SMALL LETTER V
oͯ	879	036F	 	LATIN SMALL LETTER X

Char	Dec	Hex	Entity	Name
✁	9985	2701	 	UPPER BLADE SCISSORS
✂	9986	2702	 	BLACK SCISSORS
✃	9987	2703	 	LOWER BLADE SCISSORS
✄	9988	2704	 	WHITE SCISSORS
✅	9989	2705	 	WHITE HEAVY CHECK MARK
✆	9990	2706	 	TELEPHONE LOCATION SIGN
✇	9991	2707	 	TAPE DRIVE
✈	9992	2708	 	AIRPLANE
✉	9993	2709	 	ENVELOPE
✊	9994	270A	 	RAISED FIST
✋	9995	270B	 	RAISED HAND
✌	9996	270C	 	VICTORY HAND
✍	9997	270D	 	WRITING HAND
✎	9998	270E	 	LOWER RIGHT PENCIL
✏	9999	270F	 	PENCIL
✐	10000	2710	 	UPPER RIGHT PENCIL
✑	10001	2711	 	WHITE NIB
✒	10002	2712	 	BLACK NIB
✓	10003	2713	 	CHECK MARK
✔	10004	2714	 	HEAVY CHECK MARK
✕	10005	2715	 	MULTIPLICATION X
✖	10006	2716	 	HEAVY MULTIPLICATION X
✗	10007	2717	 	BALLOT X
✘	10008	2718	 	HEAVY BALLOT X
✙	10009	2719	 	OUTLINED GREEK CROSS
✚	10010	271A	 	HEAVY GREEK CROSS
✛	10011	271B	 	OPEN CENTRE CROSS
✜	10012	271C	 	HEAVY OPEN CENTRE CROSS
✝	10013	271D	 	LATIN CROSS
✞	10014	271E	 	SHADOWED WHITE LATIN CROSS
✟	10015	271F	 	OUTLINED LATIN CROSS
✠	10016	2720	 	MALTESE CROSS
✡	10017	2721	 	STAR OF DAVID
✢	10018	2722	 	FOUR TEARDROP-SPOKED ASTERISK
✣	10019	2723	 	FOUR BALLOON-SPOKED ASTERISK
✤	10020	2724	 	HEAVY FOUR BALLOON-SPOKED ASTERISK
✥	10021	2725	 	FOUR CLUB-SPOKED ASTERISK
✦	10022	2726	 	BLACK FOUR POINTED STAR
✧	10023	2727	 	WHITE FOUR POINTED STAR
✨	10024	2728	 	SPARKLES
✩	10025	2729	 	STRESS OUTLINED WHITE STAR
✪	10026	272A	 	CIRCLED WHITE STAR
✫	10027	272B	 	OPEN CENTRE BLACK STAR
✬	10028	272C	 	BLACK CENTRE WHITE STAR
✭	10029	272D	 	OUTLINED BLACK STAR
✮	10030	272E	 	HEAVY OUTLINED BLACK STAR
✯	10031	272F	 	PINWHEEL STAR
✰	10032	2730	 	SHADOWED WHITE STAR
✱	10033	2731	 	HEAVY ASTERISK
✲	10034	2732	 	OPEN CENTRE ASTERISK
✳	10035	2733	 	EIGHT SPOKED ASTERISK
✴	10036	2734	 	EIGHT POINTED BLACK STAR
✵	10037	2735	 	EIGHT POINTED PINWHEEL STAR
✶	10038	2736	 	SIX POINTED BLACK STAR
✷	10039	2737	 	EIGHT POINTED RECTILINEAR BLACK STAR
✸	10040	2738	 	HEAVY EIGHT POINTED RECTILINEAR BLACK STAR
✹	10041	2739	 	TWELVE POINTED BLACK STAR
✺	10042	273A	 	SIXTEEN POINTED ASTERISK
✻	10043	273B	 	TEARDROP-SPOKED ASTERISK
✼	10044	273C	 	OPEN CENTRE TEARDROP-SPOKED ASTERISK
✽	10045	273D	 	HEAVY TEARDROP-SPOKED ASTERISK
✾	10046	273E	 	SIX PETALLED BLACK AND WHITE FLORETTE
✿	10047	273F	 	BLACK FLORETTE
❀	10048	2740	 	WHITE FLORETTE
❁	10049	2741	 	EIGHT PETALLED OUTLINED BLACK FLORETTE
❂	10050	2742	 	CIRCLED OPEN CENTRE EIGHT POINTED STAR
❃	10051	2743	 	HEAVY TEARDROP-SPOKED PINWHEEL ASTERISK
❄	10052	2744	 	SNOWFLAKE
❅	10053	2745	 	TIGHT TRIFOLIATE SNOWFLAKE
❆	10054	2746	 	HEAVY CHEVRON SNOWFLAKE
❇	10055	2747	 	SPARKLE
❈	10056	2748	 	HEAVY SPARKLE
❉	10057	2749	 	BALLOON-SPOKED ASTERISK
❊	10058	274A	 	EIGHT TEARDROP-SPOKED PROPELLER ASTERISK
❋	10059	274B	 	HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK
❌	10060	274C	 	CROSS MARK
❍	10061	274D	 	SHADOWED WHITE CIRCLE
❎	10062	274E	 	NEGATIVE SQUARED CROSS MARK
❏	10063	274F	 	LOWER RIGHT DROP-SHADOWED WHITE SQUARE
❐	10064	2750	 	UPPER RIGHT DROP-SHADOWED WHITE SQUARE
❑	10065	2751	 	LOWER RIGHT SHADOWED WHITE SQUARE
❒	10066	2752	 	UPPER RIGHT SHADOWED WHITE SQUARE
❓	10067	2753	 	BLACK QUESTION MARK ORNAMENT
❔	10068	2754	 	WHITE QUESTION MARK ORNAMENT
❕	10069	2755	 	WHITE EXCLAMATION MARK ORNAMENT
❖	10070	2756	 	BLACK DIAMOND MINUS WHITE X
❗	10071	2757	 	HEAVY EXCLAMATION MARK SYMBOL
❘	10072	2758	 	LIGHT VERTICAL BAR
❙	10073	2759	 	MEDIUM VERTICAL BAR
❚	10074	275A	 	HEAVY VERTICAL BAR
❛	10075	275B	 	HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT
❜	10076	275C	 	HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT
❝	10077	275D	 	HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT
❞	10078	275E	 	HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT
❟	10079	275F	 	HEAVY LOW SINGLE COMMA QUOTATION MARK ORNAMENT
❠	10080	2760	 	HEAVY LOW DOUBLE COMMA QUOTATION MARK ORNAMENT
❡	10081	2761	 	CURVED STEM PARAGRAPH SIGN ORNAMENT
❢	10082	2762	 	HEAVY EXCLAMATION MARK ORNAMENT
❣	10083	2763	 	HEAVY HEART EXCLAMATION MARK ORNAMENT
❤	10084	2764	 	HEAVY BLACK HEART
❥	10085	2765	 	ROTATED HEAVY BLACK HEART BULLET
❦	10086	2766	 	FLORAL HEART
❧	10087	2767	 	ROTATED FLORAL HEART BULLET
❨	10088	2768	 	MEDIUM LEFT PARENTHESIS ORNAMENT
❩	10089	2769	 	MEDIUM RIGHT PARENTHESIS ORNAMENT
❪	10090	276A	 	MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT
❫	10091	276B	 	MEDIUM FLATTENED RIGHT PARENTHESIS ORNAMENT
❬	10092	276C	 	MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT
❭	10093	276D	 	MEDIUM RIGHT-POINTING ANGLE BRACKET ORNAMENT
❮	10094	276E	 	HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT
❯	10095	276F	 	HEAVY RIGHT-POINTING ANGLE QUOTATION MARK ORNAMENT
❰	10096	2770	 	HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT
❱	10097	2771	 	HEAVY RIGHT-POINTING ANGLE BRACKET ORNAMENT
❲	10098	2772	 	LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT
❳	10099	2773	 	LIGHT RIGHT TORTOISE SHELL BRACKET ORNAMENT
❴	10100	2774	 	MEDIUM LEFT CURLY BRACKET ORNAMENT
❵	10101	2775	 	MEDIUM RIGHT CURLY BRACKET ORNAMENT
❶	10102	2776	 	DINGBAT NEGATIVE CIRCLED DIGIT ONE
❷	10103	2777	 	DINGBAT NEGATIVE CIRCLED DIGIT TWO
❸	10104	2778	 	DINGBAT NEGATIVE CIRCLED DIGIT THREE
❹	10105	2779	 	DINGBAT NEGATIVE CIRCLED DIGIT FOUR
❺	10106	277A	 	DINGBAT NEGATIVE CIRCLED DIGIT FIVE
❻	10107	277B	 	DINGBAT NEGATIVE CIRCLED DIGIT SIX
❼	10108	277C	 	DINGBAT NEGATIVE CIRCLED DIGIT SEVEN
❽	10109	277D	 	DINGBAT NEGATIVE CIRCLED DIGIT EIGHT
❾	10110	277E	 	DINGBAT NEGATIVE CIRCLED DIGIT NINE
❿	10111	277F	 	DINGBAT NEGATIVE CIRCLED NUMBER TEN
➀	10112	2780	 	DINGBAT CIRCLED SANS-SERIF DIGIT ONE
➁	10113	2781	 	DINGBAT CIRCLED SANS-SERIF DIGIT TWO
➂	10114	2782	 	DINGBAT CIRCLED SANS-SERIF DIGIT THREE
➃	10115	2783	 	DINGBAT CIRCLED SANS-SERIF DIGIT FOUR
➄	10116	2784	 	DINGBAT CIRCLED SANS-SERIF DIGIT FIVE
➅	10117	2785	 	DINGBAT CIRCLED SANS-SERIF DIGIT SIX
➆	10118	2786	 	DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN
➇	10119	2787	 	DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT
➈	10120	2788	 	DINGBAT CIRCLED SANS-SERIF DIGIT NINE
➉	10121	2789	 	DINGBAT CIRCLED SANS-SERIF NUMBER TEN
➊	10122	278A	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE
➋	10123	278B	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO
➌	10124	278C	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE
➍	10125	278D	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR
➎	10126	278E	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE
➏	10127	278F	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX
➐	10128	2790	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN
➑	10129	2791	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT
➒	10130	2792	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE
➓	10131	2793	 	DINGBAT NEGATIVE CIRCLED SANS-SERIF NUMBER TEN
➔	10132	2794	 	HEAVY WIDE-HEADED RIGHTWARDS ARROW
➕	10133	2795	 	HEAVY PLUS SIGN
➖	10134	2796	 	HEAVY MINUS SIGN
➗	10135	2797	 	HEAVY DIVISION SIGN
➘	10136	2798	 	HEAVY SOUTH EAST ARROW
➙	10137	2799	 	HEAVY RIGHTWARDS ARROW
➚	10138	279A	 	HEAVY NORTH EAST ARROW
➛	10139	279B	 	DRAFTING POINT RIGHTWARDS ARROW
➜	10140	279C	 	HEAVY ROUND-TIPPED RIGHTWARDS ARROW
➝	10141	279D	 	TRIANGLE-HEADED RIGHTWARDS ARROW
➞	10142	279E	 	HEAVY TRIANGLE-HEADED RIGHTWARDS ARROW
➟	10143	279F	 	DASHED TRIANGLE-HEADED RIGHTWARDS ARROW
➠	10144	27A0	 	HEAVY DASHED TRIANGLE-HEADED RIGHTWARDS ARROW
➡	10145	27A1	 	BLACK RIGHTWARDS ARROW
➢	10146	27A2	 	THREE-D TOP-LIGHTED RIGHTWARDS ARROWHEAD
➣	10147	27A3	 	THREE-D BOTTOM-LIGHTED RIGHTWARDS ARROWHEAD
➤	10148	27A4	 	BLACK RIGHTWARDS ARROWHEAD
➥	10149	27A5	 	HEAVY BLACK CURVED DOWNWARDS AND RIGHTWARDS ARROW
➦	10150	27A6	 	HEAVY BLACK CURVED UPWARDS AND RIGHTWARDS ARROW
➧	10151	27A7	 	SQUAT BLACK RIGHTWARDS ARROW
➨	10152	27A8	 	HEAVY CONCAVE-POINTED BLACK RIGHTWARDS ARROW
➩	10153	27A9	 	RIGHT-SHADED WHITE RIGHTWARDS ARROW
➪	10154	27AA	 	LEFT-SHADED WHITE RIGHTWARDS ARROW
➫	10155	27AB	 	BACK-TILTED SHADOWED WHITE RIGHTWARDS ARROW
➬	10156	27AC	 	FRONT-TILTED SHADOWED WHITE RIGHTWARDS ARROW
➭	10157	27AD	 	HEAVY LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW
➮	10158	27AE	 	HEAVY UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW
➯	10159	27AF	 	NOTCHED LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW
➰	10160	27B0	 	CURLY LOOP
➱	10161	27B1	 	NOTCHED UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW
➲	10162	27B2	 	CIRCLED HEAVY WHITE RIGHTWARDS ARROW
➳	10163	27B3	 	WHITE-FEATHERED RIGHTWARDS ARROW
➴	10164	27B4	 	BLACK-FEATHERED SOUTH EAST ARROW
➵	10165	27B5	 	BLACK-FEATHERED RIGHTWARDS ARROW
➶	10166	27B6	 	BLACK-FEATHERED NORTH EAST ARROW
➷	10167	27B7	 	HEAVY BLACK-FEATHERED SOUTH EAST ARROW
➸	10168	27B8	 	HEAVY BLACK-FEATHERED RIGHTWARDS ARROW
➹	10169	27B9	 	HEAVY BLACK-FEATHERED NORTH EAST ARROW
➺	10170	27BA	 	TEARDROP-BARBED RIGHTWARDS ARROW
➻	10171	27BB	 	HEAVY TEARDROP-SHANKED RIGHTWARDS ARROW
➼	10172	27BC	 	WEDGE-TAILED RIGHTWARDS ARROW
➽	10173	27BD	 	HEAVY WEDGE-TAILED RIGHTWARDS ARROW
➾	10174	27BE	 	OPEN-OUTLINED RIGHTWARDS ARROW
➿	10175	27BF	 	DOUBLE CURLY LOOP
https://www.w3schools.com/charsets/ref_html_entities_4.asp
https://www.w3schools.com/charsets/ref_utf_math.asp


-->



<!--
(to add to https://github.com/sahwar/Bulogos/BLSG )

Useful HTML entities for manual HTML5 text formating:
Полезни HTML entities за ръчно форматиране на HTML5:

​	ZeroWidthSpace	0200B	8203
‍	zwj	0200D	8205
‌	zwnj	0200C	8204
 	nbsp	000A0	160
–	ndash	02013	8211
	NewLine	0000A	10
⁠	NoBreak	02060	8288
 	NonBreakingSpace	000A0	160
 	numsp	02007	8199

℃	8451	2103	 	DEGREE CELSIUS
℉	8457	2109	 	DEGREE FAHRENHEIT
℡	8481	2121	 	TELEPHONE SIGN
⅏	8527	214F	 	SYMBOL FOR SAMARITAN SOURCE

•	&bull;	&#8226;	&#x2022;	bullet = black small circle
…	&hellip;	&#8230;	&#x2026;	horizontal ellipsis = three dot leader
′	&prime;	&#8242;	&#x2032;	prime = minutes = feet
″	&Prime;	&#8243;	&#x2033;	double prime = seconds = inches
‾	&oline;	&#8254;	&#x203E;	overline = spacing overscore
⁄	&frasl;	&#8260;	&#x2044;	fraction slash

™	&trade;	&#8482;	&#x2122;	trade mark sign
↵	&crarr;	&#8629;	&#x21B5;	downwards arrow with corner leftwards = carriage return
−	&minus;	&#8722;	&#x2212;	minus sign
∗	&lowast;	&#8727;	&#x2217;	asterisk operator
√	&radic;	&#8730;	&#x221A;	square root = radical sign
∞	&infin;	&#8734;	&#x221E;	infinity
∠	&ang;	&#8736;	&#x2220;	angle
∧	&and;	&#8743;	&#x2227;	logical and = wedge
∨	&or;	&#8744;	&#x2228;	logical or = vee
∩	&cap;	&#8745;	&#x2229;	intersection = cap
∪	&cup;	&#8746;	&#x222A;	union = cup
∼	&sim;	&#8764;	&#x223C;	tilde operator = varies with = similar to
≈	&asymp;	&#8776;	&#x2248;	almost equal to = asymptotic to
≡	&equiv;	&#8801;	&#x2261;	identical to
⋅	&sdot;	&#8901;	&#x22C5;	dot operator
⁣	8291	2063	 	INVISIBLE SEPARATOR
 	8287	205F	 	MEDIUM MATHEMATICAL SPACE
⁠	8288	2060	 	WORD JOINER
⁀	8256	2040	 	CHARACTER TIE
•	8226	2022	&bull;	BULLET
‣	8227	2023	 	TRIANGULAR BULLET
․	8228	2024	 	ONE DOT LEADER
‥	8229	2025	 	TWO DOT LEADER
…	8230	2026	&hellip;	HORIZONTAL ELLIPSIS
‧	8231	2027	 	HYPHENATION POINT
 	8232	2028	 	LINE SEPARATOR
 	8233	2029	 	PARAGRAPH SEPARATOR
‪	8234	202A	 	LEFT-TO-RIGHT EMBEDDING
‫	8235	202B	 	RIGHT-TO-LEFT EMBEDDING
‬	8236	202C	 	POP DIRECTIONAL FORMATTING
‭	8237	202D	 	LEFT-TO-RIGHT OVERRIDE
‮	8238	202E	 	RIGHT-TO-LEFT OVERRIDE
 	8239	202F	 	NARROW NON-BREAK SPACE
‰	8240	2030	&permil;	PER MILLE SIGN
‱	8241	2031	 	PER TEN THOUSAND SIGN

‘	8216	2018	&lsquo;	LEFT SINGLE QUOTATION MARK
’	8217	2019	&rsquo;	RIGHT SINGLE QUOTATION MARK
‚	8218	201A	&sbquo;	SINGLE LOW-9 QUOTATION MARK
‛	8219	201B	 	SINGLE HIGH-REVERSED-9 QUOTATION MARK
“	8220	201C	&ldquo;	LEFT DOUBLE QUOTATION MARK
”	8221	201D	&rdquo;	RIGHT DOUBLE QUOTATION MARK
„	8222	201E	&bdquo;	DOUBLE LOW-9 QUOTATION MARK
‟	8223	201F	 	DOUBLE HIGH-REVERSED-9 QUOTATION MARK

 	8192	2000	 	EN QUAD
 	8193	2001	 	EM QUAD
 	8194	2002	&ensp;	EN SPACE
 	8195	2003	&emsp;	EM SPACE
 	8196	2004	 	THREE-PER-EM SPACE
 	8197	2005	 	FOUR-PER-EM SPACE
 	8198	2006	 	SIX-PER-EM SPACE
 	8199	2007	 	FIGURE SPACE
 	8200	2008	 	PUNCTUATION SPACE
 	8201	2009	&thinsp;	THIN SPACE
 	8202	200A	 	HAIR SPACE
​	8203	200B	 	ZERO WIDTH SPACE
‌	8204	200C	&zwnj;	ZERO WIDTH NON-JOINER
‍	8205	200D	&zwj;	ZERO WIDTH JOINER
‎	8206	200E	&lrm;	LEFT-TO-RIGHT MARK
‏	8207	200F	&rlm;	RIGHT-TO-LEFT MARK
‐	8208	2010	 	HYPHEN
‑	8209	2011	 	NON-BREAKING HYPHEN
‒	8210	2012	 	FIGURE DASH
–	8211	2013	&ndash;	EN DASH
—	8212	2014	&mdash;	EM DASH
―	8213	2015	 	HORIZONTAL BAR

https://www.w3schools.com/charsets/ref_utf_punctuation.asp
https://www.w3schools.com/html/html_entities.asp
https://www.w3schools.com/tags/tag_wbr.asp = A text with word break opportunities (HTML5-only):
`<p>
To learn AJAX, you must be familiar with the XML<wbr>Http<wbr>Request Object.
</p>`
Definition and Usage
The <wbr> (Word Break Opportunity) tag specifies where in a text it would be ok to add a line-break.
Tip: When a word is too long, or you are afraid that the browser will break your lines at the wrong place, you can use the <wbr> element to add word break opportunities.

-->

<!--

(to add to https://github.com/sahwar/Bulogos/BLSG )

Useful HTML entities for manual HTML5 text formating:
Полезни HTML entities за ръчно форматиране на HTML5:

https://www.w3schools.com/tags/ref_pxtoemconversion.asp
https://www.w3schools.com/tags/ref_urlencode.asp
https://www.w3schools.com/tags/ref_language_codes.asp
https://www.w3schools.com/tags/ref_country_codes.asp
https://www.w3schools.com/charsets/
`<meta charset="UTF-8">` (HTML 4.01)
`<meta charset="UTF-8">` (recommended) or `<meta charset="UTF-16">` (HTML5)
https://www.w3schools.com/charsets/ref_html_utf8.asp
https://www.w3schools.com/charsets/ref_utf_modifiers.asp
https://www.w3schools.com/charsets/ref_utf_punctuation.asp
https://www.w3schools.com/charsets/ref_emoji.asp
https://www.w3schools.com/charsets/ref_utf_diacritical.asp
https://www.w3schools.com/html/html_symbols.asp
https://www.w3schools.com/charsets/ref_utf_math.asp
https://www.w3schools.com/charsets/ref_utf_cyrillic.asp
-->

## За писане на математическа нотация (математически формули и т.н.)

Използвайте (онлайн инструменти или свободно офлайн програми за лесно търсене, избиране и копиране/вмъкване на) 
TeX/LaTeX2svg / TeX/LaTeX2png и/или MathJax & MathML & HTML5 entities for maths symbols...
https://www.w3schools.com/charsets/ref_utf_math.asp

<!--
https://www.w3schools.com/tags/ref_httpmessages.asp
505 HTTP Version Not Supported	The server does not support the HTTP protocol version used in the request
511 Network Authentication Required	The client needs to authenticate to gain network access

https://www.w3schools.com/tags/ref_httpmethods.asp
Encoding type	application/x-www-form-urlencoded	application/x-www-form-urlencoded or multipart/form-data. Use multipart encoding for binary data
History	Parameters remain in browser history	Parameters are not saved in browser history
Restrictions on data length	Yes, when sending data, the GET method adds the data to the URL; and the length of a URL is limited (maximum URL length is 2048 characters)	No restrictions
Restrictions on data type	Only ASCII characters allowed	No restrictions. Binary data is also allowed

'DO NOT BE EVIL HTML MESSAGES:
402 Payment Required	Reserved for future use
https://www.w3schools.com/tags/ref_httpmessages.asp

The Unicode Standard covers (almost) all the characters, punctuations, and symbols in the world.

All HTML5 and XML processors support UTF-8, UTF-16, Windows-1252, and ISO-8859.

For a closer look, please study: [The Complete Unicode Reference](https://www.w3schools.com/charsets/ref_html_utf8.asp).
HTML 4 supports UTF-8. HTML 5 supports both UTF-8 and UTF-16!
Unicode enables processing, storage, and transport of text independent of platform and language.

The default character encoding in HTML-5 is UTF-8.

If an HTML5 web page uses a different character set than UTF-8, it should be specified in the <meta> tag like:
The Difference Between Unicode and UTF-8
Unicode is a character set. UTF-8 is encoding.

Unicode is a list of characters with unique decimal numbers (code points). A = 65, B = 66, C = 67, ....

This list of decimal numbers represent the string "hello": 104 101 108 108 111

Encoding is how these numbers are translated into binary numbers to be stored in a computer:

UTF-8 encoding will store "hello" like this (binary): 01101000 01100101 01101100 01101100  01101111

Encoding translates numbers into binary. Character sets translates characters to numbers.

-->
