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
          src: 'assets/image/portfolio/W_1.png'
        },
        {
          src: 'assets/image/portfolio/W_3.png'
        },
        {
          src: 'assets/image/portfolio/W_4.png'
        },        
        {
          src: 'assets/image/portfolio/W_8.jpg'
        },
        {
          src: 'assets/image/portfolio/W_7.png'
        },
        {
          src: 'assets/image/portfolio/W_5.png'
        },
        {
          src: 'assets/image/portfolio/W_9.png'
        },
        {
          src: 'assets/image/portfolio/W_6.png'
        },
        {
          src: 'assets/image/portfolio/W_10.png'
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
          src: 'assets/image/portfolio/R_6.png'
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
        },
        {
          src: 'assets/image/portfolio/R_20.png'
        },
        {
          src: 'assets/image/portfolio/R_21.png'
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
          src: 'assets/image/M-2.png'
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
      ],
    })
  );
});
