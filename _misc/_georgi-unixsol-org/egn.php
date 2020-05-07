<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
                      "http://www.w3.org/TR/REC-html40/loose.dtd">
<html>
<head>
	<title>Информация, проверка и генератор за единни граждански номера (ЕГН)</title>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="author" content="Georgi Chorbadzhiyski">
	<style type="text/css">
	<!--
		body    { background: #A3CEE7; font: 11pt Verdana,Arial,Helvetica,sans-serif; }
		a       { color: #2020E0; text-decoration: underline; padding:3px; border:1px solid #A3CEE7; }
		a:hover { background:#cdcdff; text-decoration: underline; border:1px solid blue; }
		h2      { margin:0px; }
		h3      { margin-bottom:0px; }
		.result { background:#be93d7; padding:4px; }
		li.result { background:#be93d7; }
		form    { margin:0px; }
	-->
	</style>
</head>

<body>
<h2><a href="http://georgi.unixsol.org/programs/egn.php">Информация, проверка и генератор за единни граждански номера (ЕГН)</a></h2>



<h3>Проверка за валидност и информация налична в ЕГН</h3>

<p>Алгоритъмът за валидация на единен граждански номер (ЕГН)
е публичен и е <a href="http://www.grao.bg/esgraon.html#section2">публикуван
на официалния сайт на ЕСГРАОН</a>. <a href="/programs/egn.php/view/">Кодът на
страницата</a> е базиран на този алгоритъм плюс данните за статистическото разпределение
на ражданията по региони. В кода няма нищо тайнствено. Дори и без наличието този ЕГН
генератор/валидатор, всеки с елементарни познания по математика и с публичната
информация от страницата на ЕСГРАОН може да валидира и генерира ЕГН.</p>

<p>Ако сте убедени, че сте роден(а) в даден регион, а проверката тук показва
друг, не е задължително това да е грешка. В системата ЕСГРАОН,
когато се родят твърде много деца в даден регион и ден, се използват
номера "на заем" от друг регион. Броят на отпуснатите раждания за ден е определен
по статистически принцип за всеки регион. Например за регион Пазарджик са предвидени
36 номера, което значи, че ако се родят повече от 18 момчета или момичета в един
ден, за последните в полето регион на ЕГН няма да е отбелязан Пазарджик. На
регион по колко раждания за ден са отредени, можете да видите като в секцията
"<em>Генериране на ЕГН по заявка</em>" изберете региона и след това бутона <em>Генерирай ЕГН</em>.</p>

<p><b>Друг/Неизвестен</b> регион се ползва по различни причини без определен
принцип, доколкото ми е известно.</p>

<form action="/programs/egn.php" method="GET">
<input type="hidden" name="a" value="check">
ЕГН <input type="text" size="10" maxlength="10" name="egn" value=""><input type="submit" value=" Информация за ЕГН ">
</form>



<h3>Генериране на ЕГН по заявка</h3>
<p>Ако вашият ЕГН не се появи в списъка на генерираните, не се стряскайте!
Генераторът вади на случаен принцип номера, които отговарят на зададените
критерии. За всеки регион на ден са предвидени повече от едно раждания,
а на всяко родено дете трябва да се даде валидно ЕГН. Ако държите да видите
своят номер в списъка, просто увеличете броят на генерираните номера.</p>

<form action="/programs/egn.php" method="GET">
<input type="hidden" name="a" value="gen">
<table>
<tr>
	<td valign="top" align="right"><b>Пол</b></td>
	<td><label><input type="radio" name="s" value="0" checked> Случаен</label>
<label><input type="radio" name="s" value="1"> Мъж</label>
<label><input type="radio" name="s" value="2"> Жена</label>
</td>
</tr>
<tr>
	<td valign="top" align="right"><b>Дата на<br />раждане</b></td>
	<td>
<table>
<tr>
	<td align="right"><label for="d">ден</label></td>
	<td><input type="text" size="2" maxlength="2" id="d" name="d" value="0"></td>
	<td><em><label for="d">0 = случаен, валидни стойност 0,1-31</label></em></td>
</tr>
<tr>
	<td align="right"><label for="m">месец</label></td>
	<td><input type="text" size="2" maxlength="2" id="m" name="m" value="0"></td>
	<td><em><label for="m">0 = случаен, валидни стойност 0,1-12</label></em></td>
</tr>
<tr>
	<td align="right"><label for="y">година</td>
	<td><input type="text" size="4" maxlength="4"id="y"  name="y" value="0"></td>
	<td><em><label for="y">0 = случаен, валидни стойност 0,1800-2099</label></em></td>
</tr>
</table>
	</td>
</tr>
<tr>
	<td valign="top" align="right"><b><label for="n">Генерирай</label></b></td>
	<td><input type="text" size="2" maxlength="2" id="n" name="n" value="5"><label for="n"> номера, <em>валидни стойност 1-99</label></em></td>
</tr>
<tr>
	<td valign="top" align="right"><b><label for="r">Регион</label></b></td>
	<td><select id="r" name="r"><option value="0">-- Случаен --</option>
<option value="43">Благоевград</option>
<option value="93">Бургас</option>
<option value="139">Варна</option>
<option value="169">Велико Търново</option>
<option value="183">Видин</option>
<option value="217">Враца</option>
<option value="233">Габрово</option>
<option value="281">Кърджали</option>
<option value="301">Кюстендил</option>
<option value="319">Ловеч</option>
<option value="341">Монтана</option>
<option value="377">Пазарджик</option>
<option value="395">Перник</option>
<option value="435">Плевен</option>
<option value="501">Пловдив</option>
<option value="527">Разград</option>
<option value="555">Русе</option>
<option value="575">Силистра</option>
<option value="601">Сливен</option>
<option value="623">Смолян</option>
<option value="721">София - град</option>
<option value="751">София - окръг</option>
<option value="789">Стара Загора</option>
<option value="821">Добрич (Толбухин)</option>
<option value="843">Търговище</option>
<option value="871">Хасково</option>
<option value="903">Шумен</option>
<option value="925">Ямбол</option>
<option value="999">Друг/Неизвестен</option>
</select> <input type="submit" value=" Генерирай ЕГН "></td>
</tr>
</table>
</form>



<h3>Пет случайно генерирани ЕГН</h3>
<ul><li><b>1049267811</b> е ЕГН на <b>жена</b>, родена на <b>26 септември 2010 г.</b> в регион <b>Стара Загора</b> като преди нея в този ден и регион са се родили <b>14</b> момичета</li>
<li><b>2305048932</b> е ЕГН на <b>жена</b>, родена на <b>4 май 1923 г.</b> в регион <b>Шумен</b> като преди нея в този ден и регион са се родили <b>10</b> момичета</li>
<li><b>4512032870</b> е ЕГН на <b>жена</b>, родена на <b>3 декември 1945 г.</b> в регион <b>Кюстендил</b> като преди нея в този ден и регион са се родили <b>2</b> момичета</li>
<li><b>6903239287</b> е ЕГН на <b>мъж</b>, роден на <b>23 март 1969 г.</b> в регион <b>Друг/Неизвестен</b> като преди него в този ден и регион се е родило <b>1</b> момче</li>
<li><b>8508228324</b> е ЕГН на <b>мъж</b>, роден на <b>22 август 1985 г.</b> в регион <b>Търговище</b> като преди него в този ден и регион са се родили <b>5</b> момчета</li>
</ul>

<p><a href="/programs/egn.php/view/">Вижте изходния код на програмата</a>
<a href="/programs/egn.php/get/">Свалете си изходния код на програмата</a></p>

<p>Автор <a href="http://georgi.unixsol.org/">Георги Чорбаджийски</a>.
За коментари и предложения пишете в <a href="http://georgi.unixsol.org/diary/archive.php/2006-09-29">Дневника</a>.</p>

<p>&lt;- Към <a href="http://georgi.unixsol.org/">страничката на Георги</a></p>

</body>
</html>
