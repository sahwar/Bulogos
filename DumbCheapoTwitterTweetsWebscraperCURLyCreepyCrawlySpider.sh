TODO: DumbCheapoTwitterTweetsWebscraperCURLyCreepyCrawlySpider-robots.txt+user-agentMasking=latestFirefoxGoogleChromeOrChromiumOrWget1/wget2.sh
...  
Original idea by https://github.com/sahwar/Bulogos/
21-February-2020, ve4ernik@gmail.com
  

simple Twitter.com webscraper based on:
1. get ''number-sequencesaccount created on datetime-stamp as since: 'number-sequencesorientation datetime range
2. 'number-sequences'number-sequences'numbe'number-sequences'number-sequences'number-sequences IDs in the tweets' URL/URI' hack
3. crawl twitter-account page as html only, get tweet/{number-string} of the last non-pinned twinned
4. generate a .txt via `seq`, etc., 0-padded/non-0-padded from tweet/0.... to range-limit /tweet/{number-string-of-last-non-pinned-posted-tweet}
5. add twitter.com/{username/tweet/ prefix to each line of the .txt generated by steps 4. bove a
 6. download the sequence of all links as generated by 4.+5. either as .html ONLY or with all internal files included, via curl / wget / wget2 / aria2c / etc.
 7. report each file success/failure at downloading as text, with url & filesize & output filename printed to stdo in bash CLI shell
 8. retry up to 5 times on download failure of individual html tweet files
 9. a dd doenload-failure files to failed-to-dl_laist.txt for reference
 10. create all-download-succes-urls.txt for all successfully downloaded html's
 11. after all files have been downloaded, compute total filesize of all downloaded files and print it in the bash shell
 12. automatically xip all downloaded files in a .zip archive with maximum compression
 13. (youtube & gid & sound-file link-only tweets .html's must include a hidden html-comment string containing the original hotlinked files' absolute-URI...)
 14. meege all downloaded .html/.htm into strings-dict.txt and perform a Unicode-collation `sort | uniq` on all whitespace/tab/punctuation-delimited nom-HYML-tags text strings, after cleanup of htl tags via an xml pa. parser
 15. create dictionary-index.txt with the result of 14. with the absolute filepath+filename of the downloaded files added after each single-line-with-the-uniq-string when he downloaded file contains said text string (tnon-html string).
 16. perform binary search on 15. .dat including via pcre2 regexp and some sorting algorithm, for searching through the full archive.zip
 17. print exit and app-name+vsrsion+app-website-url string and license & print output file directory/path absolute-address to stdo and exit with success code 0.

 
/with_replies
/likes/
/followed/
/following/
/images/ (shared media)
/lists/

twitter-account self-description bio text
Twitter-account permalink
Twitter-account temporary mask nickname
twitter-account avataer-image absolute URI/URL
Twitter-account custom background-image absolute URI/URL
