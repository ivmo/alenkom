$(document).ready(function() {
  if (jQuery(window).innerWidth() >= 1024) {
    // fix by scroll
      var headerInner = $('.header');
      var mobileNav = $('.header__top');
      var fixedClass = $('.header__top--fixed');
      $(window).scroll(function() {
           if ( $(this).scrollTop() > headerInner.height() ) {
               mobileNav.addClass("header__top--fixed");
               headerInner.css('margin-bottom', '74px');
           } else {
              if ( $(this).scrollTop() <= headerInner.height()) {
                mobileNav.removeClass("header__top--fixed");
                headerInner.css('margin-bottom', '0');
            }
          }

       });// end scroll
  }



       // mmenu initialization
          // new

          $('#mobile-menu').mmenu({
             offCanvas: {
                pageNodetype: "#wrapper-content"
             },
             navbar: {title:" "},
             "extensions": [
                  "pagedim-black"
               ]
             // extensions: ["position-right"]

          });

      var API = $("#mobile-menu").data( "mmenu" );
      $("#cross-btn").click(function(evt) {
        evt.preventDefault();
         API.close();
      });

      $('.js_main-slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });

      $('.js_products-slider').slick({
        infinite: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '70px',
        responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerMode: false,
        centerPadding: '0',
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',
      }
    }
  ]
      });


      $('.add').click(function () {
      		if ($(this).prev().val() < 999) {
          	$(this).prev().val(+$(this).prev().val() + 1);
      		}
      });
      $('.sub').click(function () {
      		if ($(this).next().val() > 1) {
          	if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
      		}
      });

      $('.form-group__input--flyaway').focus(function(){
        $(this).parents('.form-group').addClass('focused');
      });

      $('.form-group__input--flyaway').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).removeClass('filled');
          $(this).parents('.form-group').removeClass('focused');
        } else {
          $(this).addClass('filled');
        }
      });


      $('.tabs-list__item:not(:first-child)').fadeOut();
      $('.tabs-nav__item').on('click', function (evt) {
        evt.preventDefault();
        if (!($(this).hasClass('tabs-nav__item--active'))) {
          $('.tabs-nav__item').removeClass('tabs-nav__item--active');
          $(this).addClass('tabs-nav__item--active');
          $('.tabs-list__item').fadeOut();
          $('.tabs-list__item[data-id="'+$(this).data('id')+'"]').fadeIn();
        }
      });

      jQuery('.form-group__input--phone').mask('+7(999)999-99-99');


    });
