  $(function(){

    // Theme toggle
    $('[js-toggle="theme"]').on('click', 
      function() {
        $(':root').attr('am-theme', 
          function(index, attr) {
            return attr == null ? 'dark' : null;
          }
        );
      });

    // Touch ripple effect on buttons
    $('[am-button]:not([am-button~="disabled"])').on('click', 

      function(e){

        /*!
        SVG version for ripple effect via Jonathan Cutrell (gently modified)
        http://webdesign.tutsplus.com/tutorials/recreating-the-touch-ripple-effect-as-seen-on-google-design--cms-21655
        */

        var x      = e.pageX;
        var y      = e.pageY;
        var clickY = y - $(this).offset().top;
        var clickX = x - $(this).offset().left;
        var box    = this;

        var setX   = parseInt(clickX);
        var setY   = parseInt(clickY);
        var ripple = '<svg class="ink"> \
                       <circle cx="'+setX+'" cy="'+setY+'" r="'+0+'"></circle> \
                     </svg>'

        $(this).find('.ink').remove();
        $(this).append(ripple);

        var c = $(box).find('circle');
        c.animate(
          {
            'r' : $(box).outerWidth()
          },
          {
            duration: 333,
            step:     function(val){
                        c.attr('r', val);
                      },
            complete: function() {
                        c.fadeOut('fast');
                      }
          }
        );

        return true;

      });

  }); //$(function(){})