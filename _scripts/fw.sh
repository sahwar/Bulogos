#!/bin/sh

# A firewall / masquerading script, v0.90. Written by Grigor Gatchev.

# ---------------------------------------------------------------------------- #
# --                              Procedures                                -- #
# ---------------------------------------------------------------------------- #


# ---------------------------------  Common  ----------------------------------#

errorexit () {
  MESSAGE=$1 ; shift
  BADPARAM=$1; shift
  ERLVL=$1   ; shift
  
  echo $MESSAGE: \"$BADPARAM\" > /dev/stderr
  exit $ERLVL
}


preface () {
  local PREFACE=$1
  local CONTENTS=$2
  
  local TEMP
  
  if [ "$CONTENTS" == "all" ] || [ -z "$CONTENTS" ]; then
    echo
  else
    echo $PREFACE$CONTENTS
  fi
  
}

revert_direction () {
  local DIRECTION=$1

  case "$DIRECTION" in
    incoming )
      echo "outgoing"
      ;;
    outgoing )
      echo "incoming"
      ;;
    both )
      echo "both"
      ;;
    * )
      errorexit "Bad argiment to revert_direction:" "$DIRECTION" "$BAD_FUNCTION_ARGUMENT"
      ;;
  esac
}


do_it () {
  local IPTABLES=$1; shift
  local PARAMS=$@
  
  local PREFACE
  
  if ! [ -x "$IPTABLES" ]; then
    echo "IPTABLES executable ($IPTABLES) not found - exitting!"
    exit
  fi
  
  if [ -z $DO_IT_ACTION ]; then
    DO_IT_ACTION="run"
  fi
  
  case "$DO_IT_ACTION" in
    run   )
      PREFACE=""
      ;;
    write )
      PREFACE="echo"
      ;;
    * )
      errorexit "Bad action type in do_it()!" "" $BAD_FUNCTION_ARGUMENT
      ;;
  esac
  
  $PREFACE $IPTABLES $PARAMS
}


iptables__clear () {
  do_it "$IPTABLES" -t filter -F
  do_it "$IPTABLES" -t filter -X
  do_it "$IPTABLES" -t filter -Z
  
  do_it "$IPTABLES" -t nat -F
  do_it "$IPTABLES" -t nat -X
  do_it "$IPTABLES" -t nat -Z
  
  do_it "$IPTABLES" -t mangle -F
  do_it "$IPTABLES" -t mangle -X
  do_it "$IPTABLES" -t mangle -Z  
}


set_filter_policy () {
  local POLICY=$1
  
  do_it "$IPTABLES" -P INPUT   $POLICY
  do_it "$IPTABLES" -P OUTPUT  $POLICY
  do_it "$IPTABLES" -P FORWARD $POLICY
}


# -------------------------  Evoking the firewall  --------------------------- #


