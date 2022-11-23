


$(document).ready(function() {
  $("#menu  a.m").click(function() {
      $(this).next().addBack().toggleClass("on").end().find(".m, ul").removeClass("on").end().parent().siblings().find(".m, ul").removeClass("on");
      return false;
  });
});

// $(document).ready(function () {
//   var lastWidth = $(window).width();
//    $(window).resize(function(){
//        if($(window).width()!=lastWidth){
//            location.reload();
//            lastWidth = $(window).width();
//            return false;
//        }
//    });

//   $("header button").click(function () {
//       $(".nav").slideToggle(400);
//       // $("header button").text("CLOSE");
//       $("header .material-symbols-outlined").text(function (e, text) {
//           return text === 'CLOSE' ? 'MENU' : 'CLOSE';
//       });
//       $(this).children("span").eq(1).text(function (e, text) {
//           return text === 'CLOSE' ? 'MENU' : 'CLOSE';
//       });1
//   });

//   $("footer .right select").click(function () {
//               $("select").css("border", "none");
//           });

//           $(".tab").click(function () {
//               $(".tab .content").toggleClass("on");
//               $(".img").css("display:none");
//               $(this).css("display:none");
//           });
      
//           $("footer .left button").click(function () {
//               $(".foot").toggleClass("active");
//           });
          
//           if($(window).width()<640){
//               $(".global_02 h2").click(function(){
//               $(this).next("ul").stop().slideToggle()
//           })
//           }

         
// });

$(function(){
   
  $('#gnb2 .open').click(function(){
    $('#menu').addClass('active').css({
      'top' : '0'
    })
  })

  $('#menu .close').click(function(){
    $('#menu').removeClass('active').css({
      'top' : '-1000px'
    })
  })
})

$(function(){
    $('.imgs > img:gt(0)').hide();
    setInterval(function(){
        $('.imgs > img:first-child').fadeOut()
                            .next('.imgs > img').fadeIn().end()
                            .appendTo('.imgs');
    },5000);
    
}); 

var swiper = new Swiper(".vertical-slider", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$(function() {
  // $('.vertical-slider').slick({
  //     arrows: false,
  //     dots: true,
  //     infinite: false,
  //     vertical: true,
  //     verticalSwiping: true,
  //     variableWidth: true,
  // });
  //스크롤감지
  // $('.vertical-slider').mousewheel(function(e) {
  //     if (e.deltaY < 0) {
  //         if ($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
  //             return
  //         }

  //         e.preventDefault()
  //         $(this).slick('slickNext')
  //     } else {
  //         if ($(this).slick('slickCurrentSlide') == 0) {
  //             return
  //         }

  //         e.preventDefault()
  //         $(this).slick('slickPrev')
  //     }

  // });
});

jQuery(document).ready(function() {
  $(".logo").click(function(e) {
      e.preventDefault();
      var home = $(this).data('slide');
      $('.vertical-slider').slick('slickGoTo', home - 1);
      //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
  });
});

window.addEventListener('wheel', function(event) {
  
   if (event.deltaY < 0) {
      swiper1.mousewheel.enable();
      $('#footer_section').removeClass('on');
  }else if(event.deltaY > 0){
      return false
  }
});

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });




$(document).ready(function(){
  $('.section3 .tab_list li a.inner').on('mouseenter' , function(){
    $('.section3 .tab_list li').addClass('on');
  })
  
  $('.section3 .tab_list li a.inner').on('mouseleave' , function(){
    $('.section3 .tab_list li').removeClass('on');
  })





//   $(".section4 .tab_list li").click(function(){
//     $(this).addClass('active').siblings().removeClass('active');
//     $("#"+$(this).data('id')).addClass('active').siblings().removeClass('active');
// });

// Opacity Slide(fade)
// $(function(){
//     $('.imgs > img:gt(0)').hide();
//     setInterval(function(){
//         $('.imgs > img:first-child').fadeOut()
//                             .next('.imgs > img').fadeIn().end()
//                             .appendTo('.imgs');
//     },5000);
    
// }); 

});

// var swiper = new Swiper(".s4_conts4", {
//   slidesPerView: 1, 
//   spaceBetween: 30, 
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     760: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1200: {
//       slidesPerView: 2,
//       spaceBetween: 50,
//     },
//   }
// });

var swiper = new Swiper(".s4_conts4", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// var swiper = new Swiper(".right_box", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper = new Swiper(".right_box", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
  },
});

// var swiper = new Swiper(".sec4", {
//   slidesPerView: 4,
//   spaceBetween: 5,
//   slidesPerGroup: 4,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   }
// });