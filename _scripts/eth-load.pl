#!/usr/bin/perl

# ethernat and disk activity monitor
# written by Alexander V. Lukyanov <lavv17f@gmail.com> 2004,2011
# public domain, enjoy.

use strict;
my $exclude_eth='^$';

use Math::BigFloat;

my $bs=1024;
my $nl="\e[K\r\n";

#Inter-|   Receive                                                |  Transmit
# face |bytes    packets errs drop fifo frame compressed multicast|bytes    packets errs drop fifo colls carrier compressed

my $n=0;
my $lines=0;
my (%prev_bytes_recv,%bytes_recv,%prev_bytes_send,%bytes_send,
    %prev_pkt_recv,%pkt_recv,%prev_pkt_send,%pkt_send,
    %prev_bytes_read,%bytes_read,%prev_bytes_writ,%bytes_writ,
    %prev_reads,%reads,%prev_writs,%writs,
    %recv_rate,%send_rate,%recv_pkt_rate,%send_pkt_rate,
    %read_rate,%writ_rate,%reads_rate,%writs_rate);
while(1) {

%prev_bytes_recv=%bytes_recv;
%prev_bytes_send=%bytes_send;
%prev_pkt_recv=%pkt_recv;
%prev_pkt_send=%pkt_send;
%prev_bytes_read=%bytes_read;
%prev_bytes_writ=%bytes_writ;
%prev_reads=%reads;
%prev_writs=%writs;

open STAT,'<','/proc/net/dev';
<STAT>;<STAT>;
while(<STAT>) {
#	next if !/^ *(eth|gre)/;
	chomp;
	s/^[\t ]*//;
	my ($name,$bytes_recv,$pkt_recv,$errs_recv,$drop_recv,$fifo_recv,$frame_recv,$comp_recv,$multicast_recv,
	 $bytes_send,$pkt_send,$errs_send,$drop_send,$fifo_send,$colls_send,$carrier_send,$comp_send)=split /[ \t:]+/;
	$bytes_recv{$name}=Math::BigFloat->new($bytes_recv);
	$bytes_send{$name}=Math::BigFloat->new($bytes_send);
	$pkt_recv{$name}=$pkt_recv;
	$pkt_send{$name}=$pkt_send;
}
foreach my $hd (glob '/sys/block/*') {
	my $name=$hd;
	$name=~s|^/sys/block/||;
	next if $name=~/^loop|^md|^ram/;
	open STAT,'<',$hd.'/stat';
	$_=<STAT>;
	my ($reads,undef,$sec_read,undef,
	    $writs,undef,$sec_writ)=split;
	$bytes_read{$name}=Math::BigFloat->new($sec_read)*$bs;
	$bytes_writ{$name}=Math::BigFloat->new($sec_writ)*$bs;
	$reads{$name}=Math::BigFloat->new($reads)*$bs;
	$writs{$name}=Math::BigFloat->new($writs)*$bs;
}
close STAT;
sleep 1,next if !%prev_bytes_recv;
if($lines>0) {
	printf "\e[%dA",$lines;
}
$lines=0;
$n++ if $n<600;
my $recv_rate_sum=0;
my $send_rate_sum=0;
my $recv_pkt_rate_sum=0;
my $send_pkt_rate_sum=0;
my $read_rate_sum=0;
my $writ_rate_sum=0;
my $reads_rate_sum=0;
my $writs_rate_sum=0;

foreach my $name (sort keys %pkt_recv) {
	$prev_bytes_recv{$name}=$bytes_recv{$name}-$recv_rate{$name} if $bytes_recv{$name}<$prev_bytes_recv{$name};
	$prev_bytes_send{$name}=$bytes_send{$name}-$send_rate{$name} if $bytes_send{$name}<$prev_bytes_send{$name};
	$recv_rate{$name}-=$recv_rate{$name}/$n;
	$recv_rate{$name}+=($bytes_recv{$name}-$prev_bytes_recv{$name})/$n;
	$send_rate{$name}-=$send_rate{$name}/$n;
	$send_rate{$name}+=($bytes_send{$name}-$prev_bytes_send{$name})/$n;
	$recv_pkt_rate{$name}-=$recv_pkt_rate{$name}/$n;
	$recv_pkt_rate{$name}+=($pkt_recv{$name}-$prev_pkt_recv{$name})/$n;
	$send_pkt_rate{$name}-=$send_pkt_rate{$name}/$n;
	$send_pkt_rate{$name}+=($pkt_send{$name}-$prev_pkt_send{$name})/$n;
	if($name=~$exclude_eth) {
		$recv_rate_sum-=$recv_rate{$name};
		$send_rate_sum-=$send_rate{$name};
		$recv_pkt_rate_sum-=$recv_pkt_rate{$name};
		$send_pkt_rate_sum-=$send_pkt_rate{$name};
	}
	next if $name!~/^eth\d$|^en/;
	$recv_rate_sum+=$recv_rate{$name};
	$send_rate_sum+=$send_rate{$name};
	$recv_pkt_rate_sum+=$recv_pkt_rate{$name};
	$send_pkt_rate_sum+=$send_pkt_rate{$name};
}
for my $name (sort keys %bytes_read) {
	$prev_bytes_read{$name}=$bytes_read{$name}-$read_rate{$name} if $bytes_read{$name}<$prev_bytes_read{$name};
	$prev_bytes_writ{$name}=$bytes_writ{$name}-$writ_rate{$name} if $bytes_writ{$name}<$prev_bytes_writ{$name};
	$read_rate{$name}-=$read_rate{$name}/$n;
	$read_rate{$name}+=($bytes_read{$name}-$prev_bytes_read{$name})/$n;
	$writ_rate{$name}-=$writ_rate{$name}/$n;
	$writ_rate{$name}+=($bytes_writ{$name}-$prev_bytes_writ{$name})/$n;
	$reads_rate{$name}-=$reads_rate{$name}/$n;
	$reads_rate{$name}+=($reads{$name}-$prev_reads{$name})/$n;
	$writs_rate{$name}-=$writs_rate{$name}/$n;
	$writs_rate{$name}+=($writs{$name}-$prev_writs{$name})/$n;
	if($name!~/^dm-/) {
		$read_rate_sum+=$read_rate{$name};
		$writ_rate_sum+=$writ_rate{$name};
		$reads_rate_sum+=$reads_rate{$name};
		$writs_rate_sum+=$writs_rate{$name};
	}
}
sleep 1,next if $n==0;
foreach my $name (sort keys %pkt_recv) {
	$lines++,printf "%-9s recv-rate=%-7s (p=%s) \tsend-rate=%-7s (p=%s) $nl",$name.':',
		int($recv_rate{$name}+.5),int($recv_pkt_rate{$name}+.5),
		int($send_rate{$name}+.5),int($send_pkt_rate{$name}+.5);
}
$lines++,printf "SUM(eth): recv-rate=%-7s (p=%s) \tsend-rate=%-7s (p=%s) $nl",
	int($recv_rate_sum+.5),int($recv_pkt_rate_sum+.5),
	int($send_rate_sum+.5),int($send_pkt_rate_sum+.5);
$lines++,printf "HITS: %-7s %2d%%$nl",
	int($send_rate_sum-$recv_rate_sum+.5),
	int(100*($send_rate_sum-$recv_rate_sum)/$send_rate_sum+.5)
	if $send_rate_sum>0;
$lines++,print $nl if $send_rate_sum==0;
$lines++,print $nl;
my ($pct_read,$pct_writ);
for my $name (sort keys %bytes_read) {
	$pct_read=0;
	$pct_read=$read_rate{$name}*100/$read_rate_sum
		if $read_rate_sum>0;
	$pct_writ=0;
	$pct_writ=$writ_rate{$name}*100/$writ_rate_sum
		if $writ_rate_sum>0;
	$lines++,printf "%s: read-rate=%-7s (r=%-7s\twrite-rate=%-7s (w=%-7s\t%2s/%-2s%%$nl",$name,
		int($read_rate{$name}+.5),int($reads_rate{$name}+.5).')',
		int($writ_rate{$name}+.5),int($writs_rate{$name}+.5).')',
		int($pct_read+.5),int($pct_writ+.5);
}
$lines++,printf "SUM: read-rate=%-7s (r=%-7s\twrite-rate=%-7s (w=%-7s$nl",
	int($read_rate_sum+.5),int($reads_rate_sum+.5).')',
	int($writ_rate_sum+.5),int($writs_rate_sum+.5).')',
	int($pct_read+.5),int($pct_writ+.5);
sleep 1;

}
