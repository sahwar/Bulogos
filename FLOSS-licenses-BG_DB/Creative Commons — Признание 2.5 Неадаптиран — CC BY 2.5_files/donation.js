/**
 * Show/Hide Search on narrow layouts
 */
(function ($) {
  "use strict";

  $( document ).ready(function() {
    var other_fields = $('input[value="gf_other_choice"]');

    $(other_fields).each(function() {
      var parent = $(this).closest('li');
      var radioField = $(this);
      var txtField = $(parent).children('input[type="text"]');

      txtField.focus(function() {
        parent.addClass('selected');
        radioField.click();
      });

      txtField.blur(function() {
        parent.removeClass('selected');
      });
    });
  });

  // Next on Page 1
  $("#gform_next_button_3_18").on( "click", function() {
    if (typeof(__gaTracker) == 'function'){
      __gaTracker('send', 'pageview','/donate/page-two');
    }
  });
  // Next on Page 2
  $("#gform_next_button_3_19").on( "click", function() {
    if (typeof(__gaTracker) == 'function'){
      __gaTracker('send', 'pageview','/donate/page-three');
    }
  });
  // Next on Page 3
  $("#gform_submit_button_3").on( "click", function() {
    if (typeof(__gaTracker) == 'function'){
      __gaTracker('send', 'pageview','/donate/complete');
    }
  });

})(jQuery);
