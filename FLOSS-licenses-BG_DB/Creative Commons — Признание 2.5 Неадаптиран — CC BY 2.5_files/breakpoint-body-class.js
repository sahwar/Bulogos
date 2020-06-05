(function ($) {
  "use strict";

  function cc_breakpoint_body_class(Breakpoints) {
    var window_w = $(window).width(),
        layout_class = '';

    if (window_w >= Breakpoints.desktop_lg) {
      layout_class = 'layout-desktop-lg';
    }
    else if (Breakpoints.desktop_md <= window_w && window_w < Breakpoints.desktop_lg) {
      layout_class = 'layout-desktop-md';
    }
    else if (Breakpoints.desktop_sm <= window_w && window_w < Breakpoints.desktop_md) {
      layout_class = 'layout-desktop-sm';
    }
    else if (Breakpoints.tablet_md <= window_w && window_w < Breakpoints.desktop_sm) {
      layout_class = 'layout-tablet-md';
    }
    else if (Breakpoints.tablet_sm <= window_w && window_w < Breakpoints.tablet_md) {
      layout_class = 'layout-tablet-sm';
    }
    else if (window_w < Breakpoints.tablet_sm) {
      layout_class = 'layout-mobile';
    }

    // Remove existing layout class
    if (layout_class !== '' && !$('body').hasClass(layout_class)) {
      $('body')
        .removeClass (function (index, css) {
          return (css.match (/(^|\s)layout-\S+/g) || []).join(' ');
        })
        .addClass(layout_class);
    }
  }

  $( document ).ready(function() {
    var Breakpoints = {};

    Breakpoints.tablet_sm =   710;  // 44.375em
    Breakpoints.tablet_md =   783;  // 48.9375em
    Breakpoints.desktop_sm = 910;  // 56.875em
    Breakpoints.desktop_md = 985;  // 61.5625em
    Breakpoints.desktop_lg = 1200; // 75em

    cc_breakpoint_body_class(Breakpoints);
    window.onresize = function () { cc_breakpoint_body_class(Breakpoints); };
  });
})(jQuery);