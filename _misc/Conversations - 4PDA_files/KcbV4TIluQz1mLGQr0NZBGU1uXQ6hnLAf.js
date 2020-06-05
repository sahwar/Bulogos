var ka_p=false;
var ka_u=0;
var ka_h=-5;
function ka_init()
{
	for(pid in ka_p)ka_post(pid);
}
function ka_post(pid)
{
	var s='';
	var d=ka_p[pid];
	var e=document.getElementById('ka_'+pid);
	var v=((3<=ka_u)||((0==d[0])&&(true!=d[2])));
	// if(v)s=s+'<a href="javascript:void(0);" onclick="return ka_vote('+pid+',-1);" title="Минусуем: флуд, оффтопик, хамство, мат, оскорбления, конфликты, спам, коммерцию, явные нарушения правил."><img src="/forum/style_images/1/fpr_down.png" border="0" width="79" height="19" alt="-" /></a>&nbsp;&nbsp;';
	if(v)s=s+'<a href="javascript:void(0);" onclick="return ka_vote('+pid+',-1);" title="Минусуем: флуд, оффтопик, хамство, мат, оскорбления, конфликты, спам, коммерцию, явные нарушения правил." class="g-btn red min-90 nowrap"><i class="icon-down-big"></i> ПЛОХО</a>&nbsp;&nbsp;';
	if((0!=ka_u)||(0!=d[0])||(true==d[2]))
	{
		s=s+(v?'':'Рейтинг:&nbsp;');
		if(2<=ka_u)s=s+'<a target="_blank" href="/forum/zka.php?ov='+pid+'">';
		s=s+'<span style="font-weight:bold;color:#'+((0>d[1])?'EA0000':'222222')+';" >'+d[1]+'</span>';
		if(2<=ka_u)s=s+'</a>';
	}
	// if(v)s=s+'&nbsp;&nbsp;<a href="javascript:void(0);" onclick="return ka_vote('+pid+',1);" title="Плюсуем: полезную информацию или то, что стоит добавить в FAQ."><img src="/forum/style_images/1/fpr_up.png" border="0" width="79" height="19" alt="+" /></a>';
	if(v)s=s+'&nbsp;&nbsp;<a href="javascript:void(0);" onclick="return ka_vote('+pid+',1);" title="Плюсуем: полезную информацию или то, что стоит добавить в FAQ." class="g-btn green min-90 nowrap">ХОРОШО <i class="icon-up-big" style="font-weight:normal"></a>';
	if((0>d[0])||((0==d[0])&&(ka_h>=d[1])))ka_pvis(pid,0);
	if(e)e.innerHTML=s;
}
function ka_vote(pid,mark)
{
	//update local data
	if(3>ka_u)ka_p[pid][0]=mark;
	if(2<=ka_p[pid].length)ka_p[pid][1]+=mark;
	//update db
	var url='//4pda.ru/forum/zka.php?i='+pid+'&v='+mark;
	if(window.XMLHttpRequest)
	{
		var req=new XMLHttpRequest();
		req.open('GET',url,true);
		req.send(null);
	}
	else if(window.ActiveXObject)
	{
		var req=new ActiveXObject('Microsoft.XMLHTTP');
		if(req)
		{
			req.open('GET',url,true);
			req.send();
		}
	}
	//thank user
	d=document.getElementById('ka_'+pid);
	if(d)d.innerHTML='Спасибо за мнение!';
	if(3>ka_u)setTimeout("ka_post("+pid+");",1500);
	else ka_post(pid);
	return false;
}
function ka_pvis(pid,show)
{
	var d=document.getElementById('ph-'+pid+'-d1');
	var t=(d&&d.getAttribute('data-with-tag')>0);
	if(d)d.style.backgroundColor='#DCDCDC';
	var d=document.getElementById('ph-'+pid+'-d2');
	if(d)d.style.backgroundColor='#DCDCDC';
	if(0==ka_u&&!t)
	{
		var d=document.getElementById('pb-'+pid+'-r2');
		if(d)d.style.display=show?'':'none';
		var d=document.getElementById('pb-'+pid+'-r3');
		if(d)d.style.display=show?'':'none';
		var d=document.getElementById('kh-'+pid);
		if(d)d.innerHTML='<a href="javascript:ka_pvis('+pid+','+(show?'0':'1')+');">'+(show?'Скрыть пост обратно?':('Показать пост'+((0!=ka_p[pid][0])?('&nbsp;(Рейтинг <b>'+ka_p[pid][1]+'</b>)'):'')))+'</a>';
	}
}
