(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var e=(a=null)=>a&&26==a.getAttribute("data-jc")?a:document.querySelector('[data-jc="26"]');var f=document;class h{constructor(){var a=f.head,b=a.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]");for(var c=0;c<b.length;c++){const k=b[c];var d="link",g=document;d=String(d);"application/xhtml+xml"===g.contentType&&(d=d.toLowerCase());d=g.createElement(d);d.setAttribute("rel","stylesheet");d.setAttribute("href",k.getAttribute("href"));a.appendChild(d)}if(0<b.length&&!(.01<Math.random())){a=(a=e(document.currentScript))&&a.getAttribute("data-jc-version")||"unknown";a=`https://${"pagead2.googleadservices.com"}/pagead/gen_204?id=jca&jc=${26}&version=${a}&sample=${.01}`; 
b=window;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):(b.google_image_requests||(b.google_image_requests=[]),c=b.document.createElement("img"),c.src=a,b.google_image_requests.push(c))}}};var l=()=>{new h};"complete"===f.readyState||"interactive"===f.readyState?new h:f.addEventListener("DOMContentLoaded",l);}).call(this);
