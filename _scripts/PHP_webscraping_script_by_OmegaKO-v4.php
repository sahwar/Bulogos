<?php
	### https://gist.github.com/sahwar/f2a8fdef42768dbfbb09
	### get_words_data_v4.php (OLD EDITION, use v5+!!! - https://github.com/sahwar/Bulogos/blob/master/get_words_data_v5_01_dict_BG_talkoven.php )
	### PHP_webscraping_script_by_OmegaKO-v4
	### scraper-script-logic.txt is here: https://gist.github.com/sahwar/d6cb7e440d93b3089e33
	### Преименувай този файл до името (rename this file to have the title): php get_words_data_v4.php
	### NOTE (04-June-2020): It seems that http://eurodict.com has changed its HTML+CSS+JS, so this script must be adapted to fit the new HTML structure of the website. Also, sadly, it seems that the mirror-website with the old URL/URI is offline: http://bulgariandictionary.com , but they may bring it back online, who knows... There are now free Google Android apps with Bulgarian-English<->English-Bulgarian dictionary databases, probably stolen from http://eurodict.com and http://pons.bg , and later expanded with more dictionary headwords and explanations-translations, etc.
	###
	### Encoding: UTF-8, Unix newline ###
	### Програмист: OmegaKO (Лазар Пендов) ###
	### Скриптът е създаден по молба на SahWar за проекта Slovnik ###
	### Лиценз: Ползвай както искаш. Всеки желаещ да ползва този скрипт и/или негови изменени версии носи пълната отговорност за това си желание и последствията от това.###
	### Синтаксис: 
	### $ php get_words_data_v4.php FILE_WITH_URLS OUTPUT_FILE
	### (без $, което указва, че е Linux/UNIX/*NIX shell in a commandline terminal emulator app...)
	### БЕЛЕЖКА2: Може да се наложи да сложите единични кавички около двата параметра/аргумента:
	### php get_words_data_v4.php '/dir/sub dir/FILE_WITH_URLS.txt' '/dir/sub dir/OUTPUT_FILE.txt'
	### или (двойни) класически кавички около тях:
	### php get_words_data_v4.php "/dir/sub dir/FILE_WITH_URLS.txt" "/dir/sub dir/OUTPUT_FILE.txt"
	### при наличие на интервали (празни пространства, шпации, whitespaces) и Unicode не-ASCII знаци в имената/пътя-адрес на файловете аргументи/параметри...
	### MS Windows използва '\', а Linux/UNIX/*NIX използва '/' за разделител на имената на подпапките като част от пътя-адрес (местоположението) на файловете...

	function Get($url) {
		echo("GET: $url");
		$header[] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
		$header[] = "Connection: keep-alive";
		$header[] = "Keep-Alive: 115";
		$header[] = "Accept-Charset: utf-8";
		$header[] = "Accept-Language: en-us,en,bg";
		$cuid = curl_init($url);
		curl_setopt($cuid, CURLOPT_ENCODING, 'gzip,deflate');
		curl_setopt($cuid, CURLOPT_HTTPHEADER, $header); 
		curl_setopt($cuid, CURLOPT_TIMEOUT, 0);
		curl_setopt($cuid, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($cuid, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($cuid, CURLOPT_USERAGENT, 'Mozilla/5.0 (X11; Linux i686; rv:8.0) Gecko/20100101 Firefox/8.0');
		$return = curl_exec($cuid);
		curl_close($cuid);
		return $return;
	}

	#Config
	define('NEW_LINE', "\n");
	define('MAIN_REGEX', '<span class="wordtitle">.*<div class="googa">');
	define('BEFORE_BLOCKS', '');
	define('AFTER_BLOCKS', '');
	define('BLOCKS_SEPARATOR', NEW_LINE);
	$ERASE_REGEXES = array('@<h([45])>.*?</h\\1>@s');

	#Main
	if (empty($argv[2])){
		echo("Syntax: php {$argv[0]} FILE_WITH_URLS OUTPUT_FILE" . NEW_LINE);
		exit();
	}
	$input_file = $argv[1];
	if (!file_exists($input_file)){
		echo("Input file with urls not exist" . NEW_LINE);
		exit();
	}
	echo("Get urls from '$input_file'..." . NEW_LINE);
	$f = fopen($input_file, 'r');
	$urls_str = trim(fread($f, filesize($input_file)));
	fclose($f);
	$urls_arr = explode(NEW_LINE, $urls_str);
