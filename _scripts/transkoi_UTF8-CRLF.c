/*
## NOTE: Lines 1-to-44 (inclusive) were extra added (so as to provide hyperlinks
## to the source website) and do not exist in the original file.
## This file is copied in this repository for web-archival purposes!
##
## SOURCE OF THIS Perl SCRIPT: http://bluefir.net/ilya/cyrconv/transkoi.c
## DESCRIPTION: transkoi.c --- a C program to convert from transliteration into KOI8
## http://web.archive.org/web/20160805141347/http://bluefir.net/ilya/cyrconv/transkoi.c
##
## SEE ALSO: cyrcode.pl --- a perl program which converts between different
## encoding (no conversion from transliteration), note: cyrcode includes the
## encoding table for koi8, win,iso6, mac,alt
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
/*

/* Description:   transliteration to KOI8 converter
---------------------------------------------------------------------------##
 Copyright (C) 1996: Ilya Sandler isandler@utkux.utcc.utk.edu
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License.
  THERE IS NO WARRANTY OF ANY KIND. USE IT AT YOUR OWN RISK.
---------------------------------------------------------------------------##
Compiling:
cc -o transkoi transkoi.c

Usage examples:
transkoi < file.translit
transkoi <file.translit > file.koi8

The program reads stdin and converts the input from
transliterated form  into KOI8 encoding, the result of 
convertion is sent to stdout.*/

/* some of the comments in the text are in KOI8 */


#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

void initTables();
void convert(char *buffer,FILE *outStream);
char *readData(FILE *inStream); 

int main(){
  FILE* in=stdin;
  FILE* out=stdout;
  char* inBuffer;
  initTables();
  inBuffer=readData(in);
  convert(inBuffer,out);
  free(inBuffer);
  return 0;
}


typedef unsigned char uchar;

uchar convCombination(char* p,int* pshift);

uchar tab1[256];
/*tab1 is the main conversion table:
tab1[c]=c; if c doesn't require conversion (e.g.CR,LF,digits)
tab1[c]=converted(c), if c requires conversion, and this
conversion is unique (i.e. if c never starts multichar combinations)
tab1[c]=0; if c may start multi-character combinations */

uchar vowel[256]; /*set to 1 for English vowels, 0 for the others*/


void initTables(){
  int i;
  /* letters which can't be the 1st letter in any multi-letter combinations */
  /* and which are always translated in unique way */
  char *eletters1="abdfghilmnopruvwx"; 
  char *rletters1="БВДЖЗИЙМНОПРТХЧЧИ";
  char *evowels="aeiouy";


  for (i=0; i<=255;i++) { 
    tab1[i]=i; 
    vowel[i]='\0';
    if (isalpha(i)) {tab1[i]='\0';}
  }
  /* note, in KOI8, 32 is the shift between cases for russian letters*/
  /* single quote, as a soft sign, will be detected later in convert()*/
  for (i=0; i<=strlen(eletters1); i++){
    tab1[eletters1[i]]=(uchar)rletters1[i]; /* low-case */
    tab1[toupper(eletters1[i])]=((uchar)rletters1[i])+32; /* upper case*/
  }

  for (i=0; i<=strlen(evowels); i++){
    vowel[evowels[i]]=1;
    vowel[toupper(evowels[i])]=1;
  }
}

/* returns a pointer to read data, if the file is too large
to fit the memory, aborts the program*/
char* readData( FILE* fid){
  int block=10000; /* block size,bytes */
  int size=0;
  char *buffer=NULL;
  while (!feof(fid)){
    int nread;
    if(!(buffer=realloc(buffer,size+block))){ 
      /*      fprintf(stderr,"not enough memory"); */
      exit(1);
    }
    nread=fread(buffer+size,1,block,fid);
    size+=nread;
    /* if (nread != block) means the end of the input file, 
    but this also implies that some unused space is left in
    the allocated block! (I need just one extra byte for \0*/
    if (nread !=block) {break;}
  }
  /*obviously there is always at least one unused char in the buffer */
  buffer[size]='\0'; 
  return buffer;
}/*--------------------------------------------*/
int letterCnt=0;

