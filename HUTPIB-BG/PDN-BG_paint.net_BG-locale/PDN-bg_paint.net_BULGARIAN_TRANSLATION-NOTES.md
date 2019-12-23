# PDN-bg_paint.net_BULGARIAN_TRANSLATION-NOTES.md
# THIS WEBPAGE IS UNDER CONTRUCTION... / ТАЗИ УЕБСТРАНИЦА Е В ПРОЦЕС НА РАЗРАБОТКА...

## БЕЛЕЖКИ ПО ПРЕВОДА НА paint.net (преди: Paint.NET), НАПРАВЕН ОТ ve4ernik

При превода на софтуер на български език се налага да се направят някои предварителни
уточнения, които разкриват допусканията и решенията на преводача за стила на превод
и най-вече за избора на конкретен превод на някои специализирани технически термини.
Тук аз, @sahwar (`ve4ernik@gmail.com , https://github.com/sahwar`) изброявам тези решения
по отношение на превода си на програмата редактор на изображения paint.net (преди известна
като Paint.NET).

1. Същестувал е български превод на по-стара версия (`Bulgarian user interface (v2.72/v3.XX)`) на paint.net, което е споменато тук:
* https://forums.getpaint.net/topic/1851-bulgarian-localization/ .
* Преводът е от `nikolaijelev`: https://forums.getpaint.net/profile/45756-nikolaijelev/ :
https://forums.getpaint.net/applications/core/interface/file/attachment.php?id=3881 (преименувайте файла на
`Bg.Lang.file.v3.5.3.rar` при запис, после го разархивирайте и сложете в съответната папка в инсталационната
директория (папка) на paint.net).
https://forums.getpaint.net/applications/core/interface/file/attachment.php?id=7804
https://forums.getpaint.net/topic/1851-bulgarian-localization/?tab=comments#comment-11955

За съжаление, не можах да \[намеря откъде да \] изтегля този файл, че да го тествам с по-стара версия
на paint.net или с версиите v4+ на paint.net... Затова и правя този нов превод на български език,
като от уважение към предишния преводач, ще включа и неговото име ( `nikolaijelev <?@?.com>` ) в списъка с българските преводачи
на paint.net.

````
https://forums.getpaint.net/topic/1851-bulgarian-localization/
https://forums.getpaint.net/profile/45756-nikolaijelev/
http://nikolaijelev.data.bg/p/files/Paint.Net_BG_%20Lang%20file

Profile Information
Birthday: 01/01/1970
Location: Bulgaria/Kazanlak

