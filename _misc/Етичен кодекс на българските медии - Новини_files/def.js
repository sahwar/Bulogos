function showHideYearTable(year) {
	var tbl;
	var a;

	var tables = document.getElementsByTagName('table');
	for (var i = 0; i < tables.length; i++) {
		tbl = tables[i];
		if (tbl.className == 'formgreytable active' || tbl.className == 'formgreytable inactive') {
			if (tbl.id == 'y' + year + '_partners') {
				tbl.style.display = 'block';
				tbl.className = 'formgreytable active';
			} else {
				tbl.style.display = 'none';
				tbl.className = 'formgreytable inactive';
			}
		}
	}

	var anchors = document.getElementsByTagName('a');
	for (i = 0; i < anchors.length; i++) {
		a = anchors[i];
		if (a.className == 'active' || a.className == 'inactive') {
			if (a.id == 'a' + year + '_partners') {
				a.className = 'active';
			} else {
				a.className = 'inactive';
			}
		}
	}
}

function DynAddRow(type) {
	var ctr;
	var elem;
	var elem2;
	var html;
	var parent;
	if (type == 1) {
		ctr = document.getElementById('rows_oldjobs');
		ctr.value = ctr.value*1 + 1;
		html = '<td colspan="2" valign="top">'+
					'<table class="innerform">'+
						'<tbody>'+
						'<tr>'+
							'<td class="num">#' + ctr.value + '</td>'+
							'<td>Период на наемане:<br /><input name="period'+ ctr.value +'" value="" style="width: 145px;" type="text" /></td>'+
							'<td>Организация:<br /><input name="organization'+ ctr.value +'" value="" style="width: 145px;" type="text"></td>'+
							'<td>Позиция:<br /><input name="position'+ ctr.value +'" value="" style="width: 145px;" type="text"></td>'+
							'<td>Основни задачи:<br /><textarea name="tasks'+ ctr.value +'" style="width: 145px; height: 80px;"></textarea></td>'+
						'</tr>'+
						'</tbody>'+
					'</table>'+
				'</td>';

		elem = document.createElement('tr');
		elem.className = 'darkrow';
		elem.id = 'jobrow' + ctr.value;
		elem2 = document.createElement('td');
		elem2.valign = 'top';
		elem2.colSpan = '2';
		elem2.innerHTML = html;
		elem.appendChild(elem2);
		parent = document.getElementById('jobsbody');
		parent.insertBefore(elem, document.getElementById('addFieldsJobsRow'));

	} else if (type == 2) {
		ctr = document.getElementById('rows_education');
		ctr.value = ctr.value*1 + 1;
		html = '<td colspan="2" valign="top">' +
					'<table class="innerform">' +
						'<tbody>' +
						'<tr>' +
							'<td class="num">#' + ctr.value + '</td>' +
							'<td>Учебно заведение:<br><input name="university'+ ctr.value +'" value="" style="width: 145px;" type="text" /></td>' +
							'<td>Специалност:<br><input name="speciality'+ ctr.value +'" value="" style="width: 145px;" type="text" /></td>' +
							'<td>Степен:<br><input name="stepen'+ ctr.value +'" value="" style="width: 145px;" type="text" /></td>' +
							'<td>Период на обучение:<br><input name="learnperiod'+ ctr.value +'" value="" style="width: 145px;" type="text" /></td>' +
						'</tr>' +
						'</tbody>' +
					'</table>' +
				'</td>';

		elem = document.createElement('tr');
		elem.id = 'edurow' + ctr.value;
		elem2 = document.createElement('td');
		elem2.valign = 'top';
		elem2.colSpan = '2';
		elem2.innerHTML = html;
		elem.appendChild(elem2);
		parent = document.getElementById('edubody');
		parent.insertBefore(elem, document.getElementById('addFieldsEduRow'));

	} else if (type == 3) {
		ctr = document.getElementById('rows_comp');
		ctr.value = ctr.value*1 + 1;

		elem = document.createElement('tr');
		elem.id = 'comprow' + ctr.value;

		elem2 = document.createElement('td');
		elem2.valign = 'top';
		elem2.innerHTML = '#' + ctr.value;
		elem2.className = 'num';
		elem.appendChild(elem2);

		elem2 = document.createElement('td');
		elem2.innerHTML = '<select name="compprog'+ ctr.value +'" style="width: 250px;"><option value="0" selected="selected">-- избери програма -- </option><option value="1">MS Windows</option><option value="2">MS Word</option><option value="3">MS Excell</option><option value="4">Outlook</option><option value="5">Powerpoint</option><option value="6">Photoshop</option><option value="7">Indesign</option><option value="8">Illustrator</option></select>';
		elem.appendChild(elem2);

		elem2 = document.createElement('td');
		elem2.innerHTML = '<select name="complevel'+ ctr.value +'" style="width: 250px;"><option value="0" selected="selected">-- избери ниво -- </option><option value="1">начинаещ</option><option value="2">добро владеене</option><option value="3">експерт</option></select>';
		elem.appendChild(elem2);

		elem.className = 'darkrow';
		parent = document.getElementById('compbody');
		parent.appendChild(elem);

	} else if (type == 4) {
		ctr = document.getElementById('rows_lang');
		ctr.value = ctr.value*1 + 1;

		elem = document.createElement('tr');
		elem.id = 'langrow' + ctr.value;

		elem2 = document.createElement('td');
		elem2.valign = 'top';
		elem2.innerHTML = '#' + ctr.value;
		elem2.className = 'num';
		elem.appendChild(elem2);

		elem2 = document.createElement('td');
		elem2.className = 'langtd';
		elem2.innerHTML = 'Език:<input name="language'+ ctr.value +'" value="" style="width: 250px; float: none; margin-left: 10px;" type="text" />' +
						  '<p><span>Говорене:</span> <select name="langspeak'+ ctr.value + '" style="width: 190px;"><option value="0" selected="selected">-- избери ниво -- </option><option value="1">начинаещ</option><option value="2">добро владеене</option><option value="3">експерт</option></select></p>' +
						  '<p><span>Кореспонденция:</span> <select name="languse'+ ctr.value + '" style="width: 190px;"><option value="0" selected="selected">-- избери ниво -- </option><option value="1">начинаещ</option><option value="2">добро владеене</option><option value="3">експерт</option></select></p>' +
						  '<p><span>Четене и разбиране:</span> <select name="langread'+ ctr.value + '" style="width: 190px;"><option value="0" selected="selected">-- избери ниво -- </option><option value="1">начинаещ</option><option value="2">добро владеене</option><option value="3">експерт</option></select></p>';
		elem.appendChild(elem2);

		elem2 = document.createElement('td');
		elem2.innerHTML = '<p><span>Сертификати за владеене:</span> <textarea name="langcertif'+ ctr.value + '" style="width: 100%; height: 80px;"></textarea></p>';
		elem2.className = 'langtd';
		elem.appendChild(elem2);

		parent = document.getElementById('langbody');
		parent.appendChild(elem);
	}
}

function DynDropRow(type) {
	var ctr;
	var parent;
	var lastrow;

	if (type == 1) {
		ctr = document.getElementById('rows_oldjobs');
		if (ctr.value > 1) {
			parent = document.getElementById('jobsbody');
			lastrow = document.getElementById('jobrow' + ctr.value);
			ctr.value = ctr.value*1 - 1;
			parent.removeChild(lastrow);
		}

	} else if (type == 2) {
		ctr = document.getElementById('rows_education');
		if (ctr.value > 1) {
			parent = document.getElementById('edubody');
			lastrow = document.getElementById('edurow' + ctr.value);
			ctr.value = ctr.value*1 - 1;
			parent.removeChild(lastrow);
		}

	} else if (type == 3) {
		ctr = document.getElementById('rows_comp');
		if (ctr.value > 1) {
			parent = document.getElementById('compbody');
			lastrow = document.getElementById('comprow' + ctr.value);
			ctr.value = ctr.value*1 - 1;
			parent.removeChild(lastrow);
		}

	} else if (type == 4) {
		ctr = document.getElementById('rows_lang');
		if (ctr.value > 1) {
			parent = document.getElementById('langbody');
			lastrow = document.getElementById('langrow' + ctr.value);
			ctr.value = ctr.value*1 - 1;
			parent.removeChild(lastrow);
		}
	}
}

/* Prehvyrlqne kym syotvetnata sekciq v Contacts page */
function contactsShortcut () {
	var sel = document.forms['def1'].elements['sectionsel'];
	if (sel.value == 1) {
		window.location.href = '#economedia';
	} else if (sel.value == 2) {
		window.location.href = '#abon';
	} else if (sel.value == 3) {
		window.location.href = '#adsdncap';
	} else if (sel.value == 4) {
		window.location.href = '#adsmag';
	} else if (sel.value == 5) {
		window.location.href = '#adsonline';
	} else if (sel.value == 6) {
		window.location.href = '#inet';
	} else if (sel.value == 7) {
		window.location.href = '#events';
	} else if (sel.value == 8) {
		window.location.href = '#marketing';
	} else if (sel.value == 9) {
		window.location.href = '#careers';
	} else if (sel.value == 10) {
		window.location.href = '#print';
	}
	return true;
}

