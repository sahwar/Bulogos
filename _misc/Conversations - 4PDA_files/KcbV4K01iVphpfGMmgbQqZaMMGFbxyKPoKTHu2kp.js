function ipsclass(){this.cookies=new Array();this.ignore_cookies=new Array(ipb_var_cookieid+'ipb_stronghold',ipb_var_cookieid+'session_id',ipb_var_cookieid+'ipb_admin_session_id',ipb_var_cookieid+'member_id',ipb_var_cookieid+'pass_hash');this.settings={'do_linked_resize':0,'resize_percent':50};this.init=function(){var _tmp=document.cookie.split(';');if(_tmp.length){for(i=0;i<_tmp.length;i++){if(_tmp[i].match(new RegExp(ipb_var_cookieid+".*$"))){var _data=_tmp[i].split('=');var _key=this.trim(_data[0]);var _value=unescape(this.trim(_data[1]));if(_key&&(!this.in_array(_key,this.ignore_cookies))){this.cookies[_key.replace(ipb_var_cookieid,'')]=_value}}}}_tmp=null};this.trim=function(text){if(typeof(text)=='undefined'){return''}text=text.replace(/^\s+/,'');return text.replace(/\s+$/,'')};this.html_entity_decode=function(text){if(typeof ca=='undefined'){var ca=document.createElement('textarea')}ca.innerHTML=text.replace(/</g,'&lt;').replace(/>/g,'&gt;');return ca.value};this.in_array=function(needle,haystack){if(!haystack.length){return false}for(var i=0;i<haystack.length;i++){if(haystack[i]===needle){return true}}return false};this.htmlspecialchars=function(text){text=text.replace(/</g,'&lt;');text=text.replace(/>/g,'&gt;');text=text.replace(/"/g,'&quot;');return text};this.un_htmlspecialchars=function(text){text=text.replace(/&lt;/g,'<');text=text.replace(/&gt;/g,'>');text=text.replace(/&quot;/g,'"');return text};
this.get_editor_contents=function(editor_id,editor_array)
{
	var aIPS_editor=editor_array?editor_array:BBEditors;
	if(!editor_id)
	{
		for(var i in aIPS_editor)
		{
			if(typeof(aIPS_editor[i])!='object'){continue}
			editor_id=i;
			break
		}
	}
	return aIPS_editor[editor_id].editor_get_contents
};
this.add_editor_contents=function(text,editor_id,editor_array)
{
	var aIPS_editor=editor_array?editor_array:BBEditors;
	if(!editor_id)
	{
		for(var i in aIPS_editor)
		{
			if(typeof(aIPS_editor[i])!='object'){continue}
			editor_id=i;
			break
		}
	}
	return aIPS_editor[editor_id].insert_text(text)
};
this.convert_saved_tags_to_display_tags=function(text){text=text.replace(/(<|&lt;|&#60;)!--/,"{");text=text.replace(/--(>|&gt;|&#62;)/,"}");return text};this.include_javascript=function(_file,div_id){var _doc=(div_id)?document.getElementById(div_id):document.getElementsByTagName('head').item(0);var _js=document.createElement('script');_js.setAttribute('language','javascript');_js.setAttribute('type','text/javascript');_js.setAttribute('src',_file);_doc.appendChild(_js);return false};this.fade_in_element=function(div){var hash='#';var color_items="0123456789abcdef";var start_color='#ffff66';var orig_color=document.getElementById(div).style.backgroundColor;var temp_end='#ffffff';var iter=20;var time=80;var rbeg=color_items.indexOf(start_color.substr(1,1))*16+color_items.indexOf(start_color.substr(2,1));var gbeg=color_items.indexOf(start_color.substr(3,1))*16+color_items.indexOf(start_color.substr(4,1));var bbeg=color_items.indexOf(start_color.substr(5,1))*16+color_items.indexOf(start_color.substr(6,1));var rend=color_items.indexOf(temp_end.substr(1,1))*16+color_items.indexOf(temp_end.substr(2,1));var gend=color_items.indexOf(temp_end.substr(3,1))*16+color_items.indexOf(temp_end.substr(4,1));var bend=color_items.indexOf(temp_end.substr(5,1))*16+color_items.indexOf(temp_end.substr(6,1));for(i=1,r=rbeg,g=gbeg,b=bbeg;i<=iter;r=Math.round(rbeg+i*((rend-rbeg)/(iter-1))),g=Math.round(gbeg+i*((gend-gbeg)/(iter-1))),b=Math.round(bbeg+i*((bend-bbeg)/(iter-1))),i++){hstr='#'+color_items.charAt(Math.floor(r/16))+color_items.charAt(r%16)+color_items.charAt(Math.floor(g/16))+color_items.charAt(g%16)+color_items.charAt(Math.floor(b/16))+color_items.charAt(b%16);setTimeout('var div = document.getElementById("'+div+'"); div.style.backgroundColor = "'+hstr+'";',i*time)}setTimeout('var div = document.getElementById("'+div+'"); div.style.backgroundColor = "'+orig_color+'";',(i+1)*time)};this.lang_build_string=function(){if(!arguments.length||!arguments){return}var string=arguments[0];for(var i=1;i<arguments.length;i++){var match=new RegExp('<%'+i+'>','gi');string=string.replace(match,arguments[i])}return string};this.get_id_from_text=function(id){return id.replace(/.*(\-|_)(\S+)/,"$2")};this.get_name_from_text=function(id){return id.replace(/(.*)(\-|_)(\S+)/,"$1")};this.location_jump=function(url,full){url=url.replace(/&amp;/g,'&');if(full){window.location.href=url}else{window.location.href=ipb_var_base_url+url}};this.confirm_action=function(url,msg){if(!msg){msg='Для подтверждения нажмите ОК'}if(url){url=url.replace('&amp;','&')}else{url=''}if(confirm(msg)){window.location.href=url}else{alert(ipb_global_lang['action_cancelled']);return false}};
this.pop_up_window=function(url,width,height,name){
	var r=window.devicePixelRatio||1;
	if(!name){
		name=(new Date).getTime()
	}
	var Win=window.open(url.replace('&amp;','&'),name,'width='+(width*r)+',height='+(height*r)+',resizable=1,scrollbars=1,location=no,directories=no,status=no,menubar=no,toolbar=no');
	Win.focus();
	return false};
this.set_unselectable=function(obj){if(!is_ie4&&typeof(obj.tagName)!='undefined'){if(obj.hasChildNodes()){for(var i=0;i<obj.childNodes.length;i++){this.set_unselectable(obj.childNodes[i])}}obj.unselectable='on'}};this.get_obj_leftpos=function(obj){var curleft=0;if(obj.offsetParent){while(obj.offsetParent){curleft+=obj.offsetLeft;obj=obj.offsetParent}}else if(obj.x){curleft+=obj.x}return curleft};this.get_obj_toppos=function(obj){var curtop=0;if(obj.offsetParent){while(obj.offsetParent){curtop+=obj.offsetTop;obj=obj.offsetParent}}else if(obj.y){curtop+=obj.y}return curtop};this.cancel_bubble=function(obj,extra){if(extra!==false){extra=true}if(!obj||is_ie){if(extra){window.event.returnValue=false}window.event.cancelBubble=true;return window.event}else{obj.stopPropagation();if(extra){obj.preventDefault()}return obj}};this.cancel_bubble_all=function(obj){return ipsclass.cancel_bubble(obj,true)};this.cancel_bubble_low=function(obj){return ipsclass.cancel_bubble(obj,false)};this.my_getcookie=function(name){return this.cookies[name]};this.my_setcookie=function(name,value,sticky){expire="";domain="";path="/";if(sticky){expire="; expires=Wed, 1 Jan 2030 00:00:00 GMT"}if(ipb_var_cookie_domain!=""){domain='; domain='+ipb_var_cookie_domain}if(ipb_var_cookie_path!=""){path=ipb_var_cookie_path}document.cookie=ipb_var_cookieid+name+"="+value+"; path="+path+expire+domain+';';this.cookies[name]=value};this.array_stacksize=function(thearray){for(i=0;i<thearray.length;i++){if((thearray[i]=="")||(thearray[i]==null)||(thearray=='undefined')){return i}}return thearray.length};this.array_pushstack=function(thearray,newval){var arraysize=this.array_stacksize(thearray);thearray[arraysize]=newval};this.array_popstack=function(thearray){var arraysize=this.array_stacksize(thearray);var theval=thearray[arraysize-1];delete thearray[arraysize-1];return theval}}