final_expand () {
  local TABLE=$1   ; shift
  local CHAIN=$1   ; shift
  local TARGET=$1  ; shift
  local INP_IF=$1  ; shift
  local OUT_IF=$1  ; shift
  local PROTOCOL=$1; shift
  local SPORT=$1   ; shift
  local DPORT=$1   ; shift
  local FADDR=$1   ; shift
  local TADDR=$1   ; shift
  local OTHER=$1   ; shift
  local POST_TARGET=$1; shift
  local OTHER_TCP=$1  ; shift
  # OTHER and POST_TARGET are not expanded. TABLE and CHAIN - too.
  
  expand__target () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ "$PROTOCOL" == "tcp" ]; then
      OTHER=$OTHER$OTHER_TCP
    fi
    
    if [ -z "$TARGET" ]; then
      echo "ERROR: No target specified in a rule!"
    else
      TABLE=`preface "-t " "$TABLE"`
      CHAIN=`preface "-A " "$CHAIN"`
      TARGET=`preface "-j " "$TARGET"`
      INP_IF=`preface "-i " "$INP_IF"`
      OUT_IF=`preface "-o " "$OUT_IF"`
      PROTOCOL=`preface "-p " "$PROTOCOL"`
      SPORT=`preface "--sport " "$SPORT"`
      DPORT=`preface "--dport " "$DPORT"`
      FADDR=`preface "-s " "$FADDR"`
      TADDR=`preface "-d " "$TADDR"`
  
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $TARGET ; do
        IFS="$TEMP_IFS"
        do_it "$IPTABLES" "$TABLE" "$CHAIN" "$INP_IF" "$OUT_IF" \
	      "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  "$TADDR"  \
	      "$OTHER" "$TEMP" "$POST_TARGET"
        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
  
  expand__sport () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$SPORT" ]; then
        expand__target "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	               "$PROTOCOL" ""       "$DPORT" "$FADDR"  "$TADDR"  \
	               "$OTHER" "$POST_TARGET" "$OTHER_TCP"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $SPORT ; do
        IFS="$TEMP_IFS"
        expand__target "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	               "$PROTOCOL" "$TEMP"  "$DPORT" "$FADDR"  "$TADDR"  \
	               "$OTHER" "$POST_TARGET" "$OTHER_TCP"
        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
    
  expand__dport () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$DPORT" ]; then
        expand__sport "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" ""       "$FADDR"  "$TADDR"  \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $DPORT ; do
        IFS="$TEMP_IFS"
        expand__sport "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$TEMP"  "$FADDR"  "$TADDR"  \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
    
 expand__faddr () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
  
    if [ -z "$FADDR" ]; then
        expand__dport "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$DPORT" ""        "$TADDR"  \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $FADDR ; do
        IFS="$TEMP_IFS"
        expand__dport "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$DPORT" "$TEMP"   "$TADDR"  \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
    
 expand__taddr () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$TADDR" ]; then
        expand__faddr "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  ""        \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $TADDR ; do
        IFS="$TEMP_IFS"
        expand__faddr "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  "$TEMP"   \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
    
 expand__inp_if () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$INP_IF" ]; then
        expand__taddr "$TABLE" "$CHAIN" "$TARGET" ""        "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  "$TADDR"  \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $INP_IF ; do
        IFS="$TEMP_IFS"
        expand__taddr "$TABLE" "$CHAIN" "$TARGET" "$TEMP"   "$OUT_IF" \
	              "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  "$TADDR"  \
	              "$OTHER" "$POST_TARGET" "$OTHER_TCP"
        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
    
  expand__out_if () {
  
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP=$1  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$OUT_IF" ]; then
        expand__inp_if "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" ""        \
	               "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  "$TADDR"  \
	               "$OTHER" "$POST_TARGET" "$OTHER_TCP"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $OUT_IF ; do
        IFS="$TEMP_IFS"
        expand__inp_if "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$TEMP"   \
	               "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR"  "$TADDR"  \
	               "$OTHER" "$POST_TARGET" "$OTHER_TCP"

        IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
  
  expand__protocol () {
    local TABLE=$1   ; shift
    local CHAIN=$1   ; shift
    local TARGET=$1  ; shift
    local INP_IF=$1  ; shift
    local OUT_IF=$1  ; shift
    local PROTOCOL=$1; shift
    local SPORT=$1   ; shift
    local DPORT=$1   ; shift
    local FADDR=$1   ; shift
    local TADDR=$1   ; shift
    local OTHER=$1   ; shift
    local POST_TARGET=$1; shift
    local OTHER_TCP  ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$PROTOCOL" ]; then
        expand__target "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
                       "$PROTOCOL" ""    ""        "$FADDR"  "$TADDR"  \
	               "$OTHER" "$POST_TARGET" "$OTHER_TCP"
	# no protocol set - junk $SPORT and $DPORT!
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $PROTOCOL ; do
	case "$TEMP" in
	  tcp | udp )
            IFS="$TEMP_IFS"
            expand__out_if "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
  	                   "$TEMP"  "$SPORT" "$DPORT" "$FADDR"  "$TADDR"  \
  	                   "$OTHER" "$POST_TARGET" "$OTHER_TCP"
            IFS=,
	  ;;
	  * )   # only TCP and UDP support ports - junk $SPORT and $DPORT
	    IFS="$TEMP_IFS"
            expand__out_if "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" \
  	                   "$TEMP"  ""       ""        "$FADDR"  "$TADDR"  \
  	                   "$OTHER" "$POST_TARGET" "$OTHER_TCP"
            IFS=,
	  ;;
	esac
      done
      IFS="$TEMP_IFS"
    fi
  }
  
  expand__protocol "$TABLE" "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" "$PROTOCOL" \
                   "$SPORT" "$DPORT" "$FADDR" "$TADDR" "$OTHER" "$POST_TARGET" \
		   "$OTHER_TCP"
}


# ----------------------------  Filter - Simple  ---------------------------- #


filter__full () {
  local CHAIN=$1   ; shift
  local TARGET=$1  ; shift
  local INP_IF=$1  ; shift
  local OUT_IF=$1  ; shift
  local PROTOCOL=$1; shift
  local SPORT=$1   ; shift
  local DPORT=$1   ; shift
  local FADDR=$1   ; shift
  local TADDR=$1   ; shift
  local OTHER=$1   ; shift
  local POST_TARGET=$1; shift
  local OTHER_TCP=$1  ; shift
  
  final_expand "filter" \
    "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" "$PROTOCOL" \
    "$SPORT" "$DPORT" "$FADDR" "$TADDR" "$OTHER" "$POST_TARGET" "$OTHER_TCP"
}


filter_INPUT () {
  local TARGET=$1   ; shift
  local INTERFACE=$1; shift
  local PROTOCOL=$1 ; shift
  local SPORT=$1    ; shift
  local DPORT=$1    ; shift
  local RADDR=$1    ; shift	# REMOTE address (LOCAL is known)
  local OTHER=$1    ; shift
  local POST_TARGET=$1; shift
  local OTHER_TCP=$1  ; shift
  
  filter__full INPUT \
    "$TARGET" "$INTERFACE" "" "$PROTOCOL" \
    "$SPORT" "$DPORT" "$RADDR" "" \
    "$OTHER" "$POST_TARGET" "$OTHER_TCP"
}

