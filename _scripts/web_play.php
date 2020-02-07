<?
#Время звучания, секунд
//$SEC=2;
$SEC=5;

#$WEB_play_file = '/mnt/takd/Music/Art Of Noise/Art Of Noise - Art Of Love.mp3';
#$WEB_play_file = '/mnt/takd/Music/Art Of Noise/Art Of Noise - Camilla The Old Old Story.mp3';
$WEB_play_file = '/mnt/seagate/Music/Art Of Noise/Art Of Noise - Camilla The Old Old Story.mp3';

$AudioFilter='-af volume=30.1';

//exec('mplayer -endpos '.$SEC.' "'.$WEB_play_file.'"'.' 2>&1');

echo `mplayer -endpos $SEC $AudioFilter "$WEB_play_file" 2>&1`;
echo 'OK :)';
?>