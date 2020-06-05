(function(d,u){
	var l="//4pda.ru/pages/go/",e="data-notrack",h="DOMNodeInserted",m=h+"IntoDocument",a="addEventListener",c="attachEvent",i,gA="getAttribute",hA="hasAttribute",j=0,
		o=["\/\/4pda.ru\/","\/\/s.4pda.to\/","\/\/adclick.g.doubleclick.net\/","\/\/ad.doubleclick.net\/", "\/\/an.yandex.ru\/"];
	function ls(k,i,r,t){
		if(d.querySelectorAll)
			r=d.querySelectorAll('a:not([href*="'+l+'"]):not(['+e+'])');
		else{
			k=(d.documentElement?d.documentElement:d.body).getElementsByTagName("a"),r=[];
			for(i=0;i<k.length;i++)
				(t=k[i][gA]("href"))&&!k[i][hA](e)&&0>(""+t).indexOf(l)&&(r.push(k[i]));
		}
		return r;
	}
	function k(){
		clearTimeout(j);
		var y,t;
		c=ls();
		for(i=0;i<c.length;i++){
			a=c[i];
			h=(""+a.href).replace(/^https?:\/\//,'//');
			if(h.indexOf("//")!=0)continue;
			if(!a[hA]("data-dotrack")){
				for(y=0;y<o.length;y++){if(h.indexOf(o[y])==0)break}
				if(y<o.length){continue}
			}
			h=l+"?u="+encodeURIComponent(a.href);
			if(t=a[gA]('data-trackmark'))h+='&m='+t;
			if(t=a[gA]('data-nodivert'))h+='&n='+t;
			while(a&&a.tagName){
				if(t=a[gA]('data-post')){h+='&e='+t;break}
				a=a.parentNode;
			}
			if(!d.referrer)h+='&f='+encodeURIComponent(location.href);
			c[i].href=h;
		}
		rr=0;
	}
	function r(){clearTimeout(j);j=setTimeout(k,100);}
	if(d[a]){d[a](h,r,false);d[a](m,r,false);}
	else if(d[c]){d[c]("on"+h,r);d[c]("on"+m,r);}
	else{function w(n){d["_on"+n]=d["on"+n];return function(){r();(Object.prototype.toString.call(d["_on"+n])=='[object Function]')&&d["_on"+h].call(this,arguments)};}d["on"+h]=w(h);d["on"+m]=w(m);}
	k();
})(document);
