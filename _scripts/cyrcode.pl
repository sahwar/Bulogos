#!/usr/bin/perl
## NOTE: Lines 2-to-43 (inclusive) were extra added (so as to provide hyperlinks
## to the source website) and do not exist in the original file.
## This file is copied in this repository for web-archival purposes!
##
## SOURCE OF THIS Perl SCRIPT: http://bluefir.net/ilya/cyrconv/cyrcode
## DESCRIPTION: cyrcode.pl --- a perl program which converts between different
## encoding (no conversion from transliteration), note: cyrcode includes the
## encoding table for koi8, win,iso6, mac,alt
##
## SEE ALSO: http://bluefir.net/ilya/cyrconv/transkoi.c
## transkoi.c --- a C program to convert from transliteration into KOI8
## http://web.archive.org/web/20160805141347/http://bluefir.net/ilya/cyrconv/transkoi.c
## 
## Website of the script's author: http://bluefir.net/ilya/
## (Last modified: Thu Jul 25 11:42:38 1996)
## http://archive.is/hU0X8
##
## Webpages which are part of the original script author's website:
## http://bluefir.net/ilya/cyrconv/download.html
## http://archive.is/olei1
##
## Email of the original author: ilya@bluefir.net (PLEASE DON'T SPAM THE GUY!)
##
## http://web.archive.org/web/20160805133227/http://bluefir.net/ilya/cyrconv/cyrcode
## http://web.archive.org/web/20161126211010/http://bluefir.net/ilya/cyrconv/cyrconv.html
## http://web.archive.org/web/20160326015035/http://bluefir.net/ilya/cyrconv/download.html
## 
## http://bluefir.net/ilya/cyrconv/cyrfaq.html
## http://archive.is/UewMx
##
## http://bluefir.net/ilya/cyrconv/cyrconv.html
## http://archive.is/PK9Fp
##
## http://bluefir.net/ilya/cyrconv/credits.html
## http://archive.is/Ke7xA
## 
## http://bluefir.net/ilya/cyrconv/announce.html
## http://archive.is/otH6E
## 
##
##
## (END OF THE EXTRA ADDED INFORMATION...)
##         universal cyrillic decoder
##---------------------------------------------------------------------------##
##  Copyright (C) 1995: Ilya Sandler isandler@utkux.utcc.utk.edu
##  This program is free software; you can redistribute it and/or modify
##  it under the terms of the GNU General Public License.
##  THERE IS NO WARRANTY OF ANY KIND. USE IT AT YOUR OWN RISK.
##---------------------------------------------------------------------------##
##  cyrcode   is a Perl program to convert between different
## cyrillic encodings, cyrcode uses external encoding table cyrtab.
## The program reads standard input and writes to standard output
## usage: 
## cyrcode.pl from to
## where from and to are names of encoding tables
## note table names should coincide with those indicated in cyrtab
##--------------------------------------------------------

@names=&readnext;