filter_OUTPUT () {
  local TARGET=$1   ; shift
  local INTERFACE=$1; shift
  local PROTOCOL=$1 ; shift
  local SPORT=$1    ; shift
  local DPORT=$1    ; shift
  local RADDR=$1    ; shift
  local OTHER=$1    ; shift
  local POST_TARGET=$1; shift
  local OTHER_TCP=$1  ; shift

  
  filter__full OUTPUT \
    "$TARGET" "" "$INTERFACE" "$PROTOCOL" \
    "$SPORT" "$DPORT" "" "$RADDR" \
    "$OTHER" "$POST_TARGET" "$OTHER_TCP"
}

filter_FORWARD () {
  local TARGET=$1   ; shift
  local INP_IF=$1   ; shift
  local OUT_IF=$1   ; shift
  local PROTOCOL=$1 ; shift
  local SPORT=$1    ; shift
  local DPORT=$1    ; shift
  local FADDR=$1    ; shift
  local TADDR=$1    ; shift
  local OTHER=$1    ; shift
  local POST_TARGET=$1; shift
  local OTHER_TCP=$1  ; shift


  filter__full FORWARD \
    "$TARGET" "$INP_IF" "$OUT_IF" "$PROTOCOL" \
    "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$POST_TARGET" "$OTHER_TCP"
}


# ---------------------------  Filter - Complex  ---------------------------- #

filter_BIDIR () {
  local TARGET=$1   ; shift
  local INTERFACE=$1; shift
  local PROTOCOL=$1 ; shift
  local SPORT=$1    ; shift
  local DPORT=$1    ; shift
  local RADDR=$1    ; shift
  local OTHER=$1    ; shift
  local POST_TARGET=$1; shift
  local OTHER_TCP=$1  ; shift
  
  filter_INPUT  "$TARGET" "$INTERFACE" "$PROTOCOL" "$SPORT" "$DPORT" "$RADDR" \
    "$OTHER" "$PORT_TARGET" "$OTHER_TCP"
  filter_OUTPUT "$TARGET" "$INTERFACE" "$PROTOCOL" "$SPORT" "$DPORT" "$RADDR" \
    "$OTHER" "$PORT_TARGET" "$OTHER_TCP"
}


filter_CLIENTSERVER () {
  local TARGET=$1   ; shift
  local INTERFACE=$1; shift
  local PROTOCOL=$1 ; shift
  local OURPORT=$1  ; shift
  local THEIRPORT=$1; shift
  local REMOTADDR=$1; shift
  local OTHER=$1    ; shift
  local POST_TARGET=$1; shift
  local CANSTART=$1    ; shift
  
  local INPOTHER
  local OUTOTHER
  
  if [ "$CANSTART" == "outgoing" ]; then
    INPOTHER="! --syn"
  else
    INPOTHER=""
  fi
  
  if [ "$CANSTART" == "incoming" ]; then
    OUTOTHER="! --syn"
  else
    OUTOTHER=""
  fi
  
  filter_INPUT  \
    "$TARGET" "$INTERFACE" "$PROTOCOL" "$THEIRPORT" "$OURPORT" "$REMOTADDR" \
    "$OTHER" "$POST_TARGET" "$INPOTHER"
  filter_OUTPUT \
    "$TARGET" "$INTERFACE" "$PROTOCOL" "$OURPORT" "$THEIRPORT" "$REMOTADDR" \
    "$OTHER" "$POST_TARGET" "$OUTOTHER"
}


filter_ACCEPT_INOUT () {
  local INTERFACE=$1; shift
  local PROTOCOL=$1 ; shift
  local CLNTPORT=$1 ; shift
  local SERVPORT=$1 ; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  # DIRECTION can be "both" (default), "none", "incoming" or "outgoing".
  local OTHER=$1    ; shift
  local POST_TARGET=$1; shift
  local CANSTART=$1
  # CANSTART says who can start a connection (not the same as who's client!)
  # Must be "both", "outgoing" or "incoming".
  
  if [ -z "$DIRECTION" ]; then DIRECTION="both"; fi
  
  # Ports assume that in each direction a client connects with a server, and
  # client and server do not use the same port, but follow UNIX conventions.
  
  if [ -z "$CANSTART" ]; then
    CANSTART=$DIRECTION
  fi
  
  case "$DIRECTION" in
    both )
      filter_CLIENTSERVER ACCEPT \
        "$INTERFACE" "$PROTOCOL" "$SERVPORT" "$CLNTPORT" "$REMOTADDR" \
	"$OTHER" "$POST_TARGET" "$CANSTART"
      if ! [ "$CLNTPORT" == "$SERVPORT" ]; then
        filter_CLIENTSERVER ACCEPT \
          "$INTERFACE" "$PROTOCOL" "$CLNTPORT" "$SERVPORT" "$REMOTADDR" \
          "$OTHER" "$POST_TARGET" "$CANSTART"
      fi
      ;;
    none )
      # dummy choice - access expected to be forbidden by default.
      ;;
    incoming )
      filter_CLIENTSERVER ACCEPT \
        "$INTERFACE" "$PROTOCOL" "$SERVPORT" "$CLNTPORT" "$REMOTADDR" \
	"$OTHER" "$POST_TARGET" "$CANSTART"
      ;;
    outgoing )
      filter_CLIENTSERVER ACCEPT \
        "$INTERFACE" "$PROTOCOL" "$CLNTPORT" "$SERVPORT" "$REMOTADDR" \
	"$OTHER" "$POST_TARGET" "$CANSTART"
      ;;
    * )
      errorexit "Bad argument to filter_ACCEPT() function" "$DIRECTION" "$BAD_FUNCTION_ARGUMENT"
      ;;
  esac
}

