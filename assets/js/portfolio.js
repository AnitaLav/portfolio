$(document).ready(function($) {
  "use strict";

  var popupConfig = {
    type:'image',
    fixedContentPos: false,
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

  $('#web-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      items: [
        {
          src: 'assets/image/retouch_main.jpg'
        },
        {
          src: 'assets/image/portfolio/web/retouch_main.jpg'
        },
        {
          src: 'assets/image/retouch_main.jpg'
        },
        {
          src: 'assets/image/retouch_main.jpg'
        },
        {
          src: 'assets/image/retouch_main.jpg'
        }
      ],
    })
  );

  $('#graphic-gallery').magnificPopup(
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

  $('#retouch-gallery').magnificPopup(
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
