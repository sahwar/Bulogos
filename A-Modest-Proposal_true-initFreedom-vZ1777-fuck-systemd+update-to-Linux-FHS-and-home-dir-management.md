~to add to ve4ernik's website - Publications ( http://sites.google.com/view/ve4ernik ) :

(this file is humorously named after the file 'modest-proposal.txt' by http://cr.yp.to which is about:
'A modest proposal for reducing mail traffic
19961213
D. J. Bernstein, djb@pobox.com' ...
However, this proposal here is about an extending update to how the LINUX/UNIX/*NIX FHS (filesystem hierarchy standard) is implemented in the Linux kernel and all Linux-derived kernels.)



# A Modest Proposal For An Extending Update to the Default Linux kernel filesystem-hierarchy, by ve4ernik@gmail.com :
> v0.2.2-BETA

 Add a built-in (&later backward-compatible, forwards-compatible, and even backported to older releases/versions/editions of the Linux kernel!) Linux kernel module that sets the user-preferred FHS/FSHS (LSB) - filesystem hierarchy (dir tree structure): 

	0 (default: default Linux FHS; UNIX/*NIX-compatible {possible POSIX & X11-server & maybe even Wayland/herbflustwm(?) compatibility, too?}), 
	1 (borrowed from GoboLinux ( http://en.wikipedia.org/wiki/GoboLinux ) & add ve4ernik's website links/Friends hyperlinks, influenced by MS Windows (XP? / 7+ / 8.1 / 10+) self-contained directories/folders filesystem hierarchy structure), 
	2 (same as 1) BUT with additional soft-linked(/hardlinked?/Linux-symlinked?) dirs to the default Linux FHS, and backup default-Linux-FHS dirs as they usually are - similar to system-protected (OS) files in the OS-folders 'win32'&'WoW64' dirs of MS Windows7(+) OS), 
	3 (new systemd-2020 user-management & /home/-dir management), 
	4 (user-programmed; including editable at pre-full-boot GRUB2-/etc.-CLI-menu), 
	5 (placeholder for non-systemd/systemd-free other initfreedom.org init-script (influenced by http://devuan.org , the systemd-less fork of Debian)...), 
	6 (same as 5) here, but with the 1) filesystem hierarchy), 
	7 (same as 5) but with the 2) filesystem hierarchy), 
	8-999999 = placeholders for user-specified, user-programmed (user-supplied, user-(in-)added) init scripts & user-supplied custom/mod Linux filesystem hierarchies (different from the default Linux FHS)...)...
	(NOTICE: Should a user need more than 999999 init-scripts/FHS-alternatives, they/one/he/she may just hook one of these 9-999999 files to a bash Terminal shellscripting script that loads a table list of EVEN MORE deeper 'directory-depth-traversal' files that are symlinks to further datetime-stamped/custom-filetitles-format still-ASCII-alphanumeric-numbered files which contain even more init-scripts/FHS-alternatives...
	
IMPORTANT NOTE:

When and if this idea is possibly implemented in the Linux kernel (it may even be backported to older versions of Linux!),
one must also add a full-featured explanatory in-source-code-embedded comments-section which cites the expanded&modified&clarified version of the above attempt at standardization
of the default-or-custom-FHS bootstrapping mechanism of the Linux kernel.
This also applies to including a bilingual (default US English + some translated UTF-8-encoded version into some other language) specification text as the above within
the GRUB2 menu & possibly into modified versions of non-`systemd` OS init-scripts...

IMPORTANT NOTE \#2: 

These options (0 to 8-999999) should be available to users when installing or upgrading a (GNU/)Linux distro, provided that
the user selects the 'ADVANCED (WARNING! BE CAREFUL ABOUT WHAT YOU ARE DOING!!!)' method of installation/upgrading, where
the user has the expanded list of installation options and disk-partition & OS-settings customizations.

Furthermore, the default ( 0) , a.k.a. 0 ) Linux FHS is to be set as a fallback mechanism (with a text warning & a .log file being generated on the Desktop if that
fallback happens) in case the rest of the numbered options fail to be activated/set/launched for some reason or some known/unknown error, etc.

In addition, it must be noted that one must also supply an auto-regeneration mechanism that auto-backups the main master-file with the above customize-FHS+init-script mechanism,
and that auto-backup should be generated/copied in at least 3 different locations and be (possibly read-only unless you manually change the file permissions!) human-readable.

Lastly, it is highly recommended that the main master-file which is in some Linux kernel module (?) (or implemented as FUSE??? Or just hard-coded into the Linux kernel tree?)
always includes some universally-compatible .sh script that (re)translates the filepaths when a user switches between one of the numbered options in the above list of selectable/set-table
combos of 'FHS-alternatives + init-scripts (& /home/ dir(rectory) management mechanisms also added there - like with the 2020 `systemd` bloatware hacks that we are seeing being added in...)'. That .sh script must also utilize quotes in the absolute/relative filepath (re)translation mechanism that it represents - so as to avoid any CLI problems due to filepaths including non-standard or not-okay text characters (like whitespaces, tabs, Unicode characters, non-printable ASCII control characters, etc.)...

The last four pieces of recommended advice is to ensure backward(s)-compatibility and forward(s)-compatibility!!!

## Relevant hyperlinks/references:

1. http://initfreedom.org & http://devuan.org

2. https://github.com/systemd/systemd

3. https://www.techrepublic.com/google-amp/article/linux-home-directory-management-is-about-to-undergo-major-change/

4. The dreaded behemoth mammoth of an init-script --- `systemd` --- is taking over Linux (especially Debian&Debian-derived Linux distros!) like a feature-overbloat/feature-creepism&overengineering&spaghetti-code monster from the Church of the Flying Spaghetti Monster!!! :P OH NOES!!!

https://www.techrepublic.com/google-amp/article/linux-home-directory-management-is-about-to-undergo-major-change/

5. https://www.techrepublic.com/article/beyond-the-pc-lenovos-ambitious-plan-for-the-future-of-computing/#ftag=CAD-00-10aag7f

6. ...

7. ...

8. ...

9. ...

10. ...

https://www.google.com/search?q=can+a+linux+kernel+module+load+before+the+OS+init+script&oq=can+a+linux+kernel+module+load+before+the+OS+init+script&aqs=chrome..69i57.24136j0j4&client=ms-android-motorola-rev2&sourceid=chrome-mobile&ie=UTF-8

https://en.wikipedia.org/w/index.php?title=Linux_startup_process&oldid=947770059

https://www.google.com/search?q=can+a+linux+kernel+module+load+before+the+OS+init+script&oq=can+a+linux+kernel+module+load+before+the+OS+init+script&aqs=chrome..69i57.24136j0j4&client=ms-android-motorola-rev2&sourceid=chrome-mobile&ie=UTF-8

https://opensource.com/article/18/5/how-load-or-unload-linux-kernel-module

https://stackoverflow.com/questions/23741843/force-linux-kernel-to-load-before-processing-init

https://wiki.archlinux.org/index.php/Kernel_module

https://www.cyberciti.biz/faq/linux-how-to-load-a-kernel-module-automatically-at-boot-time/

https://unix.stackexchange.com/questions/342417/explicit-kernel-module-load-at-startup

https://www.oreilly.com/library/view/linux-device-drivers/0596005903/ch02.html

https://www.tldp.org/LDP/lkmpg/2.6/lkmpg.pdf

https://books.google.bg/books?id=RpFf5yXdXu0C&pg=PA320&lpg=PA320&dq=can+a+linux+kernel+module+load+before+the+OS+init+script&source=bl&ots=FT8heJ8f-O&sig=ACfU3U0tmoycnWDJQIrEtWd4xcMmBWq9lw&hl=bg&sa=X&ved=2ahUKEwj36cqV8efpAhXUlFwKHbdcBHAQ6AEwEXoECAkQAQ#v=onepage&q=can%20a%20linux%20kernel%20module%20load%20before%20the%20OS%20init%20script&f=false



...

