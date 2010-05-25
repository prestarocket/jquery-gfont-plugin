/**
 * jQuery Google Font API Plugin
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
    var cache = [];

    $.gfont = function() {
        var family = $.map(arguments, function(value) {
            if ($.inArray(value, cache) === -1) {
                cache.push(value);
                return encodeURI(value.replace(/ /g, '+'));
            } else {
                return null;
            }
        }).join('|');
        if (family) {
            $('head').eq(0).prepend('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=' + family + '" />');
        }
    };

    $.fn.gfont = function() {
        $.gfont.apply(null, arguments);
        var family = $.map(arguments, function(value) {
            return '"' + value.replace(/(.*):.*/, '$1') + '"';
        }).join(', ');
        return this.each(function() {
            var tmp = $(this).css('font-family');
            $(this).css('font-family', family + (tmp ? ', ' + tmp : ''));
        });
    };
})(jQuery);
