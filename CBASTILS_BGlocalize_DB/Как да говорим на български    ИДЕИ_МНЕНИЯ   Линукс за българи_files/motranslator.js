//
//  This script was created
//  by Mircho Mirev
//  mo /mo@momche.net/
//
//	:: feel free to use it for non-commercial use BUT
//	:: if you want to use this code PLEASE send me a note
//	:: and please keep this disclaimer intact
//

//translation routines

//just the same as EN but added as a feature requested by Slavej
var cOffLang =
{
	sName : 'OFF',
	sDName : 'OFF', //display name
	sMap : '',
	sRData : ''
}

var cCyrPho =
{
	sName : 'Bulgarian Cyrillc Phonetic',
	sDName : 'PHO', //display name
	sMap : 'aAbBwWgGdDeEvVzZiIjJkKlLmMnNoOpPrRsStTuUfFhHcC`~[{]}yYxX\\|qQ',
	sRData : 'àÀáÁâÂãÃäÄåÅæÆçÇèÈéÉêÊëËìÌíÍîÎïÏðÐñÑòÒóÓôÔõÕöÖ÷×øØùÙúÚüÜþÞÿß'
}

var cCyrBds =
{
	sName : 'Bulgarian Cyrillc',
	sDName : 'BDS', //display name
	sMap : 'dD/?lLhHoOeEgGpPrRxXuU.>;:kKfFmM,<iIjJwWbBnN[{\'"tTyYcCaAzZsSvVqQ]}@#$^&*()_+`~=',
	sRData : 'àÀáÁâÂãÃäÄåÅæÆçÇèÈéÉêÊëËìÌíÍîÎïÏðÐñÑòÒóÓôÔõÕöÖ÷×øØùÙúÚüÜþÞÿßýÝ,Û;§?+"=:/-#|V)(.'
}

var cTranslator = 
{
	bDisabled : false,
	sGlobalLangID : cOffLang.sDName,
	bHelp : true,
	hCurrentLang : '',
	hCurrentInput : null,
	aLanguages : [],
	onSwitchLang : null
}

cTranslator.registerLang = function( hLang )
{
	this.aLanguages[ hLang.sDName ] = hLang
}

cTranslator.registerLang( cOffLang )
cTranslator.registerLang( cCyrPho )
cTranslator.registerLang( cCyrBds )

cTranslator.switchLang = function( sLang )
{
	if( typeof ( this.aLanguages[ sLang ] ) != 'undefined' )
	{
		this.hCurrentLang = this.aLanguages[ sLang ]
	}
	if( this.onSwitchLang != null )
	{
		this.onSwitchLang( sLang )
	}
	if( typeof CookieManager != 'undefined' )
	{
		CookieManager.setCookie( 'molang', sLang, 1 )
	}
}

cTranslator.getNextLang = function( sCL )
{
	var bFound = false
	for( sKey in this.aLanguages  )
	{
		if( bFound )
		{
			return sKey
		}
		if( sCL == sKey )
		{
			bFound = true
		}
	}
	if( bFound )
	{
		return cOffLang.sDName
	}
}

cTranslator.toggleLang = function( hElement )
{
	var sNewLangID = ''
	if( typeof hElement == 'undefined' || hElement == null )
	{
		sNewLangID = this.getNextLang( this.sGlobalLangID )
		this.sGlobalLangID = sNewLangID
	}
	else
	{
		var sLangAtt = hElement.getAttribute( 'MOLANG' )
		if( sLangAtt != 'DEFAULT' )
		{
			sNewLangID = this.getNextLang( sLangAtt )
			hElement.setAttribute( 'MOLANG', sNewLangID )
		}
		else
		{
			sNewLangID = this.getNextLang( this.sGlobalLangID )
			this.sGlobalLangID = sNewLangID
		}
		hElement.focus()
	}
	this.switchLang( sNewLangID )
}

cTranslator.initLanguage = function( hEvent )
{
 	if( hEvent == null ) hEvent = window.event
	hElement = ( hEvent.srcElement ) ? hEvent.srcElement : hEvent.originalTarget 
	cTranslator.hCurrentInput = hElement
	var sLangAtt = hElement.getAttribute( 'MOLANG' )
	if( sLangAtt != 'DEFAULT' )
	{
		cTranslator.switchLang( hElement.getAttribute( 'MOLANG' ) )
	}
	else
	{
		cTranslator.switchLang( cTranslator.sGlobalLangID )
	}
	return true
}

