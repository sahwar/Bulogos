== Original idea for an open-source CLI/GUI/Web speech-synthesis app for computer pronunciation of texts in the contemporary Bulgarian language ==

0. App name
**$ GovoritelBG-ss** (SS = SpeechSynthesis)
**GlashatayBG-ss**, IzrechitelBG-ss, GlasitelkoBG, GlasnostBG-ss, GlasoveBG-ss, GlasilkaBG-ss, HortuvayBG-ss,  QSDIzrechilkaBG_SpeechSynth (QSD='quick, simple, and dirty), IzrechilkaBG, ProiznositelBGSpeechSynth, Govoritel(che)BGSpeechSynth, IzgovoritelBG, HortuvayNaBG_SpeechSynth, fossBGSpeechSynth, $ govoritelBG-ss
1. General idea
(to add from .txt files from my other PCs & my related tweets from my Twitter account)

2. Features
* CLI version: supply a text input file, add argents/flags, output the result to an .mp3/.ogg/.flac/.wav file, play the result
* GUI version: same as CLI but with GUI controls
* Web-version: similar to the GUI version but simplified
* Android version: similar to the desktop GUI version but also adding this additional feature:
take photo (or supply image from phone memory or URL address) and process with the open-source tesseract-OCR engine, then play the OCR'd result as BG speech synthesis audio-file;
visual&audio-recorded warning for when the Android device's battery level is running low
option to import your own speaker-pronunciation dataset files;

3. Target platforms:
GNU/Linux (CLI&GUI), Windows (CLI&GUI), macOS (CLI&GUI), HTML5 Web-interface (web-browsers), Android (GUI)

4. Target end-users
Blind or sight-impaired Bulgarians, the general public, tests for writers, editors, proofreaders/spellcheckers/copywriters, and reseachers; also as a toy for demonstrating speech-synthesis to children and the general public.

5. License
* open-source: BSD-3 (modified) or MIT, commercial for a few bucks = additional speaker pronunciation packs (aside from the free&open-source bundled with the app)

6. Similar software (for inspiration / alternatives / collaboration)

SpeechLab (by BAS DCL), NVDA (BG), espeak-bg&gespeaker, Toshko2, Balabolka, Govorilka, FestivalTTS, MBROLA project, [Toshko2](http://twenkid.com/software/toshko2/), etc.

(Other app names considered: IzgovoriNaBG_SpechSynth, IzrechilkoBG, KazhiBG, ProiznositelBG_SpeechSynth, BGSpeechSynth, BulgSynth, etc.)
