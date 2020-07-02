# OSs (operating systems) worth using in 2019 and beyond #

Списък с операционни системи, които си заслужава да се използват през 2019 г. и занапред...

## The Big Holy Trinity of Desktop OSs ##
_**Microsoft (MS) Windows**_ (XP SP3 (obsolete except for some compatibility with older apps&older video-games); **7 SP1 (Pro/Ultimate x64)**, (8.1), **10**) (important related FOSS projects: see below), _**(GNU/)Linux**_ (Linux distros recommended by @sahwar for use in 2019: see below), and _**macOS**_ (X+; [Homebrew](https://brew.sh/), [MacPorts](http://macports.org/), Wine for macOS, [KDE apps for macOS X](https://community.kde.org/Mac)).

**ve4ernik's pick:** _a hex-ple boot with: 1x Windows 7 (Professional or Ultimate)/8.1/10 (64-bit), 2x (GNU/)Linux distros, 1x macOS 10.10+, and latest 1x Google Android v9-v10+ (or CyanogenMod or PureOS), and 1x other OS (the Windows NTFS partitions and 2+ of the Linux XFS-or-ZFS partitions are for data storage, the rest is for application-software usage, AAA-videogaming (Windows & Wine/PlayOnLinux+Valve SteamOS Linux), and general testing, programming, and tinkering, and R&D... (but this greatly depends on the specific types, models, and number of hardware PCs, smartphones, tablets, graphics tablets, etc. at your disposal/ownership/usage)... And a multi-monitor, keyboard+mouse+gamepads system setup config plus a home-owned setupbox entertainment box (x86 Windows, Linux, or XBMC/Kodi, or Android)_... OR just multibooting several OSs, having 1 or several Linux LiveCD/LiveDVD/LiveBluRay/LiveDVD+-RW & _especially_ LiveUSB-flashstick distros installed (&runnable as bootable via changing your computer's BIOS/UEFI boot-order settings) onto a USB-flashstick via Rufus.akeo.io, via YUMI, etc. AND also just simultaneously using several operating-systems installed on different physical computers, as well as using ssh/mosh/VNC/NX3/RDP (like with the Remmina client app and via OpenSSH) & TeamViewer & Desktopable & app-running-in-a-virtualized-jailbox remote-control of other OSs remotely (physically located on other computers), and also using VirtualBox/QEMU/bellard.org virtualization to run even more OSs as VM (virtual-machines), aided by Docker and Kubernetes, and by binary-releases app-hosting files-downloader mirrors websites... plus hooking up several physical computer display screens/monitors and hooking up several external physical media disks (HDDs, SSDs, etc.) via USB2&USB3+/SATAv?.?/eSATA/Lightning-port/DisplayPort cables (and possibly with hardware-level/software-level RAID redundancy and rsync, zsync, FreeFileSync, etc. data-deduplication - with OPTIONAL full-disk encryption, and MirrorBrain-based http://ibiblio.org -like data-mirroring on set intervals with added report/diagnostics logs...) and by hooking up several physical keyboards & using virtual keyboards (e.g. `osk.exe` for MS Windows7+, OnBoard & other such software for Linux distros, etc.), and also hooking up several other different video-gaming/CAD-CGI-3D/4D-sculpting & 2D-drawing computer peripheral devices (like gaming pads and headphones, and microphones, and yarn-headphones, and audio-speakers, and gaming wheels, live-streaming on-demand/on-schedule/on-remote-control webcams, etc.) + WakeOnLAN/MINIX-OS-in-Intel-CPUs-Intel-AME & more, neural-networks-algorithms in Internet online social-media websites/platforms/IM+VoIP+p2p-filesharing-apps(-for-desktop-computers-AND/OR-for-smartphones-and-video-gaming-consoles-and-for-ARM-CPU-devices), etc. ...

### Important MS Windows-related Microsoft & FOSS projects ###
**[ReactOS](http://reactos.org/)**, **[Wine](https://www.winehq.org/)/PlayOnLinux**, [Cygwin](http://www.cygwin.com/), [MinGW](http://www.mingw.org/), [MinGW-w64](https://mingw-w64.org/doku.php/start), NSYSv2, MSVC (which versions?), Linux Subsystem for Windows10 (WSLv2+), [Chocolatey](http://chocolatey.org/), [NuGet](http://nuget.org/), OneGet (Windows10), `cmd.exe`&`PowerShell`, [Win-Builds](http://win-builds.org/doku.php), [KDE apps for MS Windows](https://community.kde.org/Windows) [2](https://techbase.kde.org/Getting_Started/Build/Historic/KDE4_Windows), [BusyBox](https://busybox.net/), Heirloom toolkit, etc.

#### Полезен софтуер за `cmd.exe`/PowerShell & Windows Explorer ####
`cmd.exe`, PowerShell / PowerShell Core (open-source), [ConEmu](https://conemu.github.io/), [Process Explorer](https://docs.microsoft.com/en-us/sysinternals/downloads/process-explorer), [Clink](http://mridgers.github.io/clink), [PSReadLine](https://github.com/lzybkr/PSReadLine), [PSGet](https://github.com/psget/psget), Chocolatey / NuGet / MS [OneGet](https://github.com/OneGet/oneget), [Process Hacker](http://processhacker.sourceforge.net/), [cmder](https://cmder.net/), [GitForWindows](https://gitforwindows.org/), [mintty](https://mintty.github.io/), [wsltty](https://github.com/mintty/wsltty), [NirSoft apps](http://www.nirsoft.net/) (especially NirCmd), [Windows utilities by Code.Kliu.org](http://code.kliu.org/) (like [elevate](http://code.kliu.org/misc/elevate/)), [Babun](https://github.com/babun/babun), plus Windows (x64) builds of `curl`, `wget`, `wget2`, `ffmpeg`/`libav`, etc.

### Viable Linux distros 2019 ###

(2020 - new additions:
* PsychOS - https://www.technewsworld.com/story/PsychOS-A-Crazy-Cool-Distro-That-Pushes-Linux-Limits-86708.html
- https://psychoslinux.gitlab.io/index_mobile.html
- https://theouterlinux.gitlab.io/Public/Videos/RetroGrab_mobile.html )
- https://itsfoss.com/serpent-os-announcement/ - SolusOS Linux, SerpentOS Linux, etc.

> for more (GNU/)Linux distros, please see: https://distrowatch.com/ & https://en.wikipedia.org/wiki/List_of_Linux_distributions
* [MX Linux](http://mxlinux.org/) 10/10 (9/10 for MX Linux v19 in comparison to v17 & v18; if its PDF manual gets fully git-translated into multiple languages & gets localized `man`-pages, it will be almost perfect!!!)
* [AntiX](https://antixlinux.com/) 8/10
* [Debian](http://debian.org/) (newest; +squeeze-backports and later) 8/10
* [Devuan](https://devuan.org/) (Debian minus `systemd`) 9/10
* [Linux Mint](http://linuxmint.com/) 10/10 (XFCE DE, MATE DE, Cinnamon DE, LMDE (Debian-based rolling Linux Mint)) 9/10
* [Ubuntu](http://ubuntu.com/) 9/10 ([Xubuntu](http://xubuntu.org/), [Lubuntu](https://lubuntu.net/), [Ubuntu MATE](http://ubuntu-mate.org/), [Kubuntu](http://kubuntu.org/), Ubunty Unity (~dead)) 9/10
* [USU Linux (УСУ Линукс)](http://learnfree.eu/?lang=bg) (**Ubuntu-based Linux distro oriented towards Bulgarian users!!!**) 8/10
* [FerenOS](https://ferenos.weebly.com/get-it.html) [(download)](https://ferenos.weebly.com/get-it.html), [FerenOS at SourceForge](https://sourceforge.net/projects/ferenoslinux/), [FerenOS Next at SourceForge.net](https://sourceforge.net/projects/feren-os-development-builds/), [FerenOS Transfer Tool](https://ferenos.weebly.com/feren-os-transfer-tool.html) 9/10
* [Arch Linux](http://archlinux.org/) + [AUR](https://aur.archlinux.org/) 8/10
* [Fedora](https://getfedora.org/) 7.5/10
* [Gentoo](https://www.gentoo.org/)
* [OpenSUSE](https://www.opensuse.org/) (12.3 or later; OpenSUSE Tumbleweed)
* [RHEL (RedHat Enterprise Linux)](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) & [CentOS](https://www.centos.org/) (suitable for servers, Debian, Ubuntu, Arch Linux, and Gentoo - are the other Linux distros popular for servers); Oracle Linux... 10/10
* [Void Linux](https://voidlinux.org/) 9/10 (with the XBPS package-system) or 7.5/10
* [Alpine Linux](https://www.alpinelinux.org/)
* [GuixSD](https://www.gnu.org/software/guix/)
* [NixOS](https://nixos.org/)
* [Puppy Linux](http://puppylinux.org/main/Overview%20and%20Getting%20Started.htm) (especially the Ubuntu/Debian-based LTS builds!) 9/10
* [ElementaryOS](https://elementary.io/bg/) 8/10 for GUI/UI&UX design and aesthetics and custom-made apps
* [SliTaz GNU/Linux](http://www.slitaz.org/en/) 7.5/10
* [CLIP OS](https://clip-os.org/en/) (by the ANSSI (National Cybersecurity Agency of France))
* [Slax](https://www.slax.org/)
* [Solus Linux](https://getsol.us/home/)
* [Bodhi Linux](https://www.bodhilinux.com/)
* [Trisquel Linux](https://trisquel.info/en)
* [Manjaro Linux](https://manjaro.org/)
* [Sabayon Linux](https://www.sabayon.org/)
* [Mageia Linux](http://www.mageia.org/bg/)
* [Kali Linux](https://www.kali.org/)
* [CoreOS](https://coreos.com/)
* [Slackware Linux](http://www.slackware.com/)
* [Minimal Linux Live](http://minimal.linux-bg.org/#home)
* [YoctoProject](https://www.yoctoproject.org/)
* [LXLE](http://www.lxle.net/)
* [PureOS](https://www.pureos.net/) (from https://puri.sm/, powerful libre laptops!)
* [ZorinOS](https://zorinos.com/)
* ReactOS (NOT a (GNU/)Linux distro; it is an open-source reverse-engineered/remake (?) clone of Microsoft Windows NT/2K/XP and so it is compatible with most MS Windows apps made for MS Windows XP; maybe if you add Mono (an open-source clone of .NET framework for MS Windows 7+) to it, it may also run apps made for MS Windows 7/8/8.1/10 (UWP (Universal Windows(10) Platform)?...)
* TempleOS - https://en.wikipedia.org/wiki/TempleOS
* CollapseOS - https://collapseos.org/ - a Linux distro for when civilization falls apart... a civilization reconstruction kit like http://rexresearch.com but as an OS ; Also see: ArchiveOS ; http://old-games.com & http://oldapps.net
* ferenOS Linux (an extremely well-polished (GNU/)Linux distro with a nice set of visual styles/themes mimicking other OSs!)
* EasyOS (a very cool PuppyLinux fork based on Debian/Ubuntu; it's comparable to AntiX Linux & MX Linux 17+)
* elementaryOS (a very nice Linux distro that tries to mimick MacOSX X/macOS's design aesthetics&usability)
* TinyCore Linux (tinycore.org)
* LFS (Linux From Scratch)
* MinimalLinux LiveISO (a Bulgarian (GNU/)Linux distro similar to TinyCore Linux, X86Free+, BusyBox, LFS (Linux from scratch), etc.)
* SenlinOS Linux (a nice Chinese/PRC Linux distro with cool visual styles & a custom DE (desktop environment))

* SliTaz Linux (a very cool small-to-medium-sized Linux distro aimed at repackaging it as custom do-it-yourself (DIY) Linux distro)
* StotinkaOS - in http://archive.org
* Medibuntu
* Kubuntu / Ubuntu (GNOME 3.0+) / Ubuntu MATE (MATE DE is the polished fork of GNOME2 DE) / Xubuntu (XFCE) / Lubuntu (LXDE/LXQt)
* KDE Allegra / KDE Graphics Linux distro
* LXLE Linux
* SerenityOS
* Deepin Linux + Deepin DE (Deepin Desktop Environment)
* PCLinuxOS
* eZIX OS - good ideas can be found therein
* etc. ...
* https://www.scientificlinux.org/
* https://archiveos.org/foresight/

* **ArchiveOS**: https://archiveos.org/about-archiveos/ = Archive of Operating Systems mission is saving the great job of many great people whose created Open Source and/or Freeware distributions/operating systems.
The systems we archive are based on Linux, BSD, DOS, Solaris, and other, independent technology.

...

Linux kernel downloads - https://www.kernel.org/
Линукс (статия с полезни хипервръзки (препратки) накрая, от българоезичната Уикипедия) - https://bg.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BD%D1%83%D0%BA%D1%81

* **MX Linux** - https://mxlinux.org/
* Arch Linux - https://www.archlinux.org/ & AUR: https://aur.archlinux.org/ + https://wiki.archlinux.org/index.php/FreeNX + RDP & VNC & ssh/mosh/... etc.
* Puppy Linux - http://puppylinux.com/download.html & http://puppylinux.com/
* EasyOS Linux (by Barry Kauler, creator of Puppy Linux & Puppy Linux Ubuntu-remix) - 
* Slackware Linux - http://www.slackware.com/
* Devuan Linux (`systemd`-free fork of Debian Linux) - https://devuan.org/os/init-freedom/
* Kanotix Linux (a Linux distro based on Debian for HD film-viewing) - https://kanotix.com
* Artix Linux (rolling-release (GNU/)Linux distro based on Arch Linux) - https://artixlinux.org/
...

* [Linux Lite](https://www.linuxliteos.com/download.html)
* [Lubuntu](http://lubuntu.net/) 9/10
* [Trisquel Mini](https://trisquel.info/en/wiki/trisquel-mini)
* [BodhiLinux](http://www.bodhilinux.com/)
* [ChromiumOS/ChromeOS](https://www.chromium.org/chromium-os)
* [SolusOS](https://solus-project.com/)
* [DamnSmallLinux](https://distrowatch.com/table.php?distribution=damnsmall)
* [Porteus Linux](http://www.porteus.org/)
* [wattOS Linux](http://planetwatt.com/new/)
* [4MLinux](http://4mlinux.com/) 8/10
* [EasyOS](https://easyos.org/) (based on Puppy Linux)
* [ToriOS](http://torios.top/)
* [Linux From Scratch (LFS)](http://www.linuxfromscratch.org/)
* [TinyCoreLinux](http://www.tinycorelinux.net/)
* [deepin Linux](https://www.deepin.org/en/) 8/10
* [Slackware Linux](http://www.slackware.com/)
* [LXLE](http://lxle.net/) 8/10
* [SteamOS](http://store.steampowered.com/steamos/)
* [Trisquel Linux](https://trisquel.info)
* [Sabayon](https://www.sabayon.org/)
* [PeppermintOS](https://peppermintos.com/)
* PCLinuxOS
* Raspbian
* Scientific Linux
* Turbolinux
* Mandriva
* Asianux
* CloudLinux
* PLD Linux
...
* [Parabola GNU/Linux](https://www.parabola.nu/)
* [gNewSense GNU/Linux](http://www.gnewsense.org/)
* [Dynebolic GNU/Linux](https://www.dyne.org/software/dynebolic/)
* [Dragora GNU/Linux-libre](http://www.dragora.org/repo.fsl/doc/trunk/www/index.md)
* [Blag GNU/Linux](http://www.blagblagblag.org/) (based on Fedora)
* [Freed-ora GNU/Linux](http://www.fsfla.org/ikiwiki/selibre/linux-libre/freed-ora.en.html) (based on Fedora)
* [GNU Linux-libre](http://linux-libre.fsfla.org/pub/linux-libre/) ([info](http://www.fsfla.org/ikiwiki/selibre/linux-libre/index.en.html))
* [Ututo GNU/Linux](http://ututo.org/)
* [libeRTy for Linux-libre](http://www.fsfla.org/ikiwiki/selibre/linux-libre/liberty.en.html)
* [Ezix Linux](https://ezix.org/project/)
* For more Linux distros, check [DistroWatch.com (Linux-distro popularity 'rankings')](https://distrowatch.com/), ([ibiblio Linux-distro mirrors](http://distro.ibiblio.org/), or just do a web-search with your favorite web-search engine (e.g. google.com, [ixquick.com / startpage.com](https://www.startpage.com/), duckduckgo.com, yahoo.com, bing.com, etc.).
* Pop!\\_OS
Etc.:
* Devuan (uses sysvinit, offers openrc, runit, sinit)
* Dragora (uses sysvinit + perp)
* Gentoo (uses openrc (see Gentoo without systemd)
* Obarun (uses s6 supervision suite)
* PCLinuxOS
* Refracta
* Intel ClearLinux
* PureOS (by http://puri.sm)
* TrueOS - https://www.trueos.org/ (formerly: PC-BSD)
* Slackware (uses sysvinit)
* Stali (the static Linux, uses sinit)
* **Void Linux** (uses runit)
* Hyperbola (uses openrc)
* Artix (offers OpenRC and runit)
* Parabola GNU/Linux (uses systemd by default, also offers openrc as an alternative init)
* https://www.dyne.org/software/dynebolic/
* https://devuan.org/os/init-freedom/
* https://devuan.org/os/partners/devuan-distros
* http://suckless.org/sucks/systemd/
* https://web.obarun.org/
* http://sta.li/ (a static Linux distribution based on the original pre-2010 plans of the http://suckless.org project, however since 2018 it became independent from suckless.org)

------


````
https://flatpak.org/setup/
http://flathub.org

Quick Setup
Select your distro to get set up.

Ubuntu
Fedora
Endless OS
Chrome OS
Red Hat Enterprise Linux
Linux Mint
openSUSE
Arch
Debian
CentOS
Gentoo
Kubuntu
Solus
Alpine
Mageia
Pop!_OS
elementary OS
Raspbian
Clear Linux
Void Linux
NixOS
PureOS
SulinOS
Ataraxia Linux
Zorin OS
````

Searching for **packages for (GNU/)Linux distros**:
https://pkgs.org (!!!)
https://packages.ubuntu.com/
https://www.debian.org/distrib/packages
https://www.archlinux.org/packages/
https://aur.archlinux.org/
http://packages.linuxmint.com/
https://launchpad.net (Ubuntu-specific, Linux Mint-specific, and Debian-specific .deb/source PPAs, e.g. https://launchpad.net/lazpaint, https://launchpad.net/openshot, https://launchpad.net/gnome-paint)
https://apps.fedoraproject.org/packages/
https://copr.fedorainfracloud.org/ (!!! Includes distro-agnostic AppImage's for apps!)
https://rpmfusion.org/
https://src.fedoraproject.org/
https://packages.gentoo.org/
https://rpms.remirepo.net/rpmphp/
https://getfedora.org/keys/
...
https://distrowatch.com/packages.php
https://freshfoss.com/
https://www.icewalkers.com/


### Other notable UNIX-like OSs apart from (GNU/)Linux (primarily used for servers) ###
**FreeBSD**, **OpenBSD**, NetBSD, DragonflyBSD, etc.

## The mainstream OSs for mobile devices (smartphones, phablets, tablets) ##
_**Google Android**_, _**Apple iOS**_, _**Windows10 mobile**_, _**Samsung Tizen**_, _**[SailfishOS](https://sailfishos.org/)**_ (by Jolla, with a heritage from Nokia and **MeeGo**), maruOS, BlissOS, [**Mer Project**](http://merproject.org/), Ubuntu Touch, KaiOS, KDE Plasma Mobile (Qt5-based?), postmarketOS, PureOS Librem, LineageOS, eelo, etc.

## Older OSs for older mobile devices ##
SymbianOS 10, WinCEv5&v6 (Windows Embedded Compact) (all are obsolete except for older mobile devices or for hobbyist projects involving them), JavaME-based old cell-phones' custom OSs, etc.

## Some other notable OSs ##
**[Google ChromeOS](https://www.google.com/chromebook/)** / **[Chromium OS](https://en.wikipedia.org/wiki/Chromium_OS) [2](https://www.chromium.org/chromium-os)**, **[HaikuOS](https://www.haiku-os.org/) (inspired by BeOS)**, [IllumosOS](https://www.illumos.org/projects) (OpenIndiana=OpenSolaris continuation), OpenCSW (Oracle Solaris 10 Update 8 or later), Oracle Solaris (previously: Sun Solaris), [OpenIndiana](https://www.openindiana.org/download/), [MINIX3](http://www.minix3.org/), [Plan9](https://9p.io/plan9/index.html) (from Bell Labs), [Inferno OS](https://en.wikipedia.org/wiki/Inferno_(operating_system)), [HelenOS](http://www.helenos.org/), [OSv](http://osv.io/) [2](https://github.com/cloudius-systems/osv), BeOS, AmigaOS, OS/2, RISC OS, QNX, etc., {some micro FOSS-or-freeware small independent OSs to add}, etc.

## EXTRA - Emulators for old and legacy video-game consoles & ancient PC hardware ##
* There are too many (hundreds!) FOSS video-game-console emulators to list here, but [MAME](https://www.mamedev.org/) (especially MAMEUI64 and the older mame32.exe GUI: [1](https://github.com/mamedev/mame) [2](https://github.com/Robbbert/mameui) [3](https://www.afterdawn.com/software/system_tools/emulation/mame-for-windows.cfm) [4](http://www.emutopia.com/index.php/emulators/item/257-mame/157-mameui) [5](https://www.afterdawn.com/software/system_tools/emulation/mameui-64-bit.cfm) [6]() [MESSUI](https://github.com/Robbbert/messui) [2](http://mess.redump.net/start) [3](http://messui.1emulation.com/) [4](http://www.progettosnaps.net/mameui/) [5](http://www.progettoemma.net/mess/extra.html) [6](http://mrdo.mameworld.info/index.php), [IV/Play&MAMEUI64](http://www.mameui.info/)), [FreeDOS](https://www.freedos.org/), [DOXBox](https://www.dosbox.com/), [ScummVM](https://www.scummvm.org/) are among the most notable.
**NEW NOTABLE ADDITIONS:**
* https://www.libretro.com/
http://retroarch.com/?page=platforms
http://www.lakka.tv
* https://bliss-box.net/
* https://www.winehq.org/ (Wine/Wine-staging/PlayOnLinux MS-Windows compatibility layer for GNU/Linux, macOS, etc.)
* https://screenshots.debian.net/package/wine
* http://old-games.com
https://oldapps.com
* http://reactos.org
* https://www.microsoft.com/en-us/download/details.aspx?id=8002 ('**Windows XP Mode for Windows 7** makes it easy to install and run many of your productivity programs that run on Windows XP directly from a computer that runs Windows 7.')
_You can use Windows Virtual PC (OR Oracle VirtualBox VM + VirtualBox USB2.0 add-on?) to run Windows XP Mode on your computer. Windows Virtual PC requires processor capable of hardware virtualization, with AMD-V™, Intel® VT or VIA® VT turned on in the BIOS._
### **for DirectX/Direct 3D video games compatibility:**
**DxWnd** ( https://sourceforge.net/p/dxwnd/home/Home/ , https://sourceforge.net/projects/dxwnd/files/ ) ( , https://www.play-old-pc-games.com/compatibility-tools/using-dxwnd/ , https://softradar.com/dxwnd/ , https://www.majorgeeks.com/files/details/dxwnd.html , https://browsehappy.com/ , https://downloads.tomsguide.com/DxWnd,0301-65235.html ;  
* **https://sourceforge.net/projects/dxglwrap/**; https://sourceforge.net/projects/gldirect/ , https://sourceforge.net/projects/java-direct3d/ ; 
* ? ( https://sourceforge.net/projects/borderless-gaming.mirror/ , **https://github.com/Codeusa/Borderless-Gaming** , https://store.steampowered.com/app/388080/Borderless_Gaming/ , http://westechsolutions.net/sites/WindowedBorderlessGaming/ , https://github.com/Codeusa/Borderless-Gaming/releases/ , https://westechsolutions.net/sites/WindowedBorderlessGaming/download ),
* Transparent Windows 2.2, ColorPix, magnifier, diablo2-widescreen, etc. ...
* **Wine emulation layer, Wine-staging, PlayOnLinux GUI**...
* CheatBook Database app ( http://cheatbook.de/cheatbook-database-2019.htm , https://www.freewarefiles.com/CheatBook-Issue-10-2019-\_program_113238.html )
* ROMs for MAME (to play video-games for old arcade video-game consoles): https://emulator.games/roms/mame/
running Windows .exe/.msi files via Wine/Wine-staging/PlayOnLinux (useful: https://www.dedoimedo.com/computers/wine-apps-hd-display.html , DxWnd, dgVoodoo app, Proton layer for SteamOS Linux, etc.)
* https://screenshots.debian.net/package/holotz-castle
https://wiki.debian.org/Games/HolotzCastle
https://blends.debian.org/games/tasks/finest
https://screenshots.debian.net/package/0ad
* https://play0ad.com/
* https://www.moddb.com/games/0-ad
* http://itch.io
* https://store.steampowered.com/
* Origin games client
https://archive.is/fT0uf

## EXTRA2 - Good computers for FLOSS/FOSS users ##
There appeared a number of new manufacturers&vendors of computers suitable for FLOSS users.
Apart from buying&using older second-hand laptops (IBM/Lenovo ThinkPad's, HP EliteBook, Fujitsu LifeBook, etc. brands), I find these 2 companies to be selling great laptops: https://puri.sm/, https://system76.com/, https://www.pine64.org/?page_id=3707 (https://archive.fo/U1ths), 2nd-hand IBM/Lenovo ThinkPad's, 2nd-hand HP laptops (e.g. HP EliteBook's), 2nd-hand/new Dell XPS 13+/16/17+, https://www.maketecheasier.com/best-linux-laptops/ (information accurate as of February 2019).

If you want to go full-copyleft/free-software, see
https://stallman.org/stallman-computing.html (https://archive.fo/aiMTs)
https://libreplanet.org/wiki/Group:Hardware/Freest (https://archive.fo/B6obD)
https://libreboot.org/docs/hardware/ (https://archive.fo/mDL52)
http://www.gnewsense.org/Main/LaptopGuide

* ThinkPad T400s + [libreboot](http://libreboot.org) + Trisquel GNU/Linux;
* Lemote Yeeloong, [OLPC (One Laptop Per Child)](http://one.laptop.org/about/specs) (https://archive.fo/yHryi) + WiFi adaptor due to a nonfree firmware blob for the WiFi card.
RMS (Richard M. Stallman) dislikes 'Windows on the Intel Classmate, or nowadays a Chromebook that sends the child's personal data to Google.'
* [Hardware (laptops&desktop PCs) endorsed by the FSF (Free Software Foundation)](https://www.fsf.org/resources/hw/systems) (https://archive.fo/HFXfE)
* Minifree Libreboot T400
* Minifree Libreboot X200
* Libiquity Taurinus X200
* Technoethical X200 Laptop with Libreboot and GNU/Linux-libre
(Technoethical TET-X200 is a refurbished 12.1″ fairly modular/customizable Lenovo ThinkPad X200 laptop preinstalled with Libreboot, the fully free BIOS replacement, and with a fully free GNU/Linux operating system Trisquel.)
* Technoethical X200s Laptop with Libreboot and GNU/Linux-libre
(The Technoethical TET-X200s is a refurbished 12.1″ fairly modular/customizable Lenovo ThinkPad X200s laptop preinstalled with Libreboot, the fully free BIOS replacement, and with a fully free GNU/Linux operating system Trisquel.)
* Technoethical T400 Laptop with Libreboot and GNU/Linux-libre
(The Technoethical TET-T400 is a refurbished 14.1″ fairly modular/customizable Lenovo ThinkPad T400 laptop preinstalled with Libreboot, the fully free BIOS replacement, and with a fully free GNU/Linux operating system Trisquel.)
* Technoethical T400s Laptop with Libreboot and GNU/Linux-libre
(The Technoethical T400s is a refurbished 14.1″ fairly modular/customizable Lenovo ThinkPad T400s laptop preinstalled with Libreboot, the fully free BIOS replacement, and with a fully free GNU/Linux operating system Trisquel.)
* Technoethical T500 Laptop with Libreboot and GNU/Linux-libre
(The Technoethical TET-T500 is a refurbished 15.4″ fairly modular/customizable Lenovo ThinkPad T500 laptop preinstalled with Libreboot, the fully free BIOS replacement, and with a fully free GNU/Linux operating system Trisquel.)
* Vikings X200 ultraportable libre-friendly laptop - FSF RYF certified

https://www.gnu.org/distros/
https://www.gnu.org/distros/free-non-gnu-distros.html
https://www.gnu.org/distros/common-distros.html
https://www.gnu.org/distros/optionally-free-not-enough.html
https://archive.fo/yHryi
https://h-node.org/ - a database for open-hardware
https://www.gnu.org/distros/free-system-distribution-guidelines.html

**_If you wish to go FULL F(L)OSS in terms of software AND hardware, see these:_**

* **linux-libre**
* https://librecmc.org/ (linux-libre for embedded devices)
* **Libreboot**: https://libreboot.org/ (instead of http://coreboot.org)
Most F(L)OSS hardware sellers (many desktop PCs and hardware PCs come bundled with linux-libre kernel - GNU+Linux/(GNU/)Linux/LiGnux ):
* https://libreboot.org/suppliers.html
* **https://tehnoetic.com/TET-X200T**
* **https://www.thinkpenguin.com/**
* https://system76.org
* https://puri.sm
* https://www.gnu.org/links/companies.html
* https://www.gnu.org/links/non-ryf.html
https://www.thinkpenguin.com/
https://www.crowdsupply.com/eoma68
* https://www.crowdsupply.com/
https://www.thinkpenguin.com/gnu-linux/catalog
https://www.thinkpenguin.com/catalog/notebook-computers-gnu-linux-2
https://www.thinkpenguin.com/gnu-linux/penguin-t2-gnulinux-laptop
https://www.thinkpenguin.com/gnu-linux/penguin-j2-gnulinux-laptop
https://01.org/powertop/
* **https://www.thinkpenguin.com/gnu-linux/catalog**
https://www.thinkpenguin.com/catalog/desktop-computers-gnu-linux
https://www.thinkpenguin.com/gnu-linux/penguin-pro-6-gnu-linux-desktop
https://www.thinkpenguin.com/catalog/clearance-items
https://www.thinkpenguin.com/catalog/cds-case-badges-gnu-linux
https://www.fsf.org/resources/hw/endorsement/respects-your-freedom
* https://h-node.org/
* **https://minifree.org/product/libreboot-x200-tablet/**

http://lilypond.org/ = GNU software for musical notation

---

Google Android-related projects: https://replicant.us/ & https://www.cyanogenmods.org/ & https://lineageos.org/

_FSF-approved Desktops/Servers:_
* Technoethical D16 Server Mainboard with Libreboot
(The Tehnoethical TET-D16 is a dual-socket ASUS KGPE D16 server/workstation board preinstalled with Libreboot, the fully free BIOS replacement.)
* Vikings ASUS KGPE D16 Mainboard - FSF RYF Certified

## Version-control systems (e.g. GitHub alternatives):
I personally like&use GitHub BUT I understand that many people dislike Microsoft buying GitHub and so they prefer self-hosted GitLab/etc. or hosting their website elsewhere with some free or paid hosting company...

The cool alternatives are:
self-hosted instance(s) of **GitLab** OR **Gitea** OR **[Gogs]()** (e.g. https://gogs.librecmc.org/libreCMC/libreCMC/src/v1.4/docs/Supported_Hardware.md ) - Git-scm; **Fossil** (https://fossil-scm.org/home/doc/trunk/www/index.wiki), **Bazaar**, **SVC**, **Mercurial**, etc.

## F(L)OSS chemistry software:
OpenBabel (opens-source chemistry software package): http://openbabel.org/wiki/Main_Page
open chemistry periodic table of chemical elements by Dmitry Mendeleev & IUPUC, et al.
## FOSS CAD:
* OpenCAD

ETC. ...
(to be continued... in some other lifetime, hehe... Maybe.
SEE YOU, SPACE COWBOY... AND THANKS FOR ALL THE FISH. Nah, keep breathing, soldier of fortune... and impregnate the woman before dying!)
