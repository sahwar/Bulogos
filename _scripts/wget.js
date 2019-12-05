/*
A simple JavaScript/JScript(?) file downloader for single files (ONLY supports HTTP, not HTTPS!).
The code is taken from this webpage:
https://superuser.com/a/536400

HOW TO USE
Save this entire text file as wget.js and simply call

cmd.exe -> cscript /nologo wget.js http://example.com
or
powershell.exe -> cscript /nologo wget.js http://example.com
---
edited Jan 15 '13 at 8:48
community wiki
Written by user190042 
https://superuser.com/posts/536400/revisions
---
*/

var WinHttpReq = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
WinHttpReq.Open("GET", WScript.Arguments(0), /*async=*/false);
WinHttpReq.Send();
WScript.Echo(WinHttpReq.ResponseText);

/* NOTES

shareimprove this answer
edited Jan 15 '13 at 8:48
community wiki

user190042

    What language is this script in?Looks useful to my current task. I'd like to find more reference documentation. Doesn't look quite like vb – G-. May 30 '14 at 14:54
    1
    Useful for single files. Needs enhancing for recursive download and https. – opticyclic Nov 26 '14 at 19:07
    4
    @G-. I'm late to the party, but that's JavaScript. – prooffreader Oct 21 '15 at 20:52
    I tried to do that for database.clamav.net/daily.cvd, but it downloaded only 88kB of 44MB :( – kokbira Oct 10 '17 at 16:27

add a comment
*/