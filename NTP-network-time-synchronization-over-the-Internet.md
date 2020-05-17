NTP-network-time-synchronization-over-the-Internet.md

# Синхронизиране на часовото време и на календарната дата по Интернет чрез безплатни онлайн услуги като NTP-сървъри

## Microsoft Windows:

ENGLISH/НА АНГЛИЙСКИ:
(For Microsoft Windows7)
Right-click on the 14:45 (datetime applet notification space/icon on the Microsof Windows (XP SP3)/7/8.1/10 taskbar, in the notifications area) -> Date/time synchronization -> Internet time -> Change settings...

НА БЪЛГАРСКИ/BULGARIAN
(за Microsoft Windows7)
Натиснете с десния бутон на компютърната си мишка (или тъчпад или който физически бутон сте нагласили да отговаря на десния бутон на компютърната мишка) върху полето с часа: примерно „14:45“  (datetime applet в лентата за задачи на Microsof Windows (XP SP3)/7/8.1/10; намира се в областта за уведомления (полето за известия)) -> Date/time synchronization -> Време от Интернет" -> Смяна на настройките... -> изберете NTP-сървър и натиснете "Актуализирай сега" след като изчакате, вижте за потвърждение, че синхронизацията на часа и датата са успешни.

`pool.ntp.org`
(препоръчително!)

`time.windows.com`

`time.nist.gov`

`time-nw.nist.gov`

`time-a.nist.gov`

`time-b.nist.gov`

`ntp.kernel.org` (?)

`time.kernel.org` / `datetimesynch.kernel.org`
(???)

Информация за протокола/уеб-сървърния софтуер/UNIX-CLI-daemon NTP:
http://en.wikipedia.org/wiki/NTP

````
-> Free online NTP servers (servers for over-the-Internet datetime-stamp synchronization, including time-zone awareness&national-changes-to-time-zones (часови пояси)):
pool.ntp.org
ntp.tuxfamily.net
time.windows.com (Microsoft Windows servers)
time.nist.gov (NTP service by the USA government)
time-nw.nist.gov (NTP service by the USA government)
time-a.nist.gov (NTP service by the USA government)
time-b.nist.gov (NTP service by the USA government)
https://faq.tuxfamily.org/Games/En (NTP service by the USA government)
````

## Linux, \*NIX, UNIX, \*BSD, macOS

* Подобно е като прв/под MS Windows. Дясно щракване върху полето с дата&час в лентата със задачи на работния плот и избиране на опцията за настройване на часа&датата, и оттам избор на частта със синхронизиране на часовото време и календарната дата чрез синхронизация по Интернет по NTP-сървър...
Или просто намерете раздела в Настройките на операционната си система (ОС), който е за найстройването на часа и датата...

Inside a Linux terminal & its `bash` shell:

`$ time --help`

`$ date --help`

`$ calendar --help`

(въвеждат се в командния ред БЕЗ началните „ `$ ` “

````
...
````

` ... `

````
Our day and time is right now: Saturday 12:20:09 PM EDT   —— 6 days until next meeting
Run this terminal program in a GNU/Linux system terminal to see the meeting start time in your time zone:

$ date --date='TZ="America/New_York" 12:00 this Fri'
````
(SOURCE: https://directory.fsf.org/wiki/Main_Page )

## Google Android / CyanogenMod / LineageOS ; Google ChromeOS; Google Android M; Google FuchsiaOS
... (automated if online or mobile-carrier set or manually set...)

## Apple iOS
...

# Алтернатива за хора с модерни ГПИ/GUI уеб-браузъри, поддържащи добре HTML5:

http://timeanddate.com
http://wit.tr
и други...
