(function ($) {
    "use strict";

    var onScrollTimeout = undefined;
    var onFinishedScrollingTimeout = undefined;
    var scrollDeltaBuffer = [];
    var SCROLL_DELTA_BUFFER_SIZE = 5;
    var lastScrollTop = undefined;

    var arrayAverage = function(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return array.length > 0 ? sum / array.length : 0;
    };

    var onFinishedScrollingCb = function() {
        scrollDeltaBuffer = [];
        onFinishedScrollingTimeout = false;
        return false;
    };

    var onScrollTimeoutCb = function(_isInitial) {
        if (_isInitial && lastScrollTop !== undefined) return;

        var scrollTop = $(window).scrollTop();
        var scrollBottom = scrollTop + $(window).height();
        var scrollVelocity = undefined;

        if (lastScrollTop !== undefined) {
            if (scrollDeltaBuffer.push(scrollTop - lastScrollTop) > SCROLL_DELTA_BUFFER_SIZE) {
                scrollDeltaBuffer.shift();
            }
            scrollVelocity = arrayAverage(scrollDeltaBuffer);
        }

        var eventParams = {
            'top': scrollTop,
            'bottom': scrollBottom,
            'velocity': scrollVelocity,
            'bumpTop': scrollTop == 0,
            'bumpBottom': scrollBottom == $(document).height(),
            'ignoreVelocity': _isInitial || lastScrollTop === undefined
        }

        if (scrollVelocity < 0) {
            $(document).trigger('cc-scroll-up', eventParams);
        } else if (scrollVelocity === undefined && scrollTop > 0) {
            $(document).trigger('cc-scroll-down', eventParams);
        } else if (scrollVelocity > 0) {
            $(document).trigger('cc-scroll-down', eventParams);
        }

        $(document).trigger('cc-scroll', eventParams);

        if (onFinishedScrollingTimeout !== undefined) {
            window.clearTimeout(onFinishedScrollingTimeout);
        }
        onFinishedScrollingTimeout = window.setTimeout(onFinishedScrollingCb, 2000);

        if (_isInitial === undefined) lastScrollTop = scrollTop;
        onScrollTimeout = undefined;

        return false;
    };

    $(window).on('scroll', function(e) {
        if (onScrollTimeout === undefined) {
            onScrollTimeout = window.setTimeout(onScrollTimeoutCb, 50);
        }
    });

    $(document).ready(function(e) {
        onScrollTimeoutCb(true);
    });

    $(document).ready(function() {
        /* Mobile-friendly clone of the subnav widget */
        var mobileSidebar = $('#content-above-mobile'),
            mobileMenus = $('.widget_categories, .advanced-sidebar-menu', mobileSidebar);
        mobileMenus.each(function(index, subnav) {
            var subnavTitle = $(subnav).children('.widget-title');
            subnavTitle.on('click.cc_dynamic_subnav', function() {
                $(subnav).toggleClass('expanded');
            });
        });
    });
})(jQuery);
