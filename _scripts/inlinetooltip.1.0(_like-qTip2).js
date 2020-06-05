/*!

https://gist.github.com/nickolasreynolds/9305934
https://gist.github.com/sahwar/ee1f23f53288befae4a9

    Simple Inline Tooltips v1.0
    http://www.infinitegyre.com/2014/03/simple-inline-tooltips.html

    Copyright (c) 2014 Nickolas Reynolds
    Released under the MIT license

    Based on Footnotes by Lukas Mathis
    http://ignorethecode.net/blog/2010/04/20/footnotes/

*/

/*

    DESCRIPTION
	
        This script allows you to attach custom tooltips to text (or any
        HTML element), inline and with almost no configuration whatsoever.

    HOW TO USE

        <span>
            Tooltip trigger
            <div class="iltt">Tooltip contents</div>
        </span>

    DEPENDENCIES

        jQuery 1.7 or later
        inlinetooltip.css (optional)

    FAQS

    ? Can I change the span to a div, or the div to a span ?

      * Yes, feel free to use span or div for either container.

    ? Can I edit the style or other css attributes of the containers ?

      * Yes, you can add whatever css attributes and styles you want, EXCEPT:

        - The container for the tooltip contents ONLY must have the
          "iltt" (InLineToolTip) css class. No other elements should
          have the "iltt" class.
        - The css id for BOTH containers is used internally. Anything
          you put in there will be overwritten.
        - The css data attribute "data-linkid" is used internally for
          BOTH containers, and its existence or nonexistence drives
          some internal logic. Don't use it at all!
  
    ? Do the tooltip trigger and tooltip contents have to be text ?

      * No, feel free to use links, images, entire other spans or divs,
        or pretty much anything that doesn't care about its exact location
        in the DOM tree.

    ? Can I put a tooltip within a tooltip ?

      * Yes, but be very careful to wrap everything correctly:

        <span>
            Tooltip trigger
            <div class="iltt">Tooltip contents with 
                <span>
                    another tooltip trigger
                    <div class="iltt">Second tooltip contents</div>
                </span>
            </div>
        </span>

*/

$( document ).ready( function() {

    iltt.initialize( $( document ) );

    // Track mouse movement for the tooltip positioning logic:

    $( document ).mousemove( function( event ) {

        iltt.mousex = event.pageX;
        iltt.mousey = event.pageY;

    } );
	
} );

