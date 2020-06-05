(function ($) {
    "use strict";

    var headerElem = $('.site-header');
    var headerSpacerElem = undefined;
    var headerFloatTop = 0;

    var footerElem = $('.site-footer');
    var footerFloatFromElem = $('.cc-footer-float-from');
    var footerSpacerElem = undefined;
    var footerFloatTop = undefined;

    // Clone the header ot create an invisible spacer element.
    // The order we place these elements is important: some JavaScript in the
    // twentysixteen base theme will only apply to the first header.
    headerSpacerElem = headerElem.clone().attr('id', null).addClass('spacer');
    headerSpacerElem.removeClass('sticky-nav-main');
    headerSpacerElem.insertAfter(headerElem);
    headerElem.addClass('sticky attached');

    if (footerFloatFromElem.length == 0 && $(document.body).hasClass('infinite-scroll')) {
        // Automatic sticky footer for Jetpack's infinite scroll pages.
        var mainElem = $('#main');
        footerFloatFromElem = $('<div>').addClass('cc-footer-float-from').appendTo(main);
    }

    if (footerFloatFromElem.length > 0) {
        footerSpacerElem = footerElem.clone().attr('id', null).addClass('spacer');
        footerSpacerElem.removeClass('sticky-nav-main');
        footerSpacerElem.insertAfter(footerElem);
        footerElem.addClass('sticky attached');
    }

    var reflow = function(elem) {
        if (elem.length > 0) elem[0].offsetTop;
    };

    var updateSticky = function(stickyElem, spacerElem, options) {
        var detached = options['detached'];
        var reveal = options['reveal'];
        var hide = options['hide'];

        if (detached === true) {
            if (reveal === true) {
                stickyElem.removeClass('offscreen');
            } else if (hide !== false) {
                stickyElem.addClass('offscreen');
            }
            stickyElem.addClass('detached');
            spacerElem.addClass('detached');
            // Force a reflow before removing the attached class. This way the
            // CSS transition for .sticky.detached will be skipped.
            reflow(stickyElem);
            stickyElem.removeClass('attached');
        } else {
            stickyElem.addClass('attached');
            stickyElem.removeClass('detached offscreen');
            spacerElem.removeClass('detached');
        }
    };

    var onScrollCb = function(e, params) {
        // Show header if scrolling up past bottom of site-header, or initial page load.
        var headerFloatTop = headerSpacerElem.offset().top + headerSpacerElem.height(),
            headerFloatOffset = headerElem.hasClass('detached') ? -headerElem.height() : 0;
        updateSticky(headerElem, headerSpacerElem, {
            detached: params['top'] > headerFloatTop + headerFloatOffset,
            reveal: params['velocity'] < -20,
            hide: params['velocity'] > 0
        });

        if (footerFloatFromElem.length > 0) {
            // Show footer if scrolling past cc-footer-float-from.
            // The footer element is detached if the document is taller than the window.
            var footerHeight = footerSpacerElem.outerHeight(),
                footerFloatTop = footerFloatFromElem.offset().top + footerHeight,
                footerBottom = footerSpacerElem.offset().top + footerHeight;
            updateSticky(footerElem, footerSpacerElem, {
                detached: footerBottom > $(window).height(),
                reveal: params['bottom'] >= footerFloatTop || params['bumpBottom']
            });
        }
    };

    $(document).on('cc-scroll', onScrollCb);

    // Detect clicks outside of mobile navigation
    var $mobileNav = $('#mobile-navigation');
    $('body').on('click', function(e) {
        if ($mobileNav.is(':visible')) {
            if(($(e.target).attr('id') != 'menu-toggle' && $(e.target).parent().attr('id') != 'menu-toggle') && ($(e.target).parents('#mobile-navigation').length == 0)) {
                $('#menu-toggle').click();
                return false;
            }
        }
    });
})(jQuery);
