designing-the-perfect-minimalist-web-browser_GUI-primitives+features-MustHaves.md
by https://github.com/sahwar/Bulogos




* first and foremost = lightweight web-browser
* 2nd most important = lightweight and minimalistic UI/GUI and excellent QA-tested tried-and-true UX, and support for
light&dark GUI/UI modes & for .json modification of web-browser skins/visual styles


SUPORT FOR vimium-like vim-like keyboard-navigation MODE (possibly the DEFAULT + computer-mouse/pointing-device support) + computer-mouse control

+ (!!!) uzbl / suckless.org/surf( / that-great-lightweight-web-browser-hosted-on-GitHub.com/GitLab)-like semi-translucent dialog-window with side-by-side
2-language-versions (plus a dropdown-selector to swap/switch the 2nd language to
another or to supply your own datetime-stamped/git-diff'd localization file), 
(USA) English (default) and {your local primary/mother/native language} - with
short instructions on how to use the web-browser, and with hyperlinks to Wikipedia
articles on the major Internet technologies, and with a static/configurable-via-configfile
keyboard shortcuts list & mouse-shortcuts/mouse-accelerator-gestures (or complex combo-gestures shortcuts with keyboard+mouse simultaneously or one after the one being triggered!)...

* SUPPORTS MUI language packs for the interface and restartless-or-restart-requiring switching between those; also SUPPORTS user editing of said langpacks & using that instead of the English-default &/or instead of the default updated-to-latest-git-diff-version/transifexORWeblate-version language packs for other languages


optional websearch-engines text-field-box bar, since the main URL/URI address-bar
also supports 'g {query}' (etc.) direct websearches via a dropdown Wox-like menu...

SUPPORT for saving any webpage as:
* 'webpage (HTML only'
* 'webpage (full) = {webpage HTML title}_folder (of all non-HTML files as part of the webpage) + {webpage HTML title}.html'
* .txt (via full-featured XML/SGML/HTML-webparser)
* .txt (with hyperlinks and/or with links-to-files added in beside/next to the main-body text or as HTML <!--comment--> directly after/before the linking position within the original HTML source-code, or added to the bottom of the .txt as numbered/GUUID's FOOTNOTES in a standardized locale-aware-for-numbered/bulleted-lists text-formatting!)
* .md (Markdown, original implementation) - via `pandoc`
* .md (CommonMark.org implementation) - via `pandoc`
* .md (GFM - GitHub-flavored Markdown style) - via `pandoc`
* .MHT (MIME-multipart with base64-binary-encoded non-text files embedded-included
in the same file! WARNING: MAY lead to big filesizes for complex webpages and
the dynamic website contents may be broken or buggy when that .mht is loaded as
an offline file by the web-browser!)
* .WARC archive - see github.com WebArchive's app repository
* curl/wget/wget2 full mirroring (--include-all-files??) - via these respective apps...
* .MAFF (like the add-on in Mozilla Firefox)
* (a folder with webpage-mirror/webcrawled/webscrape files, similar to the results obtained from using http://httrack.com OR WebtoothExtractor OR YAWS/AWS.exe (Yet Another Website Scraper?), OmegaKO's .php regexp-based basic webscraping script...???)

Support for 'View page source-code' & Firefox/Chrome-like Open DeveloperTools box.
Support for webbookmarks & their management; support for Firefox-like Ctrl+Shift+D 'Save all opened tab URIs/URLs as a folder of webbookmarks'
Support for saving (exporting)&importing (loading) of all opened current-window (or all opened windows-instances) All Opened Tab URLs/URIs - to .txt/.json/.html file , etc.

Support for AdBlocker built-in (like the popular add-ons for Mozilla Firefox or Google Chrome)

OPTIONAL support for tabs/sub-windows - the main web-browser mode is SINGLE-TAB-ONLY, but this can be easily changed with several-clicks/or-just-2-clicks upon
launching the web-browser

Support for copying any webpage selected content as unformatted-txt, as .html source-code (and support for 'Inspect \[selected\] element' which opens the WebDeveloperTools bars/subwindows)
Support for IFrame(s) - yeah, I know, but still...
Support for the latest JavaScript (v6+), CSSv3, HTML5, also for HTML4.1, CSS2.1, and for JSv-pre-v6, etc.
Support for auto-completion & for websearch-engine suggestions in the web-browser address-bar

Support for switching the text encoding of the loaded remote webpage/local offline file

Support for switching the CSS stylesheet & turning it off (like in Mozilla Firefox)

Support for FTP/SFTP/FTPS and for IRC, and for mailto: triggers... (maybe forces 'bitcoin:' also to trigger OS-level 'Open with...' dialog-window!)

Support for switching to 'Mobile Site/View' (optimized for most post-2015 smartphone/phablet/e-tablet/smartwatch/eTV/Android-TV-smartbox/etc. mobile devices.),
but the default is the activated 'Desktop mode / View desktop vesion'

SUPPORT for basic Firefox/Chrome/Chromium/WebKit-like taskbar buttons for the web-browser
SUPPORT for extended Back/Forward history for the Back/Forward web-browser buttons
SUPPORT for UNIVERSAL user-config-file-setup-numbers-of-steps multi-step Undo/Redo function (Ctrl+Z, etc.)

SUPPORT for horizontal & vertical scrolling & scrolling bars

SUPPORT for Firefox-like zooming & text-only zooming
SUPPORT for Firefox-like text-selection & cutting/copying/pasting

SUPPORT for web-cache, cookies, and web-browser History
SUPPORT for sessions & restoring of such sessions (e.g. auto-ask to restore last session before web-browser fail-state / PC-shutdown / etc.), like with the Mozilla Firefox Session-Manager add-on

(OPTIONAL) support for multi-clipboard (this should instead by added via a Linux killer-app multi-clipboard manager app...)

SUPPORT for YouTube & for HTML5-media smooth audio/video playback

SUPPORT for Java via OpenJRE(?) (ugh... still sometimes needed...).

SUPPORT for fsf.org-like open-JavaScript files

SUPPORT for built-in basic JavaScript/CSS/HTML deobfuscating/de-(code-)minifier/de-(code-(beatificator)

SUPPORT for Firefox/Chrome-like web-based corporate-OR-self-hosted/OwnCloud-NextCloud-SyncThing-WebRTC-p2p-like-FilePizza-like opened-session all-tabs&all-windows synching and password-synching, OPTIONAL cookies&web-cache synching across different devices...

SUPPORT for screen-readers & basic-OCR-ing & support for pluggable speech-synthesis offline installed killer-apps/online-services ...

SUPPORT for GoogleChrome-like GoogleTranslator machine-translation of any loaded webpage

SUPPORT for de-supressing text-selection&text-copying from websites

SUPPORT for open-source cut-down alternatives of Adobe Flash & Adobe Flash Player, etc.

SUPPORT for DHTML & AJAX (AsynchroniousJavaScript-...-XML)

XMLrequest????!?!?!??!?!??
HttpRequest?!???

SUPPORT for Firefox-like internal about:config pages...

SUPPORT for making 1 full .bckp copy of the whole user web-browser PROFILE data & support for exporting/importing the whole web-browser PROFILE-data (THIS IS TOO COMPLEX and requires auto-backuping of the current profile BEFORE making such a move, plus THEN triggering the web-browser to ask the user to make his/her own manual web-browser-assisted backup-archive of his/her WHOLE _PROFILE_... ?!? Hmmm...

basic support for microformats.org microformats

* SUPPORTS self-signed Let's Encrypt ID&security-validation certificates
* SUPPORTS favicons, including animated ones
* SUPPORTS the most popular raster file-formats plus the .svg & .svgz vector file-formats...
* SUPPORTS hooking up to Tor/TorBrowser/Tor-network '.onion' hyperlinks & OnionShare+???-IM / RetroShare
* Supports secure encrypted WebRTC-powered p2p-filesharing (like FilePizza, f*ex/sexxx, DC++/ADC, XDCC-IRC, OwnCloud/NextCloud/SyncThing/rsync/zsync/Zstandard/webfs, WebDAV&LDAP, etc.)
* SUPPORTS 'Greenfish Subtitle Player'-like playing of .WebTT, .srt, .ass, .ssa subtitle files overlaid on any media file embedded in a webpage or an offline file opened with the web-browser 
* SUPPORTS passwords-saving and usernames&passwords management (including export individual/all, import individual/batch, full deletion with a nice 'Action can't be undone. Please make sure you first backup these BEFORE deleting them all.' WARNING
* SUPPORTS 'Recently visited/opened' lists (including in about:blank and about:home, about:settings, about:config, about:tabmanagement/GoogleChrome-like-tabs-RAM-usage-monitoring-management-window/console)
* SUPPORTS the manual user-editing
* SUPPORTS web-bookmarklet code-snippets (and basic export indiviual/all, import individual/batch, shown-order-rearranging, etc.)
* SUPPORTS keyboard shortcuts/keyboard-combo+computer-mouse/touchpad/ThinkPad-red-'tit'-mouse-button & PrintScreen & NumPad-buttons & right-click/context-menu-triggering keyboard buttons, etc. ...
* SUPPORTS proxies, NAT traversal, port-forwarding, TCP/IP, UDP, etc.
* SUPPORTS advanced translucent/single-color web-browser notifications popups
* SUPPORTS button and CLI command to take a partial or full webpage screenshot, datetimestamped+auto-titled (yet user-editable before saving via OS 'Save as...' context-triggered dialog-window)
* SUPPORTS editing the right-click context menu of the web-browser, including adding an omnibox/Wox-like/CLI-commandline launcher-accelerator in-webpage-regexp-searching & searching&opening/closing of a tab based on its HTML-title or URI/URL or its number (left-to-right tab order)
* SUPPORTS advanced web-browser (per-/batch-)tab(/window)-manipulation (clone, close, search URL / title and close each individually, close all taba leftwards from this tab, close all tabs rightwards from this tab, close all tabs (with a big WARNING with 2-3-step 'OK' confirmation with 'Type 'ok' in the textbox below and click 'Confirm' button to finalize closing all tabs in the current web-browser windows' (and then load a new empty tab - e.g. about:home or about:tab / about:blank
* SUPPORTS user-customized 
* SUPPORTS latest-Firefox (v56/65+/75(+)?))-like UI/GUI/UX (which is a lot GoogleChrome-like)
* SUPPORTS sending bug-reports & SUPPORTS bugzilla.org MozillaFirefox-like public (registration, email confirmation/validation, settings-editing, and login required to post more than 1 dimmed-in-comparison-to-the-official-posts directory-tree [-]-collapsed anonymous-post per-IP)
* SUPPORTS media-extensions & popular royalty-free patented and libre/FOSS/FLOSS/open audio+video(-with-audio) multimedia-filetypes/codecs...
* NO (barebones lightweight minimalist(ic) web-browser) or basic SUPPORT for Firefox-like add-ons, including favelets/bookmarklets
* SUPPORT for RSS-feeds & Atom/Atom2.0 web-syndication web-feeds, including management (add
* SUPPORT for RTMP, RTSP, WebRTC, and for web .m8u playlists
* SUPPORT for entering UTF-8-Unicode http/https/Tor-network hyperlinks and SUPPORT for cut/copy/paste/delete of URL/URIs in the address-bar (and everywhere in/on a webpage, via right-click context-menu entries/menu-items)
* UI/GUI: support for Qtip2-like advanced ToolTips aside from the standard tooltips
* Firefox-like GUI/UI/UX, with context-menu that activates showing/hiding of GUI elements - OS-title-bar+URL/URI, menu-bar, bookmarks-bar, main-icons-taskbar, status-bar (permanently shown or about:config-configured N-seconds-duration contextual showing up; support for fullscreen mode
* SUPPORTS several styles of (horizontal&vertical web-browser/OS-supplied & in-weboage) scrollbars (classic, auto-hideable, or Ubuntu GNOME3/Unity8-like, etc. CSSv3-editable)
* SUPPORT for HTML/XML/SGML entities & HTML ruby tag(s)
* SUPPORT for OTF, TTF, and webfonts (.woff, .woff2), including the several different tech implementations of color(ed) web-typography fonts...
* SUPPORTS AJAX, DHTML, online&offline single-webpage 'apps', and supports running Java/open-Java-JRE web-applets
* maybe NO support for Adobe Flash?!? (or via fsf.org open Flash plug-in?)
* SUPPORTS mobile-view & desktop-view, and also Firefox-Reader-mode/userstyles.org&GreaseMonkey-scripts
---

* etc. ... TO ADD MORE LATER ON...
