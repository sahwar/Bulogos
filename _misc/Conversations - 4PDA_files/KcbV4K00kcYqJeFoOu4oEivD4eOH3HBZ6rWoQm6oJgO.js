//============================================
// Global Announcements mod for IPB 2.1 - 2.3
// Version 2.6
//
// (c) 2005-2007, DINI
//
//--------------------------------------------
//
// JAVA SCRIPT FUNCTIONS
//
//============================================

function toggleglobalmess( fid, add, tm ) {

function getCookie(name) {
 var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
 return matches?decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value) {
 value = encodeURIComponent(value);
 var updatedCookie = name + "=" + value;
 updatedCookie+="; expires=Wed, 1 Jan 2030 00:00:00 GMT";
 document.cookie=updatedCookie
}
function sd(a){a=document.getElementById(a);a&&(a.style.display="")}
function hd(a){a=document.getElementById(a);a&&(a.style.display="none")}

	if ( add )
	{
		sd('gc_'+fid);
		hd('go_'+fid);
	}
	else
	{
		sd('go_'+fid);
		hd('gc_'+fid);
	}

	setCookie('globalmesscollapse', '1'+add);
	setCookie('globalmessupdtime', tm || (new Date).getTime()/1000 );
}