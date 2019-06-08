## :memo: -> :loudspeaker: :sound: &#x1F444; Original idea for an open-source CLI/GUI/Web speech-synthesis app for computer pronunciation of texts in the contemporary Bulgarian language ##

Оригинална идея за програма от типа гласов/речев(и) синтезатор, за компютърно произношение на текстове, написани на съвременния български език, с лиценз на свободен софтуер с отворен код (и с платена версия с малко добавки).

Идея за `GovoritelBG-ss` (c) 2018-2019 sahwar (github.com/sahwar/, twitter.com/ve4ernik, Иван И. Курдов) <ve4ernik@gmail.com> и други.

It is still rough around the edges as an idea but the core app idea&data-structures are here in this document (while also being in continous revision, further tweaking/details-finetuning & development).

**Tags:** <small>speech synthesis engine, Bulgarian-language speech synthesis engine and speech-synthesizer app, гласов синтезатор, речев синтезатор, преобразуване на писмен текст в компютърно произнесена (изговорена) реч, гласово възпроизвеждане на текст на български, "От текст към говор" (TTS), текст към реч чрез компютърна програма, computer text-to-speech synthesis, програма свободен софтуер с отворен код, посричково произнасяне, дифони, IPA, МФА, extIPA, X-SAMPA, Z-SAMPA, GitHub, espeak, MBROLA, original research, syllabification algorithms, contemporary Bulgarian syllable patterns, experimental application software, assistive software for blind and sight-impaired people, social-care software for disabled people</small>.

