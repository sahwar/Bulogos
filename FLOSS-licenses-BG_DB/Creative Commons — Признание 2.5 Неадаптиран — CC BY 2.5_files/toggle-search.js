/**
 * Show/Hide Search on narrow layouts
 */
(function ($) {
  "use strict";

  function toggler_search_handler (event) {
    var $block = $(event.data.block),
        $txt_field = $('.search-field', $block);

    event.preventDefault();
    $(this).blur();

    if ($txt_field.is(":visible")) {
      $block.submit();
    }
    else {
      $block.addClass('expanded');
      $txt_field.show().focus();
    }
  }

  $( document ).ready(function() {
    $('form.search-form').each(function () {
      var $toggler = $('.search-submit', this);
      $toggler.on('click', {'block': this}, toggler_search_handler);
    });
  });
})(jQuery);
