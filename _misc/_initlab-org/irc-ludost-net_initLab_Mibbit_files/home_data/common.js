/**
 * Tell the main client to execute a cmd...
 *
 */
function send_mibbit_cmd(cmd) {
	var c = ";" + document.cookie;
	if (c.indexOf(";mc=")==-1 && c.indexOf(" mc=")==-1) return true;

    var exi = [];

    var q = c.indexOf(";cmd=");
    if (q==-1) q = c.indexOf(" cmd=");
    if (q!=-1) {
        var qe = c.indexOf(";", q+5);
        var qval = decodeURIComponent(c.substring(q+5, qe==-1?c.length:qe));
        exi = JSON.parse(qval);
	}

    exi.push(cmd);                                  // Push it on the array as an extra cmd

    var mce = new Date();
    mce = new Date(mce.getTime() + (1000*20));       // Expire in 20 seconds
    document.cookie = "cmd="+encodeURIComponent(JSON.stringify(exi))+"; path=/; domain=.mibbit.com; expires=" + mce.toGMTString();
	return false;
}
