$(document).ready(function($) {
  "use strict";

  var popupConfig = {
    type:'image',
    // fixedContentPos: false,
    gallery: { enabled:true },
    removalDelay: 300,
    mainClass: 'mfp-fade',
    callbacks: {
      // This prevents pushing the entire page to the right after opening Magnific popup image
      open: function() {
        $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
      },
      close: function() {
        $(".page-wrapper, .navbar-nav").css("margin-right", 0);
      }
    }
  };

  function changeImgSize() {
    var img = this.content.find('img');
    // img.css('max-height', '100%');
    // img.css('width', 'auto');
    // img.css('max-width', '75%');
  }

  $('#web-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      mainClass: 'mfp-fade mfp-fullwidth lol',
      callbacks: {
        resize: changeImgSize,
        imageLoadComplete: changeImgSize,
        change: changeImgSize,
      },
      items: [
        {
          src: 'assets/image/portfolio/W_1.png'
        },
        {
          src: 'assets/image/portfolio/W_2.png'
        },
        {
          src: 'assets/image/portfolio/W_3.png'
        },
        {
          src: 'assets/iimage/portfolio/W_4.png'
        },
        {
          src: 'assets/image/portfolio/W_5.png'
        },
        {
          src: 'assets/image/portfolio/W_6.png'
        },
        {
          src: 'assets/image/portfolio/W_7.png'
        },
        {
          src: 'assets/image/portfolio/W_8.png'
        }
      ],
    })
  );

  $('#graphic-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      callbacks: {
        resize: changeImgSize,
        imageLoadComplete: changeImgSize,
        change: changeImgSize,
      },
      items: [
        {
          src: 'assets/image/retouch_main.jpg'
        },
        {
          src: 'assets/image/retouch_main.jpg'
        }
      ],
    })
  );

  $('#retouch-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      items: [
        {
          src: 'assets/image/portfolio/R_1.png'
        },
        {
          src: 'assets/image/portfolio/R_2.png'
        },
        {
          src: 'assets/image/portfolio/R_3.png'
        },
        {
          src: 'assets/image/portfolio/R_4.png'
        },
        {
          src: 'assets/image/portfolio/R_5.png'
        },
        {
          src: 'assets/image/portfolio/R_6.png'
        },
        {
          src: 'assets/image/portfolio/R_7.png'
        },
        {
          src: 'assets/image/portfolio/R_8.png'
        }
        ,
        {
          src: 'assets/image/portfolio/R_9.png'
        },
        {
          src: 'assets/image/portfolio/R_10.png'
        },
        {
          src: 'assets/image/portfolio/R_11.png'
        },
        {
          src: 'assets/image/portfolio/R_12.png'
        },
        {
          src: 'assets/image/portfolio/R_13.png'
        },
        {
          src: 'assets/image/portfolio/R_14.png'
        },
        {
          src: 'assets/image/portfolio/R_15.png'
        },
        {
          src: 'assets/image/portfolio/R_16.png'
        },
        {
          src: 'assets/image/portfolio/R_17.png'
        },
        {
          src: 'assets/image/portfolio/R_18.png'
        },
        {
          src: 'assets/image/portfolio/R_19.png'
        }
      ],
    })
  );

  $('#qa-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      items: [
        {
          src: 'assets/image/retouch_main.jpg'
        },
        {
          src: 'assets/image/retouch_main.jpg'
        }
      ],
    })
  );
});