filter_ACCEPT_FORWARD () {
  local INT_IF=$1   ; shift
  local EXT_IF=$1   ; shift
  local PROTOCOL=$1 ; shift
  local INT_PORT=$1 ; shift
  local EXT_PORT=$1 ; shift
  local INT_ADDR=$1 ; shift
  local EXT_ADDR=$1 ; shift
  local OTHER=$1    ; shift
  local CANSTART=$1 ; shift
  # Here, incoming means external->internal, outgoing - internal->external.
  
  local INPOTHER
  local OUTOTHER
  
  if [ -z "$CANSTART" ]; then CANSTART="both"; fi
  
  case "$CANSTART" in
    both )
      INPOTHER=$OTHER
      OUTOTHER=$OTHER
      ;;
    incoming )
      INPOTHER=$OTHER"-m state --state ESTABLISHED,RELATED"
      OUTOTHER=$OTHER
      ;;
    outgoing )
      INPOTHER=$OTHER
      OUTOTHER=$OTHER"-m state --state ESTABLISHED,RELATED"
      ;;
    none )
      # theoretically senseless
      INPOTHER=$OTHER"-m state --state ESTABLISHED,RELATED"
      OUTOTHER=$OTHER"-m state --state ESTABLISHED,RELATED"
      ;;
    * )
      errorexit "Bad argument to filter_ACCEPT_FORWARD()" "$DIRECTION" \
        "$BAD_FUNCTION_ARGUMENT"
      ;;
  esac
  
  filter_FORWARD ACCEPT "$INT_IF" "$EXT_IF" "$PROTOCOL" \
    "$INT_PORT" "$EXT_PORT" "$INT_ADDR" "$EXT_ADDR" "$INPOTHER"
  filter_FORWARD ACCEPT "$EXT_IF" "$INT_IF" "$PROTOCOL" \
    "$EXT_PORT" "$INT_PORT" "$EXT_ADDR" "$INT_ADDR" "$OUTOTHER"
}


