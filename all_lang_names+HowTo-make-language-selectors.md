* Българоезичните имена на езиците по света (реално са над 6000...):
https://sites.google.com/site/bglocalize/language_names
* Кратки ASCII кодове за езици, държави и територии:
https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Languages/List_of_ISO_639-3_language_codes_(2019)
https://iso639-3.sil.org/code_tables/download_tables#Language%20Names%20Index
https://en.wikipedia.org/wiki/List_of_ISO_639-3_codes
https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
https://bg.wikipedia.org/wiki/ISO_3166-1
https://bg.wikipedia.org/wiki/ISO_3166-2

* Syntax for language selector dropdown menus
Според мен, за падащи менюта най-удачният синтаксис е:
{ISO 639-3 код} - {ISO 639-2 код} - [име на езика на английски] - [име на езика, както се пише на самия език] - [/приблизително фонематично/фонемно произношение с IPA/МФА знаци/] - ({writing system (script) used by the language, in English & written in the script in question}) - {continent, region, country, province, ethnicity/nation/demographic group that uses that language} - [бележки и други названия на езика]...

Пример:
{евентуално и числов номер - } bul - bg - Bulgarian - български [език] - /'bɤlˌgɐrski ɛzɪk/

Като е най-удобно да се „скача“ на съответния елемент от списъка на падащото меню - чрез string/substring regex търсене чрез JavaScript (т.е. и с падащо меню за търсене и избиране - вместо обикновеното падащо меню (при което само по първия знак се избира с клавиатурен клавиш, или чрез числов номер), има такива проекти в GitHub).

Официално се води, че езиците на планетата Земя (поне официално признатите и без тайни говори...) са над 6000, като около 600 са най-говорените, от които само към 100-ина са доминантните... Затова и имената на много от езиците дори не са превеждани на български и сме донякъде „кодификатори“ по отношение на българския им превод, макар че предимно копираме криво-ляво английското им название, което не винаги е лингвистично грамотният подход, но какво да се прави...

* .NET/Microsoft Windows syntax for language selection dropdown menu
