<?php
	### Encoding: UTF-8, Unix newline ###
	### Програмист: OmegaKO (Лазар Пендов) ###
	### Скриптът е създаден по молба на SahWar за проекта Slovnik ###
	### Лиценз: Ползвай както искаш. Всеки желаещ да ползва този скрипт и/или негови изменени версии носи пълната отговорност за това си желание и последствията от това.###
	### Синтаксис: php get_words_data.php FILE_WITH_URLS OUTPUT_FILE

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
	define('MAIN_REGEX', '<span class="wordtitle">.*<div class="googa">'); // Първото е регулярният израз, който е лесно разбираем.
	define('BEFORE_BLOCKS', ''); // Следващите две указват какво да се сложи преди 
	define('AFTER_BLOCKS', ''); // и след всичките блокове (парчета)
	define('BLOCKS_SEPARATOR', NEW_LINE); // Следващото е делителят между елементите
	$ERASE_REGEXES = array('@<h([45])>.*?</h\\1>@s'); // С това се указват нещата, които трябва да се премахнат от резултата. Ако искаш да няма чистене: или откоментирваш целия този ред, или го пишеш така: $ERASE_REGEXES = array();

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
	$output_arr = array();
	foreach($urls_arr as $url){
		$content = Get($url);
		$content = preg_match('@' . MAIN_REGEX . '@s', $content, $match);
		$content = (string)@$match[0];
		if (!empty($ERASE_REGEXES)){
			$content = preg_replace($ERASE_REGEXES, '', $content);
		}
		$content = preg_replace(array("@\s*" . NEW_LINE . "\s*@s","@[ \t]+@s"), array(NEW_LINE, " "), $content);
		$content = trim($content);
		if (!empty($content)){
			echo(' - OK' . NEW_LINE);
			$output_arr[] = $content;
		}
		else{
			echo(' - NO DATA FOUND' . NEW_LINE);
		}
	}
	$output_file = $argv[2];
	$output = BEFORE_BLOCKS . implode(BLOCKS_SEPARATOR, $output_arr) . AFTER_BLOCKS;
	echo("Saving output data in '$output_file'..." . NEW_LINE);
	$f = @fopen($output_file, 'w') or die("Error: Output file can't be created" . NEW_LINE);
	fwrite($f, $output);
	fclose($f);
	echo("Complete" . NEW_LINE);
?>