filter_LIMIT_NETWORKS () {
  DROPTARG=$1 ; shift
  # The DROP target here - by default DROP :-), but could be eg "LOG,DROP".
  INTERFACE=$1; shift
  # Multiple will be parsed, but are obvoisly senseless.
  ACCEPT=$1   ; shift
  REJECT=$1   ; shift
  # ACCEPT and REJECT are lists of address/mask combinations.
  # Everything is denied, except if in ACCEPT, and then only if not in REJECT.
  
  # This procedure is just a crude instrument to avoid address spoofing and
  # messed rooting.
  
  one_by_one_drop () {
    DROPTARG=$1 ; shift
    INTERFACE=$1; shift
    ACCEPT=$1   ; shift
    REJECT=$1   ; shift
    
    if ! [ -z "$ACCEPT" ]; then
      ACCEPT=`preface "! " "$ACCEPT"`
      filter_BIDIR "$DROPTARG" "$INTERFACE" "" "" "" "$ACCEPT"
    fi
    if ! [ -z "$REJECT" ]; then
      filter_BIDIR "$DROPTARG" "$INTERFACE" "" "" "" "$REJECT"
    fi
  }
  
  one_by_many_drop () {
    DROPTARG=$1 ; shift
    INTERFACE=$1; shift
    ACCEPT=$1   ; shift
    REJECT=$1   ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$REJECT" ]; then
      one_by_one_drop "$DROPTARG" "$INTERFACE" "$ACCEPT" "$REJECT"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $REJECT ; do
        IFS="$TEMP_IFS"
	one_by_one_drop "$DROPTARG" "$INTERFACE" "$ACCEPT" "$TEMP"
	IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
  
  many_by_many_drop () {
    DROPTARG=$1 ; shift
    INTERFACE=$1; shift
    ACCEPT=$1   ; shift
    REJECT=$1   ; shift
    
    local TEMP
    local TEMP_IFS
    
    if [ -z "$ACCEPT" ]; then
      one_by_many_drop "$DROPTARG" "$INTERFACE" "$ACCEPT" "$REJECT"
    else
      TEMP_IFS="$IFS"
      IFS=,
      for TEMP in $ACCEPT ; do
        IFS="$TEMP_IFS"
	one_by_many_drop "$DROPTARG" "$INTERFACE" "$TEMP" "$REJECT"
	IFS=,
      done
      IFS="$TEMP_IFS"
    fi
  }
  
  if [ -z "$DROPTARG" ]; then
    DROPTARG="DROP"
  fi
  
  many_by_many_drop "$DROPTARG" "$INTERFACE" "$ACCEPT" "$REJECT"
}



# ---------------------------------  NAT  ------------------------------------ #


nat__full () {
  local CHAIN=$1      ; shift
  local TARGET=$1     ; shift
  local INP_IF=$1     ; shift
  local OUT_IF=$1     ; shift
  local PROTOCOL=$1   ; shift 
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  local POST_TARGET=$1
  # If passing complex OTHER or POST_TARGET here, enclose in double quotes!

  final_expand "nat" \
    "$CHAIN" "$TARGET" "$INP_IF" "$OUT_IF" "$PROTOCOL" \
    "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$POST_TARGET"
}


nat_PRE_INP () {
  local TARGET=$1     ; shift
  local INTERFACE=$1  ; shift
  local PROTOCOL=$1   ; shift
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  local POST_TARGET=$1
  
  nat__full PREROUTING \
    "$TARGET" "$INTERFACE" "" "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$POST_TARGET"
}

nat_PRE_OUT () {
  local TARGET=$1     ; shift
  local INTERFACE=$1  ; shift
  local PROTOCOL=$1   ; shift
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  local POST_TARGET=$1
  
  nat__full PREROUTING \
    "$TARGET" "" "$INTERFACE" "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$POST_TARGET"
}

nat_POST_INP () {
  local TARGET=$1     ; shift
  local INTERFACE=$1  ; shift
  local PROTOCOL=$1   ; shift
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  local POST_TARGET=$1
  
  nat__full POSTROUTING \
    "$TARGET" "$INTERFACE" "" "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$POST_TARGET"
}

nat_POST_OUT () {
  local TARGET=$1     ; shift
  local INTERFACE=$1  ; shift
  local PROTOCOL=$1   ; shift
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  local POST_TARGET=$1
  
  nat__full POSTROUTING \
    "$TARGET" "" "$INTERFACE" "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$POST_TARGET"
}



nat_MASQ () {
  local INTERFACE=$1  ; shift
  local PROTOCOL=$1   ; shift
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  
  # nat_POST_OUT SNAT "$INTERFACE" "$PROTOCOL" \
  #   "$SPORT" "$DPORT" "$FADDR" "$TADDR" "$OTHER"
  nat_POST_OUT MASQUERADE "$INTERFACE" "$PROTOCOL" \
    "$SPORT" "$DPORT" "$FADDR" "$TADDR" "$OTHER"
  # iptables man suggests preferring SNAT for static connections, since
  # MASQERADE does not resume links after a connection drop. On the other hand,
  # it works on any connection.
}


nat_REDIRECT () {
  local INTERFACE=$1  ; shift
  local PROTOCOL=$1   ; shift
  local SPORT=$1      ; shift
  local DPORT=$1      ; shift
  local FADDR=$1      ; shift
  local TADDR=$1      ; shift
  local OTHER=$1      ; shift
  local TO_PORT=$1
  
  TO_PORT=`preface "--to-port=" $TO_PORT`
  
  if [ -z "$PROTOCOL" ]; then
    PROTOCOL="tcp,udp"
  fi
  
  nat_PRE_INP REDIRECT \
    "$INTERFACE" "$PROTOCOL" "$SPORT" "$DPORT" "$FADDR" "$TADDR" \
    "$OTHER" "$TO_PORT"
}

nat_FORWARDPORT () {
  # THIS PROCEDURE IS WORK IN PROGRESS!!! DO NOT USE IT!!!
  local INP_IF=$1     ; shift
  local OUT_IF=$1     ; shift
  local PROTOCOL=$1   ; shift 
  local OUR_PORT=$1   ; shift
  local THEIR_PORT=$1 ; shift
  local OUR_ADDR=$1   ; shift
  local THEIR_ADDR=$1 ; shift
  local OTHER=$1      ; shift
  local TO_IP=$1      ; shift
  local TO_PORT=$1    ; shift

  filter_FORWARD ACCEPT "$INP_IF" "$OUT_IF" "$PROTOCOL" \
    "$THEIR_PORT" "$OUR_PORT" "$THEIR_ADDR" "$OUR_ADDR" \
    "$OTHER""-m state --state NEW,ESTABLISHED,RELATED"

  nat__full PREROUTING DNAT \
    "$INP_IF" "" "$PROTOCOL" \
    "$THEIR_PORT" "$OUR_PORT" "$THEIR_ADDR" "$OUR_ADDR" \
    "$OTHER" "--to-destination ""$TO_IP":"$TO_PORT"
}


# -------------------------  Services - Portwise  ---------------------------- #


filter_ACCEPT__all () {
  local INTERFACE=$1; shift
  local ADDRESSES=$1; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
     "$INTERFACE" ""    "1024:"   ":1023"      "$ADDRESSES" "$DIRECTION"
#     "$INTERFACE" "tcp,udp,icmp" "1024:"   ":1023"      "$ADDRESSES" "$DIRECTION"
}

filter_ACCEPT__icmp () {
  local INTERFACE=$1; shift
  local ADDRESSES=$1; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
     "$INTERFACE" icmp  ""        ""           "$ADDRESSES" "$DIRECTION"
}

filter_ACCEPT__traceroute () {
  local INTERFACE=$1; shift
  local ADDRESSES=$1; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" udp   1024:     33434:33464 "$ADDRESSES" "$DIRECTION"
}

filter_ACCEPT__ssh () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     ssh         "$RADDR" "$DIRECTION"
}

filter_ACCEPT__ftp_control () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     ftp         "$RADDR" "$DIRECTION"
}

