$(function () {


   $('.main_slider').on('init afterChange', function (e, s, c) {
      $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
   });


   $('.main_slider').slick({
      arrows: false,
      //autoplay: true,
      dots: false,
      speed: 500,
   });

   $('.aesop_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      //dots: true,
   });

   $('.aesop_slider').on('afterChange', function (e, s, c) {
      let t = c % 3;
      $('.product .bar span').css({
         left: t * 33.3333333333 + '%'
      });
   });



   $('.slider_control i:nth-child(1)').on('click', function () {
      $('.aesop_slider').slick('slickPrev');
   });
   $('.slider_control i:nth-child(2)').on('click', function () {
      $('.aesop_slider').slick('slickNext')
   });

   $('.right').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      //autoplay: true,
      //dots: true,
      speed: 500,
   });


   // $('.txt_slider').slick({
   //    autoplay: true, //자동플레이 유무
   //    autopspeed: 600, //자동플레이 스피드
   //    infinite: true, //양방향 무한모션
   //    fade: true, //페이드모션 실행 여부
   //    // cssEase: 'linear'
   //    arrows:false,
   //    waitForAnimate: true,
   // });

   // $(window).on('scroll', function () {
   //    var sct = $(window).scrollTop();
   //    if (sct > 500) {
   //       $('.txt_box').fadeIn(300)
   //    } else {
   //       $('.txt_box').fadeOut(1000)
   //    }
   // })
   // $(window).bind('mousewheel', function (event) {
   //    if (event.originalEvent.wheelDelta <= -100) {
   //       if (!$('.txt_box').hasClass('typing')) {
   //          $('.txt_box').addClass('typing');
   //       }
   //    }
   // });
   $(window).on('wheel', e => {
      let wd = e.originalEvent.wheelDelta;
      console.log(wd)
   })
})