var iltt = {

    stickiness: 150,    // Number of ms to wait before starting to fade
    fadetime: 150,      // Duration of the fade animation in ms
    opacity: 1.0,       // Default opacity of the tooltip

    timeouts: {},
    mousex: 0,
    mousey: 0,
    id: 0,

    initialize: function( scope ) {

        // Within the given scope, select the parents of all elements with css
        // class "iltt" (and not "ilttinitialized"):

        var containers = scope.find( ".iltt" ).not( ".ilttinitialized" ).parent();

        // For each of those parent containers ...

        containers.each( function( index, container ) {

            // ... identify the corresponding tooltip container:

            var tooltip = $( container ).children( ".iltt" );

            // Unbind any existing mouseenter and mouseleave events, then bind
            // custom ones:

            $( container ).off( "mouseenter" ).mouseenter( iltt.mouseenter );
            $( container ).off( "mouseleave" ).mouseleave( iltt.mouseleave );
            tooltip.off( "mouseenter" ).mouseenter( iltt.entertooltip );
            tooltip.off( "mouseleave" ).mouseleave( iltt.leavetooltip );

            // Take the current iltt.id and assign corresponding "parent" and
            // "child" css ids:

            $( container ).attr( "id", "iltt_parent" + iltt.id );
            tooltip.attr( "id", "iltt_child" + iltt.id );

            // Assign identical data-linkid attributes:

            $( container ).data( "linkid", iltt.id );
            tooltip.data( "linkid", iltt.id );

            // When the parent (the trigger) wordwraps, css-reported position
            // attributes are not very useful, making positioning the tooltip
            // somewhat difficult. Let's just disallow it:

            $( container ).css( "white-space", "nowrap" );

            // Whether using mouseover/mouseout, or mouseenter/mouseleave (this
            // script uses the latter), the events trigger (or fail to trigger)
            // in not-so-useful ways when dealing with elements that are nested
            // together in the DOM tree.
            //
            // To get around that the tooltip is simply moved to the end of the
            // document body. (Which means it's no longer nested in the parent
            // container which holds the trigger.)

            tooltip.appendTo( document.body );

            // Make sure the tooltip is hidden and has opacity 0. Some logic
            // elsewhere in the script uses opacity as a proxy to tell whether
            // or not the tooltip is currently hidden, so don't remove this.

            tooltip.hide();
            tooltip.css( { opacity: 0 } );

            // Add a css class to the tooltip to indicate that it's been
            // initialized. This will prevent the script from trying to process
            // it again later, say, if another script dynamically generates a
            // new tooltip and then reruns iltt.initialize.

            tooltip.addClass( "ilttinitialized" );

            // Lastly, increment iltt.id so no other trigger/tooltip pair can
            // have this one:

            iltt.id += 1;

        } );

    },

    // Mouse over a trigger:

    mouseenter: function() {

        var linkid = $( this ).data( "linkid" );
        var tooltip = $( "#iltt_child" + linkid );		

        // If the trigger's corresponding tooltip has nonzero opacity,
        // it's already positioned and showing ...

        if( tooltip.css( "opacity" ) != 0 ) {

            // ... though it may be fading, so unfade it:

            iltt.unfade( linkid );

            // And exit the entire function:

            return;

        }

        // Css-reported position attributes will be undefined (or worse)
        // if the tooltip isn't first positioned and shown. Keep this
        // stuff before the repositioning code:

        tooltip.css( { position: "absolute", opacity: iltt.opacity } );
        tooltip.offset( { left: 0, top: 0 } );
        tooltip.show();

        // What follows is a bunch of tests to check whether the tooltip
        // fits within the browser viewport. If not, different positions
        // are tried sequentially until one is found that fits. If none
        // of them fit, the tooltip defaults to being positioned below
        // below its parent (the trigger), left-aligned.

        var p_top = $( this ).offset().top;         // Parent top
        var p_left = $( this ).offset().left;       // Parent left
        var p_width = $( this ).outerWidth();       // Parent width
        var p_height = $( this ).outerHeight();     // Parent height

        var w_width = $( window ).width();          // Window (viewport) width
        var w_height = $( window ).height();        // Window (viewport) height
        var v_scroll = $( window ).scrollTop();     // Vertical scroll
        var h_scroll = $( window ).scrollLeft();    // Horizontal scroll

        var top = 0;                                // Tooltip top
        var left = 0;                               // Tooltip left
        var width = tooltip.outerWidth();           // Tooltip width
        var height = tooltip.outerHeight();         // Tooltip height

        // Position the tooltip under its parent, left-aligned.

        left = p_left;
        top = p_top + p_height;

        // If the tooltip extends past the right edge of the viewport
        // boundary, slide it left.
	
        if( left + width > w_width + h_scroll ) {

            left = w_width + h_scroll - width;

        }
	
        // If the tooltip extends past the left edge of the viewport
        // boundary, slide it right. (This might cause the right side
        // to extend past the viewport again, but if it's one or the
        // other, bringing the left side of the tooltip within view is
        // more important.)
	
        if( left < h_scroll ) {
	
            left = h_scroll;

        }

        // If the tooltip extends past the bottom edge of the viewport
        // boundary, flip it above its parent.
	
        if( top + height > w_height + v_scroll ) {

            top = p_top - height;

        }
	
        // If the tooltip extends past the top edge of the viewport
        // boundary, move it to the immediate right of its parent
        // and vertically center it.
	
        if( top < v_scroll ) {

            left = p_left + p_width;
            top = v_scroll + ( w_height - height ) / 2;

        }
	
        // If the tooltip extends past the right edge of the viewport
        // boundary, flip it to the left side of its parent and 
        // vertically center it.
	
        if( left + width > w_width + h_scroll ) {
	
            left = p_left - width;
            top = v_scroll + ( w_height - height ) / 2;

        }
	
        // If the tooltip extends past the left edge of the viewport
        // boundary, move it to just right of the mouse cursor and
        // vertically center it.
	
        if( left < h_scroll ) {

            left = iltt.mousex + 9;
            top = v_scroll + ( w_height - height ) / 2;

        }
	
        // If the tooltip extends past the right edge of the viewport
        // boundary, move it to just left of the mouse cursor and
        // vertically center it.
	
        if( left + width > w_width + h_scroll ) {
	
            left = iltt.mousex - width - 9;
            top = v_scroll + ( w_height - height ) / 2;

        }

        // If the tooltip extends past the left edge of the viewport
        // boundary, give up and reposition it back under under its
        // parent, left-aligned.
	
        if( left < h_scroll ) {

            left = p_left;
            top = p_top + p_height;
	
        }

        // Lock in the final position:

//                              ˅˅˅˅-------˅˅˅--- variables manipulated above
        tooltip.offset( { left: left, top: top } );
//                        ˄˄˄˄--------˄˄˄--- css attributes

    },

    // Mouse out a trigger:

    mouseleave: function() {

        // Grab the trigger's linkid:

        var linkid = $( this ).data( "linkid" );

        // Fade the corresponding tooltip:

        iltt.fade( linkid );

    },

    // Mouse over a tooltip:

    entertooltip: function() {

        // Grab the tooltip's linkid:

        var linkid = $( this ).data( "linkid" );

        while( typeof linkid != "undefined" ) {

            // Unfade the current tooltip:

            iltt.unfade( linkid );

            // Grab the linkid of the grandparent. If the grandparent doesn't
            // have one (it's undefined), the while loop will terminate. Else,
            // keep traversing back through ancestors with linkids, unfading
            // them all. (Thus hovering your mouse over the last in a long
            // chain of nested tooltips will keep them all alive.)

            linkid = $( "#iltt_parent" + linkid ).parent().data( "linkid" );

        }
	
    },

    // Mouse out a tooltip:
    
    leavetooltip: function() {

        // Grab the tooltip's linkid:

        var linkid = $( this ).data( "linkid" );

        while( typeof linkid != "undefined" ) {

            // Fade the current tooltip:

            iltt.fade( linkid );

            // Same idea as before, find the next tooltip ancestor and loop:

            linkid = $( "#iltt_parent" + linkid ).parent().data( "linkid" );

        }

    },
	
    // Fade a tooltip. I advise against moving this code outside of its own
    // function unless you are familiar with JavaScript closures.

    fade: function( linkid ) {

        // Set a timeout that, after iltt.stickiness milliseconds, will animate
        // the tooltip's opacity down to 0 over iltt.fadetime milliseconds. At
        // the end of the animation, hide the tooltip.

        iltt.timeouts[ linkid ] = setTimeout( function () {

            $( "#iltt_child" + linkid ).animate( { opacity: 0 }, iltt.fadetime, function() {

                $( "#iltt_child" + linkid ).hide();
			
            } );

        }, iltt.stickiness );

    },

    // Unfade a tooltip:

    unfade: function( linkid ) {

        $( "#iltt_child" + linkid ).stop();                             // Stop fade animation
        clearTimeout( iltt.timeouts[ linkid ] );                        // Clear setTimeout
        $( "#iltt_child" + linkid ).css( { opacity: iltt.opacity } );   // Restore opacity

    }

};