(function(d){d.cnxLoaderCnt=d.cnxLoaderCnt||0;function getVersion(){return 100/100>Math.random()?1962:1962}
var createIframe=function(p){var nEl=d.createElement('iframe');nEl.id='cnx_'+d.cnxLoaderCnt;d.cnxLoaderCnt++;nEl.src='javascript:false';nEl.marginWidth='0';nEl.marginHeight='0';nEl.frameBorder='0';nEl.width='1px';nEl.height='1px';nEl.setAttribute('SCROLLING','NO');p.appendChild(nEl);var doc=nEl.contentWindow&&nEl.contentWindow.document;doc.open()._load=function(){try{var s=doc.createElement('script');s.src='//cdns.connatix.com/p/'+getVersion()+'/min/connatix.renderer.infeed.min_dc.js';s.setAttribute('async','1');s.setAttribute('type','text/javascript');doc.body.appendChild(s)}catch(err){}};doc.write('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><title></title></head><body onload=\"document._load()\"></body></html>');doc.close();return nEl};try{createIframe(d.head)}catch(err){}})(document)