filter_ACCEPT__ftp_data () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  local CANSTART=`revert_direction $DIRECTION`
  # With the FTP active data connection, the server initiates it!
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     ftp-data    "$RADDR" "$DIRECTION" \
      "" "" "$CANSTART"
}

filter_ACCEPT__ftp_data_passive () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
       "$INTERFACE" tcp   1024:     1024:       "$RADDR" "$DIRECTION"
}

filter_ACCEPT__domain () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" udp   1024:     domain      "$RADDR" "$DIRECTION"
}

filter_ACCEPT__http () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  local PORT=$1     ; shift
  
  if [ -z "$PORT" ] ; then PORT="www" ; fi
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     "$PORT"     "$RADDR" "$DIRECTION"
  filter_ACCEPT_INOUT \
      "$INTERFACE" udp   1024:     "$PORT"     "$RADDR" "$DIRECTION"
}

filter_ACCEPT__https () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     https       "$RADDR" "$DIRECTION"
  filter_ACCEPT_INOUT \
      "$INTERFACE" udp   1024:     https       "$RADDR" "$DIRECTION"
}

filter_ACCEPT__http_squid () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     3128        "$RADDR" "$DIRECTION"
}

filter_ACCEPT__smtp () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     smtp        "$RADDR" "$DIRECTION"
}

filter_ACCEPT__pop3 () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     pop3        "$RADDR" "$DIRECTION"
}

filter_ACCEPT__pop3s () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     pop3s       "$RADDR" "$DIRECTION"
}

filter_ACCEPT__netbios_ns () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     netbios-ns  "$RADDR" "$DIRECTION"
}

filter_ACCEPT__netbios_dgm () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     netbios-dgm "$RADDR" "$DIRECTION"
}

filter_ACCEPT__netbios_ssn () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     netbios-ssn "$RADDR" "$DIRECTION"
}

filter_ACCEPT__microsoft_ds () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     microsoft-ds "$RADDR" "$DIRECTION"
}


filter_ACCEPT__portmapper () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  
  filter_ACCEPT_INOUT \
      "$INTERFACE" tcp   1024:     sunrpc       "$RADDR" "$DIRECTION"
}


# ----------------------  Services - Service-wise  ------------------------- #
# Defines groups of port-wise accepts in functional services.


filter_ACCEPT__ftp () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  local FTP_TYPE=$1 ; shift
  # FTP_TYPE must be one of "any" (default), "active", "passive" or "none".
  
  if [ -z "$FTP_TYPE" ]; then FTP_TYPE="any" ; fi
  
  case "$FTP_TYPE" in
    any )
      filter_ACCEPT__ftp_control      "$INTERFACE" "$RADDR" "$DIRECTION"
      filter_ACCEPT__ftp_data         "$INTERFACE" "$RADDR" "$DIRECTION"
      filter_ACCEPT__ftp_data_passive "$INTERFACE" "$RADDR" "$DIRECTION"
      ;;
    active )
      filter_ACCEPT__ftp_control      "$INTERFACE" "$RADDR" "$DIRECTION"
      filter_ACCEPT__ftp_data         "$INTERFACE" "$RADDR" "$DIRECTION"
      ;;
    passive )
      filter_ACCEPT__ftp_control      "$INTERFACE" "$RADDR" "$DIRECTION"
      filter_ACCEPT__ftp_data_passive "$INTERFACE" "$RADDR" "$DIRECTION"
      ;;
    none )
      ;;
    * )
      ;;
  esac
}


filter_ACCEPT__www () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift
  local MORE_HTTP=$1; shift
  # MORE_HTTP may include a semicolon-separated list of additional server ports.
  
  local PORT=""
  local TEMP_IFS
  
  filter_ACCEPT__http  "$INTERFACE" "$RADDR" "$DIRECTION"
  filter_ACCEPT__https "$INTERFACE" "$RADDR" "$DIRECTION"
 
  TEMP_IFS="$IFS"
  IFS=,
  if [ -n "$MORE_HTTP" ] ; then
    IFS="$TEMP_IFS"
    for PORT in $MORE_HTTP ; do
      filter_ACCEPT__http "$INTERFACE" "$RADDR" "$DIRECTION" "$PORT"
    done
    IFS=,
  fi
  IFS="$TEMP_IFS"
}


filter_ACCEPT__windows_network () {
  local INTERFACE=$1; shift
  local RADDR=$1    ; shift
  local DIRECTION=$1; shift

  filter_ACCEPT__netbios_ns   $INTERFACE $RADDR $DIRECTION
  filter_ACCEPT__netbios_dgm  $INTERFACE $RADDR $DIRECTION
  filter_ACCEPT__netbios_ssn  $INTERFACE $RADDR $DIRECTION
  filter_ACCEPT__microsoft_ds $INTERFACE $RADDR $DIRECTION
}




# ---------------------------------------------------------------------------- #
# --                        Top-level procedures                            -- #
# ---------------------------------------------------------------------------- #


