/*!
 * jQuery Tools Full Width Scrollable Plugin
 * 
 * scrollable.fullwidth.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://www.musca.se
 * 
 */

(function($) {

  $.fn.fullwidth = function() {
    
    return this.each(function() {

      var api = $(this).data("scrollable"),
          root = api.getRoot(),
          conf = api.getConf();

      $(window).on("load resize orientationchange", function() {

        var w = $(window).width(), i = api.getIndex()
        
        if (conf.circular) { i = i + 1 }
        
        if (w >= 320) {
          var l = i * w
          root.children().css({ left: + - +l });
          root.children().children().css({ width: w });
        } else {
          root.children().children().css({ width: 300 });
        }

      });

    });

  }

})(jQuery); 