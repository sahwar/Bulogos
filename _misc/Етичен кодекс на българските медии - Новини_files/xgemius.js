// (c) by Gemius SA - gemius main script
// gAudience
// ver. 3.17

if (typeof gemius_cmpclient == "undefined") {
	gemius_cmpclient = {
		gemius_vendor_id : 328,
		cmp_frame : null,
		cmp_callbacks : {},
		add_event : function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		},
		find_cmp_frame : function(locator) {
			var f = window;
			while (!gemius_cmpclient.cmp_frame) {
				try {
					if(f.frames[locator]) {
						gemius_cmpclient.cmp_frame = f;
						return true;
					}
				} catch(e) {}
				if (f === window.top) break;
				f = f.parent;
			}
			return false;
		},
		add_cmp_event : function(return_field) {
			gemius_cmpclient.add_event(window,"message",function(event) {
				try {
					var json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
					if (json[return_field]) {
						var i = json[return_field];
						gemius_cmpclient.cmp_callbacks[i.callId](i.returnValue, i.success);
					}
				} catch(e) {}
			});
		},
		find_cmp_v1: function() {
			if (gemius_cmpclient.__cmp)
				return true;
			if (typeof window.__cmp == 'function') {
				gemius_cmpclient.__cmp = function() {
					window.__cmp.apply(this, arguments)
				}
				return true;
			}
			if (!gemius_cmpclient.find_cmp_frame("__cmpLocator"))
				return false;
			gemius_cmpclient.add_cmp_event("__cmpReturn");
			gemius_cmpclient.__cmp = function(cmd, arg, callback) {
				var callId = Math.random() + '';
				var msg = {
					__cmpCall: {
						command: cmd,
						parameter: arg,
						callId: callId,
					},
				};
				gemius_cmpclient.cmp_callbacks[callId] = callback;
				gemius_cmpclient.cmp_frame.postMessage(msg, '*');
			}
			return true;
		},
		find_cmp_v2: function() {
			if (gemius_cmpclient.__tcfapi)
				return true;
			if (typeof window.__tcfapi == 'function') {
				gemius_cmpclient.__tcfapi = function() {
					window.__tcfapi.apply(this, arguments)
				}
				return true;
			}
			if (!gemius_cmpclient.find_cmp_frame("__tcfapiLocator"))
				return false;
			gemius_cmpclient.add_cmp_event("__tcfapiReturn");
			gemius_cmpclient.__tcfapi = function(cmd, version, callback, arg) {
				var callId = Math.random() + '';
				var msg = {
					__tcfapiCall: {
						command: cmd,
						parameter: arg,
						version: version,
						callId: callId,
					},
				};
				gemius_cmpclient.cmp_callbacks[callId] = callback;
				gemius_cmpclient.cmp_frame.postMessage(msg, '*');
			}
			return true;
		},
		find_cmp : function() {
			if (gemius_cmpclient.find_cmp_v2())
				return true;
			return gemius_cmpclient.find_cmp_v1();
		},
		has_consent_v1 : function(data,purposes) {
			try {
				if (!data.vendorConsents[gemius_cmpclient.gemius_vendor_id])
					return false;
				for (var i=0; i<purposes.length; i++) {
					if (!data.purposeConsents[purposes[i]])
						return false;
				}
			} catch(e) {
				return false;
			}
			return true;
		},
		cmp_callback_v1 : function(callback,purposes) {
			var called = false;
			var cmp_callback = function(data, success) {
				if (called) return;
				called = true;
				callback(success && gemius_cmpclient.has_consent_v1(data, purposes));
			}
			return cmp_callback;
		},
		has_consent_v2 : function(tcData,purposes) {
			try {
				if (typeof tcData.gdprApplies == 'boolean' && !tcData.gdprApplies)
					return true;
				if (!tcData.vendor.consents[gemius_cmpclient.gemius_vendor_id])
					return false;
				for (var i=0; i<purposes.length; i++) {
					if (purposes[i] == 1 && tcData.purposeOneTreatment === true) continue;
					var restrict = 1;
					try {
						restrict = tcData.publisher.restrictions[purposes[i]][gemius_cmpclient.gemius_vendor_id];
					} catch(e) {}
					if (!tcData.purpose.consents[purposes[i]] || restrict == 0)
						return false;
				}
			} catch(e) {
				return false;
			}
			return true;
		},
		cmp_callback_v2 : function(callback,purposes) {
			var called = false;
			var cmp_callback = function(tcData, success) {
				if (success && ((tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') ||
					(tcData.eventStatus === 'cmpuishown' && typeof tcData == 'string' && tcData.tcString.length > 0 && tcData.purposeOneTreatment === true))) {
					gemius_cmpclient.__tcfapi('removeEventListener', 2, function(success) {
						if (called) return;
						called = true;
						callback(success && gemius_cmpclient.has_consent_v2(tcData, purposes));
					}, tcData.listenerId);
				}
			}
			return cmp_callback;
		},
		get_consent : function(callback,purposes) {
			if (typeof gemius_cmpclient.__tcfapi == 'function') {
				gemius_cmpclient.__tcfapi("addEventListener", 2, gemius_cmpclient.cmp_callback_v2(callback, purposes[2]));
			} else if (typeof gemius_cmpclient.__cmp == 'function') {
				gemius_cmpclient.__cmp("getVendorConsents", [gemius_cmpclient.gemius_vendor_id], gemius_cmpclient.cmp_callback_v1(callback, purposes[1]));
			} else {
				callback(false);
			}
		}
	}
}