allow_passthrough () {
  local INTERFACE=$1; shift
  local ADDRESSES=$1; shift
  local DIRECTION=$1; shift
  local SERVICES=$1 ; shift
  local FTP_TYPE=$1 ; shift
  local WWW_PORTS=$1; shift
  
  local TEMP
  local TEMP_IFS
  
  TEMP_IFS="$IFS"
  IFS=,
  for TEMP in $SERVICES ; do
    IFS="$TEMP_IFS"

    case $TEMP in
      all)
        filter_ACCEPT__all	  "$INTERFACE" "$ADDRESSES" "$DIRECTION"
	;;
      icmp )
        filter_ACCEPT__icmp       "$INTERFACE" "$ADDRESSES" "$DIRECTION"
        ;;
      traceroute )
        filter_ACCEPT__traceroute "$INTERFACE" "$ADDRESSES" "$DIRECTION"
	;;
      domain )
        filter_ACCEPT__domain     "$INTERFACE" "$ADDRESSES" "$DIRECTION"
	;;
      ssh )
        filter_ACCEPT__ssh        "$INTERFACE" "$ADDRESSES" "$DIRECTION"
	;;
      ftp )
        filter_ACCEPT__ftp        "$INTERFACE" "$ADDRESSES" "$DIRECTION" "$FTP_TYPE"
	;;
      www )
        filter_ACCEPT__www        "$INTERFACE" "$ADDRESSES" "$DIRECTION" "$WWW_PORTS"
	;;
      email )
        filter_ACCEPT__smtp       "$INTERFACE" "$ADDRESSES" "$DIRECTION"
        filter_ACCEPT__pop3       "$INTERFACE" "$ADDRESSES" "$DIRECTION"
	;;
      win_net )
        filter_ACCEPT__windows_network "$INTERFACE" "$ADDRESSES" "$DIRECTION"
	;;
      * )
        errorexit "Bad argiment to allow_passthrough" "$DIRECTION" "$BAD_FUNCTION_ARGUMENT"
        ;;
    esac    
    
    IFS=,
  done
  IFS="$TEMP_IFS"
}


allow_clients () {
  local INTERFACE=$1; shift
  local ADDRESSES=$1; shift
  local SERVICES=$1 ; shift

  allow_passthrough "$INTERFACE" "$ADDRESSES" outgoing "$SERVICES" \
    "any" "3128,8080,8090"
}

allow_servers () {
  local INTERFACE=$1; shift
  local ADDRESSES=$1; shift
  local SERVICES=$1 ; shift

  allow_passthrough "$INTERFACE" "$ADDRESSES" incoming "$SERVICES" \
    "" "$PROXY_PORT"
}



allow_netgate () {
  local INT_IF=$1  ; shift
  local EXT_IF=$1  ; shift
  local PROTOCOL=$1; shift
  local INT_PORT=$1; shift
  local EXT_PORT=$1; shift
  local INT_ADDR=$1; shift
  local EXT_ADDR=$1; shift
  local TRANSPARENT_PROXY_PORT=$1; shift
  
  # procedure          | int_iface | ext_iface | protocol(s) | int_port(s) | ext_port(s) | int_addr(s) | ext_addr(s) | other | canstart
  filter_ACCEPT_FORWARD "$INT_IF"   "$EXT_IF"   "$PROTOCOL"   "$INT_PORT"   "$EXT_PORT"   "$INT_ADDR"   "$EXT_ADDR"   ""      outgoing

  # Masquerading the output to the Internet.
  # procedure | interface(s) | protocol(s) | src_port(s) | dest_port(s) | from_addr(s) | to_addr(s) | other
  nat_MASQ     $EXT_IF

  # Redirecting the HTTP port (80) to the Squid incoming port on $INT_IF.
    # procedure | interface(s) | protocol(s) | src_port(s) | dest_port(s) | from_addr(s) | to_addr(s) | other | to_port
  if ! [ -z "$TRANSPARENT_PROXY_PORT" ]; then
    nat_REDIRECT $INT_IF        ""            ""            "80"           ""             ""           ""      "$TRANSPARENT_PROXY_PORT"
  fi
  # Transparent proxying may require tuning also the proxy software.
  # For Squid 2.x, for example, you will have to add to squid.conf these lines:
  # httpd_accel_host		virtual
  # httpd_accel_port		80
  # httpd_accel_with_proxy	on
  # httpd_accel_uses_host_header	on
}


FORWARDPORT_eMule () {
  local EXT_IF=$1  ; shift
  local INT_IF=$1  ; shift
  local DESTADDR=$1; shift
  local TO_IP=$1   ; shift
  
#INP_IF=$EXT_IF
#OUT_IF=$INT_IF

#$IPTABLES -A FORWARD -i $INP_IF -o $OUT_IF -p tcp --dport 4662 -m state --state NEW,ESTABLISHED,RELATED -j ACCEPT
#$IPTABLES -A PREROUTING -t nat -p tcp -i $INP_IF --dport 4662 -j DNAT --to-destination 192.168.1.11:4662
#$IPTABLES -A FORWARD -i $INP_IF -o $OUT_IF -p udp --dport 4672 -m state --state NEW,ESTABLISHED,RELATED -j ACCEPT
#$IPTABLES -A PREROUTING -t nat -p udp -i $INP_IF --dport 4672 -j DNAT --to-destination 192.168.1.11:4672
 
  # procedure    | inp_iface(s) | out_iface(s) | protocol(s) | ourport | theirport | ouraddr | theiraddr | other | to_ip  | to_port
  nat_FORWARDPORT "$EXT_IF"      "$INT_IF"      "tcp"         "4662"     ""         ""        ""          ""      "$TO_IP" "4662"
  nat_FORWARDPORT "$EXT_IF"      "$INT_IF"      "udp"         "4672"     ""         ""        ""          ""      "$TO_IP" "4672"
}


