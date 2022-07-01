$(document).ready(function(){
  $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></img></button>',
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});