_Third-party data to use in `GovoritelBG-ss`:_
Using **the new Bulgarian-language syllabification (syllable-separation) algorithm (better than the old one from TeX BG):
http://mirror.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-bg.tex**
https://t.co/m4rPDuWQVD?amp=1
https://www.ctan.org/tex-archive/language/hyph-utf8
https://github.com/hyphenation/tex-hyphen
(and also the old TeX algorithm for Bulgarian-language syllabification!)
and [syllable-patterns for the contemporary Bulgarian language taken from my General Linguistics class at university and generously supplied by my lecturer Assistant Boryan Yanev](https://twitter.com/ve4ernik/status/582996507776823296) (pasted below for convenience), etc.

_Theoretical foundations of this Bulgarian-language TTS (text-to-speech) engine/app:_
* A list of the Bulgarian alphabet as used in contemporary Bulgarian:
Аа Бб Вв Гг Дд Ее Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ьь Юю Яя (Ѝѝ) (obsolete letters found in older pre-1945 texts: Ѣѣ Ѫѫ)...
* A list of all 45-48 IPA phonemes of the contemporary Bulgarian language (standard Bulgarian):
https://en.wikipedia.org/w/index.php?title=Bulgarian_phonology&oldid=880623002, https://bg.wikipedia.org/w/index.php?title=%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8_%D0%B5%D0%B7%D0%B8%D0%BA&oldid=8897355#%D0%A4%D0%BE%D0%BD%D0%B5%D1%82%D0%B8%D1%87%D0%BD%D0%B0_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0.

_**Approximate letter-to-IPA-phoneme correspondence table for the contemporary Bulgarian language (for Standard [literary] Bulgarian)**_
(the total number of phonemes is considered to be 45–48):

**Vowel phonemes** (theoretically considered to be 8 in total — /i/, /u/, /o/, /ɤ/, /ɛ/, /ɔ/, /ɐ/, /a/):

(Letter—phoneme)
и /i/, (/ɪ/)
у 	/u /; /o/
е /ɛ/
ъ /ɤ̞/, /ɤ/; /ɐ/; ( (/ʌ/), (/ə/) )
о /ɔ/, /o/
а /a/, /ɐ/; /ɑ/, /ʌ/, /ɤ̞/; (/ʌ/), (/ə/)

ю 	/ju/ (at syllable-start), /ʲu/; /jo/, /ʲo/
я 	/ja/ (at syllable-start), /ʲa/; /jɐ/, /ʲɐ/; /jɤ̞/, /ʲɤ̞/

( Ѫ (голям юс, голяма носовка) /о<sup>н</sup>/, /ъ<sup>н</sup> (Old Bulgarian); /ɤ/, /ɤ̞/ (as a now-obsolete letter found in pre-1945 Bulgarian orthography in Bulgarian writings) )

**Consonant phonemes** (WARNING: depending on stress position and position within a word, the letters represent the _voiceless_ IPA phoneme of the voiced—voiceless pair, even though the orthographic letter is the same): 

м /m/
н /n/ 			
м<sup>ь</sup> /mʲ/
н<sup>ь</sup> /ɲ/ 	
п /p/
б /b/
т /t/
д /d/
к /k/
г /ɡ/
п<sup>ь</sup> /pʲ/
б<sup>ь</sup> /bʲ/
т<sup>ь</sup> /tʲ/
д<sup>ь</sup> /dʲ/
к<sup>ь</sup> /kʲ/
г<sup>ь</sup> /ɡʲ/
ц /t͡s/
дз /d͡z/
ч /t͡ʃ/
дж /d͡ʒ/ 		
ц<sup>ь</sup> /t͡sʲ/ 			
ф /f/ 
в /v/
с /s/
з /z/
ш /ʃ/
ж /ʒ/
х /x/ 	
ф<sup>ь</sup> /fʲ/
в<sup>ь</sup> /vʲ/
с<sup>ь</sup> /sʲ/
з<sup>ь</sup> /zʲ/ 		
р /r/ 			
р<sup>ь</sup>/rʲ/ 			
й /j/ (semi-vowel, considered a 'consonant', e.g. C in CVC... syllable pattern/model notation)
л, /l/, /ɫ/ 			
л<sup>ь</sup> /ʎ/

<!--
Frequency list generated from text corpora:
https://www.gstatic.com/i18n/corpora_wordcounts_bg.txt
http://dcl.bas.bg/tchestotni-retchnitsi-na-balgarskiya-ezik-2/

All BG IPA phonemes fulllist (several versions...):

A LIST OF ALL BULGARIAN PHONEMES for SPEECH-SYNTHESIS apps
====== ====== ====== ====== ======

IPA-bg-list_v1

и /i/, (/ɪ/)
у /u/, /o/ !! [o]
е /ɛ/
ъ /ɤ̞/, /ɤ/; /ɐ/; ( (/ʌ/), (/ə/) )
о /ɔ/, /o/ !! [o]
а /a/, /ɐ/; /ɑ/, /ʌ/, /ɤ̞/; (/ʌ/), (/ə/)
ю /ju/ (at syllable-start), /ʲu/; /jo/, /ʲo/
я /ja/ (at syllable-start), /ʲa/; /jɐ/, /ʲɐ/; /jɤ̞/, /ʲɤ̞/
м /m/
мь /mʲ/
н /n/
нь /ɲ/
п /p/
б /b/
т /t/
д /d/
к /k/
г /ɡ/
пь /pʲ/
бь /bʲ/
ть /tʲ/
дь /dʲ/
кь /kʲ/
гь /ɡʲ/
ц /t͡s/
дз /d͡z/
ч /t͡ʃ/
дж /d͡ʒ/
ць /t͡sʲ/
ф /f/
в /v/
с /s/
з /z/
ш /ʃ/
ж /ʒ/
х /x/
фь /fʲ/
вь /vʲ/
сь /sʲ/
зь /zʲ/
р /r/
рь/rʲ/
й /j/ (semi-vowel, considered a 'consonant', e.g. C in CVC... syllable pattern/model notation)
л, /l/, /ɫ/
ль /ʎ/

---

ipa-bg-list_v2

/i/
(/ɪ/)
/u /
/o/
/ɛ/
/ɤ̞/
/ɤ/
/ɐ/
(/ʌ/)
(/ə/)
/ɔ/
/o/
/a/
/ɐ/
/ɑ/
/ʌ/
/ɤ̞/
(/ʌ/)
(/ə/)
/ju/
/ʲu/
/jo/
/ʲo/
/ja/
/ʲa/
/jɐ/
/ʲɐ/
/jɤ̞/
/ʲɤ̞/
/m/
/mʲ/
/n/
/ɲ/
/p/
/b/
/t/
/d/
/k/
/ɡ/
/pʲ/
/bʲ/
/tʲ/
/dʲ/
/kʲ/
/ɡʲ/
/t͡s/
/d͡z/
/t͡ʃ/
/d͡ʒ/
/t͡sʲ/
/f/
/v/
/s/
/z/
/ʃ/
/ʒ/
/x/
/fʲ/
/vʲ/
/sʲ/
/zʲ/
/r/
/rʲ/
/j/
/l/
/ɫ/
/ʎ/

---

ipa-bg-list_v3

/i/
(/ɪ/)
/u /
/o/
/ɛ/
/ɤ̞/
/ɤ/
/ɐ/
(/ʌ/)
(/ə/)
/ɔ/
/o/
/a/
/ɐ/
/ɑ/
/ʌ/
/ɤ̞/
(/ʌ/)
(/ə/)
/ju/
/ʲu/
/jo/
/ʲo/
/ja/
/ʲa/
/jɐ/
/ʲɐ/
/jɤ̞/
/ʲɤ̞/
/m/
/mʲ/
/n/
/ɲ/
/p/
/b/
/t/
/d/
/k/
/ɡ/
/pʲ/
/bʲ/
/tʲ/
/dʲ/
/kʲ/
/ɡʲ/
/t͡s/
/d͡z/
/t͡ʃ/
/d͡ʒ/
/t͡sʲ/
/f/
/v/
/s/
/z/
/ʃ/
/ʒ/
/x/
/fʲ/
/vʲ/
/sʲ/
/zʲ/
/r/
/rʲ/
/j/
/l/
/ɫ/
/ʎ/
[xʲ] {Хюстън /xʲustɤn/ ('Houston')}
[d͡z] {Дзержински /d͡zɛrʒinski/ ('Dzerzhinsky')}
[d͡zʲ] {Ядзя /jad͡zʲa/, ('Jadzia')}

---

ipa-bg-list_v4_alt
C (25? or 21 'hard' (non-palatalized) phonemes?):
p
b
t
d
k
g
m
[ɱ]
n
[ŋ]
f
v
s
z
ʃ
ʒ
x
[ɣ]
ʦ
ʣ
ʧ
ʤ
r
j
l
...
C + /j/ or /{consonant phoneme here}ʲ/ {{17 'soft' (palatalized or palatal) consonants}}: [pʲ, bʲ, tʲ, dʲ, c (=kʲ ), ɟ (=gʲ ), ʦʲ, ʣʲ, mʲ, ɲ (=nʲ ), rʲ, fʲ, vʲ, sʲ, zʲ, ç (=xʲ ), ʎ (=lʲ )].

V (8?):
i
u
[o]
ɤ
ɛ
ɔ
[ɐ]
a
{[ɜ], [ə], [o˔]} - [ə-ɐ-ˈa/ɤ-ə], [o˔ -o-ˈɔ/u-o˔]

http://www.personal.rdg.ac.uk/~llsroach/phon2/b_phon/b_phon.htm
https://en.wikipedia.org/w/index.php?title=Bulgarian_phonology&oldid=880623002

---

ipa-bg-list_v5_alt

V-12:
и /i/
у /u/, [o]
е /ɛ/
ъ /ɤ/, [ɐ](/ə/)
о /ɔ/, [o]
а /a/, [ɐ]

C-43:
m
(ɱ)
n
(ŋ)
mʲ
ɲ 	
p (p b)
b (p b)
t (t d)
d (t d)
k (k ɡ)
ɡ (k ɡ)
pʲ
bʲ
tʲ
dʲ
c
ɟ 	
t͡s
(d͡z)
t͡ʃ
d͡ʒ 		
t͡sʲ
(d͡zʲ) 		
f
v
s
z
ʃ
ʒ
x, (ɣ)
fʲ
vʲ
sʲ
zʲ
(xʲ)
r 			
rʲ 			
(w) (a newer semivowel which appears primarily in foreign borrowings, e.g. from English)	
j (the only native semivowel!)
ɫ
(l) 			
ʎ

https://en.wikipedia.org/w/index.php?title=Bulgarian_phonology&oldid=880623002

---

ipa-bg-list_v6_alt

 Consonants IPA 	Examples 	Nearest English equivalent
BG 	MK
b 	баба 	box
c 	кьопоолу,[1] ќар 	cute
d 	дом 	dust
d͡z 	дзифт, ѕвезда 	birds
d͡ʒ 	джем, џем 	jab
f 	филм 	fact
ɡ 	гарван 	good
ɟ 	гяур,[1] ѓавол 	argue
j 	сойка, пајак 	yes
k 	къща, куќа 	skill
l 	лимон 	leap
ɫ 	лош 	all
ʎ 	любов, љубов 	million
m 	море 	mocha
n 	нос 	north
ɲ 	баня, бања 	canyon
ŋ 	банка 	sing
p 	пет 	speak
r 	работа 	trilled r, like in Spanish
	r̩ 	прст 	US: verb (trilled)
s 	стол 	salt, mask
ʃ 	шума 	sugar
t 	тайна, тајна 	style
t͡s 	цар 	bats
t͡ʃ 	чай, чај 	cheese
v 	вода 	view
x 	хартия, хартија 	loch (Scottish English)
z 	зима 	zoo
ʒ 	жълт, жолт 	pleasure
Marginal consonants IPA 	Examples 	Nearest English equivalent
BG 	MK
	ɫ̩ 	Попокатепетл 	little
	n̩ 	њутн 	button
ɣ 		видях го 	between go and ahold
ç 		Хюз 	huge
w 		уиски 	water 


 Vowels IPA 	Examples 	Nearest English equivalent
BG 	MK
a 	брат 	father
ɤ 		кът 	plus (General American, Scottish English)
ɛ 	цена 	edge
i 	сив 	police
ɔ 	слон 	off
u 	хубав, убав 	pool
Reduced vowels IPA 	Examples 	Nearest English equivalent
BG 	MK
ɐ 		щерка, камък 	sofa
o 		нещо, уста 	thought (RP), coat (Scottish English)
Marginal vowels IPA 	Examples 	Nearest English equivalent
BG 	MK
	ə 	к’смет 	sofa
Other symbols IPA 	Explanation
BG 	MK
ˈ 	Denotes stress on the following syllable
ˌ 		Denotes secondary stress on the following syllable
◌ʲ 		Denotes palatalization of the preceding consonant 

https://en.wikipedia.org/w/index.php?title=Help:IPA/Bulgarian_and_Macedonian&oldid=878565175

---

the 11 syllable patterns of standard contemporary Bulgarian (permutations with the above IPA phonemes/diphones/allophones//phones:

The 11 types of syllables (syllable patterns) in the contemporary Bulgarian language according to linguists: open syllables: V, CV, CCV, CCCV, closed syllables: VC, CVC, CCVC, CVCC, CCVCC, VCC, CCCVC. NOTE: 'C' = consonant from the above list of IPA phonemes, 'V' = vocal/vowel from the above list of IPA phonemes, semivowels are considered 'consonants' for these patterns. There must be a permutation-combination list (as a JSON file and .txt table) of all the possible syllable variations following these patterns - to be utilized by this app.)

======

+ Bulgarian-orthography-to-IPA examples from the 2008 (+online PDF version) and 2012 official dictionaries

======

(older SAMPA:
archive.is/vpfjl
https://www.phon.ucl.ac.uk/home/sampa/bul-uni.htm (http://archive.is/HKWaW)
https://www.phon.ucl.ac.uk/home/sampa/bulgar.htm (http://archive.is/FFB9y)

 Vowels

The vowel system of Contemporary Standard Bulgarian comprises 6 phonemes, as follows.

	SAMPA symbol	Gloss and... 	Transcription of keyword
	i		peak		pik
	e		heat		pek
	a		again		pak
	@		but		p@k
	O		under		pOt
	u		crack!		puk

In unstressed positions there is considerable qualitative reduction of vowels.

Consonants

The consonant system comprises 21 'hard' (non-palatalized) phonemes, as follows.

	p		again		pak		
	b		ball		bal
	t		there		tam
	d		give		dam
	k		how		kak
	g		gas		gas
	ts		tsar		tsar
	dz		ting		dz@n
	tS		pine		tSam
	dZ		glass		dZam
	f		foul		fal
	v		bank		val
	s		alone		sam
	z		dice		zar
	S		shawl		Sal
	Z		pity		Zal
	x		plight		xal
	m		swing		max
	n		us		nas
	l		varnish		lak
	r		once		ras

plus the semivowel

	j		eaten		jal

There are also 17 'soft' (palatalized or palatal) consonants, which are shown by the symbol ' (ASCII 39) written after the consonant symbol. Before /i, e/ they do not contrast with the corresponding 'hard' consonants, but elsewhere they do.

	p'		sung		p'al
	b'		white		b'al
	t'		them		t'ax
	d'		share		d'al
	k'		profit		k'ar
	g'		rose		g'ul
	ts'		whole		ts'al
	dz'		waste		dz'an
	f'		phew!		f'ut
	v'		apathetic	v'al
	s'		sown		s'al
	z'		waste		z'an
	x'		Hume (name)	x'um
	m'		wineskin	m'ax
	n'		dumb		n'am
	l'		poured		l'ax
	r'		cut		r'as

---

This version is for Unicode-compliant browsers that can handle the Cyrillic alphabet. Others should use the ASCII/ANSI version.

Vowels

The vowel system of Contemporary Standard Bulgarian comprises 6 phonemes, as follows.

SAMPA symbol	Gloss  		Transcription 	Orthography
i		peak		pik		пик
e		heat		pek		пек
a		again		pak		пак
@		but		p@k		пък
O		under		pOt		под
u		crack!		puk		пук

In unstressed positions there is considerable qualitative reduction of vowels.

Consonants

The consonant system comprises 21 'hard' (non-palatalized) phonemes, as follows.

p		again		pak		пак
b		ball		bal		бал
t		there		tam		там
d		give		dam		дам
k		how		kak		как
g		gas		gas		газ
ts		tsar		tsar		цар
dz		ting		dz@n		дзън
tS		pine		tSam		чам
dZ		glass		dZam		джам
f		foul		fal		фал
v		bank		val		вал
s		alone		sam		сам
z		dice		zar		зар
S		shawl		Sal		шал
Z		pity		Zal		жал
x		plight		xal		хал
m		swing		max		мах
n		us		nas		нас
l		varnish		lak		лак
r		once		ras		раз

plus the semivowel

j		eaten		jal		ял

There are also 17 'soft' (palatalized or palatal) consonants, which are shown by the symbol ' (ASCII 39) written after the consonant symbol. Before /i, e/ they do not contrast with the corresponding 'hard' consonants, but elsewhere they do.

p'		sung		p'al		пял
b'		white		b'al		бял
t'		them		t'ax		тях
d'		share		d'al		дял
k'		profit		k'ar		кяр
g'		rose		g'ul		гюл
ts'		whole		ts'al		цял
dz'		waste		dz'an		дзян
f'		phew!		f'ut		фют
v'		apathetic	v'al		вял
s'		sown		s'al		сял
z'		waste		z'an		зян
x'		Hume (name)	x'um		хюм
m'		wineskin	m'ax		мях
n'		dumb		n'am		ням
l'		poured		l'ax		лях
r'		cut		r'as		ряз

======



-->

**Example approximate IPA transcriptions of some Bulgarian words and multiword expressions (MWE, phrases):**

жена̀ /ʒɛˈnɑ/
вода̀ /voˈdɑ/
ста̀вам /ˈstɑvʌm/
бра̀ва /ˈbrɑvʌ/
мъжа̀ /mɐˈʒɤ̞/
чета̀ /ʧɛˈtɤ̞/
зѐле /ˈzɛlɛ/
пѐсен /ˈpɛsɛn/ 	
син /ˈsin/
ѝстина /ˈistinɐ/ 	
ко̀тка /ˈkɔtkɐ/
боза̀ /boˈza/ 	
сту̀д /ˈstut/
уста̀ /oˈsta/ 	
ъ̀гъл /ˈɤ̞gɐl/
ка̀мък /ˈkamɐk/ 	
ю̀жен /ˈjuʒɛn/
дю̀ля /dʲˈulʲa/
ютѝя /joˈtija/
кюфтѐ /kʲoftˈɛ/
господа̀рю /gospoˈdarjo/
я̀то /ˈjato/
бя̀л /ˈbʲal/
ярѐм /jɐrˈɛm/
ба̀мя /ˈbamʲɐ/
деня̀т /dɛˈnjɤ̞t/
вървя̀ /vɐrˈvjɤ̞/
_(To add more later...)_





* 11-те вида срички в българския език според езиковедите:
отворени: V, CV, CCV, CCCV затворени: VC, CVC, CCVC, CVCC, CCVCC, VCC, CCCVC #linguistics.
(The same in English: The 11 types of syllables (syllable patterns) in the contemporary Bulgarian language according to linguists: open syllables: V, CV, CCV, CCCV, closed syllables: VC, CVC, CCVC, CVCC, CCVCC, VCC, CCCVC. NOTE: 'C' = consonant from the above list of IPA phonemes, 'V' = vocal/vowel from the above list of IPA phonemes, semivowels are considered 'consonants' for these patterns. There must be a permutation-combination list (as a JSON file and .txt table) of all the possible syllable variations following these patterns - to be utilized by this app.)
* `--arguments` in the app for setting of word-stress(es), intonation, voice pitch, speech speed, suprasegmental speech changes, etc., with related JSON-config files and regex-matched strings that when inserted in a text file parsed by `GovoritelBG-ss`, aid in the proper pronunciation of words, phrases, and sentences, and/or change speech-synthesis options (including suprasegmental speech patterns, and the optional full-word/phrase pronunciation of punctuation marks&other Unicode characters, etc.).
* A simple JSON files for applying the few rules about writing-vs-pronunciation mismatches in contemporary Bulgarian (Bulgarian-language writing is mostly phonemic but with a number of notable exceptions listed as a rules-set) and for letter(s)/syllables/diphones-to-phonemes correspondences ruleset;
* Sample sentences to test with `GovoritelBG-ss` when it is enough functional:
https://bg.wikiquote.org/wiki/%D0%91%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8_%D0%BF%D0%BE%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%86%D0%B8_%D0%B8_%D0%BF%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%BA%D0%B8, https://bg.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B3%D1%80%D0%B0%D0%BC%D0%B0.
* Transliteration systems for Bulgarian:
https://bg.wikipedia.org/w/index.php?title=%D0%A2%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%B1%D1%8A%D0%BB%D0%B3%D0%B0%D1%80%D1%81%D0%BA%D0%B8%D1%82%D0%B5_%D0%B1%D1%83%D0%BA%D0%B2%D0%B8_%D1%81_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8&oldid=9053881


### 0. App name ###

**`$ GovoritelBG-ss`** (SS = SpeechSynthesis)

**GlashatayBG-ss**

### 1. General idea ###

(c) 2018-2019 sahwar (github.com/sahwar/, twitter.com/ve4ernik, Ivan I. Kurdov) <ve4ernik@gmail.com>, et al.

(**THE MOST IMPORTANT PART**)

<q>(to add from my rough research-paper .txt files from my other PCs & my related tweets from my Twitter account...)</q>

For now, see the short summary from here before I upload the full explanation of the idea from my .txt files:
https://twitter.com/search?l=&q=speech+synthesis%20from%3Ave4ernik&src=typd
https://twitter.com/search?l=&q=%D1%81%D1%80%D0%B8%D1%87%D0%BA%D0%B8%20from%3Ave4ernik&src=typd
https://twitter.com/search?l=&q=%D1%81%D1%80%D0%B8%D1%87%D0%BA%D0%B8%20from%3Ave4ernik&src=typd

I've now added a more thorough explanation below (**This _IS NOT_ the same as in my .txt files, that is pasted in the other Roman-numeral sections after I.!!!**).

**I. 7 core speech-synthesis subsystems/'engines' included with `govoritelbg-ss`:**

**1)** An engine which parses input text, applies a syllable-separation algorithm (several flavors to select from via `--some-argument/flag-here` option, one of them is this great syllable-seperation [method](http://mirror.ctan.org/language/hyph-utf8/tex/generic/hyph-utf8/patterns/tex/hyph-bg.tex) ), then matches the separated syllables to a JSON-file linking to human-speaker-pronounced speech-segment-recordings of the most-common syllables of the contemporary Bulgarian language, then concatenates (merges) all the text's syllables' native-human-speaker-pronounced syllable-recordings pre-supplied-by-the-app audio-files via `ffmpeg`/`libav` and generates the output file with the pronunciation which is then played to speakers **(DEFAULT engine!)**.

**NOTE0:** To support multiple languages & speaker-voice datasets, there will be more `--arguments` to select language and speaker-voice dataset before generating&playing the output audio-file, but the Bulgarian language is the default one to be used for the app. Also note that there will be several configuration files (JSON/.config/.conf/.cfg/YAML/custom-txt-based formats) like those of the NVDA screen-reader app bundled with the app, and with a custom/user copy of those for the user to fine-tune the app before running it if the user doesn't like the default settings&configs of the app.

**2)** Same as 1 above but instead of syllable concatenation, we use an MBROLA-based diphones human-speaker-voice audio-recordings files being concatenated (merged).

**3)** Same as method 2 above but with syllable concatenation (&whitespace/pauses-between-words/strings) applied before the concatenation of MBROLA(-like) diphones.

**4)** Same as method 1, but we use speaker-voice dataset(s) which are human-speech recordings of the IPA phonemes (X-SAMPA/Z-SAMPA/IPA/extIPA list of the phonemes, in a JSON file(s) listing all these phonemes and their recording audio-files), with the speaker-voice datasets being at least 3-5 supplied to choose from (a few others will be in the commercial/paid version of the app).

