## :memo: -> :loudspeaker: :sound: &#x1F444; Original idea for an open-source CLI/GUI/Web speech-synthesis app for computer pronunciation of texts in the contemporary Bulgarian language ##

Оригинална идея за програма от типа гласов/речев(и) синтезатор, за компютърно произношение на текстове, написани на съвременния български език, с лиценз на свободен софтуер с отворен код (и с платена версия с малко добавки).

Идея за `GovoritelBG-ss` (c) 2018-2019 sahwar (github.com/sahwar/, twitter.com/ve4ernik, Иван И. Курдов) <ve4ernik@gmail.com> и други.

It is still rough round on the edges as an idea but the core app idea&data-structures are here in this document (while also being in revision, further tweaking/details-finetuning & development).

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
* 11-те вида срички в българския език според езиковедите:
отворени: V, CV, CCV, CCCV затворени: VC, CVC, CCVC, CVCC, CCVCC, VCC, CCCVC #linguistics.
(The same in English: The 11 types of syllables (syllable patterns) in the contemporary Bulgarian language according to linguists: open syllables: V, CV, CCV, CCCV, closed syllables: VC, CVC, CCVC, CVCC, CCVCC, VCC, CCCVC. NOTE: 'C' = consonant from the above list of IPA phonemes, 'V' = vocal/vowel from the above list of IPA phonemes, semivowels are considered 'consonants' for these patterns. There must be a permutation-combination list (as a JSON file and .txt table) of all the possible syllable variations following these patterns - to be utilized by this app.)
* `--arguments` in the app for setting of word-stress(es), intonation, voice pitch, speech speed, suprasegmental speech changes, etc., with related JSON-config files and regex-matched strings that when inserted in a text file parsed by `GovoritelBG-ss`, aid in the proper pronunciation of words, phrases, and sentences, and/or change speech-synthesis options (including suprasegmental speech patterns, and the optional full-word/phrase pronunciation of punctuation marks&other Unicode characters, etc.).
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

**NOTE2:** One of the config files will have NVDA-like JSON-based instructions on how to pronounce punctuation and basic post-generation speech-filters for e.g. speech-quality shifting for emphasis, questions, exclamations, quotations within the text, etc.).

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

SpeechLab2 (by BAS DCL (BACL)) [1](broken hyperlink) [2](https://play.google.com/store/apps/details?id=org.bacl.android.speechlab2g&hl=bg) [3](http://k-kolev1985.blogspot.com/2013/10/speechlab.html) [4](https://assistfoundation.eu/speechlab-2-0-%D0%B7%D0%B0-android/) **[5](https://bezmonitor.com/speechlab.htm)** **[6](https://web.archive.org/web/20160304103558/http://www.bacl.org/speechlabbg.html)** **[7](https://web.archive.org/web/20160407183942/http://bacl.org/specbg.html)** [8](https://groups.google.com/forum/#!topic/nalafche/ztjLn9CZTeI), NVDA (BG) [1](https://www.nvaccess.org/download/), espeak-bg [1](http://espeak.sourceforge.net/index.html) [2](https://github.com/rhdunn/espeak) [3](https://github.com/espeak-ng/espeak-ng) & gespeaker [1](http://www.muflone.com/gespeaker/english/) [2](https://github.com/muflone/gespeaker), Balabolka [1](http://www.cross-plus-a.com/bg/balabolka.htm), Govorilka [1](https://www.vector-ski.ru/vecs/govorilka/) [2](http://www.softportal.com/software-376-govorilka.html), FestivalTTS [1](http://www.cstr.ed.ac.uk/projects/festival/) [2](https://en.wikipedia.org/wiki/Festival_Speech_Synthesis_System), MBROLA project [1](http://tcts.fpms.ac.be/synthesis/mbrola.html) [2](https://en.wikipedia.org/wiki/MBROLA), [3](https://github.com/numediart/MBROLA) [4](https://github.com/espeak-ng/espeak-ng/blob/master/docs/mbrola.md) [5](http://espeak.sourceforge.net/mbrola.html), [Toshko2](http://twenkid.com/software/toshko2/), БЪРБОРИНО v3.0 [1](http://bivaood.com/) (програма за звуково управление (програма за звуков контрол) на компютъра чрез диктуване на български език с ключови думи; базирана на Google Translate Web-Speech API?) [2](https://www.download.bg/index.php?cls=forum&mtd=thread&t=294563&p=10), Google Web-Speech API Demo [1](https://www.google.com/intl/en/chrome/demos/speech.html), dictation.io Voice Recognition (Google Android app) [1](https://chrome.google.com/webstore/detail/voice-recognition/ikjmfindklfaonkodbnidahohdfbdhkn?hl=en) [2](https://dictation.io/) [3](https://dictation.io/languages/en), SpeechTexter (Диктуване на текст с помощта на функцията за разпознаване на говор, гласово разпознаване на български, преобразуване на речта в текст, онлайн многоезичен речник разпознавател) [1](https://www.speechtexter.com/help) [2](https://chrome.google.com/webstore/detail/voice-to-text/jdcdafhjjjfnkoeilnjmnadadaoehgdc?hl=bg), Диктуване на текст с помощта на функцията за разпознаване на говор (Windows 7 - Microsoft Help) [1](https://support.microsoft.com/bg-bg/help/14198/windows-7-dictate-text-using-speech-recognition) (2)[https://support.office.com/bg-bg/article/%D0%94%D0%B8%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%82%D0%B0-%D0%BD%D0%B0-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D1%82%D0%B0-%D0%B7%D0%B0-%D1%80%D0%B0%D0%B7%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-05725ee2-ae2e-438f-847c-b80e754eb50b] [3](https://support.office.com/bg-bg/article/%D0%B8%D0%B7%D0%BF%D0%BE%D0%BB%D0%B7%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F%D1%82%D0%B0-%D0%B7%D0%B0-%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D1%83%D0%B2%D0%B0%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%B2-%D0%B3%D0%BE%D0%B2%D0%BE%D1%80-%D0%B8%D0%B7%D1%80%D0%B5%D1%87%D0%B8-%D0%B7%D0%B0-%D1%87%D0%B5%D1%82%D0%B5%D0%BD%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BA%D1%81%D1%82-%D0%BD%D0%B0-%D0%B3%D0%BB%D0%B0%D1%81-459e7704-a76d-4fe2-ab48-189d6b83333c), [Gallaudet University - Voice and Speech Physiology Lab](https://www.gallaudet.edu/department-of-hearing-speech-and-language-sciences/research/voice-and-speech-physiology-lab), etc.

(**Other app names considered:**

IzrechitelBG-ss, GlasitelkoBG, GlasnostBG-ss, GlasoveBG-ss, GlasilkaBG-ss, HortuvayBG-ss,  QSDIzrechilkaBG_SpeechSynth (QSD='quick, simple, and dirty), IzrechilkaBG, ProiznositelBGSpeechSynth, Govoritel(che)BGSpeechSynth, IzgovoritelBG, HortuvayNaBG_SpeechSynth, fossBGSpeechSynth, IzgovoriNaBG_SpechSynth, IzrechilkoBG, KazhiBG, ProiznositelBG_SpeechSynth, BGSpeechSynth, BulgSynth, etc.)