void convert(char *buffer, FILE *outstream){
  char *p=buffer;
  uchar c,c1;
  int shift=0;
  /* try to detect a single quote used as a soft sign, frequency
  of a soft sign in the russian text is about 1.8% not counting
  spaces and punctuation, frequency of hard sign is less
  then 0.2% and single quotes are not usually used as just
  quotes in russian text*/
  int cnt=0,letters=0;
  double ratio;
  for(shift=0;p[shift]!=0;shift++){
    if (p[shift]=='\''){cnt++;}
    if (isalpha(p[shift])){letters++;}
  };
  ratio=(double)cnt/letters; 
  if ((0.01<ratio)&&(ratio<0.025)){
    tab1['\'']='\0';
  }
  shift=0;  
  while (c=p[shift]){
    if (c1=tab1[c]){shift++;}
    else{
       c1=convCombination(p,&shift);
      if (isupper(c)){c1+=32;}
      if (((char)c1=='Ш') && (isupper(p[shift-1]))){c1+=32;}
    }
    if (isalpha(c)){letterCnt++;}
    fputc(c1,outstream);
  }
  fflush(outstream);
}/*------------------------------------------*/

/* used for ja, ju,je,ya,ye,yu combinations */
uchar jPair(char c){
  switch (tolower(c)){
  case 'u': return 'А';
  case 'a': return 'С';
  case 'e': return 'e';
  }
  return '\0';
}/*--------------------------------------------------*/

/* note, C quarantees a lazy evaluation of logical && and ||
i.e. if the 1st operand allows to derive the result than
the second operand is not computed */


#define RETURN(c,i) {(*pshift)=(*pshift)+(i); return (c);}
#define LCMP(c1,c2) (tolower(c1) == (c2))
int isvowel(char *p){
  if (!LCMP(*p,'j')) {return vowel[(unsigned char)(*p)];}
  p++;
  if (LCMP(*p,'y')) {return 0;}
  return vowel[(unsigned char)(*p)];
}

int is1st(char *p,int shift){/* returns true if *p is the 1st letter in the word*/
 if (shift==0) {return 1;}
 if (p[-1]=='\'') {
   if (shift==1) {return 1;}
   p=p-1; /*if prev char is a single quote than check the prev */
 }
 return (isspace(p[-1]) || ispunct(p[-1]));
}

int islast(char *p){ /* returns true if *p is the last letter */
  /*if squote was determined to mean a soft sign, then 
  squote doesn't mean the end of the word*/		       
 if ((tab1['\'']==0) && (p[1]=='\'')) {return 0;}
 return (isspace(p[1]) || ispunct(p[1]) || (p[1]=='\0'));
}