**5)** Some computer-generated worse-sounding speech-synthesis which is programmatic-only (WITHOUT using better-sounding concatenation of pre-recorded human-voice datasets of syllables/phonemes/whole words/etc.). See for ideas: the _Toshko2_ Bulgarian-speech-synthesis app.

**6)** A mixture of the above methods with the additional power of sorta-even-better-sounding generated results via the methods outlined in NOTE1 below.

**7)** (some other speech-synthesis engine/subsystem to be freely supplied/plugged-in/integrated into the ap as supplied by the end-user).

**NOTE1:** There will also be a `--argument` to use several dictionary datasets of pre-recorded human-speaker-voice-pronounced speech audio-file recordings of _whole-words & whole-phrases_ for even better-sounding output audio-file generated by this app (a user can also change (replace) those files OR supply a new, user-generated (manually recorded&edited) dictionary of such speaker-voice datasets.

**NOTE2:** One of the config files will have NVDA-like JSON-based instructions on how to pronounce punctuation and basic post-generation speech-filters for e.g. speech-quality shifting for emphasis, questions, exclamations, quotations within the text, [Markov-chain](https://en.wikipedia.org/wiki/Markov_chain) audio-filters, [Fast Fourier Transform](https://en.wikipedia.org/wiki/Fast_Fourier_transform) audio-filters, pitch, sound volume, sound tone, pronunciation speed (and related [Audacity](https://manual.audacityteam.org/man/index_of_effects_generators_and_analyzers.html)-like simple plug-able filters), etc.).

**NOTE3:** The end-user may produce his/her own language&specific human-speaker-voice audio-recodings speech-segments (&hundreds-of-files-or-more dictionary of whole-word&whole-phrase audio-file recordings) to use with the app via another `--argument` if they don't like the default&supplied human-speaker(s) dataset audio-files used in the concatenation for the generation of the final output speech-synthesis audio-file.

**NOTE4:** There will also be another `--argument` which enables the end-user to use several further JSON-config files and thus apply additional fine-tuning language-specific & source-text-file-specific audio-filters (and whole-word & whole-phrase human-recordings) based on regex matches and matches of language/dialect-specific specific substring/string language segments.

_PROGRAMMING LANGUAGE(S) FOR WRITING THE APP:_ Rust, C/C++, Python3, Lua, Go, bash shell-scripting (for `ffmpeg`/`libav` use?), Perl+PCRE, Vala, FreePascal/Delphi/LazaursIDE, etc., even PHP is sorta OK-ish...

_INPUT FILES:_ .txt and other text formats (maybe use `pandoc` and HTML5-parser plug-in for cleanup-to-plaintext, or maybe also have an option to change pronunciations based on those <something>substring or string</something> tags...).

_OUTPUT FILES:_ .wav, .mp3, .ogg, .m4a, .flac

_TO CONSIDER:_ All pre-recorded human-voice-speaker dataset recordings files SHOULD be in the same audio fileformat, with the SAME basic audio-file characteristics (e.g. 44kHZ, 20Hz-20kHz, 8-bit/16-bit/32-bit floating, lossless or lossy filetype/recording, with those of similar type being of approximately the same short audio-duration/length).
All audio-files of each dataset should be those of the voice/speech of a single human (with basic bio-sex&bio-age&approx. geographical-dialect characteristics information) for optimal results!!!

**SUMMARY:** The main original idea is _the **concatenation** (via open-source `ffmpeg`/`libav`) of bundled (supplied with the app) **pre-recorded audio-files containing recordings of real speech segments of human-speaker(s)' real voice** (in a normal/'flat' tone, maybe also add `--argument` for a sub-speaker-voice dataset of a different speech quality), with (optional/mandatory) **syllable-segmentation-algorithm(s) parsing** done beforehand, and with **optional post-generating speech audio-filters (e.g. language-specific orthography-to-orthoepy differences, etc.) applied** & outputted to a second generated resulting audio-file_.

Characters-to-sounds per-language correspondence rulesets, NVDA/SpeechLab/etc.-like configs/settings, voice-qualities adjustable outputting audio settings, etc.

_Syllables (syllable patterns (CVV, VCV, etc. (**[Bulgarian syllable patterns taken from my General Linguistics class at university and generously supplied by my lecturer Assistant Boryan Yanev](https://twitter.com/ve4ernik/status/582996507776823296))** ) with all combinations of all corresponding language-specific phonemes - forming the syllable), diphones (~2 phones flowing together in connected speech), and (ext)IPA/X-SAMPA/Z-SAMPA phomenic/phonological phonemes (approximatly matched to lang-specific charset subset of Unicode UTF-8)_; plus whole-word and whole-phrase human pronunciation audio-files, and human pronunciation audio-files for punctuation characters (and their prosodic audio-filters effects?) and maybe the whole Unicode character set(?)...

**AIMS/GOALS OF THIS APP:** This is all in order to produce SOMEWHAT better-sounding speech-synthesis results than those of entirely programmatically-generated speech-synthesis engines which sound too robotic. The whole app `$ govoritelbg-ss` is about SIMPLE, QUICK & DIRTY speech synthesis of texts (mostly in the contemporary Bulgarian language with with ~45 phonemes in its orthoepy standardized contemporary variant which is parallel to the standard contemporary (semi-)formal written Bulgarian).

Making a speech-synthesis engine that emulates the whole human tract/speech organs is too cumbersome and complex, while speech-synthesis engines which are entirely programmatic-only sound TOO robotic, while we are aiming at a more natural-sounding result which is UNDERSTANDABLE to native-language human listeners (despite still being sorta/somewhat robotic/strung-together-sounds-sounding).

Other existing speech-synthesis engines (including for contemporary Bulgarian speech) use sorta similar techniques and algorithms, BUT NOT exactly as this one & are somewhat limited for our use (CLI&GUI-for-Linux-Windows-macOS & Web & Android) and ARE NOT open-source, that's why we're making this one!!! `GovoritelBG-ss` may find use by Google for its Google Translate website (for the Bulgarian speech-synthesis core(s)/feature).

## WE ARE LOOKING FOR PROGRAMMERS TO CODE THIS APP with collaboration with the author of the idea for this speech-synthesis app!! Please apply now to this potentially very-handy&useful open-source software project! ##

II. (to add by pasting here from my twitter.com/ve4ernik tweets about this project...)

III. (to add by pasting here from my numerous original-research & general-ideas .txt files about this project...)

IV. (...)

V. (...)

...

### 2. Features ###
* _CLI version:_ supply a text input file, add arguments/flags, output the result to an .mp3/.ogg/.flac/.wav file, play the generated audio-file result; built-in manual: `man govoritelbg-ss`, `govoritelbg-ss --help` (in English AND Bulgarian), `govoritelbg-ss --version (-v)` (version information), `govoritelbg-ss --update (-U)` (check for newer version and update the app if one is available), etc. commandline arguments and config (sub)options.

* _GUI version:_ same as CLI but with GUI controls

* _Web-version:_ similar to the GUI version but simplified

* _Android version:_ similar to the desktop GUI version but also adding these additional features:
(1) take photo (or supply image from phone memory or URL address) and process with the open-source [`tesseract-OCR`](https://github.com/tesseract-ocr/tesseract) engine, then play the OCR'd result as BG speech-synthesized output audio-file;
(2) visual&audio-recorded (language-specific) warning for when the Android device's battery level is running low; 
(3) option to import your own speaker-pronunciation dataset files for use with the app;

### 3. Target platforms ###
* GNU/Linux (CLI&GUI), Windows (CLI&GUI), macOS (CLI&GUI), HTML5 Web-interface (web-browsers, cross-platform), Android (GUI)

### 4. Target end-users ###
* Blind or sight-impaired Bulgarians, the general public, tests for writers, editors, proofreaders/spellcheckers/copywriters, and reseachers; also as a toy for demonstrating speech-synthesis to children and the general public.

### 5. License ###
* open-source: BSD-3 (modified) or MIT, commercial for a few bucks = additional speaker pronunciation packs (aside from the free&open-source bundled with the app)

### 6. Similar software (for inspiration / ideas / alternatives / collaboration) ###

[0 (eSpeak-bg & gespeaker+espeak-bg (лично аз, @sahwar, преведох gespeaker, но и други може да са превеждали след мен...))]( http://www.gatchev.info/blog/?p=1163) (резервно копие: http://archive.is/BaQTS ), SpeechLab2 (by BAS DCL (BACL)) [1](broken hyperlink) [2](https://play.google.com/store/apps/details?id=org.bacl.android.speechlab2g&hl=bg) [3](http://k-kolev1985.blogspot.com/2013/10/speechlab.html) [4](https://assistfoundation.eu/speechlab-2-0-%D0%B7%D0%B0-android/) **[5](https://bezmonitor.com/speechlab.htm)** **[6](https://web.archive.org/web/20160304103558/http://www.bacl.org/speechlabbg.html)** **[7](https://web.archive.org/web/20160407183942/http://bacl.org/specbg.html)** [8](https://groups.google.com/forum/#!topic/nalafche/ztjLn9CZTeI), NVDA (BG) [1](https://www.nvaccess.org/download/), espeak-bg [1](http://espeak.sourceforge.net/index.html) [2](https://github.com/rhdunn/espeak) [3](https://github.com/espeak-ng/espeak-ng) & gespeaker [1](http://www.muflone.com/gespeaker/english/) [2](https://github.com/muflone/gespeaker), Balabolka [1](http://www.cross-plus-a.com/bg/balabolka.htm), Govorilka [1](https://www.vector-ski.ru/vecs/govorilka/) [2](http://www.softportal.com/software-376-govorilka.html), FestivalTTS [1](http://www.cstr.ed.ac.uk/projects/festival/) [2](https://en.wikipedia.org/wiki/Festival_Speech_Synthesis_System), MBROLA project [1](http://tcts.fpms.ac.be/synthesis/mbrola.html) [2](https://en.wikipedia.org/wiki/MBROLA), [3](https://github.com/numediart/MBROLA) [4](https://github.com/espeak-ng/espeak-ng/blob/master/docs/mbrola.md) [5](http://espeak.sourceforge.net/mbrola.html), [Toshko2](http://twenkid.com/software/toshko2/), БЪРБОРИНО v3.0 [1](http://bivaood.com/) (програма за звуково управление (програма за звуков контрол) на компютъра чрез диктуване на български език с ключови думи; базирана на Google Translate Web-Speech API?) [2](https://www.download.bg/index.php?cls=forum&mtd=thread&t=294563&p=10), Google Web-Speech API Demo [1](https://www.google.com/intl/en/chrome/demos/speech.html), dictation.io Voice Recognition (Google Android app) [1](https://chrome.google.com/webstore/detail/voice-recognition/ikjmfindklfaonkodbnidahohdfbdhkn?hl=en) [2](https://dictation.io/) [3](https://dictation.io/languages/en), SpeechTexter (Диктуване на текст с помощта на функцията за разпознаване на говор, гласово разпознаване на български, преобразуване на речта в текст, онлайн многоезичен речник разпознавател) [1](https://www.speechtexter.com/help) [2](https://chrome.google.com/webstore/detail/voice-to-text/jdcdafhjjjfnkoeilnjmnadadaoehgdc?hl=bg), Диктуване на текст с помощта на функцията за разпознаване на говор (Windows 7 - Microsoft Help) [1](https://support.microsoft.com/bg-bg/help/14198/windows-7-dictate-text-using-speech-recognition) [2](httpsttps://support.office.com/bg-bg/article/%D0%94%D0%B8%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%82%D0%B0-%D0%BD%D0%B0-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D1%82%D0%B0-%D0%B7%D0%B0-%D1%80%D0%B0%D0%B7%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-05725ee2-ae2e-438f-847c-b80e754eb50b) [3](https://support.office.com/bg-bg/article/%D0%B8%D0%B7%D0%BF%D0%BE%D0%BB%D0%B7%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D1%82%D0%B0-%D0%B7%D0%B0-%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D1%83%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%B2-%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-%D0%B8%D0%B7%D1%80%D0%B5%D1%87%D0%B8-%D0%B7%D0%B0-%D1%87%D0%B5%D1%82%D0%B5%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D1%81-459e7704-a76d-4fe2-ab48-189d6b83333c), [Gallaudet University - Voice and Speech Physiology Lab](https://www.gallaudet.edu/department-of-hearing-speech-and-language-sciences/research/voice-and-speech-physiology-lab), etc.

### 7. (G)UI ideas from Librera Reader (for Google Android) ###

````
Some ideas borrowed from:...

TTS Engine: 
Language+Voice+male/female[+age+dialect/accent] pack:
Speed:
Pitch:
Volume:
Expressive breaks: ?? ms (e.g. 350)
Reading ends in: xxx hh yyy min zzz sec
[?] Resume from last punctuation mark: '[]()...'
Read punctuation in full: '[]()...'
Read unknown characters as their Unicode UTF-8 hexadecimal point number+title: yes/no (language for pronunciation = ?)
Break at page turn / break after number of lines: ...
Pause TTS-reading on incoming calls, messages, SMSs, etc.
Pause TTS-reading on incoming new Android notifications (DANGEROUS!): ...
Enable remote bookmarks (Start/Stop button): ...
Record TTS from whole file: Start / Pause / Cancel
````

(**Other app names considered:**

IzrechitelBG-ss, GlasitelkoBG, GlasnostBG-ss, GlasoveBG-ss, GlasilkaBG-ss, HortuvayBG-ss,  QSDIzrechilkaBG_SpeechSynth (QSD='quick, simple, and dirty), IzrechilkaBG, ProiznositelBGSpeechSynth, Govoritel(che)BGSpeechSynth, IzgovoritelBG, HortuvayNaBG_SpeechSynth, fossBGSpeechSynth, IzgovoriNaBG_SpechSynth, IzrechilkoBG, KazhiBG, ProiznositelBG_SpeechSynth, BGSpeechSynth, BulgSynth, etc.)
