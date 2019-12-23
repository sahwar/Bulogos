// used from bindows pack
// http://www.i-see.net/bindows/
// Basic cookie handling

function CookieManager() {}

CookieManager.setCookie = function (sName, sValue, nDays) {
	var expires = "";
	if (typeof nDays == "number") {
		var d = new Date();
		d.setTime(d.getTime() + nDays * 24 * 60 * 60 * 1000);
		expires = "; expires=" + d.toGMTString();
	}

	document.cookie = sName + "=" + escape(sValue) + expires + "; path=/";
};

CookieManager.getCookie = function (sName) {
	var re = new RegExp("(\;|^)[^;]*(" + sName + ")\=([^;]*)(;|$)");
	var res = re.exec(document.cookie);
	return res != null ? unescape(res[3]) : null;
};

CookieManager.removeCookie = function (name) {
	CookieManager.setCookie(name, "", -1);
};