/* convert combinations which start with s */
uchar s_proc(char* p, int *pshift){
  static int shchCnt=0;
  /* try to detect "sch" used as "Э" (which is quite common)
   the problem is that
  "УЮ" combination is quite common too, well, I'm trying 
  to detect most common words, note, "УЮ" is much less
  frequent than "Э", in piknik "УЮ" appears 10 times fewer
  than "Э", also, I try to detect if shch already appeared
  earlier, then most likely, it will be used later, 
  so I'm trying to self-adjust the algoritm, depending on
  previously-read text, most humans
  won't use "shch" anyway, so they won't notice my self-adjusting
  but this self-adjustment will improve the results for
  computer generated transliterations */

  /* detech sch cobmination */ 
  if (LCMP(p[1],'c') && LCMP(p[2],'h')){
    /* frequency of "Э" is 0.3-04% */
    if ((double)shchCnt/(double)letterCnt>0.002) RETURN('У',1);
    /*УЮБУФШЕ and its derivatives */
    if (LCMP(p[3],'a')&&LCMP(p[4],'s')&& LCMP(p[5],'t')) RETURN('У',1);
    /* cЮЙФБФШ and its derivatives */
    if (LCMP(p[3],'i')&&LCMP(p[4],'t')&& LCMP(p[5],'a')) RETURN('У',1);
    if (LCMP(p[3],'i')&&LCMP(p[4],'t')&& LCMP(p[5],'a')) RETURN('У',1);
    /*another popular word is УЮЕФ and its derivatives, but
    how can I distguish it from "ЙЭЕФ","cЧЙЭЕФ","ЭЕФЙОБ","ЭЕФЛБ" 
    to make things worse, some might even use "ye" instead of
    "e" , not to mention "РЙУЮЕК ВХНБЗПК" & "РЙЭЕК"!! where
    even complete dictionary wouldn't help*/
    RETURN('Э',3);
  }

  /*if the next letter is different from 'h', then it's just У */   
  if (!LCMP(p[1],'h')) RETURN('У',1);
  /* detect shch, which means 'Э', 'ЫЮ' pair never appears in Russian*/
  if (LCMP(p[2],'c') && (LCMP(p[3],'h'))) {shchCnt++;RETURN('Э',4);}
  /* now attempt to distinguish 'УИ' and 'Ы' */
  /* catch shvat... combination */
  if (LCMP(p[2],'v') && LCMP(p[3],'a') && LCMP(p[4],'t')) RETURN('c',1);
  /* catch shod... combination */
  if (LCMP(p[2],'o') && LCMP(p[3],'d')) RETURN('c',1);
  RETURN('Ы',2);
}

uchar y_proc(char *p,int *pshift){
  uchar c1;
  if (LCMP(p[1],'e')){
    /* word cann't end as КЕ */
    if (islast(p+1)) RETURN('Щ',1);
    RETURN('e',2);
  } 
  /* 'Щ', I believe, can never be followed by a vowel other than e */
  if (c1=jPair(p[1])) RETURN(c1,2);
  /*no words starting with Щ*/    
  if (is1st(p,*pshift)) RETURN('К',1);
  /*Щ is never preceded by a vowel, and 'К' is always! */ 
  if (vowel[(uchar)p[-1]]) RETURN('К',1);
  RETURN('Щ',1);
}

uchar convCombination(char *buffer,int *pshift){
  uchar c1,c;
  char*  p;
  p=buffer+(*pshift);
  c=tolower(*p);
  
  switch (c){
  case 'y': return y_proc(p,pshift);
  case 's':  return s_proc(p,pshift);
  case 'j': 
    if (c1=jPair(p[1])) RETURN(c1,2)
    else  RETURN('К',1);
  case 'c': 
    if (LCMP(p[1],'h'))  RETURN('Ю',2);
    RETURN('Г',1);
  case 'k':
    if (LCMP(p[1],'h')) RETURN('И',2);
    RETURN('Л',1);
  case 'e':  /* try to distinguish Е and Ь*/
    if (is1st(p,*pshift)){ /*beginning of the word*/
      if (LCMP(p[1],'t') || LCMP(p[1],'k')) RETURN('Ь',1);
      if (LCMP(p[1],'l') && LCMP(p[2],'e' && LCMP(p[3],'k'))) RETURN('Ь',1);
    }
    RETURN('Е',1);
  case 'z':
    if (LCMP(p[1],'h'))RETURN('Ц',2);
    RETURN('Ъ',1);
  case 't':
    if (!LCMP(p[1],'s')) RETURN('Ф',1);
    if (!LCMP(p[2],'y')) RETURN('Ф',1); /* ГС ГА ГК ОЕЧПЪНПЦОЩ */
    if (!LCMP(p[2],'k')) RETURN('Ф',1); /* ГЛ  ОЕЧПЪНПЦОЩ */
    RETURN('Г',2);
  case '\'':
    /* hard sign never appears in the end of words and before consonants */
    if (islast(p) || (!isvowel(p+1))){RETURN('Ш',1);}
    /* 'Й' never appears after hard sign (only "АСЕ" may) */
    if (LCMP(p[1],'i')) RETURN('Ш',1);
    RETURN('\'',1);
  }
  RETURN('?',1);
}