if (typeof gemius_hcconn == "undefined") {
	gemius_hcconn = {
		version : 317,
		lsdata : "",
		fpdata : "",
		gdprdisabled : 0,
		gdprdata : [],
		gdprversion : null,
		cmp_found : 0,
		gdpr_found : 0,
		event_identifier : null,
		current_receiver : null,
		waiting_for_fpdata : 1,
		waiting_for_lsdata : 1,
		params_ready_called : 0,
		fpdata_ready_called : 0,
		fpdata_callbacks : [],
		gsconf_added : 0,
		waiting_on_prerender : 1,
		waiting_for_consent: 1,
		has_consent : null,
		closing : 0,
		visapi_s : "",
		visapi_h : "",
		visapi_c : "",
		loadinit : 0,
		fto : null,
		addto : null,
		sto : null,
		cmpto : null,
		ltime : 0,
		lsgetframe : null,
		sonar_data : [],
		timerevents : [],
		requests : [],
		images : [],
		state : 0,
		flashv : "",
		src : (document.currentScript && document.currentScript.src)?document.currentScript.src:null,
		ssl : (document.location && document.location.protocol && document.location.protocol=='https:')?1:0,
		hc : (typeof gemius_hitcollector === 'string')?gemius_hitcollector:(typeof pp_gemius_hitcollector === 'string')?pp_gemius_hitcollector:'gabg.hit.gemius.pl',
		dnt : (((typeof gemius_dnt != 'undefined') && gemius_dnt) || ((typeof pp_gemius_dnt != 'undefined') && pp_gemius_dnt))?1:0,
		use_cmp : (((typeof gemius_use_cmp != 'undefined') && gemius_use_cmp) || ((typeof pp_gemius_use_cmp != 'undefined') && pp_gemius_use_cmp))?1:0,
		cmp_purposes_overrides : (typeof gemius_cmp_purposes != 'undefined')?gemius_cmp_purposes:(typeof pp_gemius_cmp_purposes != 'undefined')?pp_gemius_cmp_purposes:null,
		dmp_purpose : (typeof gemius_dmp_purpose === 'boolean')?gemius_dmp_purpose:(typeof pp_gemius_dmp_purpose === 'boolean')?pp_gemius_dmp_purpose:false,
		gdpr_applies : (typeof gemius_gdpr_applies != 'undefined')?gemius_gdpr_applies:(typeof pp_gemius_gdpr_applies != 'undefined')?pp_gemius_gdpr_applies:null,
		gdpr_consent : (typeof gemius_gdpr_consent != 'undefined')?gemius_gdpr_consent:(typeof pp_gemius_gdpr_consent != 'undefined')?pp_gemius_gdpr_consent:null,
		explicit_consent : (typeof gemius_consent === 'boolean')?gemius_consent:(typeof pp_gemius_consent === 'boolean')?pp_gemius_consent:null,
		use_gsync : (typeof gemius_disable_gsync == 'boolean')?!gemius_disable_gsync:(typeof pp_gemius_disable_gsync == 'boolean')?!pp_gemius_disable_gsync:false,
		add_event : function(obj,type,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(type, fn, false);
			} else if (obj.attachEvent) {
				obj.attachEvent('on'+type, fn);
			}
		},
		remove_script : function(elementid,url) {
			var el = document.getElementById(elementid);
			if (el) {
				if (url) {
					try {
						if (typeof gemius_notify != 'undefined') {
							gemius_notify(url);
						} else if (typeof pp_gemius_notify != 'undefined') {
							pp_gemius_notify(url);
						}
					} catch (e) {}
				}
				try {
					el.parentNode.removeChild(el);
				} catch(e) {}
			}
		},
		append_script : function(url,finishedfn,notify) {
			var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
			try {
				var gt=document.createElement('script'),s=document.getElementsByTagName('script')[0];
				if (finishedfn!=null) {
					gemius_hcconn.add_event(gt,'load',finishedfn);
					gemius_hcconn.add_event(gt,'error',finishedfn);
					gemius_hcconn.add_event(gt,'readystatechange',function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') finishedfn(); });
				}
				gemius_hcconn.add_event(gt,'load',function() { gemius_hcconn.remove_script(rndid,notify?url:null); });
				gemius_hcconn.add_event(gt,'error',function() { gemius_hcconn.remove_script(rndid,null); });
				gemius_hcconn.add_event(gt,'readystatechange',function() { if (!gt.readyState || gt.readyState === 'loaded' || gt.readyState === 'complete') gemius_hcconn.remove_script(rndid,notify?url:null); });
				gt.setAttribute('id',rndid);
				gt.setAttribute('defer','defer');
				gt.setAttribute('async','async');
				gt.setAttribute('type','text/javascript');
				gt.setAttribute('src',url);
				if (s) {
					s.parentNode.insertBefore(gt,s);
				} else if (document.body) {
					document.body.appendChild(gt);
				}
			} catch (e) {}
		},
		xdot_loaded : function() {
			if (typeof gemius_open=='undefined') {
				gemius_hcconn.state = 0;
			}
		},
		sendhits : function(lsadd) {
			var i,j;
			if (gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
				for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
					var robj = gemius_hcconn.requests[i];
					var url = (gemius_hcconn.hssl?'https://':'http://')+gemius_hcconn.hc+'/_';
					var d = new Date().getTime();
					var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
					var params = '&ltime='+gemius_hcconn.ltime+'&lsdata='+gemius_hcconn.lsdata+'&fpdata='+gemius_hcconn.fpdata+'&vis='+vis;
					if (gemius_hcconn.ssl==0 && lsadd!==null) {
						params += '&lsadd='+lsadd;
					}
					if (gemius_hcconn.has_consent!==true) {
						params += '&nc=1';
					} else if (gemius_hcconn.explicit_consent===true) {
						params += '&nc=0';
					}
					if (gemius_hcconn.closing) {
						url += (d+i)+'/redot.gif?l='+robj.vers+robj.req+params;
						if (typeof navigator.sendBeacon == "function") {
							navigator.sendBeacon(url);
						} else {
							var images_l = gemius_hcconn.images.length;
							gemius_hcconn.images[images_l]=new Image();
							gemius_hcconn.images[images_l].src = url;
						}
					} else if (gemius_hcconn.state>0 || robj.allowaddscript==0 || typeof gemius_open != 'undefined') {
						url += (d+i)+'/redot.js?l='+robj.vers+robj.req+params;
						gemius_hcconn.append_script(url,null,1);
					} else {
						url += (d+i)+'/rexdot.js?l='+robj.vers+robj.req+params;
						gemius_hcconn.state = 1;
						gemius_hcconn.append_script(url,gemius_hcconn.xdot_loaded,1);
					}
				}
				gemius_hcconn.requests = [];
			}
		},
		latehits : function() {
			if (gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.waiting_on_prerender==0) {
				if (gemius_hcconn.closing==0 && gemius_hcconn.ssl==0 && gemius_hcconn.lsdata!='' && gemius_hcconn.lsdata[0]!='-' && gemius_hcconn.lsgetframe) {
					if (gemius_hcconn.addto==null) {
						try {
							gemius_hcconn.lsgetframe.contentWindow.postMessage("_xx_gemius_get_add_xx_","*");
							gemius_hcconn.addto = setTimeout(gemius_hcconn.lsaddto,250);
						} catch (e) {
							gemius_hcconn.sendhits(null);
						}
					}
				} else {
					gemius_hcconn.sendhits(null);
				}
			}
		},
		lsaddto : function() {
			if (gemius_hcconn.addto!=null) {
				gemius_hcconn.addto = null;
				gemius_hcconn.sendhits(null);
			}
		},
		add_fpdata_callback : function(callback) {
			if (gemius_hcconn.fpdata_ready_called==0) {
				gemius_hcconn.fpdata_callbacks[gemius_hcconn.fpdata_callbacks.length] = callback;
			} else {
				try {
					callback(gemius_hcconn.fpdata);
				} catch (e) {}
			}
		},
		paramsready : function() {
			if (gemius_hcconn.fpdata_ready_called==0 && gemius_hcconn.waiting_for_fpdata==0) {
				gemius_hcconn.fpdata_ready_called = 1;
				for (var i=0 ; i<gemius_hcconn.fpdata_callbacks.length ; i++) {
					try {
						gemius_hcconn.fpdata_callbacks[i](gemius_hcconn.fpdata);
					} catch (e) {}
				}
			}
			if (gemius_hcconn.params_ready_called==0 && gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.waiting_for_lsdata==0) {
				var data = {'lsdata' : gemius_hcconn.lsdata, 'fpdata' : gemius_hcconn.fpdata};
				gemius_hcconn.params_ready_called = 1;
				try {
					if (typeof gemius_params_ready != 'undefined') {
						gemius_params_ready(data);
					} else if (typeof pp_gemius_params_ready != 'undefined') {
						pp_gemius_params_ready(data);
					}
				} catch (e) {}
			}
		},
		visibilitychanged : function() {
			if (document[gemius_hcconn.visapi_s]!='prerender' && gemius_hcconn.waiting_on_prerender) {
				gemius_hcconn.waiting_on_prerender = 0;
				setTimeout(gemius_hcconn.latehits,100);
			}
			gemius_hcconn.sonar_update();
		},
		unloadhit : function(robj,nr) {
			var url = (gemius_hcconn.hssl?'https://':'http://')+gemius_hcconn.hc+'/_';
			var d = new Date().getTime();
			var vis = (gemius_hcconn.visapi_h=='')?3:(document[gemius_hcconn.visapi_h])?2:1;
			var params = '&vis='+vis;
			params += '&fpdata='+((gemius_hcconn.waiting_for_fpdata==0 && gemius_hcconn.has_consent)?gemius_hcconn.fpdata:"-UNLOAD");
			params += '&lsdata='+((gemius_hcconn.waiting_for_lsdata==0 && gemius_hcconn.has_consent)?(gemius_hcconn.lsdata+'&ltime='+gemius_hcconn.ltime):"-UNLOAD");
			if (gemius_hcconn.has_consent!==true) {
				params += '&nc=1';
			} else if (gemius_hcconn.explicit_consent===true) {
				params += '&nc=0';
			}
			if (gemius_hcconn.closing) {
				url += (d+nr)+'/redot.gif?l='+robj.vers+params+robj.req;
				if (typeof navigator.sendBeacon == "function") {
					navigator.sendBeacon(url);
				} else {
					var images_l = gemius_hcconn.images.length;
					gemius_hcconn.images[images_l]=new Image();
					gemius_hcconn.images[images_l].src = url;
				}
			} else {
				url += (d+nr)+'/redot.js?l='+robj.vers+robj.req+params;
				gemius_hcconn.append_script(url,null,1);
			}
		},
		unload : function(closing) {
			try {
				var i;
				var uhits = gemius_hcconn.requests.length;
				var last = (!gemius_hcconn.closing && closing);
				gemius_hcconn.closing = (gemius_hcconn.closing>0 || closing)?1:0;
				if (gemius_hcconn.waiting_on_prerender==0) {
					for (i=0 ; i<gemius_hcconn.requests.length ; i++) {
						gemius_hcconn.unloadhit(gemius_hcconn.requests[i],i+10);
					}
					gemius_hcconn.requests = [];
				}
				if (last) {
					gemius_hcconn.sonar_update();
					if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
						gemius_hcconn.sonar_save();
					}
					if (typeof navigator.sendBeacon != "function" && uhits > 0) {
						var start = (new Date()).getTime();
						while (start+200>(new Date()).getTime());
					}
				}
			} catch (e) {}
		},
		getfpcookie : function() {
			gemius_hcconn.fpdata = '-TURNEDOFF';
			try {
				var cookies = document.cookie.split(';');
				var cookie_arr;
				for (var i=0; i<cookies.length ; i++) {
					cookie_arr = cookies[i].split('=');
					if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_64b') {
						gemius_hcconn.fpdata = cookie_arr[1].replace(/^\s+|\s+$/g,'');
						return;
					}
				}
			} catch (e) {}
		},
		setfpcookie : function() {
			var now = (new Date()).getTime();
			var exp = now+86400000000;
			if (gemius_hcconn.fpdata!='') {
				try { document.cookie = "__gfp_64b="+gemius_hcconn.fpdata+"; path=/"+((gemius_hcconn.fpcdomain)?("; domain="+gemius_hcconn.fpcdomain):"")+"; expires="+(new Date(exp)).toGMTString(); } catch (e) {}
			}
		},
		fpdata_loaded : function() {
			if (gemius_hcconn.sto!=null) {
				clearTimeout(gemius_hcconn.sto);
				gemius_hcconn.sto = null;
			}
			gemius_hcconn.setfpcookie();
			gemius_hcconn.getfpcookie();
			gemius_hcconn.waiting_for_fpdata = 0;
			gemius_hcconn.paramsready();
			gemius_hcconn.latehits();
		},
		addframe : function(ssl,file,args,rcvfn) {
			if (document.body) {
				gemius_hcconn.current_receiver = rcvfn;
				var url = 'http'+(ssl?'s':'')+'://ls.hit.gemius.pl/ls'+file+'.html'+args;
				if (rcvfn!=null) {
					gemius_hcconn.loadinit = (new Date()).getTime();
					if (gemius_hcconn.fto==null) {
						gemius_hcconn.fto = setTimeout(gemius_hcconn.frameto,10000);
					}
				}
				var rndid = 'gemius_hcconn_'+((new Date()).getTime())+'_'+Math.floor(Math.random()*100000000);
				var f = document.createElement('iframe');
				f.setAttribute('id',rndid);
				f.setAttribute('name','ls'+file+'frame');
				f.setAttribute('width',0);
				f.setAttribute('height',0);
				f.setAttribute('scrolling','no');
				f.setAttribute('sandbox','allow-scripts allow-same-origin');
				f.style.display="none";
				f.style.visibility="hidden";
				document.body.appendChild(f);
				f.setAttribute('src',url);
				if (file=="get" && ssl==0) {
					gemius_hcconn.lsgetframe = f;
				}
			} else {
				setTimeout(function(){gemius_hcconn.addframe(ssl,file,args,rcvfn);}, 100);
			}
		},
		frameto : function() {
			if (gemius_hcconn.fto!=null) {
				gemius_hcconn.fto = null;
				if (gemius_hcconn.lsdata=='') {
					gemius_hcconn.ltime = 10000;
					gemius_hcconn.lsdata = '-TIMEDOUT';
					gemius_hcconn.waiting_for_lsdata = 0;
					gemius_hcconn.paramsready();
					gemius_hcconn.latehits();
				}
			}
		},
		scriptto : function() {
			if (gemius_hcconn.sto!=null) {
				gemius_hcconn.sto = null;
				if (gemius_hcconn.fpdata!='' && gemius_hcconn.fpdata[0]!='-') {
					gemius_hcconn.setfpcookie();
					gemius_hcconn.getfpcookie();
				}
				if (gemius_hcconn.fpdata=='') {
					gemius_hcconn.fpdata = '-TIMEDOUT';
				}
				gemius_hcconn.waiting_for_fpdata = 0;
				gemius_hcconn.paramsready();
				gemius_hcconn.latehits();
			}
		},
		last_datareceiver : function(lsdata) {
			gemius_hcconn.current_receiver = null;
			gemius_hcconn.lsdata = lsdata;
			gemius_hcconn.waiting_for_lsdata = 0;
			gemius_hcconn.paramsready();
			gemius_hcconn.latehits();
		},
		second_datareceiver : function(data) {
			if (data.charAt(0)=='-' || data=='') {
				gemius_hcconn.addframe(1,'set','',gemius_hcconn.last_datareceiver);
			} else {
				gemius_hcconn.last_datareceiver(data);
			}
		},
		first_datareceiver : function(data) {
			var m = data.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
			var n = (new Date()).getTime();
			if (data.charAt(0)=='-' || data=='' || !m || m[2]<n) {
				gemius_hcconn.addframe(1,'get','',gemius_hcconn.second_datareceiver);
			} else {
				if (m) {
					data = m[1];
				}
				gemius_hcconn.last_datareceiver(data);
			}
		},
		msgreceiver : function(e) {
			if (typeof e.data=="string" && e.data.substr(0,15)=="_xx_gemius_xx_/") {
				if (gemius_hcconn.fto!=null) {
					clearTimeout(gemius_hcconn.fto);
					gemius_hcconn.fto = null;
					gemius_hcconn.ltime = (new Date()).getTime() - gemius_hcconn.loadinit;
				}
				if (gemius_hcconn.current_receiver!=null) {
					gemius_hcconn.current_receiver(e.data.substr(15));
				}
			}
			if (typeof e.data=="string" && e.data.substr(0,19)=="_xx_gemius_add_xx_/") {
				if (gemius_hcconn.addto!=null) {
					clearTimeout(gemius_hcconn.addto);
					gemius_hcconn.addto = null;
				}
				var lsadd = e.data.substr(19);
				gemius_hcconn.sendhits((lsadd=="-GETERR")?null:lsadd);
			}
		},
		getflashv : function() {
			var fv='-';
			if (typeof Error!='undefined') {
				var fo;
				try { fv=navigator.plugins["Shockwave Flash"].description; } catch (e) {}
				if (typeof ActiveXObject!="undefined") { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"); } catch(e) { try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"); fv="X"; fo.AllowScriptAccess="always"; } catch(e) { if (fv=="X") { fv="WIN 6,0,20,0"; }} try { fo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"); } catch(e) {} } if ((fv=="-" || fv=="X") && fo) { fv=fo.GetVariable("$version"); }}
			}
			return fv;
		},
		gdpr_params : function(first) {
			var url = '';
			if (gemius_hcconn.gdpr_applies != null) url+="&gdpr=" + (gemius_hcconn.gdpr_applies?"1":"0");
			if (gemius_hcconn.gdpr_consent != null) {
				url+="&gdpr_consent=" + ((typeof gemius_hcconn.gdpr_consent == "string")?gemius_hcconn.gdpr_consent:'');
			}
			if (first && url != '') url='?' + url.substring(1);
			return url;
		},
		cmp_purposes : function() {
			var purposes = {1:[1,5],2:[1,7,8,9,10]};
			try {
				function combine_cmp_purposes(purposes, cmp_purposes_overrides, add_dmp_purposes) {
					var purposes_v1_to_v2_translation = {1:[1],2:[3,5],3:[2,4,7],4:[6,8],5:[7,8,9]};
					var dmp_purposes = {1:[1,2,3,5],2:[1,2,3,4,5,7,8,9,10]};
					if (typeof cmp_purposes_overrides != 'undefined' && cmp_purposes_overrides != null) {
						if (cmp_purposes_overrides.constructor === Array) {
							purposes[1] = cmp_purposes_overrides;
							purposes[2] = [10];
							for (var i=0; i < purposes[1].length; i++) {
								v2_purposes = purposes_v1_to_v2_translation[purposes[1][i]];
								if (typeof v2_purposes != 'undefined') {
									purposes[2] = purposes[2].concat(v2_purposes);
								}
							}
						} else {
							for (version in cmp_purposes_overrides) {
								purposes[version] = cmp_purposes_overrides[version];
							}
						}
					}
					if (add_dmp_purposes) {
						for (version in dmp_purposes) {
							purposes[version] = purposes[version].concat(dmp_purposes[version]);
						}
					}
				}

				combine_cmp_purposes(purposes, gemius_hcconn.cmp_purposes_overrides, gemius_hcconn.dmp_purpose);
			} catch (e) {}
			return purposes;
		},
		parameters : function() {
			var d=document;
			var w=window;
			var href=new String(d.location.href);
			var ref;
			var f=0;
			var dd;
			if (d.referrer) { ref=new String(d.referrer); } else { ref=''; }
			if (typeof Error!='undefined') {
				try { f=(d==top.document)?1:2; if (typeof top.document.referrer=="string") { ref=top.document.referrer; } } catch(e) {f=3;}
			}
			try { if (ref=="" && typeof ia_document != "undefined" && ia_document.referrer) ref="https://" + (new String(ia_document.referrer));} catch(e) {}
			var url='&fr='+f+'&tz='+(new Date()).getTimezoneOffset();
			if (typeof encodeURIComponent != 'undefined') {
				url+='&fv='+encodeURIComponent(gemius_hcconn.flashv)+'&href='+encodeURIComponent(href.substring(0,499))+'&ref='+encodeURIComponent(ref.substring(0,499));
			}
			if (screen) {
				var s=screen;
				if (s.width) {
					if (s.deviceXDPI && s.deviceYDPI) {
						url+='&screen='+Math.floor(s.width*s.deviceXDPI/96.0)+'x'+Math.floor(s.height*s.deviceYDPI/96.0);
					} else {
						url+='&screen='+s.width+'x'+s.height;
					}
				}
				if (w.devicePixelRatio) url+='r'+Math.round((w.devicePixelRatio*1000));
				if (s.colorDepth) url+='&col='+s.colorDepth;
			}
			if (typeof w.innerWidth=='number') {
				url+='&window='+w.innerWidth+'x'+w.innerHeight;
			} else if ( ((dd = d.documentElement) && (dd.clientWidth || dd.clientHeight)) || ((dd = d.body) && (dd.clientWidth || dd.clientHeight)) ) {
				url+='&window='+dd.clientWidth+'x'+dd.clientHeight;
			}
			if (gemius_hcconn.cmp_found) {
				url+='&cmpf=1';
			}
			if (gemius_hcconn.gdpr_found) {
				url+='&gdprf=1';
			}
			return url;
		},
		array_to_string : function(arr,start) {
			var i,str;
			if (typeof arr == 'string') {
				return arr;
			}
			str = '';
			if (typeof arr.length != 'undefined') {
				for (i=start ; i<arr.length ; i++) {
					if (i>start) {
						str += '|';
					}
					str += ((new String(arr[i])).replace(/\|/g,'_'));
				}
			}
			return str;
		},
		internal_hit : function(allowaddscript,vers,id,evid,et,hsrc,sonar,extra) {
			var req = "";
			if (gemius_hcconn.event_identifier==null && id) {
				gemius_hcconn.event_identifier = id;
			}
			req += '&id='+id;
			if (typeof et != 'undefined') {
				req += '&et='+et;
			}
			if (typeof hsrc != 'undefined') {
				req += '&hsrc='+hsrc;
			}
			if (sonar) {
				req += '&initsonar=1';
				if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
					var cdata=gemius_hcconn.sonar_load(id,1);
					if (cdata[0]>=1) {
						var addparams=["_cnt="+cdata[0],"_dur="+cdata[1],"_vis="+cdata[2],"_freq="+cdata[3],"_evid="+cdata[4]];
						for (var i=0; i<addparams.length; i++) {
							if (extra.length>0) extra += '|';
							extra += ((new String(addparams[i])).replace(/\|/g,'_'));
						}
					}
				}
			}
			if (typeof extra != 'undefined' && typeof encodeURIComponent != 'undefined') {
				req += '&extra='+encodeURIComponent(extra.substring(0,1999));
			}
			req += '&eventid='+evid+gemius_hcconn.parameters();
			gemius_hcconn.requests[gemius_hcconn.requests.length] = {req:req,allowaddscript:allowaddscript,vers:vers};
			gemius_hcconn.latehits();
		},
		timer : function() {
			var i;
			for (i=0 ; i<gemius_hcconn.timerevents.length ; i++) {
				gemius_hcconn.internal_hit(0,103,gemius_hcconn.timerevents[i],0,"sonar");
			}
		},
		gtimer_add : function(id) {
			gemius_hcconn.internal_hit(0,103,id,0,"sonar");
			gemius_hcconn.timerevents[gemius_hcconn.timerevents.length] = id;
		},
		sonar_update : function() {
			var i;
			for (i=0; i<gemius_hcconn.sonar_data.length; i++) {
				var data=gemius_hcconn.sonar_data[i];
				var time=((new Date()).getTime()) - data["lvchange"];
				if (time < 0) time = 0;
				if (data["dur"] + time > 24*3600*1000) time = 24*3600*1000 - data["dur"];
				if (data["lvstate"] == "visible") {
					data["dur"] += time;
					if (time < 4000) data["vdur"] += time;
				} else if (data["lvstate"] == "hidden" || !data["lvstate"]) {
					data["dur"] += time;
				}
				data["lvchange"] = ((new Date()).getTime());
				data["lvstate"] = (gemius_hcconn.visapi_s?document[gemius_hcconn.visapi_s]:"");
			}
		},
		sonar_add : function(identifier,evid,freq,extra) {
				gemius_hcconn.sonar_update();
				var data={};
				data["id"]=identifier;
				data["evid"]=evid;
				data["freq"]=freq;
				data["extra"]=extra;
				data["to"]=null;
				data["dur"]=((gemius_hcconn.sonar_data.length>0)?gemius_hcconn.sonar_data[0]["dur"]:0);
				data["vdur"]=((gemius_hcconn.sonar_data.length>0)?gemius_hcconn.sonar_data[0]["vdur"]:0);
				data["lvchange"] = ((new Date()).getTime());
				data["lvstate"] = (gemius_hcconn.visapi_s?document[gemius_hcconn.visapi_s]:"");
				data["linterval"] = ((new Date()).getTime());
				data["sdur"] = 0;
				if (identifier && evid && freq>0) {
					var fun=(function(sid){return function(){gemius_hcconn.sonar(sid);};}(gemius_hcconn.sonar_data.length));
					data["to"]=setInterval(fun, 1000);
				}
				gemius_hcconn.sonar_data[gemius_hcconn.sonar_data.length] = data;
		},
		sonar : function(sid) {
			var data, prob;
			gemius_hcconn.sonar_update();
			data=gemius_hcconn.sonar_data[sid];
			prob=(((new Date()).getTime()) - data["linterval"])/1000; 
			data["linterval"]=((new Date()).getTime());
			while (prob>0) {
				if (data["sdur"]<24*3600 && prob<=4 && data["lvstate"]=="visible" && Math.random() < prob/data["freq"]) {
					gemius_hcconn.internal_hit(0,109,data["id"],data["evid"],"smpsonar",0,0,"_ASF="+data["freq"]+(data["extra"]?("|"+data["extra"]):""));
				}
				data["sdur"] += Math.min(prob,data["freq"]);
				prob -= data["freq"];
			}
		},
		sonar_save : function() {
			var exp = ((new Date()).getTime())+7200000;
			for (var i=0; i<gemius_hcconn.sonar_data.length; i++) {
				var data=gemius_hcconn.sonar_data[i];
				var cdata=gemius_hcconn.sonar_load(data["id"], 0);
				if (data["id"] && gemius_hcconn.fpcdomain) {
					var value = "__gfp_"+data["id"]+"="+(1+cdata[0])+"|"+(data["dur"]+cdata[1])+"|"+(data["vdur"]+cdata[2])+"|"+data["freq"]+"|"+data["evid"]+"|"+gemius_hcconn.fpcdomain;
					try { document.cookie = value + "; path=/; domain="+gemius_hcconn.fpcdomain+"; expires="+(new Date(exp)).toGMTString(); } catch (e) {}
				}
			}
		},
		sonar_load : function(id,del) {
			try {
				var cookies = document.cookie.split(';');
				for (var i=0; i<cookies.length ; i++) {
					var cookie_arr = cookies[i].split('=');
					if (cookie_arr[0].replace(/^\s+|\s+$/g,'')=='__gfp_'+id) {
						var data = cookie_arr[1].replace(/^\s+|\s+$/g,'').split('|',6);
						if (data.length == 6) {
							if (del) try{document.cookie = "__gfp_"+id+"=~; path=/; domain="+data[5]+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;";} catch(e) {}
							return [parseInt(data[0]), parseInt(data[1]), parseInt(data[2]), parseInt(data[3]), parseInt(data[4])];
						}
					}
				}
			} catch (e) {
			}
			return [0,0,0,0,0];
		},
		gdprdata_loaded : function() {
			try {
				if (gemius_hcconn.gdprdisabled) {
					gemius_hcconn.consent_loaded(true);
					return;
				}

				var purposes = gemius_hcconn.cmp_purposes()[gemius_hcconn.gdprversion];
				if (typeof purposes == "undefined") {
					gemius_hcconn.consent_loaded(false);
					return;
				}

				for (var i=0; i<purposes.length; ++i) {
					if (!gemius_hcconn.gdprdata[purposes[i]-1]) {
						gemius_hcconn.consent_loaded(false);
						return;
					}
				}
			} catch (e) {
				gemius_hcconn.consent_loaded(false);
				return;
			}
			gemius_hcconn.consent_loaded(true);
		},
		consent_loaded : function(consent) {
			if (gemius_hcconn.cmpto!=null) {
				clearTimeout(gemius_hcconn.cmpto);
				gemius_hcconn.cmpto = null;
				gemius_hcconn.waiting_for_consent = 0;
				gemius_hcconn.has_consent = consent?true:false;
				if (gemius_hcconn.has_consent) {
					if (gemius_hcconn.waiting_for_fpdata) {
						gemius_hcconn.load_fpdata();
					}
					if (gemius_hcconn.waiting_for_lsdata) {
						gemius_hcconn.load_lsdata();
					}
					gemius_hcconn.load_gsconf();
				} else {
					gemius_hcconn.fpdata = '-NOCONSENT';
					gemius_hcconn.lsdata = '-NOCONSENT';
					gemius_hcconn.waiting_for_fpdata = 0;
					gemius_hcconn.waiting_for_lsdata = 0;
					gemius_hcconn.paramsready();
				}
				gemius_hcconn.latehits();
			}
		},
		consentto : function() {
			if (gemius_hcconn.cmpto!=null) {
				gemius_hcconn.cmpto = null;
				gemius_hcconn.waiting_for_consent = 0;
				gemius_hcconn.has_consent = false;
				gemius_hcconn.fpdata = '-CMPTIMEDOUT';
				gemius_hcconn.lsdata = '-CMPTIMEDOUT';
				gemius_hcconn.waiting_for_fpdata = 0;
				gemius_hcconn.waiting_for_lsdata = 0;
				gemius_hcconn.paramsready();
				gemius_hcconn.latehits();
			}
		},
		ghit : function(allowaddscript,vers,args,evid,hsrc,sonar) {
			if (args.length>0) {
				gemius_hcconn.internal_hit(allowaddscript,vers,args[0],evid,"view",hsrc,sonar,gemius_hcconn.array_to_string(args,1));
			}
		},
		gevent : function(allowaddscript,vers,args,evid,hsrc,sonar) {
			var pos = 0;
			var et = "view";
			if (args.length>1) {
				var m = (new String(args[0])).match('^_([a-zA-Z0-9]+)_$');
				if (m) {
					et = m[1];
					pos = 1;
				}
			}
			if (args.length>pos) {
				if (!args[pos] && gemius_hcconn.event_identifier != null) {
					args[pos] = gemius_hcconn.event_identifier;
				}
				if (args[pos]) {
					gemius_hcconn.internal_hit(allowaddscript,vers,args[pos],evid,et,hsrc,sonar,gemius_hcconn.array_to_string(args,pos+1));
				}
			}
		},
		addscripthit : function() { gemius_hcconn.ghit(1,106,arguments,0,2,0); },
		plainhit : function() { gemius_hcconn.ghit(0,107,arguments,0,2,0); },
		addscriptevent : function() { gemius_hcconn.gevent(1,106,arguments,0,3,0); },
		plainevent : function() { gemius_hcconn.gevent(0,107,arguments,0,3,0); },
		pendingdata : function(arr,fn) {
			var i;
			if (typeof window[arr] != 'undefined') {
				for (i=0 ; i<window[arr].length ; i++) {
					fn.apply(this,window[arr][i]);
				}
				window[arr]=[];
			}
		},
		sendpendingdata : function() {
			gemius_hcconn.pendingdata('pp_gemius_hit_pdata',gemius_hcconn.addscripthit);
			gemius_hcconn.pendingdata('gemius_hit_pdata',gemius_hcconn.plainhit);
			gemius_hcconn.pendingdata('pp_gemius_event_pdata',gemius_hcconn.addscriptevent);
			gemius_hcconn.pendingdata('gemius_event_pdata',gemius_hcconn.plainevent);
			gemius_hcconn.pendingdata('gemius_shits',gemius_hcconn.addscripthit);
			gemius_hcconn.pendingdata('gemius_phits',gemius_hcconn.plainhit);
			gemius_hcconn.pendingdata('gemius_sevents',gemius_hcconn.addscriptevent);
			gemius_hcconn.pendingdata('gemius_pevents',gemius_hcconn.plainevent);
		},
		findvisapi : function() {
			var p = ['moz','webkit','ms','o'];
			var i;
			if (typeof document.hidden != 'undefined') {
				gemius_hcconn.visapi_h = 'hidden';
				gemius_hcconn.visapi_s = 'visibilityState';
				gemius_hcconn.visapi_c = 'visibilitychange';
			} else {
				for (i in p) {
					if (typeof document[p[i]+'Hidden'] != 'undefined') {
						gemius_hcconn.visapi_h = p[i]+'Hidden';
						gemius_hcconn.visapi_s = p[i]+'VisibilityState';
						gemius_hcconn.visapi_c = p[i]+'visibilitychange';
					}
				}
			}
		},
		load_fpdata : function() {
			if (gemius_hcconn.waiting_for_consent==0) {
				var domain = new String(document.location.hostname);
				var hcdomain = "hit.gemius.pl";
				if (domain == hcdomain || domain.substr(-hcdomain.length-1) == ("."+hcdomain)) {
					gemius_hcconn.fpdata = '';
					gemius_hcconn.fpcdomain = '';
					gemius_hcconn.fpdata_loaded();
				} else {
					var url = (gemius_hcconn.hssl?'https://':'http://')+gemius_hcconn.hc+'/fpdata.js?href='+domain;
					gemius_hcconn.sto = setTimeout(gemius_hcconn.scriptto,10000);
					gemius_hcconn.append_script(url,gemius_hcconn.fpdata_loaded,0);
				}
			}
		},
		load_lsdata : function() {
			if (gemius_hcconn.waiting_for_consent==0) {
				gemius_hcconn.add_event(window,'message',gemius_hcconn.msgreceiver);
				if (gemius_hcconn.ssl) {
					gemius_hcconn.addframe(1,'get','',gemius_hcconn.second_datareceiver);
				} else {
					gemius_hcconn.addframe(0,'get','',gemius_hcconn.first_datareceiver);
				}
			}
		},
		getchromever : function() {
			if (!!window.chrome && (typeof navigator.userAgent == 'string')) {
				var ver = navigator.userAgent.match(/(Chrom(e|ium)|CriOS)\/([0-9]+)\./);
				return (ver==null)?-1:parseInt(ver[3]);
			}
			return -1;
		},
		getanticache : function() {
			var dt = new Date();
			var v = new Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),4).getTime()/(3600*1000);
			if (dt.getDay() != 0 || dt.getHours() >= 4) v += (7-dt.getDay())*24;
			return v;
		},
		gsconf_loaded : function() {
			if (typeof gemius_gsconf=="object" && gemius_gsconf!=null && gemius_gsconf.publishers && typeof gemius_hcconn.src == 'string') {
				var url = new URL(gemius_hcconn.src);
				url = url.origin + url.pathname.substr(0, url.pathname.lastIndexOf('/'));
				url += '/mgemius.js?gsver='+gemius_hcconn.version+'&v='+gemius_hcconn.getanticache();
				gemius_hcconn.append_script(url,null,0);
			}
		},
		load_gsconf : function() {
			if (gemius_hcconn.use_gsync && gemius_hcconn.gsconf_added == 0) {
				gemius_hcconn.gsconf_added = 1;
				var domain = new String(document.location.hostname);
				var url = (gemius_hcconn.hssl?'https://':'http://')+gemius_hcconn.hc+'/gsconf.js?gst=parent&href='+domain+'&gsver='+gemius_hcconn.version+'&v='+gemius_hcconn.getanticache();
				gemius_hcconn.append_script(url,gemius_hcconn.gsconf_loaded,0);
			}
		},
		init : function() {
			setInterval(gemius_hcconn.timer,60*1000);
			gemius_hcconn.hssl = (gemius_hcconn.ssl||gemius_hcconn.getchromever()>=67)?1:0;
			gemius_hcconn.flashv = gemius_hcconn.getflashv();
			if ((typeof gemius_test_sonar != 'undefined') || (typeof pp_gemius_test_sonar != 'undefined')) {
				gemius_hcconn.waiting_for_fpdata = 1;
			} else {
				if (gemius_hcconn.dnt==0 && gemius_hcconn.explicit_consent!==false) {
					gemius_hcconn.getfpcookie();
					gemius_hcconn.waiting_for_fpdata = ((gemius_hcconn.fpdata.length>0 && gemius_hcconn.fpdata[0]=='-') || gemius_hcconn.fpdata=='')?1:0;
				} else {
					gemius_hcconn.waiting_for_fpdata = 0;
					gemius_hcconn.fpdata = "-DNT";
				}
			}
			try {
				if (gemius_hcconn.dnt==0 && gemius_hcconn.explicit_consent!==false) {
					gemius_hcconn.waiting_for_lsdata = (typeof window.postMessage != 'undefined' && typeof localStorage != 'undefined' && localStorage != null)?1:0;
					if (gemius_hcconn.waiting_for_lsdata==0) {
						gemius_hcconn.lsdata='-NOTSUP';
					}
				} else {
					gemius_hcconn.waiting_for_lsdata = 0;
					gemius_hcconn.lsdata = "-DNT";
				}
			} catch (e) {
				gemius_hcconn.waiting_for_lsdata = 0;
				gemius_hcconn.lsdata='-TURNEDOFF';
			}
			if (gemius_hcconn.dnt==0 && gemius_hcconn.explicit_consent!==false) {
				if (gemius_hcconn.explicit_consent===null && gemius_hcconn.use_cmp && gemius_cmpclient.find_cmp()) {
					gemius_hcconn.cmp_found = 1;
					gemius_hcconn.cmpto = setTimeout(gemius_hcconn.consentto,10000);
					gemius_cmpclient.get_consent(gemius_hcconn.consent_loaded,gemius_hcconn.cmp_purposes());
				} else if (gemius_hcconn.explicit_consent===null && gemius_hcconn.gdpr_params() != '') {
					gemius_hcconn.gdpr_found = 1;
					gemius_hcconn.cmpto = setTimeout(gemius_hcconn.consentto,10000);
					var url = (gemius_hcconn.hssl?'https://':'http://')+gemius_hcconn.hc+'/gdprdata.js' + gemius_hcconn.gdpr_params(true);
					gemius_hcconn.append_script(url,gemius_hcconn.gdprdata_loaded,0);
				} else {
					gemius_hcconn.waiting_for_consent = 0;
					gemius_hcconn.has_consent = true;
					if (gemius_hcconn.waiting_for_fpdata) {
						gemius_hcconn.load_fpdata();
					}
					if (gemius_hcconn.waiting_for_lsdata) {
						gemius_hcconn.load_lsdata();
					}
					gemius_hcconn.load_gsconf();
				}
			} else {
				gemius_hcconn.waiting_for_consent = 0;
				gemius_hcconn.has_consent = false;
				gemius_hcconn.waiting_for_fpdata = 0;
				gemius_hcconn.fpdata = "-DNT";
			}
			gemius_hcconn.waiting_on_prerender = 0;
			gemius_hcconn.paramsready();
			gemius_hcconn.findvisapi();
			if (gemius_hcconn.visapi_s != '') {
				if (document[gemius_hcconn.visapi_s] == 'prerender') {
					gemius_hcconn.waiting_on_prerender = 1;
				}
				gemius_hcconn.add_event(document,gemius_hcconn.visapi_c,gemius_hcconn.visibilitychanged);
			}
			gemius_hcconn.sonar_add();
			gemius_hcconn.latehits();
			gemius_hcconn.add_event(window,"unload",function() {gemius_hcconn.unload(true);} );
			gemius_hcconn.add_event(window,"beforeunload",function() {gemius_hcconn.unload(true);} );
			gemius_hcconn.add_event(document,"mousedown",function() {gemius_hcconn.unload(false);} );
		}
	};
	gemius_hcconn.init();
	gemius_hit = gemius_hcconn.plainhit;
	gemius_event = gemius_hcconn.plainevent;
	pp_gemius_hit = gemius_hcconn.addscripthit;
	pp_gemius_event = gemius_hcconn.addscriptevent;
	try {
		if (typeof gemius_loaded != "undefined") {
			gemius_loaded();
		} else if (typeof pp_gemius_loaded != "undefined") {
			pp_gemius_loaded();
		}
	} catch (e) {}
	if (typeof gemius_identifier != 'undefined') gemius_hcconn.event_identifier = gemius_identifier;
	else if (typeof pp_gemius_identifier != 'undefined') gemius_hcconn.event_identifier = pp_gemius_identifier;
	gemius_hcconn.sendpendingdata();
}

(function () {
	if (typeof pp_gemius_identifier != 'undefined' && !pp_gemius_identifier.match(/^USED_/)) {
		var s = (typeof pp_gemius_mode != 'undefined') ? 0 : 1;
		var v = 101-s;
		if (typeof window.pp_gemius_cnt != 'undefined') {
			pp_gemius_identifier = 'ERR_'+pp_gemius_identifier.replace(/id=/g,'id=ERR_');
			v = 102;
		}
		window.pp_gemius_cnt = 1;
		if (typeof pp_gemius_extraparameters != 'undefined') {
			gemius_hcconn.gevent(s,v,[pp_gemius_identifier].concat(pp_gemius_extraparameters),0,1,1);
		} else {
			gemius_hcconn.ghit(s,v,[pp_gemius_identifier],0,1,1);
		}
		if (gemius_hcconn.event_identifier==null) {
			gemius_hcconn.event_identifier = pp_gemius_identifier;
		}
		if (v != 102 && typeof pp_gemius_time_identifier != 'undefined') {
			gemius_hcconn.gtimer_add(pp_gemius_time_identifier);
		}
		pp_gemius_identifier = 'USED_'+pp_gemius_identifier.replace(/id=/g,'id=USED_');
	} else if (typeof gemius_identifier != 'undefined' && !gemius_identifier.match(/^USED_/)) {
		var s = (typeof pp_gemius_mode != 'undefined') ? 0 : 1;
		var v = 101-s;
		if (typeof window.pp_gemius_cnt != 'undefined') {
			gemius_identifier = 'ERR_'+gemius_identifier.replace(/id=/g,'id=ERR_');
			v = 102;
		}
		window.pp_gemius_cnt = 1;
		if (typeof gemius_extraparameters != 'undefined') {
			gemius_hcconn.gevent(s,v,[gemius_identifier].concat(gemius_extraparameters),0,1,1);
		} else {
			gemius_hcconn.ghit(s,v,[gemius_identifier],0,1,1);
		}
		if (gemius_hcconn.event_identifier==null) {
			gemius_hcconn.event_identifier = gemius_identifier;
		}
		gemius_identifier = 'USED_'+gemius_identifier.replace(/id=/g,'id=USED_');
	}
	gemius_hcconn.sendpendingdata();
})();
