#!/usr/bin/perl

print 'Content-type: text/html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>What do I know about you?</title>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<style type="text/css">
	<!--
		body     { font-face:Tahoma,Verdana,Arial,sans-serif; }
		h4       { margin:5px; margin-top:10px; font-weight:bold; }
		a:link   { color: #2020FF; }
		a:visited{ color: #FF2020; }
		a:hover  { background-color:yellow; }
		.table1  { background-color:#aaddff; border:1px solid black;}
		.table2  { background-color:#ffeeaa; border:1px solid black;}
		.table3  { background-color:#ff99cc; border:1px solid black;}
		.table4  { background-color:#99ffcc; border:1px solid black;}
	-->
	</style>
</head>
<body>
<center>
';

&print_title("Browser Variables");
&print_start_table("table1");
foreach $key (sort keys(%ENV)) {
	$val = $ENV{$key};
	next if ( index($key,"HTTP_CACHE_CONTROL") != -1 );
	next if ( index($key,"HTTP_VIA") != -1 );
	next if ( index($key,"HTTP_X_FORWARDED_FOR") != -1 );

	next if ( index($key,"HTTP_HOST") != -1 );
	if ( index($key,"HTTP_") != -1 ) {
		$key = unescape($key);
		$val = unescape($val);
		&print_row($key, $val);
	}
}
&print_end_table();

if ( defined($ENV{HTTP_VIA}) ) {
	&print_title("Proxy Variables");
	&print_start_table("table2");
	&print_row("HTTP_CACHE_CONTROL",$ENV{HTTP_CACHE_CONTROL}) if (defined($ENV{HTTP_CACHE_CONTROL}));
	&print_row("HTTP_X_FORWARDED_FOR",$ENV{HTTP_X_FORWARDED_FOR}) if (defined($ENV{HTTP_X_FORWARDED_FOR}));
	&print_row("HTTP_VIA",$ENV{HTTP_VIA});
	&print_end_table();
}

&print_title("Your IP");
&print_start_table("table3");
foreach $key (sort keys(%ENV)) {
	$val = $ENV{$key};
	&print_row($key, $val) if (index($key,"REMOTE_") != -1);
}
&print_end_table();

print '

<script language="javascript" type="text/javascript">
<!-- begin
	window.onerror=null;
	document.write("<h4>Even More Information</h4>");
	document.write("<form name=form>\n");
	document.write("<table border=0 cellpadding=4 cellspacing=0 class=table4>\n");
	document.write("<tr><td><b>YOUR VIDEO MODE</b></td><td><input type=text size=6 name=width> x <input type=text size=6 maxlength=4 name=height> x <input type=text size=2 name=colordepth> bit</td></tr>\n");
	document.write("<tr><td><b>SCREEN COLORS</b></td><td><input type=text size=15 name=color></td></tr>\n");
	document.write("<tr><td><b>YOUR BROWSER IS</b></td><td><input type=text size=35 name=navigator></td></tr>\n");
	document.write("<tr><td><b>BROWSER VERSION IS</b></td><td><input type=text size=35 name=version></td></tr>\n");
	document.write("<tr><td><b>BROWSER CODENAME</b></td><td><input type=text size=35 name=codename></td></tr>\n");
	document.write("<tr><td><b>PLATFORM</b></td><td><input type=text size=15 name=platform></td></tr>\n");
	document.write("<tr><td><b>JAVA ENABLED</b></td><td><input type=text size=15 name=java></td></tr>\n");
	document.write("</table>\n");
	document.write("</form>\n");
	colors = window.screen.colorDepth;
	document.form.color.value = Math.pow (2, colors);
	document.form.navigator.value = navigator.appName;
	document.form.version.value = navigator.appVersion;
	document.form.colordepth.value = window.screen.colorDepth;
	document.form.width.value = window.screen.width;
	document.form.height.value = window.screen.height;
	document.form.codename.value = navigator.appCodeName;
	document.form.platform.value = navigator.platform;
	if (navigator.javaEnabled() < 1) document.form.java.value="No";
	if (navigator.javaEnabled() == 1) document.form.java.value="Yes";
// end -->
</script>

<br>
<a href="/programs/whoami.pl">WhoAmI</a> written by <a href="mailto:gf\@unixsol.org?subject=WhoAmI_script">Georgi Chorbadzhiyski</a>
<br>

</center>
</body>
</html>
';


# ***************************************
# ************* FUNCTIONS ***************
# ***************************************
sub unescape($) {
	($var) = @_;
	$var =~ s/</&lt;/g;
	$var =~ s/>/&gt;/g;
	return $var;
}

sub print_title($) {
	($title) = @_;
	print "<h4>" . &unescape($title) . "</h4>\n";
}

sub print_row($$) {
	($key,$val) = @_;
	print "<tr>\n";
	print "	<td><b>" . &unescape($key) . "</b></td>\n";
	print "	<td>" . &unescape($val) . "</td>\n";
	print "</tr>\n";
}

sub print_start_table($) {
	($class) = @_;
	print '<table border="0" cellpadding="4" cellspacing="0" align="center" class="' . $class . '">'."\n";
}

sub print_end_table($) {
	($class) = @_;
	print '</table>'."\n";
}

