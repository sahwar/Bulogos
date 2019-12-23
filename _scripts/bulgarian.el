;; SOURCE: 
;; http://web.archive.org/web/20100816125913/http://debian.fmi.uni-sofia.bg/~ogi/bulgarian.el
;; (originally archived from http://debian.fmi.uni-sofia.bg/~ogi/bulgarian.el )
;; Text encoding of this file: CP-1251 (Windows-1251), NOT Unicode UTF-8!!!
;; 
;; 
;; 

;;; bulgarian.el --- Input methods cyrillic-bulgarian-standard
;;; and cyrillic-bulgarian-phonetic.  Contains Bulgarian Standard and
;;; Bulgarian Phonetic language environments too.

;; Copyright (C) 2001,2003,2004 by Free Software Foundation, Inc.

;; Author: Ognyan Kulev <ogi@fmi.uni-sofia.bg>

;; This file is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 2, or (at your option)
;; any later version.

;; This file is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with GNU Emacs; see the file COPYING.  If not, write to
;; the Free Software Foundation, Inc., 59 Temple Place - Suite 330,
;; Boston, MA 02111-1307, USA.

;;; Commentary:
;;;
;;; INSTALLING
;;;
;;; Install this file on Emacs 21.1 for Windows NT in this way:
;;;
;;; 1. Copy `bulgarian.el' to `lisp/language'
;;; 2. Edit file `site-list/site-start.el' (or create it if it doesn't
;;;    exist).  Append the following lines:
;;;
;;;    (load "bulgarian.el")
;;;    (set-language-environment "Bulgarian-phonetic")
;;;    (set-selection-coding-system 'cp1251)
;;;
;;;    The last line specifies the default coding system used when
;;;    working with the clipboard.
;;;
;;; Installing on Linux is similar.
;;;
;;; Installing if you don't have rights to change Emacs 21.1
;;; distribution:
;;;
;;; 1. Copy `bulgarian.el' in your home directory.
;;; 2. Add the three lines to `.emacs' or `.emacs.el' depending on
;;;    what file you use for customization.
;;;
;;; USING
;;;
;;; Replace `Bulgarian-phonetic' with `Bulgarian-standard' if you use
;;; BDS, not phonetic keyboard.  Switch between cyrillic/latin letters
;;; with `C-\', that is handled by Emacs, not the X Window System, or
;;; M$ Windoze user interface.
;;;
;;; BUGS
;;;
;;; Some keys are not made capital when Caps Lock is activated.  The
;;; reason is that they convert keys like [{.  When you press [, you
;;; get normal SHT (in phonetic).  When you activate Caps Lock, you
;;; get normal SHT too because Emacs doesn't receive { but [.  These
;;; keys are listed in the documentation of the input methods.
;;;
;;; Notice that if you use (desktop-read), setting language environment
;;; should be before calling (desktop-read), so that files are loaded
;;; with Bulgarian coding system.  This applies to all functions that
;;; read files.

;;; History:
;;; 1.0 (2001-10-10)
;;;	Initial release.
;;; 1.1 (2002-02-19)
;;;	Added comments how to install this file.
;;; 1.2 (2003-07-07)
;;;	Documentation about letters that are not made capitals when
;;;	Caps Lock is activated.
;;; 1.3 (2004-04-30)
;;;	Note that setting lang.env. should be before loading files,
;;;	e.g. by (desktop-read)

;;; Code:

;; Input methods

(quail-define-package
 "cyrillic-bulgarian-standard" "Cyrillic" ",L61A(B" nil
 "Bulgarian standard keyboard layout (BDS)

This keyboard layout is standard for bulgarian typewriters.

The following letters are not automatically made capital when Caps
Lock is active.  You'll have to use Shift modifier.

I, V, ?, ), ,LF(B, ,L<(B, ,LG(B, ,L@(B, ,L;(B, ,L1(B."
 nil t t t t nil nil nil nil nil t)

;;  1! 2? 3+ 4" 5% 6= 7: 8/ 9_ 0,Lp(B -I .V
;;   ,,Lk(B ,LC(B  ,L5(B  ,L8(B  ,LH(B  ,LI(B  ,L:(B  ,LA(B  ,L4(B  ,L7(B  ,LF(B  ;,A'(B
;;    ,Ll(B  ,LO(B  ,L0(B  ,L>(B  ,L6(B  ,L3(B  ,LB(B  ,L=(B  ,L2(B  ,L<(B  ,LG(B  ()
;;     ,LN(B  ,L9(B  ,LJ(B  ,LM(B  ,LD(B  ,LE(B  ,L?(B  ,L@(B  ,L;(B  ,L1(B

(quail-define-rules

 ("1" ?1) ("!" ?!)
 ("2" ?2) ("@" ??)
 ("3" ?3) ("#" ?+)
 ("4" ?4) ("$" "\"")
 ("5" ?5) ("%" ?%)
 ("6" ?6) ("^" ?=)
 ("7" ?7) ("&" ?:)
 ("8" ?8) ("*" ?/)
 ("9" ?9) ("(" ?_)
 ("0" ?0) (")" ?,Lp(B)
 ("-" ?-) ("_" ?I)
 ("=" ?.) ("+" ?V)

 ("q" ?,) ("Q" ?,Lk(B)
 ("w" ?,Lc(B) ("W" ?,LC(B)
 ("e" ?,LU(B) ("E" ?,L5(B)
 ("r" ?,LX(B) ("R" ?,L8(B)
 ("t" ?,Lh(B) ("T" ?,LH(B)
 ("y" ?,Li(B) ("Y" ?,LI(B)
 ("u" ?,LZ(B) ("U" ?,L:(B)
 ("i" ?,La(B) ("I" ?,LA(B)
 ("o" ?,LT(B) ("O" ?,L4(B)
 ("p" ?,LW(B) ("P" ?,L7(B)
 ("[" ?,Lf(B) ("{" ?,LF(B)
 ("]" ";") ("}" ?,A'(B)

 ("a" ?,Ll(B) ("A" ?,LL(B)
 ("s" ?,Lo(B) ("S" ?,LO(B)
 ("d" ?,LP(B) ("D" ?,L0(B)
 ("f" ?,L^(B) ("F" ?,L>(B)
 ("g" ?,LV(B) ("G" ?,L6(B)
 ("h" ?,LS(B) ("H" ?,L3(B)
 ("j" ?,Lb(B) ("J" ?,LB(B)
 ("k" ?,L](B) ("K" ?,L=(B)
 ("l" ?,LR(B) ("L" ?,L2(B)
 (";" ?,L\(B) (":" ?,L<(B)
 ("'" ?,Lg(B) ("\"" ?,LG(B)
 ("`" ?() ("~" ?))

 ("z" ?,Ln(B) ("Z" ?,LN(B)
 ("x" ?,LY(B) ("X" ?,L9(B)
 ("c" ?,Lj(B) ("C" ?,LJ(B)
 ("v" ?,Lm(B) ("V" ?,LM(B)
 ("b" ?,Ld(B) ("B" ?,LD(B)
 ("n" ?,Le(B) ("N" ?,LE(B)
 ("m" ?,L_(B) ("M" ?,L?(B)
 ("," ?,L`(B) ("<" ?,L@(B)
 ("." ?,L[(B) (">" ?,L;(B)
 ("/" ?,LQ(B) ("?" ?,L1(B))

(quail-define-package
 "cyrillic-bulgarian-phonetic" "Cyrillic" ",L61D(B" nil
 "Bulgarian Phonetic keyboard layout

This keyboard layout is similar to cyrillic-translit, but
all bulgarian characters are typed with just one keyboard button.

The following letters are not automatically made capital when Caps
Lock is active.  You'll have to use Shift modifier.

,LH(B, ,LI(B, ,LG(B, ,LN(B."
 nil t t t t nil nil nil nil nil t)

;;   ,LO(B  ,L2(B  ,L5(B  ,L@(B  ,LB(B  ,LJ(B  ,LC(B  ,L8(B  ,L>(B  ,L?(B  ,LH(B  ,LI(B
;;    ,L0(B  ,LA(B  ,L4(B  ,LD(B  ,L3(B  ,LE(B  ,L9(B  ,L:(B  ,L;(B        ,LG(B
;;  ,LN(B  ,L7(B  ,LL(B  ,LF(B  ,L6(B  ,L1(B  ,L=(B  ,L<(B

(quail-define-rules

 
 ("q" ?,Lo(B) ("Q" ?,LO(B)
 ("w" ?,LR(B) ("W" ?,L2(B)
 ("e" ?,LU(B) ("E" ?,L5(B)
 ("r" ?,L`(B) ("R" ?,L@(B)
 ("t" ?,Lb(B) ("T" ?,LB(B)
 ("y" ?,Lj(B) ("Y" ?,LJ(B)
 ("u" ?,Lc(B) ("U" ?,LC(B)
 ("i" ?,LX(B) ("I" ?,L8(B)
 ("o" ?,L^(B) ("O" ?,L>(B)
 ("p" ?,L_(B) ("P" ?,L?(B)
 ("[" ?,Lh(B) ("{" ?,LH(B)
 ("]" ?,Li(B) ("}" ?,LI(B)

 ("a" ?,LP(B) ("A" ?,L0(B)
 ("s" ?,La(B) ("S" ?,LA(B)
 ("d" ?,LT(B) ("D" ?,L4(B)
 ("f" ?,Ld(B) ("F" ?,LD(B)
 ("g" ?,LS(B) ("G" ?,L3(B)
 ("h" ?,Le(B) ("H" ?,LE(B)
 ("j" ?,LY(B) ("J" ?,L9(B)
 ("k" ?,LZ(B) ("K" ?,L:(B)
 ("l" ?,L[(B) ("L" ?,L;(B)
 ("`" ?,Lg(B) ("~" ?,LG(B)

 ("\\" ?,Ln(B) ("|" ?,LN(B)
 ("z" ?,LW(B) ("Z" ?,L7(B)
 ("x" ?,Ll(B) ("X" ?,LL(B)
 ("c" ?,Lf(B) ("C" ?,LF(B)
 ("v" ?,LV(B) ("V" ?,L6(B)
 ("b" ?,LQ(B) ("B" ?,L1(B)
 ("n" ?,L](B) ("N" ?,L=(B)
 ("m" ?,L\(B) ("M" ?,L<(B))

;; Language environments

(require 'codepage)
(codepage-setup 1251)

(define-coding-system-alias 'windows-1251 'cp1251)

(set-language-info-alist
 "Bulgarian-standard"
 '((charset cyrillic-iso8859-5)
   (coding-system windows-1251)
   (coding-priority windows-1251)
   (input-method . "cyrillic-bulgarian-standard")
   (documentation . "Bulgarian environment with standard (BDS) keyboard"))
 '("Cyrillic"))

(set-language-info-alist
 "Bulgarian-phonetic"
 '((charset cyrillic-iso8859-5)
   (coding-system windows-1251)
   (coding-priority windows-1251)
   (input-method . "cyrillic-bulgarian-phonetic")
   (documentation . "Bulgarian environment with phonetic keyboard"))
 '("Cyrillic"))

;;; bulgarian.el ends here

;; Local Variables:
;; buffer-file-coding-system: iso-2022-7bit
;; End: