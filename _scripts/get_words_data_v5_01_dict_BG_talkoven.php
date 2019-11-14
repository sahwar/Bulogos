<?php
	### Encoding: UTF-8, Windows (\r\n = CRLF) newline ###
	### Програмист: OmegaKO (Лазар Пендов) - Email: omegako@animerulezzz.org
	### 			Jabber ID/XMPP/Google Talk: omegako@animerulezzz.org ###
	### Скриптът е създаден по молба на SahWar за проекта Slovnik ###
	### Лиценз: Ползвай както искаш. Всеки желаещ да ползва този скрипт и/или негови изменени версии носи пълната отговорност за това си желание и последствията от това.###
	### Синтаксис: php get_words_data.php FILE_WITH_URLS OUTPUT_FILE
	###
	### Описание:
	### This PHP script was written in order to webscrape the dictionary databases
	### of the website http://eurodict.com . Sadly, the website changed its HTML,
	### and revamped its UI, so this PHP script no longer works... It did, however,
	### work with the old-interface mirror of eurodict.com - http://bulgariandictionary.com/ .
	### Unfortunately, http://bulgariandictionary.com/ now (as of 29-October-2019) gives a 404 Not Found Error...
	### 
	### HOW DID I USE THIS PHP SCRIPT
	### On a (GNU/)Linux distro, I installed the following required packages:
	###
	### Dependencies:
	### *
	### *
	### *
	### ...
	###
	### I then ran the following command to download stuff
	###
	###
	### 
	### NOTE: The regex in this PHP scrape about removing some regex-matching text is due to the fact
	### that http://eurodict.com had a weird text advertisements inserted between the important-info
	### HTML contents, so that regex deletes those unneeded sections...
	### Since eurodict.com changed its website UI, thus changing its HTML, this script is no longer
	### usable with the new version of eurodict.com UNLESS you web-crawl eurodict.com's 23 dictionary-database
	### URLs to get ONLY the list of URLs (the index/sitemap) for each dictionary entry, and THEN use this
	### script, but with commenting-out the regex-match&delete portion of this PHP script!
	###
	### (TO PASTE HERE the .txt files which explains how I later edited the text file produced with this PHP script, all
	### by using Notepad++ regex Search&Replace and by using the GNU/Linux CLI app `split` with some of its CLI arguments...)
	###
	### I then ran the script with a FILE_WITH_URLS input which was basically
	### a text file of 1 URL per line, generated via https://textmechanic.com/text-tools/numeration-tools/generate-list-numbers/
	### The final script ran for SEVERAL DAYS and I had 23 copies of it running PARALLEL...
	### Nowadays, if you attempt to do such a webcrawling of an online dictionary (for personal use),
	### you may get banned by IP if you have too much parallel connections running at once, or if
	### your IP requests too many webpages per second... Also, many websites have server-side rules
	### that prevent you from downloading .html files (or other files) from them more than X times per Y minutes.
	### In addition, webscraping any .(x)html webpage via a webscraper or even via cURL (https://curl.haxx.se)
	### is often impossible unless you also pass a CLI argument to avoid/bypass an HTTPS security certificate,
	### and/or you may need to hide/mask your webscraper's identity by masking it as some other 'user-agent'
	### (i.e. web-browser's name) string, and/or you may need to pass a CLI argument to tell the webscraper
	### or URL-downloader app to not respect the website's 'robots.txt' rules for user-agents & search-engines/webcrawlers/webspiders...
	### 
	### Despite the fact that this script worked fine, nowadays, most seasoned programmers
	### deride/hate this technique, which is known as 'regex-based HTML webscraping'.
	### FAMOUS SARCASM on/about the topic of 'regex-based HTML webscraping': https://stackoverflow.com/a/1732454
	###
	### Here's a compiled list of the URL numbers which was used to generated the input file with the 1-URL-per-line (these are ALL 23 dictionary databases used in eurodict.com... Sadly, the mirror website which hosted a copy of the
	### old eurodict.com UI/HTML is now showing '404 Not Found' errors or some server misconfiguration errors...
	### 
	### Examples of other software that can be used as regex-based HTML webscrapers:
	### 
	### cURL - http://curl.haxx.se
	### libcurl (this is what is most often used with PHP) - https://curl.haxx.se/libcurl/
	### wget - https://www.gnu.org/software/wget/
	### wget2 - https://gitlab.com/gnuwget/wget2
	### 
	### https://python-forum.io/Thread-web-scraping-with-python-regular-expression
	### https://www.codeproject.com/Tips/1237202/Webscraping-using-Regular-Expression-and-HtmlAgili
	### https://sourceforge.net/projects/jaws2/
	### https://github.com/s0md3v/Photon/wiki/Usage
	### https://github.com/RedSilkSoftware/webtooth-extractor
	### https://mherman.org/blog/web-scraping-with-regular-expressions/ (backup:
	### https://www.javamex.com/tutorials/regular_expressions/example_scraping_html.shtml
	### https://github.com/scrapy/scrapy
	### https://github.com/topics/scraping
	### https://github.com/topics/crawling
	### https://github.com/topics/crawler

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
	define('NEW_LINE', "\r\n");
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
		echo("Input file with URLs does not exist, please provide input file with URLs." . NEW_LINE);
		exit();
	}
	echo("Get urls from '$input_file'..." . NEW_LINE);
	$f = fopen($input_file, 'r');
	$urls_str = trim(fread($f, filesize($input_file)));
	fclose($f);
	$urls_arr = explode(NEW_LINE, $urls_str);
	$output_file = $argv[2];
	$f = @fopen($output_file, 'w') or die("Error: Output file can't be created" . NEW_LINE);
	fwrite($f, BEFORE_BLOCKS);
	$first = true;
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
			echo("Saving data in '$output_file'..." . NEW_LINE);
			if ($first == false){
				$content = BLOCKS_SEPARATOR . $content;
			}
			else{
				$first = false;
			}
			fwrite($f, $content);
		}
		else{
			echo(' - NO DATA FOUND' . NEW_LINE);
		}
	}
	fwrite($f, AFTER_BLOCKS);
	fclose($f);
	echo("Complete" . NEW_LINE);
?>