function openw(url, title, options) {
	var newwin = window.open(url, title, options);
	newwin.focus();
}

function GallInit(galpic) {
	var i;

	for (i = 1; i < 20; i ++) {
		if (document.getElementById(NAV_DIV + i)) {
			document.getElementById(NAV_DIV + i).style.display='block';
		}
	}
	if (!galpic) {
		showDiv(0);
	} else {
		showDiv(galpic);
	}
}

function hideGalPic(n) {
	if (document.getElementById) {
		document.getElementById('picNoScript_' + n).style.display = 'none';
	}
}

function doNext(nDiv) {
	if (nDiv == 0) {
		document.getElementById(NAV_DIV).style.display='none';
	} else {
		if(currentPic < (NUM_PICS)) {
			document.getElementById(NDIV).style.textDecoration='none';
			document.getElementById(NDIV).style.color='';
		} else {
			document.getElementById(NDIV).style.display = 'none';
		}
	}
}

function doBack(nDiv) {
	if (nDiv == 0) {
		document.getElementById(NAV_DIV).style.display='none';
	} else {
		if(currentPic > 1) {
			document.getElementById(BDIV).style.textDecoration='none';
			document.getElementById(BDIV).style.color='';
		} else {
			document.getElementById(BDIV).style.display='none';
		}
	}
}

function showDiv(nDiv) {
	for(var i = 1; i <= NUM_PICS; i++) {

		if (NUM_PICS > 1) {
			document.getElementById(LINKID_PREF + i).style.background= unselectedColor;
			document.getElementById(LINKID_PREF + i).style.color= currentPicColor;
		}

		var buttonid = i;
		var id = PICID_PREF + i;
		var node = document.getElementById(id);
		if(node && i==nDiv) {
			node.style.display='block';
			node.style.visibility='visible';
			currentPic = i;
			document.getElementById(LINKID_PREF + currentPic).style.background= currentPicColor;
			document.getElementById(LINKID_PREF + currentPic).style.color= unselectedColor;
		} else if(node) {
			node.style.display='none';
			node.style.visibility='hidden';
		}
	}
	doBack(nDiv);
	doNext(nDiv);
}

function selCh(param) {
	var el = document.getElementById(param);

	if(el.checked == true)
		el.checked = false;
	else {
		el.checked = true;
	}

	if(function_exists('checkFinPrise'))
		checkFinPrise();
	else
		checkAll();
}

