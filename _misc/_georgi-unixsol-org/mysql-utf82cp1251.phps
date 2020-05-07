#!/usr/local/bin/php
<?php
	error_reporting(E_ALL);

	define('MYSQL_HOST', 'host');
	define('MYSQL_USER', 'user');
	define('MYSQL_PASS', 'pass');
	define('MYSQL_DB', 'dbname');

	$link = mysql_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PASS);
	mysql_select_db(MYSQL_DB);

	$TABLE = "News";
	$FIELD = "Body";

	$result = mysql_query ("SELECT * FROM $TABLE ORDER BY ID desc", $link);
	while ($row = mysql_fetch_assoc($result)) {
		$id = $row["ID"];
		$field = $row[$FIELD];
		if (!strlen($field))
			continue;
		$field = str_replace("\n","", $field);
		$field = str_replace("\r","", $field);
		$field1 = str_replace("?",pack("C",0x98), $field);
		$conv = @iconv("UTF-8","Windows-1251" ,$field1);
		if ($field == $conv)
			continue;
		$val = "*";
		if (strlen($conv)) {
			if (strlen($conv)*2 < strlen($field)) {
				$val = $field;
			} else {
				$val = $conv;
			}
		} else {
			$val = $field;
		}
#		echo "ID      : ".$id   ."\t\n";
#		echo "Title   : ".$field."\t\n";
#		echo "NewTitle: ".$val."\n\n";
		$query = "UPDATE $TABLE SET $FIELD='".mysql_real_escape_string($val)."' WHERE ID=$id;";
		print "$query\n";
#		mysql_query($query, $link);
		print (@$i++)." ";
	}
?>
