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


  $('#web-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      mainClass: 'mfp-fade mfp-fullwidth',
      items: [
        {
          src: 'assets/image/portfolio/W_2.png'
        },
        {
          src: 'assets/image/portfolio/PRF8.png'
        },
        {
          src: 'assets/image/portfolio/PRF1.png'
        },        
        {
          src: 'assets/image/portfolio/PRF9.jpg'
        },
        {
          src: 'assets/image/portfolio/PRF2.png'
        },
        {
          src: 'assets/image/portfolio/W_9.png'
        },
        {
          src: 'assets/image/portfolio/PRF3.png'
        },
        {
          src: 'assets/image/portfolio/PRF4.png'
        },
        {
          src: 'assets/image/portfolio/PRF6.png'
        },
        {
          src: 'assets/image/portfolio/PRF5.png'
        },
        {
          src: 'assets/image/portfolio/PRF7.jpg'
        }
      ],
    })
  );

  $('#graphic-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      mainClass: 'mfp-fade mfp-fullwidth',
      items: [
        {
          src: 'assets/image/portfolio/G_11.jpg'
        },
        {
          src: 'assets/image/portfolio/G_13.jpg'
        },        
        {
          src: 'assets/image/portfolio/G_15.jpg'
        },
        {
          src: 'assets/image/portfolio/G_1.png'
        },
        {
          src: 'assets/image/portfolio/G_4.jpeg'
        },
        {
          src: 'assets/image/portfolio/G_5.png'
        },
        {
          src: 'assets/image/portfolio/G_6.png'
        },
        {
          src: 'assets/image/portfolio/G_14.jpg'
        },
        {
          src: 'assets/image/portfolio/G_7.png'
        },
        {
          src: 'assets/image/portfolio/G_10.png'
        },
        {
          src: 'assets/image/portfolio/G_9.png'
        },
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
          src: 'assets/image/portfolio/R_7.png'
        },
        {
          src: 'assets/image/portfolio/R_8.png'
        },
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
          src: 'assets/image/portfolio/R_13.png'
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
          src: 'assets/image/portfolio/R_19.png'
        },
        {
          src: 'assets/image/portfolio/R_20.png'
        },
        {
          src: 'assets/image/portfolio/R_22.png'
        }
      ],
    })
  );

  $('#3d-gallery').magnificPopup(
    Object.assign({}, popupConfig, {
      items: [
        {
          src: 'assets/image/M-1.png'
        },
        {
          src: 'assets/image/M-3.png'
        },
        {
          src: 'assets/image/M-4.png'
        },
        {
          src: 'assets/image/M-5.jpg'
        },
        {
          src: 'assets/image/M-6.png'
        },
        {
          src: 'assets/image/M-7.jpg'
        },
        {
          src: 'assets/image/M-8.png'
        },
        {
          src: 'assets/image/M-9.jpg'
        },
      ],
    })
  );
});