if (($ARGV[0] eq "-help") || ($#ARGV < 1)){
    print "Universal cyrillic decoder \n";
    print "usage: \n  cyrcode from to <infile >outfile";
    print "\n where 'from' and 'to' are the names of encoding tables \n";
    print "currently supported tables are: ", join(", ",@names), "\n" ;
    print "Example:    cyrcode koi8 alt < file1.txt \n" ;
    print "converts file.txt from 'koi8' to 'alt' and writes the result to ";
    print "standard output \n";
    exit(2);
}

#ignore cases
$ARGV[0] =~ y/A-Z/a-z/;
$ARGV[1] =~ y/A-Z/a-z/;
$from=$to=-1;

for ($i=0; $i <= $#names; $i++) {
    $names[$i]=~ y/A-Z/a-z/;
    if (index($ARGV[0],$names[$i]) >=0) {$from=$i;}
    if (index($ARGV[1], $names[$i]) >=0) {$to=$i;};
}

if (($from == -1) || ($to == -1)) {
    print "unknown encoding table name \n";
    print "known table names:",join(', ',@names),"\n";
    exit(3);
}

#initialize decoding table
for ($i = 0; $i < 256; $i++) {$decode[$i]=pack("c",$i)};
while (!eof(DATA)){
    @m=&readnext;
    if ($m[0] eq "") {last;}
    if ($m[$from]=~ tr/a-z//){
	print "can not convert from ", $names[$from],"\n";
	exit(4);
    }
    if ($m[$to]=~tr/a-zA-Z\'\"\-//){$decode[$m[$from]]=$m[$to];}
    else{ $decode[$m[$from]]=pack("c",$m[$to]);}
#    print  $m[$to],'  ',$m[$from],"\n";
};

#actual convertion is here
while (!eof(STDIN)){
   print $decode[ord(getc)];
};

exit(0);

# subprograms----------------------
sub readnext {
    local($str)='';
    while ((!eof(DATA))&&($str eq '')){ 
	$str=<DATA>;
	$str=~ s/\n//g;   #strips \n
	$str=~ s/^[\ \t]+//g;   #strips leading white space
	$str=~ s/#[\0-\377]+//g;  #strips comment
   }
    split(/[\ \t]+/,$str);
}

__DATA__
#Cyrillic Encodings. General information
#koi8 (CP 878) de facto Internet standard, widely used on Unix computers
#alt  (alternative,CP866) standard for MS DOS computers
#win  (CP 1251) standard cyrillic encoding for MS Windows
#iso5 (osnovnoi, ECMA113) ISO-8859-5 standard, who uses it?
#mac (CP 10007) Macintosh standard cyrillic encoding
#sorry,non-russian cyrillic symbols  are NOT included
#   
#cyrcode.pl comments
#you can add your own encoding tables, without modifying code 
#columns should be separated by whitespace
#empty lines and extra whitespace ignored,
#but first nonempty line MUST contain encoding table names,
#as recognized by cyrcode.pl  
#non-standard (i.e. not present in all encoding tables) symbols
#must appear in the beginning of the table
koi8 alt trans win mac iso5 #comment 
128  196   -   151 209 173   #horizontal line symbol, sometimes used as dash
229  240   YE  168 133 161  # capital yoe
197  241   ye  184 229 241 # small yoe
225  128   A   192 128 176 # capital letter A
226  129   B   193 129 177 # capital letter Be
247  130   V   194 130 178 # capital letter Ve
231  131   G   195 131 179 # capital letter Ghe
228  132   D   196 132 180 # capital letter De
229  133   E   197 133 181 # capital letter Ie
246  134   ZH  198 134 182 # capital letter Zhe
250  135   Z   199 135 183 # capital letter Ze
233  136   I   200 136 184 # capital letter I
234  137   J   201 137 185 # capital letter short I
235  138   K   202 138 186 # capital letter Ka
236  139   L   203 139 187 # capital letter El
237  140   M   204 140 188 # capital letter Em
238  141   N   205 141 189 # capital letter En
239  142   O   206 142 190 # capital letter O
240  143   P   207 143 191 # capital letter Pe
242  144   R   208 144 192 # capital letter Er
243  145   S   209 145 193 # capital letter Es
244  146   T   210 146 194 # capital letter Te
245  147   U   211 147 195 # capital letter U
230  148   F   212 148 196 # capital letter Ef
232  149   H   213 149 197 # capital letter Kha
227  150   TS  214 150 198 # capital letter Tse
254  151   CH  215 151 199 # capital letter Che
251  152   SH  216 152 200 # capital letter Sha
253  153   SCH 217 153 201 # capital letter Shcha
255  154   '   218 154 202 # capital hard sign (as in pod'ezd)
249  155   Y   219 155 203 # capital letter Y (as in ryba)
248  156   '   220 156 204 # capital soft sign (loshad')
252  157   E   221 157 205 # capital letter reverse rounded E, as in "eto"
224  158   YU  222 158 206 # capital letter Yu
241  159   YA  223 159 207 # capital letter Ya
193  160   a   224 224 208 # small letter a
194  161   b   225 225 209 # small letter be
215  162   v   226 226 210 # small letter ve
199  163   g   227 227 211 # small letter ghe
196  164   d   228 228 212 # small letter de
197  165   e   229 229 213 # small letter ie
214  166   zh  230 230 214 # small letter zhe
218  167   z   231 231 215 # small letter z
201  168   i   232 232 216 # small letter i
202  169   j   233 233 217 # small letter short i
203  170   k   234 234 218 # small letter ka
204  171   l   235 235 219 # small letter el
205  172   m   236 236 220 # small letter em
206  173   n   237 237 221 # small letter en
207  174   o   238 238 222 # small letter o
208  175   p   239 239 223 # small letter pe
210  224   r   240 240 224 # small letter er
211  225   s   241 241 225 # small letter es
212  226   t   242 242 226 # small letter te
213  227   u   243 243 227 # small letter u
198  228   f   244 244 228 # small letter ef
200  229   h   245 245 229 # small letter kha
195  230   ts  246 246 230 # small letter tse
222  231   ch  247 247 231 # small letter che
219  232   sh  248 248 232 # small letter sha
221  233   sch 249 249 233 # small letter shcha
223  234   '   250 250 234 # small hard sign (ier)
217  235   y   251 251 235 # small letter y (iery)
216  236   '   252 252 236 # small soft sign (ierik)
220  237   e   253 253 237 # small letter reverse rounded e
192  238   yu  254 254 238 # small letter yu
209  239   ya  255 223 239 # small letter ya



