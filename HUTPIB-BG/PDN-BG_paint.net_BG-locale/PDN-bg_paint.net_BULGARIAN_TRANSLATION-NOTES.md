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

За съжаление, не можах да \[намеря откъде да\] изтегля този файл, че да го тествам с по-стара версия
на paint.net или с версиите v4+ на paint.net... Затова и правя този нов превод на български език,
като от уважение към предишния преводач, ще включа и неговото име ( `nikolaijelev <?@?.com>` ) в списъка с българските преводачи
на paint.net.

`
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
`

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
* * selection = *селекция*, избрана област \[от изображението/картинката/картината\], маркирана област
* * deselect = „деселектирам“ (сравни с: деинсталирам = uninstall), *отмяна на селекцията*, отмяна на избраното / отмяна на избраната област, размаркирам, размаркирам избраното/избраната област/селекцията ...
* * deselect all = размаркиране на всички (7-ZIP)
* * invert selection = обръщане на избора (7-ZIP), обръщане на селекцията, обърни селекцията (IvoSoft ClassicShell)
* * undo = отмяна, отменяне; отменяне, отмяна; отмени (MS Windows 7)
* * redo = връщане, възстановяване
* * crop = *подрязвам*, {НЕ отрязвам, cut = отрязвам (в буферната/системната памет - clipboard} (сравни с: `cut (от 4-те класики: cut, copy, paste, delete) = изрязвам`)
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
* Distort = 
* Noise = Визуален шум
* Photo = Фото(графия)/Фотоси
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

* bookmark = отметка, добяване в „Любими“ (Фаворити), показалец
* cursor = курсор, показалец, (посочващ маркер)
* login = вход, влизане \[от системата на даден уебсайт\]
* logoff = изход, излизане \[от системата на даден уебсайт\]
* visual style / visual theme / app skin = визуален стил, _визуална тема_, тема, графична тема, „кожа“ на програмата (приложния софтуер)...
* PC = персонален компютър (ПК), личен компютър
* computer = компютър, ЕИМ (електронно изчислителна машина), ЕИУ (електронно изчислително устройство); 2. (през 20. век) човек-изчислител, използван за пресмятане и работещ като чиновник или технически сътрудник при ранните компютри, които били много големи откъм/като размери на машината (правителството на САЩ разработило компютрите с военно-разузнавателни цели, с цел разбиване на чуждестранни военни и дипломатически тайнописни шиф(ъ)ри, и с цел улесняване на изчисленията на статистически данни, като например демографското преброяване на населението на САЩ).
* ...

======



======
[aria2/Aria2c](https://aria2.sourceforge.io/)[webui-aria2](https://github.com/ziahamza/webui-aria2)
======
Формат с изображения с тагове (TIFF)
 .tif и .tiff
Портативни мрежови графики (PNG)
 .png
Формат за обмен на графика (GIF)
 .gif
Растерна графика
 .bmp и .dib
======

класицизъм
Просвещението, романтизма, и отиде всичко по дяволите след 2010-те... ???
======
---

чорбаджии и сиромаси --- богати и бедни
ратаи
баце, бате...


---

„сори, ама бати стана тати...“ -Криско :DDD

---

flaps, levers, handles, GUI controls (GUI widgets), buttons...

---


convention, norm, consensus reality

---

======

502 Bad Gateway
nginx/1.2.1
Apache, nginx, lighttpd, h18np-http-webserver?
http://nikolaijelev.data.bg/p/files/Paint.Net_BG_%20Lang%20file

https://www.docker.com/products/docker-desktop
Относно бисквитките на този сайт

„Бисквитките“ са важни за правилното функциониране на сайта. За да подобрим вашето преживяване, ние използваме „бисквитки“, за да запомним данните ви за влизане и да осигурим сигурно влизане, събираме статистически данни, за да оптимизираме функционалността на сайта и да предоставяме съобразено с вашите интереси съдържание. Щракнете върху Съгласен съм и продължавам, за да приемете „бисквитките“ и да преминете директно към сайта, или щракнете върху Преглед на настройките на „бисквитките“, за да видите подробни описания на видовете „бисквитки“ и да изберете дали да приемете определени „бисквитки“, докато сте в сайта.
 Приемане и продължаване
Преглед на настройки за бисквитки »


Политика за поверителност
Поддържано от: Company logo for TrustArc

---
https://id.docker.com/login/?next=%2Fid%2Foauth%2Fauthorize%2F%3Fclient_id%3D43f17c5f-9ba4-4f13-853d-9d0074e349a7%26next%3D%252F%253Foverlay%253Donboarding%26nonce%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI0M2YxN2M1Zi05YmE0LTRmMTMtODUzZC05ZDAwNzRlMzQ5YTciLCJleHAiOjE1NzUzODYzODIsImlhdCI6MTU3NTM4NjA4MiwicmZwIjoielYzdHUzMGJGYUVldmw4ZTd5OTJxUT09IiwidGFyZ2V0X2xpbmtfdXJpIjoiLz9vdmVybGF5PW9uYm9hcmRpbmcifQ.z7fpWvDIos3CIN78qyZlkVq-Mil35UaTlRrN3I6tQYk%26redirect_uri%3Dhttps%253A%252F%252Fhub.docker.com%252Fsso%252Fcallback%26ref%3Dlogin%26response_type%3Dcode%26scope%3Dopenid%26state%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI0M2YxN2M1Zi05YmE0LTRmMTMtODUzZC05ZDAwNzRlMzQ5YTciLCJleHAiOjE1NzUzODYzODIsImlhdCI6MTU3NTM4NjA4MiwicmZwIjoielYzdHUzMGJGYUVldmw4ZTd5OTJxUT09IiwidGFyZ2V0X2xpbmtfdXJpIjoiLz9vdmVybGF5PW9uYm9hcmRpbmcifQ.z7fpWvDIos3CIN78qyZlkVq-Mil35UaTlRrN3I6tQYk
---


======

>>> ' The display names of Chinese cultures have changed to follow the naming convention LanguageName ([Script,] Country/RegionName). In the .NET Framework 4, the word "Legacy" has been appended to the zh-CHS and zh-CHT display names to differentiate them from zh-Hans and zh-Hant. zh, which was recently introduced into Windows, has "Chinese" as its display name.

Microsoft .NET: the naming convention `LanguageName ([Script,] Country/RegionName)` + ve4ernik@gmail.com's email to bmanolov/BGlocalize... '

======

https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/dd997383(v=vs.100)?redirectedfrom=MSDN
https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/8k5611at(v=vs.100)

glyph (a specific instance of a single linguistic written character) -> aloglyph/alloglyph -> grapheme ~ letter / ideogram / logogram

substring search, fulltext searching & fulltext indexing, ElasticSearch, ...

======
https://docs.microsoft.com/bg-bg/samples/azure-samples/cognitive-speech-tts/microsoft-speech-service-api-text-to-speech-samples/

https://docs.microsoft.com/bg-bg/samples/microsoft/rockpaperscissorslizardspock/azure-rock-paper-scissors/

https://visualstudio.microsoft.com/vs/

======
Page last modified on November 21, 2019 at 9:13 PM PST by chore(kubectl): Formatting markdown (#17697) (Page History)

======

KaliLinux
Ubuntu/Linux Mint*, Debian/Devuan*, HypriotOS
CentOS, RHEL (RedHat Enterprise Linux), Fedora Linux
ArchLinux

---

---

Top languages: Tcl/Tk (programming language), Shell, Python, C, Ruby

fair-use.org

---
curl-7.66.0_2-win64-mingw
---

---

https://godoc.org/
https://godoc.org/-/about

---
https://docs.microsoft.com/bg-bg/samples/microsoft/rockpaperscissorslizardspock/azure-rock-paper-scissors/deploy/powershell/readme#Generate-Config
https://github.com/Microsoft/Windows-universal-samples/archive/master.zip
https://docs.microsoft.com/en-us/dotnet/api/system.reflection.module.getpekind?redirectedfrom=MSDN&view=netframework-4.8#System_Reflection_Module_GetPEKind_System_Reflection_PortableExecutableKinds__System_Reflection_ImageFileMachine__


---
https://github.com/helm/helm
---
social interactionism; symbolic interactionism
---
## Community, discussion, contribution, and support

You can reach the Helm community and developers via the following channels:

*   [Kubernetes Slack](https://kubernetes.slack.com):
    *   [#helm\-users](https://kubernetes.slack.com/messages/helm-users)
    *   [#helm\-dev](https://kubernetes.slack.com/messages/helm-dev)
    *   [#charts](https://kubernetes.slack.com/messages/charts)
*   Mailing List:
    *   [Helm Mailing List](https://lists.cncf.io/g/cncf-helm)
*   Developer Call: Thursdays at 9:30\-10:00 Pacific. [https://zoom.us/j/696660622](https://zoom.us/j/696660622)
---

---
From:   "Mike McHenry" 
Subject: Rsync 2.3.1 WinNT binaries and instructions available
Date:   Fri, 15 Oct 1999 02:53:30 +1000
======

bash 4.1+, zsh; uxterm, GNOME-terminal

======

'The [peculiar minimalistic & abbreviational nature of the modern] English language has become part of the (G)UI & UX... thus causing trouble for translators of CLI apps & computer software...' ~github.com/sahwar/

======

https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms230117(v=vs.100)
https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/8477k21c(v=vs.100)

Side-by-Side Execution
    02/04/2013
    4 minutes to read

Side-by-side execution is the ability to run multiple versions of an application or component on the same computer. You can have multiple versions of the common language runtime, and multiple versions of applications and components that use a version of the runtime, on the same computer at the same time.

https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/x3de234a%28v%3dvs.100%29
https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/z5e12zb4(v=vs.100)

https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms164699%28v%3dvs.100%29https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms241064%28v%3dvs.100%29

https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms754130(v=vs.100)Sub-pixel Rendering and Layout Rounding ~~~ paint.net 

https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms745058%28v%3dvs.100%29

https://docs.microsoft.com/bg-bg/samples/browse/?redirectedfrom=MSDN-samples

https://docs.microsoft.com/bg-bg/samples/microsoft/windows-universal-samples/resizeappview/

https://docs.microsoft.com/en-us/Samples/FullScreenMode


Български
    Документи на предишни версии Блог Сътрудничество Поверителност & Бисквитки Условия на използване Обратна връзка за сайт Търговски марки 
Обучение за Azure с избрано от вас темпо
Microsoft Speech Service API: Text-to-Speech Samples

======

mitigated the issue/problem...
======
WONTFIX
NOTABUGBUTAFEATUREHAHAHA
======