**[nikolaijelev](http://nikolaijelev.data.bg/) » [Файлове »](http://nikolaijelev.data.bg/p/files) [Paint.Net\_BG\_ Lang file](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file)**
|  **име на файла** | **дата** | **размер** | **сваляния** |
| [едно ниво нагоре](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/../) |
| [.NET Framework 2.0](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/.NET Framework 2.0) |
| [MSPAINT](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/MSPAINT) |
| [Paint.Net\_3](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_3) |
| [Paint.Net\_USB\_BG\_v 2.72](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 2.72) |
| [Paint.Net\_USB\_BG\_v 3.0](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 3.0) |
| [Paint.Net\_USB\_BG\_v 3.01](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 3.01) |
| [Paint.Net\_USB\_BG\_v 3.05](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 3.05) |
| [Paint.Net\_USB\_BG\_v 3.07](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 3.07) |
| [Paint.Net\_USB\_BG\_v 3.20](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 3.20) |
| [Paint.Net\_USB\_BG\_v 3.30](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_USB_BG_v 3.30) |
| [Paint.Net\_v3.5.4](http://nikolaijelev.data.bg/p/files/Paint.Net_BG_ Lang file/Paint.Net_v3.5.4) |
````

2. На 11 април 2019 г. официално писах в уеб-форума на paint.net, че изявявам желание да преведа
програмата на български език. Прекрасно съвпадение е, че основният програмист точно беше пуснал
възможността да се кандидатства за преводачи, които да преведат програмата чрез удобния интерфейс
на специализираната онлайн платформа за преводи на софтуер http://crowdin.net.
https://forums.getpaint.net/topic/27847-official-translations-for-40-via-crowdinnet/
https://forums.getpaint.net/topic/27847-official-translations-for-40-via-crowdinnet/?do=findComment&comment=556868
3. Прочетох и старото официално упътване как да се преведе paint.net:
https://www.getpaint.net/files/loc/2.6/TranslationPack.txt
Наред с това прочетох и по-новото упътване за преводачите:
https://www.getpaint.net/doc/latest/Translations.html
4. Изтеглих програмата `resgen.exe`, с която се генерира крайният файл след като се направи файла с превода, за да се тества „на живо“ как работи програмата с новия български превод.
5. При превода ( https://crowdin.com/profile/sahwar ) направих следните решения по отношение на стила на превода:
* Вместо тюрлюгювеч стила на българския превод на MS Windows 7, който е смес от
неформален заповеден (императивен, повелителен) стил (2 л. ед. ч. на глаголите), формален заповеден
(императивен, повелителен) стил (2 л. ед. ч.) и препоръчвания от BGlocalize именно-описателен стил 
(с отглаголни съществителни имена, завършващи на „-не“, „-ние“ и т.н. и скъсяване на глаголи до съществителни:
„записвам“ -> „запис“), почти изцяло използвах само препоръчвания от BGlocalize стил на превод, като направих само
няколко компромиса в някои случаи, които обясних по-надолу.
* Посъветвах се при правенето на българския превод с `BGlocalize`, `речника на Антон Зиновиев` (http://lml.bas.bg/~anton/linux/rechnik.htm), `stelf/bg2en4comp`, slovored.com, eurodict.com, както и с вече наличните българоезични преводи на GIMP2 (v..), XnView (v..), nomacs_x64 (v..), Krita (v..), Notepad++ (v..), Mozilla Firefox (v...), Google Chrome/Chromium/Avast Browser, LibreOffice (v...), Audacity, Skype, PidginIM, Megadict-BG, AEnglish Dictionary (AEDict.exe), както и от официалния превод на `explorer.exe`,
`notepad.exe`, `wordpad.exe`, `paint.exe` (MS Paint for Windows7, НЕ MS Paint for MS Windows 98/XP!!!).
* Вместо да обърквам българоезичните потребители като ги карам да наизустяват нови hotkeys, сложени на кирилски букви
от `Alt`-ускорителите, просто оставих използването на `Alt`-ускорителите както са на английски, чрез включването им в скоби след българския превод. :P
* „One thing though: You translated NearestNeighboor, but didn't translate Super Sampling or Sampling“ (???)

### Алтернативни варианти за превод на някои елементи от текстовите менюта на ГПИ
* Някои твърде технически термини оставих непреведени на английски или ги преведох описателно (с включване в скоби на оригиналния текст на английски език).
* Спорен беше преводът на думите `clipboard`, `select, select all, selection, deselect` и `crop`. Избрах да ги преведа по следния начин:
* * select = *селектирам*, селектиране, избирам, маркирам 
* * select all = *избиране на всичко*, избери всички, селектиране на всичко, селекция на всичко, маркиране на всички (7-ZIP)
* * selection = *селекция*, избрана област \[ от изображението/картинката/картината \], маркирана област
* * deselect = „деселектирам“ (сравни с: деинсталирам = uninstall), *отмяна на селекцията*, отмяна на избраното / отмяна на избраната област, размаркирам, размаркирам избраното/избраната област/селекцията ...
* * deselect all = размаркиране на всички (7-ZIP)
* * invert selection = обръщане на избора (7-ZIP), обръщане на селекцията, обърни селекцията (IvoSoft ClassicShell)
* * undo = отмяна, отменяне; отменяне, отмяна; отмени (MS Windows 7)
* * redo = връщане, възстановяване
* * crop = *подрязвам*, {НЕ отрязвам, сравни с cut = отрязвам (в буферната/системната памет - clipboard} (сравни с: `cut (от 4-те класики: cut, copy, paste, delete) = изрязвам`)
* * bold = , italic/italics = , underline/underlining = , strike/strikethrough, blink = , marquee = 
* * refresh = опресняване, обнови (MS Windows 7)
* color picker = цветова пипетка (капкомер (за отброяване на капките), взимане на цвят)
* grid = мрежа, решетка; решетъчна мрежа, мрежеста решетка
* eraser = гумичка за изтриване
* paint bucket = кофа с боя (за запълване/заливане)
* gradient = цветова преливка
* pattern = шарка, десѐн (десЕн), „патърн(и)“, (взаимо)зависимост
* clone stamp = 
* shapes = геометрични фигури и форми
* zoom in = Приближаване (увеличаване на мащаба)
* zoom out = Отдалечеване/Намаляване (намаляване на мащаба)
* zoom to window = мащабиране до [размерите на] прозореца
* zoom to selection = мащабиране до [размерите на] селекцията / избраната/маркираната област
* actual size = реален размер (100%)
* Auto-adjust(ment) = Автоматично наглася(ва)не на нивата
* Artistic = Художествени/артистични
* Blur = Замъглявания
* Distort = Изкривяване (речник: DISTORT \[dis'tɔ:t\] 1. изопачавам, извращавам; 2. извъртам, изкривявам, разкривявам)
* Noise = Визуален шум
* Photo = Фотографски, Фото(графия)/Фотоси
* Render = Рендиране/Графично изчертаване
* Stylize = Стилизиране
* More >> = Още >>, Повече >>
* << Less = << По-малко
* Replace = Заменяне/Замяна ; "заменка"
* Add (union) = Добавяне (съюз/логическо съдружие/съюзяване)
* Exclude = [недопускащо] Изключване; Изхвърляне --- "EXCLUDE [iks'klu:d] v изключвам (from), не допускам, отхвърлям, изключвам; excluding с изключение на, като изключим/се изключи"
* Intersect = Пресичане, съвпадане
* Invert ("xor") = Обръщане ("XOR")
* Flip horizontal = Хоризонтално (водоравно, равнинно/отвесно?) [огледално] обръщане
* Flip vertical = Вертикално (, отвесно?) [огледално] обръщане
* Rotate = Завъртане
* path (Search Everything, `explorer.exe`) = местоположение, път (до файла) (може да включва и името (наименованието) на файла плюс файловото му разширение (файлов тип, тип на файла), ако е пълен път), пътека; местонаходжение
* index = азбучен показалец на термините/специализираните понятия (... понятиен апарат...)
* < Previous = назад, < Назад
* Next > = напред, Напред >
* Hide = скриване, скрий
* Close (GUI) = затваряне, Затваряне, затвори, Затвори
* 
* LIP (Language Interface Pack)
* MUI (Multi-User Interface / Multilingual User Interface...)
* INS (Ins / Insert) = ВМК (вмъкване) {в интерфейса на програми текстови редактори}
* OVR (Overwrite) = припокриващо се изтриващо вече написаното въвеждане на текст {в интерфейса на програми текстови редактори}
* bookmark = отметка, добяване в „Любими“ (Фаворити), показалец
* cursor = курсор, показалец, (посочващ маркер)
* login = вход, влизане \[от системата на даден уебсайт\]
* logoff = изход, излизане \[от системата на даден уебсайт\]
* visual style / visual theme / app skin = визуален стил, _визуална тема_, тема, графична тема, „кожа“ на програмата (приложния софтуер)...
* PC = персонален компютър (ПК), личен компютър
* computer = компютър, ЕИМ (електронно изчислителна машина), ЕИУ (електронно изчислително устройство); 2. (през 20. век) човек-изчислител, използван за пресмятане и работещ като чиновник или технически сътрудник при ранните компютри, които били много големи откъм/като размери на машината (правителството на САЩ разработило компютрите с военно-разузнавателни цели, с цел разбиване на чуждестранни военни и дипломатически тайнописни шиф(ъ)ри, и с цел улесняване на изчисленията на статистически данни, като например демографското преброяване на населението на САЩ).
* ...

======