cTranslator.processKey = function( hEvent )
{
	if( hEvent == null ) hEvent = window.event
	hElement = ( hEvent.srcElement ) ? hEvent.srcElement : hEvent.originalTarget 
	var nCode = hEvent.keyCode ? hEvent.keyCode : hEvent.charCode ? hEvent.charCode : hEvent.which ? hEvent.which : void 0;
	if( ( hEvent.charCode != null ) && ( hEvent.charCode != nCode ) )
	{
		return
	}
	var sCode = String.fromCharCode( nCode )
	var nPos = cTranslator.hCurrentLang.sMap.indexOf( sCode )
	if( nPos >= 0 && !hEvent.ctrlKey && !hEvent.altKey )
	{
		sRep = cTranslator.hCurrentLang.sRData.charAt( nPos )
		if( window.event ) //we have IE
		{
			window.event.keyCode = sRep.charCodeAt()
		}
		else //no we have some kind of moz
		{
			//https://bugzilla.mozilla.org/show_bug.cgi?id=289940
			if( this.ffVer < 1.5 && this.firefoxVersion != '1.0.6' && this.firefoxVersion != '1.0.5' )
			{
				if( window.KeyEvent ) 
				{
					var hE = document.createEvent( 'KeyEvents' )
					hE.initKeyEvent( 'keypress', true, true, document.defaultView, hEvent.ctrlKey, hEvent.altKey, hEvent.shiftKey, hEvent.metaKey, 1, sRep.charCodeAt() )
				} 
				else
				{
					var hE = document.createEvent( 'UIEvents' )
					hE.initUIEvent( 'keypress', true, true, document.defaultView, 1 )
					hE.keyCode = sRep.charCodeAt()
				}
				hE.preventDefault()
				hElement.dispatchEvent( hE )
			}
			else
			{
				var nScrollTop = hElement.scrollTop
				var nScrollLeft = hElement.scrollLeft
				var nScrollWidth = hElement.scrollWidth
				var nScrollHeight = hElement.scrollHeight
				var nSelectionStart = hElement.selectionStart
				cTranslator.replaceSelection( hElement, sRep )
				var nW = hElement.scrollWidth - nScrollWidth
				var nH = hElement.scrollHeight - nScrollHeight
				
				if( hElement.scrollTop == 0 )
				{
					/*
					if ( hElement.selectionStart || hElement.selectionStart == 0 )
					{
						var startPos = hElement.selectionStart
					}
					*/
					hElement.scrollTop = nScrollTop + nH
				}
				
				hElement.selectionStart = nSelectionStart + sRep.length;
				hElement.selectionEnd = nSelectionStart + sRep.length;

				/*
				if( hElement.scrollLeft == 0 )
				{
					hElement.scrollLeft =  nScrollLeft + nW
				}
				*/
			}
		}
		if( hEvent.preventDefault )
		{
			hEvent.preventDefault()
		}
	}
	hEvent.returnValue = true
	return true
}

cTranslator.install = function( hElement )
{
	if( document.attachEvent ) 
	{
		hElement.attachEvent( 'onfocus', cTranslator.initLanguage )
		hElement.attachEvent( 'onkeypress', cTranslator.processKey )
	}
	else if( document.addEventListener )
	{
		hElement.addEventListener( 'focus', cTranslator.initLanguage, false )
		hElement.addEventListener( 'keypress', cTranslator.processKey, false )
	}
}

