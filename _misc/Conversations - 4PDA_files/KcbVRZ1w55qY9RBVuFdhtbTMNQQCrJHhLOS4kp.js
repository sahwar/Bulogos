var input_red="input-warn",input_green="input-ok",input_ok_box="input-ok-content",input_warn_box="input-warn-content",img_blank="blank.gif",img_tick="aff_tick.gif",img_cross="aff_cross.gif",uagent=navigator.userAgent.toLowerCase(),is_safari=-1!=uagent.indexOf("safari")||"Apple Computer, Inc."==navigator.vendor||-1!=uagent.indexOf("konqueror")||-1!=uagent.indexOf("khtml"),is_opera=-1!=uagent.indexOf("opera"),is_webtv=-1!=uagent.indexOf("webtv"),is_ie=-1!=uagent.indexOf("msie")&&!is_opera&&!is_safari&&
!is_webtv,is_ie4=is_ie&&-1!=uagent.indexOf("msie 4."),is_ie7=is_ie&&-1!=uagent.indexOf("msie 7."),is_moz="Gecko"==navigator.product,is_ns=-1==uagent.indexOf("compatible")&&-1!=uagent.indexOf("mozilla")&&!is_opera&&!is_webtv&&!is_safari,is_ns4=is_ns&&4==parseInt(navigator.appVersion),is_win=-1!=uagent.indexOf("win")||-1!=uagent.indexOf("16bit"),is_mac=-1!=uagent.indexOf("mac")||"Apple Computer, Inc."==navigator.vendor,ua_vers=parseInt(navigator.appVersion),ipb_pages_shown=0,ipb_pages_array=[],ipb_skin_url=
ipb_skin_url?ipb_skin_url:ipb_var_image_url;window.gbl_check_search_box=function(){try{var a=document.getElementById("gbl-search-checkbox");document.getElementById("gbl-search-forums").value=a.checked&&ipb_input_f?ipb_input_f:"all"}catch(b){}};
window.show_inline_messages=function(){var a=window.location.toString(),b=null;if(-1!=a.indexOf("?___msg=")||-1!=a.indexOf(";___msg=")||-1!=a.indexOf("&___msg=")){try{b=parent.document.getElementById("ipd-msg-text")?parent.document.getElementById("ipd-msg-text"):document.getElementById("ipd-msg-text")}catch(c){alert(c)}a=a.replace(/^.*[\?;&]___msg=(.+?)(&.*$|$)/,"$1");a=unescape(a);if(message_pop_up_lang[a])try{b.innerHTML=message_pop_up_lang[a],centerdiv=new center_div,centerdiv.divname="ipd-msg-wrapper",
centerdiv.move_div(),setTimeout("hide_inline_messages_instant()",2E3)}catch(c){alert(message_pop_up_lang[a])}}};window.show_inline_messages_instant=function(a){_msg_box=document.getElementById("ipd-msg-text");_msg_box.innerHTML=message_pop_up_lang[a];centerdiv=new center_div;centerdiv.divname="ipd-msg-wrapper";centerdiv.move_div();setTimeout("hide_inline_messages_instant()",2E3)};
window.hide_inline_messages_instant=function(){try{document.getElementById("ipd-msg-wrapper").style.display="none",parent.document.getElementById("ipd-msg-wrapper").style.display="none"}catch(a){}};var iframe_include=function(){this.iframe_main_wrapper=this.iframe_add_to_div_obj=this.iframe_add_to_div=this.iframe_obj=this.iframe_id=null;this.iframe_classname="GBL-component-iframe";this.ok_to_go=1;this.iframe_height=300;this.ajax=""};
iframe_include.prototype.init=function(){try{this.iframe_add_to_div_obj=document.getElementById(this.iframe_add_to_div)}catch(a){this.ok_to_go=0}};
iframe_include.prototype.include=function(a){if(!this.ok_to_go)return!1;var b=parseInt(this.iframe_add_to_div_obj.style.height),c=parseInt(this.iframe_add_to_div_obj.style.width);this.iframe_obj&&this.iframe_add_to_div_obj.removeChild(this.iframe_obj);this.iframe_obj=document.createElement("IFRAME");this.iframe_obj.src=a;this.iframe_obj.id=this.iframe_id;this.iframe_obj.name=this.iframe_id;this.iframe_obj.scrolling="no";this.iframe_obj.frameBorder="no";this.iframe_obj.border="0";this.iframe_obj.className=
this.iframe_classname;this.iframe_obj.style.width=c?c+"px":"100%";this.iframe_obj.style.height=b?b-5+"px":this.iframe_height+"px";this.iframe_obj.style.overflow="hidden";this.iframe_obj.style.padding="0px";this.iframe_obj.style.margin="0px";this.ajax=new ajax_request;this.iframe_add_to_div_obj.style.padding="0px";this.iframe_add_to_div_obj.style.margin="0px";is_ie&&!is_ie7&&(this.iframe_add_to_div_obj.style.paddingLeft="6px",this.iframe_add_to_div_obj.style.paddingRight="6px");this.iframe_obj.iframe_loaded=
0;this.iframe_obj.iframe_init=0;this.iframe_obj._this=this;this.iframe_add_to_div_obj.style.overflow="";this.iframe_add_to_div_obj.appendChild(this.iframe_obj);this.ajax.show_loading(ajax_load_msg);is_ie?(this.iframe_obj.allowTransparency=!0,this.iframe_obj.onreadystatechange=this.iframe_on_load_ie):this.iframe_obj.onload=this.iframe_onload};
iframe_include.prototype.iframe_onload=function(a){a=this._this.iframe_obj.contentDocument;is_safari&&(a=window.frames[this.id].document);this.iframe_init||(this.iframe_init=1);this.iframe_loaded=1;a.onmousedown=menu_action_close;this._this.ajax.hide_loading();try{a.getElementsByTagName("body")[0].style.padding="0px",a.getElementsByTagName("body")[0].style.margin="0px"}catch(d){}var b=parseInt(a.getElementById(this._this.iframe_main_wrapper).offsetHeight);0<b&&(is_safari&&(b+=3),this._this.iframe_obj.style.height=
b+"px",this._this.iframe_add_to_div_obj.style.height=b+"px");var b=document.getElementsByTagName("style"),c="";for(i in b)c+="\n"+b[i].innerHTML;try{a.getElementsByTagName("style")[0].innerHTML=c}catch(d){}};
iframe_include.prototype.iframe_on_load_ie=function(a){if("complete"==this.readyState){a=this._this.iframe_obj.contentWindow?this._this.iframe_obj.contentWindow.document:this._this.iframe_obj.document?this._this.iframe_obj.document:window.frames[this.id].document;this.iframe_init||(this.iframe_init=1);this.iframe_loaded=1;a.onmousedown=menu_action_close;var b=document.getElementsByTagName("style"),c="";for(i in b)b[i].innerHTML&&(c+="\n"+b[i].innerHTML);if((b=c.match(/@import\s+?url\(\s+?['"](.+?)['"]\s+?\);/ig))&&
b.length)for(i=0;i<=b.length;i++)"undefined"!=typeof b[i]&&(b[i]=b[i].replace(/@import\s+?url\(\s+?['"](.+?)['"]\s+?\);/ig,"$1"),"undefined"!=typeof b[i]&&a.createStyleSheet(b[i]));this._this.ajax.hide_loading();try{a.getElementsByTagName("body")[0].style.padding="0px",a.getElementsByTagName("body")[0].style.margin="0px"}catch(d){}b=parseInt(a.getElementById(this._this.iframe_main_wrapper).offsetHeight);a=parseInt(a.getElementById(this._this.iframe_main_wrapper).offsetWidth);0<b&&(this._this.iframe_obj.style.height=
b+"px",this._this.iframe_add_to_div_obj.style.height=b+"px");0<a&&(this._this.iframe_obj.style.width=a+"px",this._this.iframe_add_to_div_obj.style.width=a+"px")}};window.iframe_include=iframe_include;window.ie_fix_png=function(){is_ie&&(document.onreadystatechange=window.ie_fix_png_do)};
window.ie_fix_png_do=function(){if("complete"==document.readyState){var a=navigator.userAgent.indexOf("MSIE "),b=navigator.userAgent.substring(a+5),c=ipb_skin_url+"/blank.gif",d=screen.width*(parseInt(ipsclass.settings.resize_percent)/100);if(-1==a)return!1;if(0==b.indexOf("5.5")||0==b.indexOf("6")||"Win32"!=navigator.platform)if(a=document.getElementsByTagName("IMG"),b=a.length)for(var f=0;f<b;f++)if(a[f].src.match(/\.png$/)){var e=a[f],g=0,h=0,k;e._width=e._width?parseInt(e._width):0;e._resized=
parseInt(e._resized);e.style.width||(g=e.width);e.style.height||(h=e.height);k=e.src;g<d&&!e._resized&&e._width<d&&(e.src=c,g&&(e.style.width=g+"px"),h&&(e.style.height=h+"px"),e.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+k+"',sizingMethod='scale')")}}};window.add_onload_event=function(a){var b=window.onload;window.onload="function"!=typeof window.onload?a:function(){b&&b();a()}};
window.add_shadow=function(a,b){var c=document.getElementById(b),d=document.getElementById(a);is_ie?(d.className="shadow-ie",d.style.width=c.offsetWidth+1+"px",d.style.height=c.offsetHeight+1+"px"):(d.className="shadow-moz",d.style.width=c.offsetWidth+0+"px",d.style.height=c.offsetHeight+0+"px")};window.my_getcookie=function(a){return ipsclass.my_getcookie(a)};window.my_setcookie=function(a,b,c){return ipsclass.my_setcookie(a,b,c)};
window.lang_build_string=function(){if(arguments.length&&arguments){for(var a=arguments[0],b=1;b<arguments.length;b++)a=a.replace(new RegExp("<%"+b+">","gi"),arguments[b]);return a}};window.friends_pop=function(a){ipb_var_base_url=ipb_var_base_url.replace("&amp;","&");a=a?a.replace("&amp;","&"):"";ipsclass.pop_up_window(ipb_var_base_url+"act=profile&CODE=friends_list_popup"+a,450,400,"Friends")};
window.buddy_pop=function(){var a=0;if(use_enhanced_js)try{xml_myassistant_init(),a=1}catch(b){a=0}a||(ipb_var_base_url=ipb_var_base_url.replace("&amp;","&"),window.open(ipb_var_base_url+"act=buddy","BrowserBuddy","width=250,height=500,resizable=yes,scrollbars=yes"))};window.check_enter=function(a,b){13==(b.keyCode?b.keyCode:b.which?b.which:b.charCode)&&do_multi_page_jump(a)};
window.do_multi_page_jump=function(a){var b;b=ipb_pages_array[a][2];var c=ipb_pages_array[a][1],d=ipb_pages_array[a][0],f=parseInt(document.getElementById("st-"+a).value);a=(a=document.getElementById("st-type-"+a).value)?a:"st";d=d.replace(RegExp("&amp;","g"),"&");b=0==b%c?b/c:Math.ceil(b/c);if(0<f)return 1>f&&(f=1),f>b&&(f=b),start=1==f?0:(f-1)*c,window.location=start?d+"&"+a+"="+start:d,!1};window.pages_st_focus=function(a){document.getElementById("st-"+a).focus()};
window.ShowHide=function(a,b){""!=a&&toggleview(a);""!=b&&toggleview(b)};window.my_getbyid=function(a){itm=null;document.getElementById?itm=document.getElementById(a):document.all?itm=document.all[a]:document.layers&&(itm=document.layers[a]);return itm};window.toggleview=function(a){a&&(itm=my_getbyid(a))&&("none"==itm.style.display?my_show_div(itm):my_hide_div(itm))};window.my_hide_div=function(a){a&&(a.style.display="none")};window.my_show_div=function(a){a&&(a.style.display="")};
window.change_cell_color=function(a,b){if(itm=my_getbyid(a))itm.className=b};window.togglecategory=function(a,b){saved=[];clean=[];if(tmp=ipsclass.my_getcookie("collapseprefs"))saved=tmp.split(",");for(i=0;i<saved.length;i++)saved[i]!=a&&""!=saved[i]&&(clean[clean.length]=saved[i]);b?(clean[clean.length]=a,my_show_div(my_getbyid("fc_"+a)),my_hide_div(my_getbyid("fo_"+a))):(my_show_div(my_getbyid("fo_"+a)),my_hide_div(my_getbyid("fc_"+a)));ipsclass.my_setcookie("collapseprefs",clean.join(","),1)};
window.locationjump=function(a){window.location=ipb_var_base_url+a};
window.chooseskin=function(a){choosebox=a.options[a.selectedIndex].value;extravars="";-1==choosebox||isNaN(choosebox)||(document.skinselectorbox.skinurlbits.value&&(extravars="&"+document.skinselectorbox.skinurlbits.value,extravars=extravars.replace(/setskin=\d{1,}/g,""),extravars=extravars.replace(/skinid=\d{1,}/g,""),extravars=extravars.replace(/cal_id=&/g,""),extravars=extravars.replace(/&{1,}/g,"&"),extravars=extravars.replace(/s=&/g,"")),locationjump("setskin=1&skinid="+choosebox+extravars))};
window.chooselang=function(a){choosebox=a.options[a.selectedIndex].value;extravars="";document.langselectorbox.langurlbits.value&&(extravars="&"+document.langselectorbox.langurlbits.value,extravars=extravars.replace(/setlanguage=\d{1,}/g,""),extravars=extravars.replace(/cal_id=&/g,""),extravars=extravars.replace(/langid=\w{1,}/g,""),extravars=extravars.replace(/&{1,}/g,"&"),extravars=extravars.replace(/s=&/g,""));locationjump("setlanguage=1&langid="+choosebox+extravars)};
window.PopUp=function(a,b,c,d,f,e,g,h,k){showy=showx="";0!=h&&(X=h);0!=k&&(Y=k);g||(g=1);e||(e=1);4<=parseInt(navigator.appVersion)&&f&&(X=(screen.width-c)/2,Y=(screen.height-d)/2);0<X&&(showx=",left="+X);0<Y&&(showy=",top="+Y);0!=g&&(g=1);window.open(a,b,"width="+c+",height="+d+showx+showy+",resizable="+e+",scrollbars="+g+",location=no,directories=no,status=no,menubar=no,toolbar=no")};window.stacksize=function(a){for(i=0;i<a.length;i++)if(""==a[i]||null==a[i]||"undefined"==a)return i;return a.length};
window.pushstack=function(a,b){arraysize=stacksize(a);a[arraysize]=b};window.popstack=function(a){arraysize=stacksize(a);theval=a[arraysize-1];delete a[arraysize-1];return theval};window.innerhtml_template_to_html=function(a){a=a.replace(/&lt;%(\d+?)&gt;/ig,"<%$1>");return a=a.replace(/%3C%(\d+?)%3E/ig,"<%$1>")};window.global_cancel_bubble=function(a,b){if(!a||is_ie)return b&&(window.event.returnValue=!1),window.event.cancelBubble=!0,window.event;a.stopPropagation();b&&a.preventDefault();return a};
window._get_obj_leftpos=function(a){for(var b=a.offsetLeft;null!=(a=a.offsetParent);)b+=a.offsetLeft;return b};window._get_obj_toppos=function(a){for(var b=a.offsetTop;null!=(a=a.offsetParent);)b+=a.offsetTop;return b};var center_div=function(){this.shimobj=this.divobj=this.divname=""};
center_div.prototype.move_div=function(){try{("getElementById" in parent.document)&&(this._document=parent.document,this._window=parent.window)}catch(e){return}this.divobj=this._document.getElementById(this.divname);if(!this.divobj){return}var a=0,b=0;"number"==typeof this._window.innerWidth?(a=this._window.innerWidth,b=this._window.innerHeight):this._document.documentElement&&(this._document.documentElement.clientWidth||this._document.documentElement.clientHeight)?(a=this._document.documentElement.clientWidth,b=
this._document.documentElement.clientHeight):this._document.body&&(this._document.body.clientWidth||this._document.body.clientHeight)&&(a=this._document.body.clientWidth,b=this._document.body.clientHeight);this.divobj.style.position="absolute";this.divobj.style.display="block";this.divobj.style.zIndex=-1;is_ie&&(this.divobj.innerHTML="<iframe id='"+this.divname+"-shim' src='"+ipb_var_image_url+"/iframe.html' class='iframshim' scrolling='no' frameborder='0' style='position:absolute; top:0px; left:0px; right:0px; display: none;'></iframe>"+
this.divobj.innerHTML);var c=parseInt(this.divobj.style.height)?parseInt(this.divobj.style.height):parseInt(this.divobj.offsetHeight),d=parseInt(this.divobj.style.width)?parseInt(this.divobj.style.width):parseInt(this.divobj.offsetWidth),c=c?c:200,d=d?d:400,f=this.getYscroll(),a=(a-d)/2,b=(b-c)/2+f;this.divobj.style.left=(0>a?0:a)+"px";this.divobj.style.top=(0>b?0:b)+"px";this.divobj.style.zIndex=99};center_div.prototype.hide_div=function(){try{this.divobj&&(this.divobj.style.display="none")}catch(a){}};
center_div.prototype.getYscroll=function(){var a=0;this._document.documentElement&&this._document.documentElement.scrollTop?a=this._document.documentElement.scrollTop:this._document.body&&this._document.body.scrollTop?a=this._document.body.scrollTop:this._window.pageYOffset?a=this._window.pageYOffset:this._window.scrollY&&(a=this._window.scrollY);return a};window.center_div=center_div;window.rep_change_window_open=function(a){win1=open(a,"win1","menubar=no,status=no,toolbar=no,width=600,height=225")};