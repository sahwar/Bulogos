> unified_BG-bg_keyboard-layouts_for-all-OSs.md

**Уеднаквен набор от кирилски клавиатурни подредби за българския език (за Windows7 SP1+, Win8, Win8.1, Win10; Linux v3.4+/v4.2+/v5+; macOS 10.10+):**

## Win7 SP1+, Win8.1 и Win10: ##
Български (България)
- Клавиатура
* български - BG български (България)
* български (латиница)
* български (машинопис)
* български (традиционна фонетична)
* български ((нова) фонетична, по Димитър Скордев и сие)

* EN английски (Съединени [американски] щати, САЩ)
* САЩ - международен

**Клавиатурни подредби от Михаил Балабанов от BGlocalize:**
* bg_bds_ex.zip = Стандартна подредба по БДС 5237:1978 (разширена)
* bg_phon_ex.zip = Традиционна фонетична подредба (разширена)
* (keyboard_layouts.pdf)

## (GNU/)Linux (all):##
Bulgarian keyboard layouts by Anton Zinoviev:
* BDS
* phon
* new phon
* TOADD: bg_bds_ex
* TOADD: bg_phon_ex

## Apple macOS 10.10+: ##
* вградените клавиатурни подредби, предоставени от Apple, Inc. за macOS
* допълнителни/самоделки?...

## Google Android ##
* v4.4+ : ...
* v8 / v9: GBoard - BDS, phon, new phon; handwriting-recognition..., ...

## Apple iOS ##
* вградените
...

---