cTranslator.init = function()
{
	var nI = 0
	var aInputs = document.getElementsByTagName( 'INPUT' )
	for( var nI = 0; nI < aInputs.length; nI ++ )
	{
		if( aInputs[ nI ].type.toLowerCase() == 'text' )
		{
		 	var sLangAtt = aInputs[ nI ].getAttribute( 'MOLANG' )
			if( sLangAtt )
			{
				cTranslator.install( aInputs[ nI ] )
			}
		}
	}
	var aTextAreas = document.getElementsByTagName( 'TEXTAREA' )
	for( var nI = 0; nI < aTextAreas.length; nI ++ )
	{
	 	var sLangAtt = aTextAreas[ nI ].getAttribute( 'MOLANG' )
		if( sLangAtt )
		{
			cTranslator.install( aTextAreas[ nI ] )
		}
	}
	
	if( typeof CookieManager != 'undefined' )
	{
		var sLang = CookieManager.getCookie( 'molang' )
	}
	if( sLang != null )
	{
		this.sGlobalLangID = sLang
	}
	this.switchLang( this.sGlobalLangID )
	
	var hFireFoxVer =  new RegExp( 'Firefox/([0-9\.]*)', 'ig' )
	hFireFoxVer.exec( navigator.userAgent )
	this.firefoxVersion = RegExp.$1
	this.ffVer = parseFloat( RegExp.$1 )
}

//replace incoming characters

//the functions used to translate
cTranslator.setSelectionRange = function( input, selectionStart, selectionEnd ) 
{
	if ( input.setSelectionRange )
	{
		input.focus()
		input.setSelectionRange(selectionStart, selectionEnd)
	}
	else if ( input.createTextRange )
	{
		var range = input.createTextRange()
		range.collapse(true)
		range.moveEnd('character', selectionEnd)
		range.moveStart('character', selectionStart)
		range.select()
	}
}

//mozilla only
cTranslator.replaceSelection = function( input, replaceString ) 
{
	if ( input.setSelectionRange )
	{
		var selectionStart = input.selectionStart
		var selectionEnd = input.selectionEnd
		input.value = 	input.value.substring(0, selectionStart)
						+ replaceString
						+ input.value.substring(selectionEnd)
		cTranslator.setSelectionRange(input, selectionStart + replaceString.length, selectionStart + replaceString.length)
	} 
}

//attach to onload event
cTranslator.onKeySwitch = function( hEvent )
{
   if( hEvent == null ) hEvent = window.event
   var nCode = hEvent.keyCode ? hEvent.keyCode : hEvent.charCode ? hEvent.charCode : hEvent.which ? hEvent.which : void 0;
   if( hEvent.shiftKey && hEvent.ctrlKey && ( nCode == 16 || nCode == 17 ) )
   {
	   cTranslator.hKeySwitchTimeout = setTimeout( "cTranslator.doKeySwitch()", 500 )
   }
   else
   {
   		clearTimeout( cTranslator.hKeySwitchTimeout )
   }
}

cTranslator.onKeyUp = function( hEvent )
{
	if( hEvent == null ) hEvent = window.event
	var nCode = hEvent.keyCode ? hEvent.keyCode : hEvent.charCode ? hEvent.charCode : hEvent.which ? hEvent.which : void 0;
	if( nCode == 0 )
	{
		clearTimeout( cTranslator.hKeySwitchTimeout )
	}
}

cTranslator.doKeySwitch = function()
{
      cTranslator.toggleLang( cTranslator.hCurrentInput )
}


cTranslator.onLoad = function()
{
	if( cTranslator.bDisabled ) 
	{
		return
	}
	cTranslator.onSwitchLang = cTranslator.displayLanguage
	
	cTranslator.init()

	var hLink = document.getElementById( 'langLink' )
	if( hLink != null )
	{
		hLink.onclick = new Function( "cTranslator.toggleLang( cTranslator.hCurrentInput ); return false" )
		
		var hHelpLink = document.getElementById( 'langHelpLink' )
		if( hHelpLink != null )
		{
			hHelpLink.href = "http://momche.net/redir.php?page=inputlocalehelp"
		}
	}

	if( document.attachEvent )
	{
	   document.attachEvent( 'onkeydown', cTranslator.onKeySwitch )
	   document.attachEvent( 'onkeyup', cTranslator.onKeyUp )
	}
	else if( document.addEventListener )
	{
	   document.addEventListener( 'keydown', cTranslator.onKeySwitch, false )
	   document.addEventListener( 'keyup', cTranslator.onKeyUp, false )
	}

}

cTranslator.displayLanguage = function( sLang )
{
	var hLink = document.getElementById( 'langLink' )
	if( hLink != null )
	{
		hLink.innerHTML = sLang
	}
}

if( window.attachEvent )
{
	window.attachEvent( 'onload', cTranslator.onLoad )
}
else if( window.addEventListener )
{
	window.addEventListener( 'load', cTranslator.onLoad, false )
}