function checkAll()
{
	var all = document.getElementById('all');
	var fp = document.getElementById('finalprice');
	var cnt = document.getElementById('cnt');

	var nokia = document.getElementById('nokia');
	var nokia_fp = document.getElementById('nokia_finalprice');
	var nok_cnt = document.getElementById('nokia_cnt');

	var benetton = document.getElementById('benetton');
	var benetton_fp = document.getElementById('benetton_finalprice');
	var benetton_cnt = document.getElementById('benetton_cnt');

	var ikea = document.getElementById('ikea');
	var ikea_fp = document.getElementById('ikea_finalprice');
	var ikea_cnt = document.getElementById('ikea_cnt');

	var geits = document.getElementById('geits');
	var geits_fp = document.getElementById('geits_finalprice');
	var geits_cnt = document.getElementById('geits_cnt');

	var starbucks = document.getElementById('starbucks');
	var starbucks_fp = document.getElementById('starbucks_finalprice');
	var starbucks_cnt = document.getElementById('starbucks_cnt');

	var walmart = document.getElementById('walmart');
	var walmart_fp = document.getElementById('walmart_finalprice');
	var walmart_cnt = document.getElementById('walmart_cnt');

	var amazon = document.getElementById('amazon');
	var amazon_fp = document.getElementById('amazon_finalprice');
	var amazon_cnt = document.getElementById('amazon_cnt');

	var ford = document.getElementById('ford');
	var ford_fp = document.getElementById('ford_finalprice');
	var ford_cnt = document.getElementById('ford_cnt');

	var ted1 = document.getElementById('ted1');
	var ted1_fp = document.getElementById('ted1_finalprice');
	var ted1_cnt = document.getElementById('ted1_cnt');

	var ted2 = document.getElementById('ted2');
	var ted2_fp = document.getElementById('ted2_finalprice');
	var ted2_cnt = document.getElementById('ted2_cnt');

	var fin = document.getElementById('final');
	var sum = 0;

	cnt.value = checkVal(cnt);
	nok_cnt.value = checkVal(nok_cnt);

	if(all.checked == true){
		fp.value = (cnt.value * 50) + ".00";
		sum += parseFloat(fp.value);
	}

	if(nokia.checked == true){
		nokia_fp.value = Math.round((nok_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(nokia_fp.value);
		document.getElementById('ch1').checked = true;
	}

	if(benetton.checked == true){
		benetton_fp.value = Math.round((benetton_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(benetton_fp.value);
		document.getElementById('ch2').checked = true;
	}

	if(ikea.checked == true){
		ikea_fp.value = Math.round((ikea_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(ikea_fp.value);
		document.getElementById('ch3').checked = true;
	}

	if(geits.checked == true){
		geits_fp.value = Math.round((geits_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(geits_fp.value);
		document.getElementById('ch4').checked = true;
	}

	if(starbucks.checked == true){
		starbucks_fp.value = Math.round((starbucks_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(starbucks_fp.value);
		document.getElementById('ch5').checked = true;
	}

	if(walmart.checked == true){
		walmart_fp.value = Math.round((walmart_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(walmart_fp.value);
		document.getElementById('ch6').checked = true;
	}

	if(amazon.checked == true){
		amazon_fp.value = Math.round((amazon_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(amazon_fp.value);
		document.getElementById('ch7').checked = true;
	}

	if(ford.checked == true){
		ford_fp.value = Math.round((ford_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(ford_fp.value);
		document.getElementById('ch8').checked = true;
	}

	if(ted1.checked == true){
		ted1_fp.value = Math.round((ted1_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(ted1_fp.value);
		document.getElementById('ch9').checked = true;
	}

	if(ted2.checked == true){
		ted2_fp.value = Math.round((ted2_cnt.value * 6.3)*Math.pow(10,2))/Math.pow(10,2) + "0";
		sum += parseFloat(ted2_fp.value);
		document.getElementById('ch10').checked = true;
	}

	if((parseFloat(sum) - parseInt(sum)) > 0)
		sum += "0";
	else
		sum += ".00";

	fin.value = sum;
}

function checkVal(param)
{
	if(parseInt(param.value) < 0)
		return Math.abs(param.value);
	else if(parseInt(param.value) == 0 || isNaN(parseInt(param.value)))
		return 1;
	else
		return parseInt(param.value);
}


//start biletite


function checkAllBileti()
{

	var f1 = document.getElementById('f1');
	var f1_fp = document.getElementById('f1_finalprice');
	var f1_cnt = document.getElementById('f1_cnt');

	var b1 = document.getElementById('b1');
	var b1_fp = document.getElementById('b1_finalprice');
	var b1_cnt = document.getElementById('b1_cnt');

	var c1 = document.getElementById('c1');
	var c1_fp = document.getElementById('c1_finalprice');
	var c1_cnt = document.getElementById('c1_cnt');

	var d2 = document.getElementById('d2');
	var d2_fp = document.getElementById('d2_finalprice');
	var d2_cnt = document.getElementById('d2_cnt');

	var c3 = document.getElementById('c3');
	var c3_fp = document.getElementById('c3_finalprice');
	var c3_cnt = document.getElementById('c3_cnt');

	var c4 = document.getElementById('c4');
	var c4_fp = document.getElementById('c4_finalprice');
	var c4_cnt = document.getElementById('c4_cnt');

	var d5 = document.getElementById('d5');
	var d5_fp = document.getElementById('d5_finalprice');
	var d5_cnt = document.getElementById('d5_cnt');

	var f6 = document.getElementById('f6');
	var f6_fp = document.getElementById('f6_finalprice');
	var f6_cnt = document.getElementById('f6_cnt');

	var b6 = document.getElementById('b6');
	var b6_fp = document.getElementById('b6_finalprice');
	var b6_cnt = document.getElementById('b6_cnt');

	var c6 = document.getElementById('c6');
	var c6_fp = document.getElementById('c6_finalprice');
	var c6_cnt = document.getElementById('c6_cnt');

	var f7 = document.getElementById('f7');
	var f7_fp = document.getElementById('f7_finalprice');
	var f7_cnt = document.getElementById('f7_cnt');

	var b7 = document.getElementById('b7');
	var b7_fp = document.getElementById('b7_finalprice');
	var b7_cnt = document.getElementById('b7_cnt');

	var c7 = document.getElementById('c7');
	var c7_fp = document.getElementById('c7_finalprice');
	var c7_cnt = document.getElementById('c7_cnt');

	var	f8 = document.getElementById('f8');
	var f8_fp = document.getElementById('f8_finalprice');
	var f8_cnt = document.getElementById('f8_cnt');

	var b8 = document.getElementById('b8');
	var b8_fp = document.getElementById('b8_finalprice');
	var b8_cnt = document.getElementById('b8_cnt');

	var c8 = document.getElementById('c8');
	var c8_fp = document.getElementById('c8_finalprice');
	var c8_cnt = document.getElementById('c8_cnt');

	var f9 = document.getElementById('f9');
	var f9_fp = document.getElementById('f9_finalprice');
	var f9_cnt = document.getElementById('f9_cnt');

	var b9 = document.getElementById('b9');
	var b9_fp = document.getElementById('b9_finalprice');
	var b9_cnt = document.getElementById('b9_cnt');

	var fin = document.getElementById('final');
	var sum = 0;



	if(f1.checked == true){
		f1_fp.value = (f1_cnt.value * 60) + ".00";
		sum += parseFloat(f1_fp.value);
		document.getElementById('f1').checked = true;
	}

	if(b1.checked == true){
		b1_fp.value = (b1_cnt.value * 45) + ".00";
		sum += parseFloat(b1_fp.value);
		document.getElementById('b1').checked = true;
	}

	if(c1.checked == true){
		c1_fp.value = (c1_cnt.value * 33) + ".00";
		sum += parseFloat(c1_fp.value);
		document.getElementById('c1').checked = true;
	}

	if(d2.checked == true){
		d2_fp.value = (d2_cnt.value * 20) + ".00";
		sum += parseFloat(d2_fp.value);
		document.getElementById('d2').checked = true;
	}

	if(c3.checked == true){
		c3_fp.value = (c3_cnt.value * 33) + ".00";
		sum += parseFloat(c3_fp.value);
		document.getElementById('c3').checked = true;
	}

	if(c4.checked == true){
		c4_fp.value = (c4_cnt.value * 33) + ".00";
		sum += parseFloat(c4_fp.value);
		document.getElementById('c4').checked = true;
	}

	if(d5.checked == true){
		d5_fp.value = (d5_cnt.value * 20) + ".00";
		sum += parseFloat(d5_fp.value);
		document.getElementById('d5').checked = true;
	}

	if(f6.checked == true){
		f6_fp.value = (f6_cnt.value * 60) + ".00";
		sum += parseFloat(f6_fp.value);
		document.getElementById('f6').checked = true;
	}

	if(b6.checked == true){
		b6_fp.value = (b6_cnt.value * 45) + ".00";
		sum += parseFloat(b6_fp.value);
		document.getElementById('b6').checked = true;
	}

	if(c6.checked == true){
		c6_fp.value = (c6_cnt.value * 33) + ".00";
		sum += parseFloat(c6_fp.value);
		document.getElementById('c6').checked = true;
	}

	if(f7.checked == true){
		f7_fp.value = (f7_cnt.value * 60) + ".00";
		sum += parseFloat(f7_fp.value);
		document.getElementById('f7').checked = true;
	}

	if(b7.checked == true){
		b7_fp.value = (b7_cnt.value * 45) + ".00";
		sum += parseFloat(b7_fp.value);
		document.getElementById('b7').checked = true;
	}

	if(c7.checked == true){
		c7_fp.value = (c7_cnt.value * 33) + ".00";
		sum += parseFloat(c7_fp.value);
		document.getElementById('c7').checked = true;
	}

	if(f8.checked == true){
		f8_fp.value = (f8_cnt.value * 60) + ".00";
		sum += parseFloat(f8_fp.value);
		document.getElementById('f8').checked = true;
	}

	if(b8.checked == true){
		b8_fp.value = (b8_cnt.value * 45) + ".00";
		sum += parseFloat(b8_fp.value);
		document.getElementById('b8').checked = true;
	}

	if(c8.checked == true){
		c8_fp.value = (c8_cnt.value * 33) + ".00";
		sum += parseFloat(c8_fp.value);
		document.getElementById('c8').checked = true;
	}

	if(f9.checked == true){
		f9_fp.value = (f9_cnt.value * 257.40) + "0";
		sum += parseFloat(f9_fp.value);
		document.getElementById('f9').checked = true;
	}

	if(b9.checked == true){
		b9_fp.value = (b9_cnt.value * 172.80) + "0";
		sum += parseFloat(b9_fp.value);
		document.getElementById('b9').checked = true;
	}

	fin.value = sum;

}

function checkValBileti(param)
{
	if(parseInt(param.value) < 0)
		return Math.abs(param.value);
	else if(parseInt(param.value) == 0 || isNaN(parseInt(param.value)))
		return 1;
	else
		return parseInt(param.value);
}


//end biletite

// anketata

function genrandom(i) {
	return Math.floor(Math.random()*i+1)
}

function anketatest() {
	return;
	// var CVal = readCookie('anketa1');
	// var cdays = 1;
	// if (CVal) return;
	// if(genrandom(10) == 10) {
	// 	if (confirm('Желаете ли да участвате в анкета на KARIERI.bg?')) {
	// 		cdays = 300;
	// 		window.open('/anketa/');
	// 	}
	// }
	// createCookie('anketa1', '1', cdays);
}

function anketapopup() {
	//~ return;
	var cdays = 1;
	var CVal = readCookie('anketa1');
	if (CVal) return;
	if(genrandom(3) == 3) {
		w = window.open("http://www.economedia.bg/menuanketa.html", "anketa", "width=790,height=500,scrollbars=1,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0");
	}
	createCookie('anketa1', '1', cdays);
}

function anketaok(p) {
	return;
	// cdays = 300;
	// createCookie('anketa1', '1', cdays);
	// window.open(p, 'anketareal', 'width=1024,height=700,scrollbars=1,resizable=1,status=1,toolbar=1,location=1,menubar=1,directories=1');
	// window.close();
	// return false;
}

function anketacancel() {
	window.close();
}

// coockie

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";
	document.cookie = name + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
	var ca = document.cookie.split(';');
	var nameEQ = name + "=";

	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1, c.length); //delete spaces
		if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
	}

	return null;
}


function function_exists( function_name ) {
    if (typeof function_name == 'string'){
        return (typeof window[function_name] == 'function');
    } else{
        return (function_name instanceof Function);
    }
}

function chngTxt(txt, param) {
	if (document.getElementById(param).value == txt) {
		document.getElementById(param).value = "";
	}
}

function clrTxt(txt, param) {
	if (document.getElementById(param).value == "") {
		document.getElementById(param).value = txt;
	}
}

function checkemail(param) {
	var str = document.getElementById(param).value;
	var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

	if (filter.test(str))
		return true;
	else
		alert("Въведохте невалиден e-mail адрес!");

	return false;
}

function changePic(pPos, pArr) {
	var dv = document.getElementById('bigpic');
	dv.innerHTML = '<img src="https://www.economedia.bg/shimg/zx565_'+pArr[pPos][0]+'.jpg" alt=""><p>'+pArr[pPos][1]+'</p>';
	return false;
}

function changeFont(inc,id){
   var p=document.getElementById(id);
     if(p.style.fontSize){
      var size=parseFloat(p.style.fontSize.replace("em",""));
     }else{
      var size=1;  //tuk slagame default stoinosta da se vidi ot css faila :)
     }
    if(!inc)  size=1;
    if((size+inc)<= 2.1 && (size+inc)>=0.3)
      p.style.fontSize=size+inc + 'em';
}

jQuery(document).ready(function() {
	jQuery('.buttons li').hover(
		function() {
			if(this.className != 'active' && this.id != 'AP') {
				this.className += ' hover';
			}
		},
		function() {
			if(this.className != 'active' && this.id != 'AP') {
				this.className = this.className.replace(/hover/g, '');;
			}
		}
	);
	jQuery('.click').hover(
		function() {
			this.className += ' clickhover';
		},
		function() {
			var clN = this.className;
			this.className = clN.replace(/clickhover/g, '');
		}
	);

	tl = jQuery('.treelist > li > strong');
	if (tl) {
		tl.each(function() {makeTreeList(this)});
	}

	var bigGalleryStory = jQuery('.albumPhotos');
	if(bigGalleryStory.length) { //koda da se izpulnqva samo ako ima takuv div
		jQuery(document).keyup(function(e) {
			if(e.keyCode == 39) { //next ->
				var nextlnk = jQuery('span:visible div.gallery ul.buttons li.right a');
				if(nextlnk.length) {
					document.location.href= nextlnk[0].href;
				}
			} else if(e.keyCode == 37) { //prev <-
				var prevlnk = jQuery('span:visible div.gallery ul.buttons li:not(.right) a');
				if(prevlnk.length) {
					document.location.href= prevlnk[0].href;
				}
			} else {
				return false;
			}
		});
	}

	jQuery('#mfairabo').click(function() {
		mediafairabo();
	});

	var sourceradio = jQuery('.sourceradio');
	if(sourceradio.length) { //koda da se izpulnqva samo ako ima takuv div
		showHideMobisites();
		sourceradio.click(showHideMobisites);
	}

	// events
	$('#eventregform').find('input[name="facttype"]').change(function() {
		if (this.value == 2) {
			$('#efactinfo').show().parent('td').parent('tr').next().show().next().hide();
			$('#postfactinfo').hide();
		} else {
			$('#efactinfo').hide().parent('td').parent('tr').next().hide().next().show();
			$('#postfactinfo').show();
		}
	});

	var gepardTableRegForm = jQuery('table#eventregform [name="gepardcity"]');
	if (gepardTableRegForm.length) {
		gepardTableRegForm.on('change', function() {
			hidePaymentRelatedInfoGepard(jQuery(this).val());
			return false;
		});

		var gepardcity_id = jQuery('[name="gepardcity"]:checked').val();
		hidePaymentRelatedInfoGepard(gepardcity_id);
		return false;
	}

	var innovationTableRegForm = jQuery('table.innovatiotable');
	if (innovationTableRegForm.length) {
		jQuery('[name="persontype"]', innovationTableRegForm).on('change', function() {
			hidePaymentRelatedInfoInnovation(jQuery(this).val());
			return false;
		});

		jQuery('[name="tickettype"]', innovationTableRegForm).on('change', function() {
			hideWorkshopRadioInnovation(jQuery(this).val());
			return false;
		});

		var persontype_id = jQuery('[name="persontype"]:checked', innovationTableRegForm).val();
		hidePaymentRelatedInfoInnovation(persontype_id);

		var tickettype_id = jQuery('[name="tickettype"]:checked', innovationTableRegForm).val();
		hideWorkshopRadioInnovation(tickettype_id);
	}

	var eventsTableRegForm = jQuery('table.eventsregtable');
	if (eventsTableRegForm.length) {
		jQuery('[name="persontype"]', eventsTableRegForm).on('change', function() {
			hidePaymentRelatedInfoInnovation(jQuery(this).val());
			return false;
		});

		var persontype_id = jQuery('[name="persontype"]:checked', eventsTableRegForm).val();
		hidePaymentRelatedInfoInnovation(persontype_id);
	}

	$('#print_copy_country').on('change', function () {
		var price = $('option:selected', $(this)).text().split(" ");
		// vzimame cenata v evro
		var price = parseInt(price[price.length-1]);
		
		addDelivery($(this).val(), price);
	});

	$('#basket p').each(function () {
		if ($(this).data('key') == 99999) {
			$('#print_copy1').attr('checked', 'checked');
			showOrHidePrintFields();
		}
	});
	showOrHidePrintFields();

	// Добавяне на червени рамки за полетата в които има грешки
	$('.error').each(function () {
		if ($(this).html().length > 0) {
			$(this).prev('.input-text').find('input').addClass('field_error');
		}
	});
});

function showOrHidePrintFields() {
	var country = $('#print_copy_country');
	var deliveryFields = $('#print_copy1').parent().parent('.input-text').nextAll('.input-text');
	var paytype = $('#paytype3');
	if ($('#print_copy1').is(':checked') === true) {
		country.removeAttr('disabled');
		deliveryFields.show();
		paytype.parent().show();
		paytype.parent('label').show();
	} else {
		country.attr('disabled', 'disabled');
		deliveryFields.hide();
		paytype.parent().hide();
		paytype.parent('label').hide();
		// Премахване на продукта от кошницата
		$("#basket .close[data-key='99999']").click();
		if ($('input[name="paytype"]').val() == 3) {
			$('input[name="paytype"]').val('');
		}
	}
}

function bigPictureZoom(photoguid){
		jQuery('.ipImage img')[0].src = '/lib/showimg.php?filename=zx290_' + photoguid + '.jpg';
		jQuery('.productGal a').removeClass('thisImage');
		jQuery(this).addClass('thisImage');
		jQuery('.ipImage a').click(
			function() {
				bigPicturePop(photoguid); return false;
			}
		);
		jQuery('.makeBigger a').click(
			function() {
				bigPicturePop(photoguid); return false;
			}
		);
}

function bigPicturePop(photoguid){
	window.open("/lib/showimg.php?filename=zx600_" + photoguid + ".jpg", "popwindow", "width=620,height=620,scrollbars=1,resizable=1,status=0,toolbar=0,location=0,menubar=0,directories=0");
	return false;
}


function reloadCaptcha() {
	var img = document.getElementById('cappic');
	img.src = '/lib/frmcaptcha.php?rld=' + Math.random();
	return false;
}

jQuery(document).ready(function() {
		/**
		 * Регистрационна форма за събитие - допълнителни участници
		 */
		jQuery('#eventregform #numattendees').change(function() {
			var num = jQuery(this).val();
			var max = jQuery('#maxnumattendees').val();
			var attendeeInfo;

			jQuery('#numattendeesinfo').show();

			for (var i = 1; i <= max; i++) {
				attendeeData = jQuery('#attendee' + i + 'data');
				if (i <= num) {
					jQuery(attendeeData).show();
				} else {
					jQuery(attendeeData).hide();
				}
			}
		});

	if ($('#loginErrStr').length == 1) {
		var lang = $('input[name="lang"]').val(), text;
		if (!$('#loginemail').val() || !$('#loginpass').val()) {
		$('#error-email, #error-loginpass').text('');
		$('#errorHolder').remove();
		if (!$('#loginemail').val()) {
			text = lang == 'en' ? 'It`s a required one. Please enter your email' : 'Текстовото поле не е попълнено';
			$('#error-email').text(text);
		}

		if (!$('#loginpass').val()) {
			text = lang == 'en' ? 'It`s a required one. Please enter your password.' : 'Текстовото поле не е попълнено';
			$('#error-loginpass').text(text);
		}

		} else {
			$('#error-email, #error-loginpass').text('');
			text = lang == 'en' ? 'It seems you have entered an invalid email address or password.' : 'Въвели сте несъвпадащи email или парола.';

			$('#errorHolder').remove();
			$('div#holder1').prepend('<p id="errorHolder" class="kforerror" style="display: block; margin-left: 15px;"><span class="errstr">' + text + '</span></p>');
		}
	}

        // show renewal box for KQuarterly - Subscription (4 issues)
	if ($('#recRadioBtns input:checked').val() == '2000__1_1') {
		$('#renewal').show();
	}
});


function vbaneri2(section, htmlstart, htmlend) {
	if (typeof(banners) == 'undefined') return false;
	if (!banners[section]) return false;
	if (showban1==1) {
		document.write(htmlstart);
		vbaneri(section);
		document.write(htmlend);
	}
}


function mediafairabo() {
	var email = jQuery('#mediafairmail').val();

	if(!email) {
		return false;
	}

	jQuery('#mediafairaboform').load("/mediafairabo.php", {'email': email});
}

function showHideMobisites() {
	if (jQuery('input[id=sourceid2]:checked').length) {
		var mobisitesdiv = jQuery('#mobisites');
		mobisitesdiv.hide();
		jQuery('input[type=checkbox]', mobisitesdiv).attr('checked', '');
	} else if (jQuery('input[id=sourceid1]:checked').length) {
		jQuery('#mobisites').show();
	}
}
function showParticipantInfo(){
    $('.participantInfo').css('display', 'block');
}
function setDefVal(pObj, pVal){
	if (pObj.value.length == 0)
		$(pObj).prev('label').text(pVal);
}
function clearFieldVal(pObj, pVal){
	$(pObj).prev('label').text('');
}
$(function(){
	var obj = $('#subscribe input');
	if ($('#subscribe .kforerror').length > 0){
		$('html,body').animate({
			scrollTop: $("#errorHolder").offset().top},
        'slow');
		$('#captcha').val('');
	}
	$.each( obj, function( key, value ) {
		if ($(this).val() && ($(this).attr('type') == 'text' || $(this).attr('type') == 'password')){
			$(this).prev('label').text('');
		}
	});
	// Показва скритите форми в случай, че са били активирани преди събмита
	changeFields($('#multiaddr1'), 3);
	changeFields($('#invoice1'), 4);
	changeFields($('#copy_recieve1'), 5);
	changeFields($('#copy_recieve2'), 5);

	var lFieldName, fieldLabels = {};
	$('#orderform input[type="text"]').on('focusin', function() {
		lFieldName = $(this).attr('name');
		fieldLabels[lFieldName] = $(this).prev('label').text();
		clearFieldVal(this);
	});
	$('#orderform input[type="text"]').on('focusout', function() {
		setDefVal(this, fieldLabels[$(this).attr('name')]);
	});
});

function changeFields(pObj, pContainer){ // Абонаментна форма
	var lHolder = $('#holder' + pContainer);
	var htmlContent = '';
	if (pContainer == 1){ // Потребителски профил
		var lContainerHeight = $('.column .box#profile').height();
		$('.column .box#profile').css('height', lContainerHeight);
		if ($('#container12').css('display') == 'none') {
			return
		}
		if ($(pObj).prop("checked") == true){
			$('#holder1').show();
			$('#holder2').hide();
			$('#test').hide();
		} else {
			$('#holder1').hide();
			$('#holder2').show();
			$('#test').hide();
		}
		return;
	} else if (pContainer == 3) { // Адрес за доставка на капитал
		if ($(pObj).prop("checked") == true){
			lHolder.fadeIn("fast");
			$('.sub-box.capital-daily h5').addClass('subtitle');
			$('.sub-box.capital-daily .subtitle').text('Адрес за доставка на “Капитал Daily”');
		} else {
			$('.sub-box.capital-daily h5').removeClass('subtitle');
			$('.sub-box.capital-daily h5').text('');
			lHolder.fadeOut("fast");
		}
	} else if (pContainer == 4) { // Искам фактура
		if ($(pObj).prop("checked") == true){
			$('#holder4').fadeIn("fast");
		} else {
			$('#holder4').fadeOut("fast");
		}
		return;
	} else if (pContainer == 5) { // Емайл за получаване на електронна фактура
		var lFieldVal = $(pObj).val();
		if (lFieldVal == 1 && $(pObj).prop("checked") == true){
			$('#holder7').hide()
			$('#holder5').fadeIn("fast");
		} else if(lFieldVal == 2 && $(pObj).prop("checked") == true) {
			$('#holder5').hide()
			$('#holder7').fadeIn("fast");
		}
	} else if (pContainer == 6) { // Съобщение към подарък (абонамент)
		var lFieldVal = $(pObj).val();
		if (lFieldVal == 1 && $(pObj).prop("checked") == true){ // Форма за подарък
			$('#container8').hide();
			$('#container9').fadeIn("fast");
			$('#container11').fadeIn("fast");
			$('#renewal input[name="autorenew"]:nth(1)').prop('checked', true);
		} else {
			$('#container8').fadeIn("fast");
			$('#container9').hide();
			$('#container11').fadeOut("fast");
			$('#renewal input[name="autorenew"]:nth(0)').prop('checked', true);
		}
	} else if (pContainer == 7) { // Съобщение към подарък (абонамент)
		var lFieldVal = $(pObj).val();
		if (lFieldVal == 1 && $(pObj).prop("checked") == true){
			$('#container10').fadeIn("fast");
		} else {
			$('#container10').fadeOut("fast");
		}
	} else if (pContainer == 8) { // Съобщение към подарък (абонамент)
		var lFieldVal = $(pObj).val();
		if (lFieldVal == 1 && $(pObj).prop("checked") == true){
			$('#container13').fadeIn("fast");
		} else {
			$('#container13').fadeOut("fast");
		}
	} else if (pContainer == 9) {
		$('#holder1').hide();
		$('#holder2').show();
	}
	return;
}

function setLoginError() {
	$(document).ready(function (){
		var lang = $('input[name="lang"]').val(),
			text;
		if (lang == 'en') {
//			$('div#errorHolder').html('<p id="errorHolder" class="kforerror" style="display: block"><span class="errstr">It seems you have entered an invalid email address or password.</span></p>');
		} else {
			$('div#errorHolder').html('<p id="errorHolder" class="kforerror" style="display: block"><span class="errstr">Въвели сте несъвпадащи email или парола.</span></p>');
		}

		$('#error-email, #error-loginpass').text('');
		var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
		if (!$('#loginemail').val() || !$('#loginpass').val()) {
			$('#errorHolder').remove();
			if (!$('#loginemail').val() || !re.test($('#loginemail').val())) {
				text = lang == 'en' ? 'It`s a required one. Please enter your email in the format mail@mail.com' : 'Текстовото поле не е попълнено';
				$('#error-email').text(text);
			} 

			if (!$('#loginpass').val()) {
				text = lang == 'en' ? 'It`s a required one. Please enter your password.' : 'Текстовото поле не е попълнено';
				$('#error-loginpass').text(text);
			}
		} else if (!re.test($('#loginemail').val())) {
			text = lang == 'en' ? 'It`s a required one. Please enter your email in the format mail@mail.com' : 'Текстовото поле не е попълнено';
			$('#error-email').text(text);
		} else {
			text = lang == 'en' ? 'It seems you have entered an invalid email address or password.' : 'Въвели сте несъвпадащи email или парола.';

			$('#errorHolder').remove();
			$('div#holder1').prepend('<p id="errorHolder" class="kforerror" style="display: block; margin-left: 15px;"><span class="errstr">' + text + '</span></p>');
		}
	});
}

function ajaxLogin(){
	var data = 'email=' + $('#loginemail').val() + '&pass=' + $('#loginpass').val() + '&ajaxlogin=1';
	var lUrl = '/login/index.php?tAction=save&showform=login&site=economedia&placeValuesBefore';
	$.post( lUrl, data).done(function(result){
		var res = $.parseJSON(result);
		if (res.state == 0){
			$('div#errorHolder').css('display', 'block');
			if ($('#holder1').find('#errorHolder').length == 0)
				setLoginError();
		} else {
			$('#loginCheckbox').hide();
			$('#container12').hide();
			$('#holder1').hide();
			$('.column .box#profile').css('height', 'auto');
			$('#holder6').html('<p>В момента сте логнат като потребител <strong>' + res.email + '</strong>\n\
				<a href="/login/index.php?showform=logout&site=dnevnik&placeValuesBeforeTB_=savedValues&TB_iframe=true&height=240&width=370&modal=true">Влезте с друг профил</a></p>\
				<a onclick="ajaxLogout(this);return false;" class="logout" href="#"></a>\
			');
			$('#holder6').fadeIn("fast");
		}
	});
}

function hideProflileForms() {
	$('#holder1').hide();
	$('#holder2').hide();
}

function ajaxLogin2() {
	var data = 'email=' + $('#loginemail').val() + '&pass=' + $('#loginpass').val() + '&ajaxlogin=1';
	var lUrl = '/login/index.php?tAction=save&showform=login&site=economedia&placeValuesBefore';
	$.post( lUrl, data).done(function(result) {
		var res = $.parseJSON(result);

		if (res.state == 0) {
			setLoginError();

		} else {
			$('#loginCheckbox').hide();
			$('#container12').hide();
			hideProflileForms();
			$('.column .box#profile').css('height', 'auto');
			$('#holder6').fadeIn("fast");
			var loggedMsg;
			if ($('#lang').val() == 'en') {
				loggedMsg = '<p id="loggedMsg">You are currently logged in as.  If you\'d like to change the profile,<strong>' + res.email + '</strong>\n\
					<a onclick="ajaxLogout(this);return false;" class="logout" href="#">click here</a>';
			} else {
				loggedMsg = '<p id="loggedMsg">В момента сте логнат като потребител <strong>' + res.email + '</strong>\n\
					<a onclick="ajaxLogout(this);return false;" class="logout" href="#"> влезте с друг профил</a>';
			}

			$('#holder6').html('<p id="loggedMsg">' + loggedMsg + '</a>');
			$('#profileForms').fadeOut("fast");
			$('#input_register').attr('checked', 'checked');
			$('#controls').fadeOut("fast");
			$('#profile').after('<span style="display: none">' + res.logincookies + '</span>');
			$('#senderEmail').text(res.email);
		}
	});
}
function ajaxLogout(pObj){
	$.post( '/login/index.php?showform=logout&amp;site=economedia').done(function(result){
		$('#loginCheckbox').show();
		$('#loginCheckbox').attr('checked');
		$('#input_login').attr('checked');
		$('#holder6').fadeOut("fast"); // Скриваме съобщението за успешно логване
		$('#loggedMsg').fadeOut("fast"); // Скриваме съобщението за успешно логване
//		$('#holder1').fadeIn("fast");
		$('#input_login').attr("checked");
		// checkout
		$('#profileForms').fadeIn("fast");
		$('#controls').fadeIn("fast");
		$('#profile #holder2').fadeIn("fast");
	});
}

function checkRegFormField(pObj) {
	if ($(pObj).val()) {
		var lFieldName = $(pObj).attr('id');
		var lFieldHolder = $('#' + lFieldName);
		var data = lFieldName + '=' + $(pObj).val();

		if (lFieldName == 'cpassword2'){
			data = lFieldName + '=' + $(pObj).val() + '&password=' + $('#password').val();
		}

		$.post('/special-offer.php', data + '&checkRegData=1').done(function(result) {
			if (result) {
				$('#errorHolder').html('<p id="error' + lFieldName + '" class="kforerror"><span class="errstr">' + result + '</span></p>');
				lFieldHolder.parent().addClass('error');

			} else {
				$('#errorHolder').remove('#error' + lFieldName + '');

				if (lFieldName == 'cpassword2'){
					$('#errorHolder').html('');
				}
			}
		});
	}
}

var lastid = 0;
function corporativeAddNewFields() {
	var subholder = jQuery("#subscribe-holder"),
	copy = subholder.clone();
	lastid += 1;
	var newhtml = copy.html().replace(/_(\d+)/g, '_'+lastid);
	jQuery("#add-new-fields").before(newhtml);

	getPacketsByIssue();
	return false;
}

function getPacketsByIssue() {
	if ($('.corporate-subscription').length == 0) return false;
	function getPackets(el) {
		var elemID = el.attr('id');

		$.post('/ajaxSrv/order.php', {'type': 1, 'izdanie': el.val(), 'action': 'getPacketsByIssue'}, function( data ) {
			var parsedData = JSON.parse(data),
				elemNum = elemID.substr(elemID.length-1);

			$('#subscriptiontype_' + elemNum).html(parsedData.name);
			$('#period_' + elemNum).html(parsedData.period);
		});
	}

	$('.corporate-subscription select').on('change', function () {
		var el = $(this), elemID = el.attr('id');
		if (elemID.indexOf("subscription_") !== 0) {
			return;
		}
		getPackets(el);
	});

	$(document).ready(function () {
		getPackets($('#subscription_0'));
	});
}

$(document).ready(function (){
	var lFieldName, fieldLabels = {};
	$('#orderform input[type="text"]').on('focusin', function() {
		lFieldName = $(this).attr('name');
		fieldLabels[lFieldName] = $(this).prev('label').text();
		clearFieldVal(this);
	});
	$('#orderform input[type="text"]').on('focusout', function() {
		setDefVal(this, fieldLabels[$(this).attr('name')]);
	});

	// Полета в картичката
	$('#giftnamefrom, #giftmsg').each(function () {
		if ($(this).val()) {
			clearFieldVal(this);
		}
	});

	var obj = $('#subscribe input');
	if ($('#subscribe .kforerror').length > 0){
		$('html,body').animate({
			scrollTop: $("#errorHolder").offset().top},
		'slow');
		$('#captcha').val('');
	}
	$.each( obj, function( key, value ) {
		if ($(this).val() && ($(this).attr('type') == 'text' || $(this).attr('type') == 'password')){
			$(this).prev('label').text('');
		}
	});
	// Показва скритите форми в случай, че са били активирани преди събмита
	changeFields($('#multiaddr1'), 3);
	changeFields($('#invoice1'), 4);
	changeFields($('#copy_recieve1'), 5);
	changeFields($('#copy_recieve2'), 5);

	jQuery("#container8").detach().insertAfter($('#recipient0').parent('label'));
	if (jQuery('input[id=regformcheckbox]:checked').length) {
		changeFields($('#regformcheckbox'), 1);
	}
	if (jQuery('input[id=recipient1]:checked').length) {
		changeFields($('#recipient1'), 6);
	}
	if (jQuery('input[id=abonpresent1]:checked').length) {
		changeFields($('#abonpresent1'), 6);
	}
	if (jQuery('input[id=messageshow1]:checked').length) {
		changeFields($('#messageshow1'), 7);
	}

	// Checkout form basket
	var subscribeBoxobj = $('.economedia-checkout #basket');
	if (subscribeBoxobj.length > 0) {
		var top = $('#basket').offset().top,
			element = $('#basket');

		$(document).on('scroll load', function(e) {
			  var commonFields = $('#formContainer'),
					  commonFieldsTop = $('#commonfields').offset().top,
					  commonFieldsH = $('#commonfields').height(),
					  topScroll = $(document).scrollTop();

			  		element.css('top', topScroll);
			  if(topScroll + top + element.height() - 20 >= commonFieldsTop + commonFieldsH){
				   element.css('top', commonFieldsTop + commonFieldsH - top - element.height());
			  }
		});
	}

	$('.pos-more-info').on('click', function() {
		var hrefParts = this.href.split('#'),
			popupId = hrefParts[1],
			infoPopup;

		if (popupId) {
			infoPopup = $('#' + popupId).clone(true);
			infoPopup.attr('id', popupId + '-c');

			$('body').prepend('<div class="pos-lightbox-popup broke-endless-pages">' + $('<div />').append(infoPopup.removeClass('pos-tip')).html() + '</div>');

			$('.pos-lightbox-popup').find('.main').css('top', $(window).scrollTop() + ($(window).height() - infoPopup.height()) / 2);

			$('.pos-lightbox-popup').fadeIn('slow', function() {
				var popup = $(this);
				popup.css('height', $(document).height() + 'px').on('click', '.close', function() {
					popup.fadeOut().remove();
					return false;
				});
			});
		}

		return false;
	});

	hideBasketRemoveBtn();
	removeProducts();

	var lCurrProductData = $('#recProducts input:checked').val();

	$('#products input').on('change', function() {
		var label = $(this).next('label');
		var data = {
			'key': label.data('key'),
			'name': label.data('name'),
			'price': label.data('price')
		};

		$.post('/ajaxSrv/order.php', {'data': data, 'currProduct': lCurrProductData, 'action': 'add'}, function( data ) {
			// var lTopPosition = $('#basket').position().top;

			$('#basket').html(data);
			// $('#basket').css('top', lTopPosition);
			// var lMainProductName = $('#basket .product .productName').text();
			// lMainProductName = lMainProductName.replace("/", "-");
//			 if ($('#kquarterly').length !== 1) {
			// 	$('#recProducts h2.title').text(lMainProductName);
//			}

			var lMainProductName = $('#basket .product .productName').text().replace("/", "-");

			if ($('#kquarterly').length !== 1) {
				$('#recProducts h2.title').text(lMainProductName);
			}

			removeProducts();
			hideBasketRemoveBtn();
		});
	});

	$('#recProducts input').on('change', function() {
		var data = [
			$(this).val(),
			$(this).next('label').text(),
			$(this).next('label').attr('data-name')
		],
		packtype = $(this).parent().find('label').data('type'),
		lPacketVal = data[0].substr(0, data[0].length-2);

		$('#packet').val(lPacketVal);
		var currency = 'bgn';
		if ($('#kquarterly').length === 1) {
			currency = 'euro';
			$('#renewal').hide();
			if ($(this).next('label').data('key') == 2000) {
				$('#renewal').show();
				$('#paytype2').parent('label').show();
			} else {
				$('#paytype2').parent('label').hide();
			}
		}
		$.post('/ajaxSrv/order.php', {'data': data, 'packtype': packtype, 'currProduct': lCurrProductData, 'currency': currency, 'action': 'add'}, function( d ) {
			$('#basket').html(d);

			var lMainProductName = $('#basket .product .productName').text().replace("/", "-");

			if ($('#kquarterly').length !== 1) {
				$('#recProducts h2.title').text(lMainProductName);
			}

			removeProducts();
			hideBasketRemoveBtn();

			var promocapital25 = $('body').data('promocapital25');

			if (promocapital25) {
				if (data[0] == '10009315_12_1_2' || data[0] == '10009316_12_1_2') {
					$('#renewal').hide();
					$('#renewal').find('input[name="autorenew"]').val(0);
					$('#recProducts').find('.title').text($('#recProducts').find('.title').text() + ' + 3 месеца бонус');
					$('#basket').find('.productName').text($('#basket').find('.productName').text() + ' + 3 месеца бонус');
				} else {
					$('#renewal').show();
					$('#recProducts').find('.title').text($('#recProducts').find('.title').replace(' + 3 месеца бонус', ''));
					$('#basket').find('.productName').text($('#basket').find('.productName').replace(' + 3 месеца бонус', ''));
				}
			}
		});

		lCurrProductData = $('#recProducts input:checked').val();

		if (lPacketVal.split('_')[1] < 6) {
			$('#paytype13').attr('checked', null).parent().hide();
		} else {
			$('#paytype13').parent().show();
		}
	});

	var loginInput = $('.economedia-checkout #input_login');
	if (loginInput.prop('checked') === true && $('#controls').css('display') != 'none') {
		changeFields(loginInput, 1);
	}

	var lSelect = $('.subscription-detail-main .option .select .wrapper-dropdown'),
		finishOrderTxt = 'Завърши поръчката';
	if ($('#lang').val() == 'en') {
		finishOrderTxt = 'Finish Order';
	}

	$('#payform input[type="submit"]')
		.addClass('form_pay')
		.attr('value', finishOrderTxt)
		.on('click', function() {
			ga('main.send', {'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'click', 'eventLabel': 'Завърши поръчката'});
		});

	var btnState = 0;
	$('#payform input[type="submit"], #payform a.confirmBtn').on('click', function() {
		var el = $(this);
		
		if (btnState == 0) {
			btnState = 1;

			$.ajax({
				url: '/ajaxSrv/order.php',
				method: 'POST',
				data: {'action': 'saveOrderData'},
				dataType: 'json',
				async: false,

			}).done(function(data) {
				var lPayTypeID = $('#paytypeid').val();
				if (lPayTypeID == 5 || lPayTypeID == 2) {
					window.location = el.attr('href');
					return;
				}

				document.forms['form_pay'].submit();
			});

			return false;
		}
	});

	$('a.selected', lSelect).on('click', function(){
		// close all opened dropdowns
//		lSelect.removeClass('open');
//		$('ul.dropdown', lSelect).css('display', 'none');
		var lSelectPeriod = $(this).parent('.wrapper-dropdown');
		var lDropdown = $('ul.dropdown', lSelectPeriod);

		if (lSelectPeriod.hasClass('open')) { // close
			lDropdown.slideUp('fast'); //('display', 'none');
			lSelectPeriod.removeClass('open');
		} else { // open
			lSelectPeriod.addClass('open');
			lDropdown.slideDown('fast');
			lDropdown.css('display', 'block');
		}

		return false;
	});

	// Offers page dropdowns
	$('.wrapper-dropdown ul.dropdown a').on('click', function() {
		var colID = $(this).closest('.option').attr('id');
		var lHref = $('#' + colID + ' .order-button').attr('href');
		var lUrl = $(this).attr('href');
		$('#' + colID + ' .order-button').attr('href', lUrl);
		var period = $(this).attr('data-period');
		$(this).closest('ul.dropdown').slideUp('fast');
		$(this).closest('.wrapper-dropdown').removeClass('open');
		var lFHide = $('#' + colID + ' a.selected').attr('data-period');
		$('#' + colID + ' a.selected').attr('data-period', period);

		$('#' + colID + ' ul.dropdown li').removeClass('hide');
		$('#' + colID + ' a[data-period=\'' + period +  '\']').closest('li').addClass('hide');
		$('#' + colID + ' a.selected').html($(this).html());
		return false;
	});

	// Offers page sms popup
	var inputLabel = $('.popup-sms label[for="sms_code"]');
	var labelText = inputLabel.text();
	$('.popup-sms #sms_code').on('focus', function() {
		inputLabel.text('');
	});
	$('.popup-sms #sms_code').on('blur', function() {
		if ($(this).val() === '') {
			inputLabel.text(labelText);
		}
	});
	$('.popup-sms #clearForm').on('click', function() {
		$('#sms_code').val('');
		$('#abotoc1').prop('checked', false);
		inputLabel.text(labelText);
		return false;
	});

	$('.order-sms-button').on('click', function() {
		var popup = $('#TB_window').find('.popup-sms');
		$('#TB_window').css('background', 'transparent');
		popup.show();

		popup.on('click', 'input[type="submit"]', function() {
			var form = popup.find('form'),
				code = $('#sms_code', form).val();

			form.find('.kforerror').remove();

			if (!$('#sms_code', form).val()) {
				msg = 'Не е въведен код.';
				form.prepend('<span class="kforerror">' + msg + '</span>');
				$('#code', form).parent('.input-text').addClass('error');

			} else if (!$('#abotoc1', form).is(':checked')) {
				form.find('.kforerror').remove();

				msg = 'Не е маркирана отметката за съгласие с Общите условия.';
				form.prepend('<span class="kforerror">' + msg + '</span>');
				$('#code', form).parent('.input-text').addClass('error');

			} else {
				$.post('/smspayform.php', {'code': code}, function(d) {
					var data = $.parseJSON(d),
						msg, successurl;

					if (data.status == 'error') {
						msg = data.data.msg;
						form.prepend('<span class="kforerror">' + msg + '</span>');
						$('#code', form).parent('.input-text').addClass('error');

					} else if (data.status == 'ok') {
						if (data.data.lguserid) {
							form.remove();
							$('p', popup).remove();
							$('h3', popup).after('<p>' + data.data.msg + '</p>');

						} else {
							popup.hide();
							$('#sms_code').val('');
							$('#TB_window').css('top', 0);
							successurl = 'http://' + window.location.host + '/smsactivate.php?code=' + code;
							tb_show('', 'http://' + window.location.host + localloginurl + '?showform=login&params=' + encodeURIComponent('activatecode=' + code + '&successurl=' + encodeURIComponent(successurl)) + '&successurl=' + encodeURIComponent(successurl) + '&TB_iframe=true&height=390&width=550&modal=true', 'null');
						}
					}
				});
			}

			return false;
		});

		popup.on('click', '.close', function() {
			$('#sms_code').val('');
			popup.hide();
			tb_remove();
			return false;
		});
	});

	$('.auto-renewal #hideInfo').on('click', function(){
		var lContainer = $('.auto-renewal p .light-gray');
		if (lContainer.is(':visible')) {
			ga('main.send', { 'hitType': 'event', 'eventCategory': 'CheckoutEvents', 'eventAction': 'Learn More: ARB' });
			if ($('input[name="lang"]').val() == 'en') {
				$(this).text('Learn more');
			} else {
				$(this).text('Разбери повече');
			}
		} else {
			if ($('input[name="lang"]').val() == 'en') {
				$(this).text('Hide information');
			} else {
				$(this).text('Скрий информацията');
			}
		}
		lContainer.toggle();

		return false;
	});

	var maxH = 0;
	$('#offers .option h2.title').each(function (idx){
		if (maxH < $(this).height()) {
			maxH = $(this).height();
		}
	});
	if (maxH) {
		$('#offers .option h2.title').height(maxH);
	}

	var notH = 1,
		dropdown = $('#offers .wrapper-dropdown ul').on('hover', function(){notH^=1;});
	$(document).on('mousedown keydown', function( e ){
		if(notH || e.which == 27) {
			dropdown.css('display', 'none');
		}
	});

	// analytics trackers
	$('#facebook, #linkedin').on('click', function() {
		var lEventAction;
		if ($(this).attr('id') === 'facebook') {
			lEventAction = 'Facebook';
		} else {
			lEventAction = 'LinkedIn';
		}
		ga('main.send', { 'hitType': 'event', 'eventCategory': 'Social Buttons', 'eventAction': lEventAction });
	});

	// Отчитане на грешките
	$('.error').each(function (k, v) {
		var el = $(this);
		var inpID = el.attr('id');
		if (inpID) {
			var parts = inpID.split('-');
		}

		if (el.text().length > 0 && parts) {

			if (inpID === 'error-captcha') {
				ga('main.send', { 'hitType': 'event', 'eventCategory': 'CheckoutErrors', 'eventAction': 'Wrong Captcha', 'eventLabel': (el.attr('data-wrong-codes')*1 + 1) });
			}

			ga('main.send', { 'hitType': 'event', 'eventCategory': 'CheckoutErrors', 'eventAction': 'FieldValidation', 'eventLabel' : inpID + ' - ' + $('#' + parts[1]).val() });
		}
	});

	// Отчитане на попълнени полета Изберете получател и адрес за доставка
	var lFormType = parseInt($('.economedia-checkout').attr('data-formtype'));

	$('#reciever-box input[type="text"]').on('change', function() {
		var lCompletedFields = 0;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

		$('#reciever-box input[type="text"]').each(function() {
			var el = $(this);
			var lCurrVal = el.val();

			if (el.val().length > 0) {
				if (el.attr('name') == 'zipcode' && $.isNumeric(lCurrVal) === false) {
					lCompletedFields--;
				}

				if (lFormType === 2 && el.attr('name') == 'recipientemail' && !emailReg.test(lCurrVal)) {
					lCompletedFields--;
				}
				lCompletedFields++;
			}
		});

		if (lFormType === 2 && lCompletedFields === 4) {
			ga('send', { 'hitType': 'pageview', 'page': location.href + '/payment/', 'title': 'Checkout - Достигнал секцията за плащане' });
		} else {
			if (lCompletedFields === 6) {
				ga('send', { 'hitType': 'pageview', 'page': location.href + '/payment/', 'title': 'Checkout - Достигнал секцията за плащане' });
			}
		}
	});

	// KQarterly
	if ($('#kquarterly').length) {
		$('#print_copy1').on('click', function() {
			if ($(this).is(':checked')) {
				showOrHidePrintFields();
				addDelivery(0, 0);
			} else {
				$('#paytype3').prop('checked', false);
				$('#print_copy_country option[value="0"]').prop('selected', 'selected');
				showOrHidePrintFields();
			}
		});

		$('#print_copy_country').on('change', function() {
			if ($(this).val() == 0) {
				$('#paytype3').parent('label').show();

			} else {
				$('#paytype3').parent('label').hide();
				$('input[name="paytype"]').val('');
			}
		});
		
		if ($('#recProducts input[name=periods]:checked').next('label').attr('data-key') == 2000) {
			$('#paytype2').parent('label').show();
		} else {
			$('#paytype2').parent('label').hide();
		}
	}

	$('#payment-box input').on('click', function() {
		ga('send', { 'hitType': 'pageview', 'page': location.href + '/final/', 'title': 'Checkout - Достигнал секцията за плащане' });
	});

	// Отчитане на брой генерирани captcha кодове
	var newCaptchaCnt = 0;
	$('#newCaptcha').on('click', function() {
		newCaptchaCnt++;
		ga('main.send', { 'hitType': 'event', 'eventCategory': 'CheckoutEvents', 'eventAction': 'Get New Captcha', 'eventLabel': newCaptchaCnt });
	});

	// corporative
	getPacketsByIssue();

	var clicked = 0;
	$('#paypalBtn').on('click', function (){
		if (clicked === 1) {
			return false;
		}
		clicked = 1;
	});

	$('a[href^="http://www.capital.bg"]').on('click', function() {
		var m;

		if (m = this.href.match(/(.+)#(\w+)&_ga=([\d\.]+)/)) {
			this.href = m[1] + (this.href.indexOf('?') != -1 ? '&' : '?') + '_ga=' + m[3] + '#' + m[2];
		}
	});

	$('#paytype5014').css('height', '18px');
});

function removeProducts() { // Премахване на продукт
	$('#basket .product a').on('click', function(){
		var lProductsCount = $('#basket .total').attr('data-count');

		if (lProductsCount > 1) {
			var key = $(this).attr('data-key');
			var mainProduct = $(this).attr('data-main');
			var lProductRow = $(this).parent('.product');

			if (key == 99999) {
				$('#print_copy1').parent().parent('.input-text').nextAll('.input-text').hide();
				$('#print_copy1').removeAttr('checked');
				$('#paytype3').parent().hide();
				$('#paytype3').parent('label').hide();
			}

			$.post('/ajaxSrv/order.php', {'productid': key, 'action': 'remove'}, function( data ) {
				if ($('#lang').val() == 'en') {
					lProductRow.html('<span>Removed!</span>');
				} else {
					lProductRow.html('<span>Успешно изтриване!</span>');
				}

				if ($('#lang').val() == 'en') {
					$('#totalPrice strong').text('Total: ' + data.totalprice + ' BGN (€ ' + (data.totalprice / 2) + ')');
				} else {
					$('#totalPrice strong').text('Общо: ' + data.totalprice + ' лв.');
				}

				setTimeout(function(){
					lProductRow.fadeOut('slow');
				}, 1000);

				$('#basket .total').attr('data-count', data.cnt);

				if (parseInt(mainProduct) === 1 && data.recProducts) {
					var lKeyType, lInputLabel;

					$.each(data.recProducts, function(k, v) {
						lKeyType = v.key + '_' + v.type; // Име на продукта + тип 1/8
						lInputLabel = $('#recProducts #recRadioBtns label.input-radio');
						lInputLabel.eq(k).attr('for', 'periods' + lKeyType);
						lInputLabel.eq(k).children('input').attr('id', 'periods' + lKeyType);
						lInputLabel.eq(k).children('input').val(lKeyType);
						lInputLabel.eq(k).children('label').attr('data-name', v.name);
						lInputLabel.eq(k).children('label').children('strong').text(v.period + ' / ' + v.price);
						lInputLabel.eq(k).children('input[value="' + data.packet + '_' + v.type + '"]').attr('checked', 'checked');
					});

					$('#recProducts h2.title').text(data.recProductsName);
				}

				hideBasketRemoveBtn();
			}, 'json');
		}
		return false;
	});
}

function hidePaymentRelatedInfoInnovation(persontype_id) {
	if (persontype_id != null && persontype_id != 'undefined') {
		if($.inArray(persontype_id.toString(), ["2"]) > -1) {
			jQuery('table#invoice-table').hide();
		} else {
			jQuery('table#invoice-table').show();
		}
	}
}

function hideWorkshopRadioInnovation(tickettype_id) {
	if (tickettype_id != null && tickettype_id != 'undefined') {
		if(jQuery.inArray(tickettype_id.toString(), ["4"]) > -1) {
			jQuery('td.innovation-workshop').hide();
		} else {
			jQuery('td.innovation-workshop').show();
		}
	}
}

function closepopup(popup) {
	jQuery('#'+popup).hide();
}

function showfillprofile(eventid, regid) {
	var popup = jQuery('#ridProfilePopup_'+regid);

	if (eventid > 0 && regid > 0) {
		$.get('/eventfillprofile.php', {'eventid': eventid, 'regid': regid}, function(d) {
			popup.html(d);
		});
	}
	popup.show();
	popup.css('height', 'auto');
}

function submitfillprofile(p, regid, formid){
	var lmethod = 'POST',
		formData = new FormData(document.getElementById(formid));

	jQuery.ajax({
		url:'/eventfillprofile.php',
		data: formData,
		type: lmethod,
		processData: false,
		contentType: false,
		success: function(d) {
			var popup = jQuery('#ridProfilePopup_'+regid);
			popup.html(d);
		}
	});

	return false;
}

function fillprofileclicksubmit(formid) {
	var form = document.getElementById(formid);
	form.onsubmit();

	return true;
}

function showseemore(regid) {
	// zatvarqme vsichki popup-i pyrvo
	jQuery('.ridSeeMorePopup').hide();

	var popup = jQuery('#ridSeeMorePopup_'+regid).show();
}

function hidePaymentRelatedInfoGepard(gepardcity_id) {
	if (gepardcity_id != null && gepardcity_id != 'undefined') {
		if($.inArray(gepardcity_id.toString(), ["2", "3"]) > -1) {
			jQuery('table#payment-table').hide();
			jQuery('table#discount-table').hide();
			jQuery('table#regprices-table').hide();
		} else {
			jQuery('table#payment-table').show();
			jQuery('table#discount-table').show();
			jQuery('table#regprices-table').show();
		}
	}
}

function addDelivery(value, price) {
	var jsonObj = {0: "Shipping: Bulgaria - Free", 12: "Shipping: Europe", 26: "Shipping: United States"};
	if (value == 0) {
		price = 0;
	}
	var data = {
		'id': 99999,
		'name': jsonObj[value],
		'price': price,
		'packtype': '',
		'currProduct': value,
		'currency': 'euro',
		'action': 'addSimple'
	};

	$.post('/ajaxSrv/order.php', data, function( data ) {
		// var lTopPosition = $('#basket').position().top;
		$('#basket').html(data);
		// $('#basket').css('top', lTopPosition);
		removeProducts();
//	            hideBasketRemoveBtn();
	});
}

function changeFieldsForDifferentProducts(pObj, keepbankpayment) {
	var lFieldVal = jQuery(pObj).val();
	if (lFieldVal == 1 && jQuery(pObj).prop("checked") == true){// offline product "hartieno izdanie"
		jQuery('#holder8').fadeIn("fast");// forma za adres za dostavka
		jQuery('#offlinepayment1').parent().fadeIn("fast");// metod za pla6tane bankov prevod
		jQuery('#offlinepayment2').parent().fadeIn("fast");// metod za pla6tane nalojen platej
		jQuery('#rapidolink').fadeIn("fast");
	} else if(lFieldVal == 2 && jQuery(pObj).prop("checked") == true) {// online product "pdf file"
		jQuery('#holder8').fadeOut("fast");

		if (typeof(keepbankpayment) == 'undefined') {
			jQuery('#offlinepayment1').parent().fadeOut("fast");
		}
		jQuery('#offlinepayment2').parent().fadeOut("fast");
		jQuery('#rapidolink').fadeOut("fast");
	}
	return;
}

$(function(){
	var obj = $('.wrapper.promo-offer form input');
	if (obj.length == 0){
		obj = $('.wrapper.promo-next form input');
	}
	if ($('.wrapper.promo-offer form .kforerror').length > 0){
		scrollToElem('errorHolder');
		$('#captcha').val('');
	}
	$.each( obj, function( key, value ) {
		if ($(this).val() && ($(this).attr('type') == 'text' || $(this).attr('type') == 'password')){
			$(this).prev('label').text('');
		}
	});
	changeFields($('#invoice1'), 4);
	changeFields($('#copy_recieve1'), 5);
	changeFields($('#copy_recieve2'), 5);
	changeFields($('#multiaddr1'), 3);
});

function scrollToElem(pElemID){
	$('html,body').animate({scrollTop: $("#" + pElemID).offset().top},'slow');
}

function hideBasketRemoveBtn() {
	if ($('#totalPrice').attr('data-count') == 1) {
		$('#basket .product a.close').remove();
	}
}

// Добавяне на тракинг кодове
$(document).ready(function(){

	var capital = ['1', 'capitalweekly'];
	var kpro = ['48', 'kpro'];

	// Тракване на евенти за аналитикс
	$('.subscription-products').each(function(){

		var period = $(this).val().split('_')[1];
		var issue = $(this).data('issue');

		$(this).on('click', function() {
			ga('main.send', { 'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'check', 'eventLabel': 'Капитал ' + (kpro.includes(issue.toString()) ? 'PRO ' : '') + period + ' месеца' });
		});
	});

	$('.subscription-payments').each(function(){

		var ptype = $(this).val().toString();
		var eventLabel;

		if (ptype === '9') {
			eventLabel = 'PayPal';
		} else if (ptype === '5014') {
            eventLabel = 'Банковa карта';
		} else if (ptype === '1') {
            eventLabel = 'ePay Кредитна карта';
		} else if (ptype === '5') {
            eventLabel = 'Банков превод';
		} else if (ptype === '15') {
			eventLabel = 'Coinbase';
		} else {
			eventLabel = 'Друго';
		}

		$(this).on('click', function() {
			ga('main.send', { 'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'check', 'eventLabel': eventLabel });
		});
	})

	$('input[name="autorenew"]').each(function(){

		var type = $(this).val().toString();
		var val = type === '1' ? 'Без подновяване' : 'Автоматично подновяване';

		$(this).on('click', function() {
			ga('main.send', { 'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'check', 'eventLabel': val });
		});
	});

	$('.subscription-register').on('click', function() {
		ga('main.send', { 'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'check', 'eventLabel': 'Регистрация' });
	});
	$('.subscription-login').on('click', function() {
		ga('main.send', { 'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'check', 'eventLabel': 'Логване' });
	});
	$('#proceedButton').on('click', function() {
		ga('main.send', { 'hitType': 'event', 'eventCategory': 'Checkout', 'eventAction': 'click', 'eventLabel': 'Продължи' });
	});
});

$(document).ready(function() {
	var packet = $('body').data('packet'),
		promocapital25 = $('body').data('promocapital25');

	if (promocapital25) {
		$('#recRadioBtns').before('<img src="/img/pos-badge-bonus.png" class="badge-bonus" alt="" />');
	}

	if (promocapital25 && (packet == '10009315_12_1' || packet == '10009316_12_1')) {
		$('#autorenew1').prop('checked', true);
		$('#renewal').hide();
		$('#recProducts').find('.title').text($('#recProducts').find('.title').text() + ' + 3 месеца бонус');
		$('#basket').find('.productName').text($('#basket').find('.productName').text() + ' + 3 месеца бонус');
	}
});