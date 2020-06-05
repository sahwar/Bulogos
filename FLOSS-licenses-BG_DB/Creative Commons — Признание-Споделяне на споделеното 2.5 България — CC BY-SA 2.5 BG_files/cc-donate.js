(function ($) {
    "use strict";

    $(document).ready(function() {

        /* Make Pay with PayPal text link submit the form. */
        $('a.paypal-toggle').on('click', function(){
          $('#choice_3_14_1').prop('checked', true).trigger('click');
          $('#gform_3').submit();
          return false;
        });

    });
})(jQuery);
