if [ -z "$UNDER_SCRIPT" ]; then
        logdir=$HOME/terminal-logs
        if [ ! -d $logdir ]; then
                mkdir $logdir
        fi
        gzip -q $logdir/*.log
        logfile=$logdir/$(date +%F_%T).$$.log
        export UNDER_SCRIPT=$logfile
        script -f -q $logfile
        exit
fi