[SMS](https://en.wikipedia.org/wiki/SMS#Message_size)-и на (българска) кирилица (SMS charsets/encoding - GMS-7/ASCII или 16-bit UCS-2/'UTF-16'):

**Накратко:** Изпращайте SMS-и _САМО_ с дължина от 160 (всъщност **153** при multi-part SMS) знака на 7-bit ASCII (GSM-7) латиница или до 70 (**всъщност 67 при multi-part non-ASCII SMS**; 16-bit UCS-2 (BMP (Basic Multilingual Plane)-only UTF-16), максимум до 140 байта/октета (1120 bits)) знака на кирилица и/или на друга не-ASCII писменост, включена в Unicode. БЕЛЕЖКА: Escape characters ``( | ^ € { } [ ] ~ )`` се смятат като 2 броя 7-bits според Extended GSM character set (т.е. едно SMS съобщение може да съдържа до 80 знака ``{``)!!! --- http://smscharactercounter.com/encoding

Когато пишете SMS на латиница, Вие имате възможност с него да изпратите 160 символа, а на кирилица – 70. Оттам идва това т.нар. поскъпване, защото еднаква информация в единия случай ще Ви струва един SMS, а в другия – два или три.“
 Източник: https://fakti.bg/bulgaria/223408-kzp-iska-obasnenie-zashto-sms-ite-na-kirilica-sa-po-kratki

Дължината на кратките текстови съобщения и кодирането на различни езици са определени в международните стандарти. В едно кратко текстово съобщение (SMS, ес-ем-ес, simple message standard) могат да бъдат предадени до 160 символа на латиница (кодирани със 7 бита, 7-bit ASCII) и до 70 символа на кирилица (кодирани с 16 бита Уникод, Unicode 16-bit UCS 16). 

Когато есемесът има повече от 160 символа за латиница и 70 за кирилица - автоматично започва ново съобщение, което се таксува от мобилния оператор. С 16-битово Уникод кодиране се изпращат и SMS, написани на гръцки и на езици, използващи латински азбуки (Полша, Чехия, Словакия, Унгария, прибалтийските държави).

**ИЗВОД**
На практика операторите у нас не отказват изпращането на по-дълги съобщения на кирилица, но при самото изпращане автоматично ги делят - ако е 160 знака на кирилица, съобщението се таксува като 3 отделни съобщения (!!!) - 2 по 70 знака (140), а оставащите 20 знака влизат в 3-то съобщение. В разпечатката те фигурират като 3 отделни съобщения, изпратени с разлика от 3 до 9 секунди.

**ИЗВОД 2**
Изпращайте SMS-ите или на латиница (до 140 или 160 знака общо в 1 SMS!) или на кирилица (до 70 знака в 1 SMS!), или на български, но транслитериран на кирилица чрез една от [системите за транслитерация към латиница](https://bg.wikipedia.org/w/index.php?title=%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5_%D0%B1%D1%83%D0%BA%D0%B2%D0%B8_%D1%81_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8&oldid=9380310) (или чрез Ваша идиосинкретична система за транслитерация, която е достатъчно четима).

Прочети още на:
* https://stackoverflow.com/questions/7103990/sms-messages-non-ascii-characters-encoding
* http://www.unicode.org/Public/MAPPINGS/ETSI/GSM0338.TXT
* https://en.wikipedia.org/wiki/GSM_03.38#GSM_7_bit_default_alphabet_and_extension_table_of_3GPP_TS_23.038_.2F_GSM_03.38
* https://help.nexmo.com/hc/en-us/articles/204015683-What-are-the-supported-characters-encoding-for-SMPP-
* Without support of € symbol: Latin 1 ( ISO-8859-1) - http://en.wikipedia.org/wiki/ISO_8859-1#Codepage_layout
* With support of € symbol:
  - Latin-9 ( ISO-8859-1):  http://en.wikipedia.org/wiki/ISO_8859-15#Codepage_layout
  - GSM8 : http://en.wikipedia.org/wiki/GSM_03.38
  - UTF-8 : http://fr.wikipedia.org/wiki/UTF-8
  - Roman 8 : http://www.fileformat.info/info/charset/hp-roman8/encode.htm
* https://www.textmagic.com/docs/api/encoding/
* https://www.csoft.co.uk/support/character-sets
* http://smscharactercounter.com/encoding
* https://www.dnes.bg/obshtestvo/2017/01/31/sms-yt-na-kirilica-troino-po-skyp-diskriminaciia-li-e.330432
* https://www.economic.bg/bg/news/7/zashto-e-po-dobre-da-pishem-sms-s-latinski-bukvi-a-ne-na-kirilitsa.html
* https://twitter.com/bystamat/status/638272657478258688
* https://www.a1.bg/saobshtenia-sms
* https://mobilebulgaria.com/news/sms-na-kirilitsa-po-evtin
* сатира: https://www.webcafe.bg/webcafe/obshtestvo/id_1959114836_Zashto_sms-ite_na_kirilitsa_ne_sa_kato_tezi_na_latinitsa
* SMPP 3.4 = Unicode UCS-2 or 8-bit-encoded binary for SMS messages
* https://www.clockworksms.com/blog/the-gsm-character-set/
* https://www.clockworksms.com/blog/convert-a-mobile-number-into-international-format/
* https://www.clockworksms.com/blog/concatenated-sms/
* https://help.tithe.ly/tithe-ly-chms-how-to-s/email-letters-and-sms/sms-information-about-sms-character-encoding-language-support-and-message-lengths
* https://help.tithe.ly/tithe-ly-chms-how-to-s/email-letters-and-sms/sms-information-about-working-with-sms-in-tithely-chms
* https://docs.huihoo.com/symbian/s60-5th-edition-cpp-developers-library-v2.1/GUID-35228542-8C95-4849-A73F-2B4F082F0C44/sdk/doc_source/guide/System-Libraries-subsystem-guide/CharacterConversion/SMSEncodingConverters/SMSEncodingTypes.html
* https://help.tithe.ly/tithe-ly-chms-how-to-s/email-letters-and-sms/sms-information-about-sms-character-encoding-language-support-and-message-lengths
* https://docs.huihoo.com/symbian/s60-5th-edition-cpp-developers-library-v2.1/GUID-35228542-8C95-4849-A73F-2B4F082F0C44/sdk/doc_source/guide/System-Libraries-subsystem-guide/CharacterConversion/SMSEncodingConverters/SMSEncodingTypes.html

---

