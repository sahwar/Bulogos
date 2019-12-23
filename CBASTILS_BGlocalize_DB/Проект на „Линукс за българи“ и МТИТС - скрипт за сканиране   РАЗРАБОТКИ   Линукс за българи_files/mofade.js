//
//  This script was created
//  by Mircho Mirev
//  mo /mo@momche.net/
//
//	:: feel free to use it BUT
//	:: if you want to use this code PLEASE send me a note
//	:: and please keep this disclaimer intact
//
cFader = {
	speed	: 20,
	steps	: 8,
	active	: 0,

	startc	: 0,
	endc	: 0,
	
	startr	: 0,
	startg	: 0,
	startb	: 0,
	endr	: 0,
	endg	: 0,
	endb	: 0,
	
	alllinks	: true,
	
	startColor	: '#003399',
	endColor	: '#0099ff'
}

cFader.colorToNumber = function( sColor )
{
	sRCol = /^#/
	return parseInt( '0x'+sColor.replace( sRCol, '' ) )
}

cFader.numberToColor = function( nColor )
{
	nColor |= 1<<24
	return '#'+nColor.toString(16).substr(1)
}

cFader.init = function( element )
{
	sSC = element.getAttribute( 'mosc' )
	if( sSC != null && sSC.length != 0 ) SC = sSC
	else SC = this.startColor
	sEC = element.getAttribute( 'moec' )
	if( sEC != null && sEC.length != 0 ) EC = sEC
	else EC = this.endColor

	with (this)
	{
		startc = colorToNumber( SC )
		endc = colorToNumber( EC )

		startr = (startc & 0xff0000) >>> 16
		startg = (startc & 0x00ff00) >>> 8
		startb = (startc & 0x0000ff)
		
		endr = (endc & 0xff0000) >>> 16
		endg = (endc & 0x00ff00) >>> 8
		endb = (endc & 0x0000ff)
	}
}

cFader.fadeIn = function( element )
{
	this.init( element )
	elName = 'cFaderActive'+(this.active++)
	eval( 'this.'+elName+'=element' )
	for( step = 0; step <= this.steps; step++ )
	{
		with( this )
		{
			nColorR = startr*((steps-step)/steps)+endr*(step/steps)
			nColorG = startg*((steps-step)/steps)+endg*(step/steps)
			nColorB = startb*((steps-step)/steps)+endb*(step/steps)
			nColor = startr*((steps-step)/steps)+endr*(step/steps) << 16 | startg*((steps-step)/steps)+endg*(step/steps) << 8 | startb*((steps-step)/steps)+endb*(step/steps)
		}
		sColor = this.numberToColor( nColor )
		//sColor = 'rgb('+nColorR+','+nColorG+','+nColorB+')'
		setTimeout('cFader.doFade("'+elName+'", "'+sColor+'")', this.speed*(step+1))
	}
	setTimeout( 'cFader.clearRef("'+elName+'")', this.steps*2*this.speed ) 
}

cFader.fadeOut = function( element )
{
	this.init( element )
	elName = 'cFaderActive'+(this.active++)
	eval( 'this.'+elName+'=element' )
	for( step = 0; step <= this.steps; step++ )
	{
		with( this )
		{
			nColorR = endr*((steps-step)/steps)+startr*(step/steps)
			nColorG = endg*((steps-step)/steps)+startg*(step/steps)
			nColorB = endb*((steps-step)/steps)+startb*(step/steps)
			nColor = endr*((steps-step)/steps)+startr*(step/steps) << 16 | endg*((steps-step)/steps)+startg*(step/steps) << 8 | endb*((steps-step)/steps)+startb*(step/steps)
		}
		sColor = this.numberToColor( nColor )
		//sColor = 'rgb('+nColorR+','+nColorG+','+nColorB+')'
		setTimeout('cFader.doFade("'+elName+'", "'+sColor+'")', this.speed*(step+1))
	}
	setTimeout( 'cFader.clearRef("'+elName+'")', this.steps*2*this.speed ) 
}

cFader.doFade = function( elName, sColor )
{
	element = eval( 'this.'+elName )
	sFType = element.getAttribute( 'mofade' )
	if( ( sFType == null ) || ( sFType == '' ) || ( sFType == 'fg' ) )
	{
		element.style.color = sColor
	}
	else if( sFType == 'bg' )
	{
		element.style.backgroundColor = sColor
	}
}

cFader.clearRef = function( elName )
{
	element = eval( 'this.'+elName+'=null' )
}

//get real element that originated the event
function getReal( e )
{
	hElement = ( e.srcElement ) ? e.srcElement : e.originalTarget
	if( hElement == null )
	{
		return null
	} 
	try
	{
		while( ( hElement.tagName ) && !( /(body|html)/i.test( hElement.tagName ) ) )
		{
			sAttr = hElement.getAttribute( 'mofade' )
			if ( sAttr != null && sAttr != '' )
			{
				return hElement
			}
			else if( cFader.alllinks )
			{
				if( hElement.tagName.toLowerCase() == 'a' )
				{
					return hElement
				}
			}
			hElement = hElement.parentNode
		} 
	}
	catch( hException )
	{
	}
	return null
}


//activation
function fadeMouseOver( e )
{
	if( !e ) e = window.event
	element = getReal( e )
	if( element != null ) cFader.fadeIn( element )
}

//deactivation
function fadeMouseOut( e )
{
	if( !e ) e = window.event
	element = getReal( e )
	if( element != null ) cFader.fadeOut( element )
}


if( document.attachEvent ) 
{
	document.attachEvent( 'onmouseover', fadeMouseOver )
	document.attachEvent( 'onmouseout', fadeMouseOut )
}
else if( document.addEventListener )
{
	document.addEventListener( 'mouseover', fadeMouseOver, true )
	document.addEventListener( 'mouseout', fadeMouseOut, true )
}
else if( document.all )
{
	document.onmouseover = fadeMouseOver
	document.onmouseout = fadeMouseOut
}