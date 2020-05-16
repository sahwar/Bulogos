NTP-network-time-synchronization-over-the-Internet.md

# Синхронизиране на часовото време и на календарната дата по Интернет чрез безплатни онлайн услуги като NTP-сървъри

## Microsoft Windows:

... -> ... -> Време от Интернет" -> Смяна на настройките... -> изберете NTP-сървър и натиснете "Актуализирай сега" след като изчакате, вижте за потвърждение, че синхронизацията на часа и датата са успешни.

pool.ntp.org
(препоръчително!)
time.windows.com
time.nist.gov
time-nw.nist.gov
time-a.nist.gov
time-b.nist.gov

ntp.kernel.org
time.kernel.org / datetimesynch.kernel.org
(???)

Информация за протокола/уеб-сървърния софтуер/UNIX-CLI-daemon NTP:
httphttp://en.wikipedia.org/wiki/NTP

## Linux, \*NIX, UNIX, \*BSD, macOS

* Подобно е като прв/под MS Windows. Дясно щракване върху полето с дата&час в лентата със задачи на работния плот и избиране на опцията за настройване на часа&датата, и оттам избор на частта със синхронизиране на часовото време и календарната дата чрез синхронизация по Интернет по NTP-сървър...
Или просто намерете раздела в Настройките на операционната си система (ОС), който е за найстройването на часа и датата...

Inside a Linux terminal & its `bash` shell:

`$ time --help`
`$ date --help`
`$ calendar --help`
` ... `

* Алтернатива за хора с модерни ГПИ/GUI уеб-браузъри, поддържащи добре HTML5:

http://timeanddate.com
http://wit.tr
и други...