# ---------------------------------------------------------------------------- #
# --                            Initialization                              -- #
# ---------------------------------------------------------------------------- #


# -----  System initialization  ----- #

# Exit codes.
BAD_FUNCTION_ARGUMENT=1

# Network zones.
NETWORK_WORLD=0.0.0.0/0		# IPv4 - The entire Internet.
NETWORK_RSVDA=10.0.0.0/8	# IPv4 - Intranet Reserved Diapazone A
NETWORK_RSVDB=172.16.0.0/12	# IPv4 - Intranet Reserved Diapazone B
NETWORK_RSVDC=192.168.0.0/16	# IPv4 - Intranet Reserver Diapazone C
NETWORK_RSVD_LOCAL=192.168.0.0/24  # A local diapazone invented by me :-)

# Main executable.
IPTABLES=/sbin/iptables
if ! [ "$($IPTABLES -V | grep "not found" -)" == "" ] ; then
  echo "Could not find iptables (not installed?) - quitting."
  exit
fi

# What to do:
#DO_IT_ACTION="write"		# just echoes the commands on /dev/stdout
DO_IT_ACTION="run"		# executes the commands immediately


# -----  Settings initialization  ----- #

# Proxy port, if proxy installed. If empty, script will assume there's no proxy.
PROXY_PORT=3128

# Interfaces. 
INT_IF=eth1
EXT_IF=eth0
#EXT_IF=ppp0
#EXT_IF=ppp+
#EXT_IF=eth0,ppp+

# Internal network/netmask.
INT_NETWORK=$NETWORK_RSVD_LOCAL

# IP from which support will be done through SSH:
#SUPPORT_IP=83.148.77.210


# ---------------------------------------------------------------------------- #
# --                               Execution                                -- #
# ---------------------------------------------------------------------------- #


# --------------------------  Basic preparation  ----------------------------- #

iptables__clear
set_filter_policy DROP
#set_filter_policy ACCEPT

 
# ------------------------- Configuring the loopback  ------------------------ #

# Allowing all connections to loopback (currently).
filter_ACCEPT_INOUT lo


# ----------------------------  Some blocking  ------------------------------- #

# forward proc  | target  | inp_if   | out_if   | protocol  | sendport | destport | fromaddr | toaddr   | other   | post_target | other_tcp 

# Forbids forwarding for .0.3. It can browse (you have proxy). It can resolve DNS (you have BIND). But nothing else (eg. cannot chat).
#filter_FORWARD  DROP      "$INT_IF"  "$EXT_IF"  ""          ""         ""         192.168.0.3 ""         ""        ""            ""

# Forbids forwarding for .0.3. for secure browsing (it cannot browse secure pages anymore).
#filter_FORWARD  DROP      "$INT_IF"  "$EXT_IF"  ""          ""         "https"    192.168.0.3 ""         ""        ""            ""

# input_proc    | target  | interface | protocol | sendport | destport     | remoteaddr | other

# Forbids the access for .0.3 to the web proxy (ie. the browsing - non-secure sites only!)
#filter_INPUT    DROP      "INT_IF"    ""         ""         "$PROXY_PORT"  192.168.0.3

# Forbids the access for .0.3 to the DNS resolving (ie. BIND)
#filter_INPUT    DROP      "INT_IF"    ""         ""         "domain"       192.168.0.3


# ------------------------ Configuring the interfaces  ----------------------- #


# Checking for address spoofind and stuffed routing. (Must be the first rules!)
# procedure          | target(s) | interface(s) | accept     | reject
#if ! [ -z "$INT_NETWORK" ]; then
#  filter_LIMIT_NETWORKS ""          $INT_IF        $INT_NETWORK ""
#  filter_LIMIT_NETWORKS ""          $EXT_IF        ""           $INT_NETWORK
#fi


# procedure  | interface(s) | address(es) | service(s)
allow_servers $EXT_IF        ""            ssh
allow_clients $EXT_IF        "!192.168.0.3"            icmp,traceroute,domain,ssh,ftp,www,email

#allow_servers $INT_IF        ""            icmp,traceroute,domain,ssh,ftp,www,email,win_net
#allow_clients $INT_IF        ""            icmp,traceroute,ssh,win_net
allow_servers $INT_IF        ""            all
allow_clients $INT_IF        ""            all

# procedure  | int_iface(s) | ext_iface(s) | protocol | int_port(s) | ext_port(s) | int_addr(s) | ext_addr(s) | transparent_proxy_port
allow_netgate $INT_IF        $EXT_IF        ""         ""            ""            ""            ""            $PROXY_PORT


# Port forwarding (must be before the filtering?):
# procedure      | ext_iface(s) | int_iface(s) | destaddr    | to_ip
# FORWARDPORT_eMule $EXT_IF        $INT_IF        83.148.77.210 192.168.1.11


# end of fw.sh
