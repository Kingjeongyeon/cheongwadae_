
// $('.slide_list').slick();

$(function() {
  $('.vertical-slider').slick({
      arrows: false,
      dots: true,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
  });
  //스크롤감지
  $('.vertical-slider').mousewheel(function(e) {
      if (e.deltaY < 0) {
          if ($(this).slick('slickCurrentSlide') == $(this).find('.slide').length - 1) {
              return
          }

          e.preventDefault()
          $(this).slick('slickNext')
      } else {
          if ($(this).slick('slickCurrentSlide') == 0) {
              return
          }

          e.preventDefault()
          $(this).slick('slickPrev')
      }

  });
});

jQuery(document).ready(function() {
  $(".logo").click(function(e) {
      e.preventDefault();
      var home = $(this).data('slide');
      $('.vertical-slider').slick('slickGoTo', home - 1);
      //선택자의 데이터슬라이드값을 받아와서 변수처리 하여 인덱스이동
  });
});

// window.addEventListener('wheel', function(event) {
  
//    if (event.deltaY < 0) {
//       swiper1.mousewheel.enable();
//       $('#footer_section').removeClass('on');
//   }else if(event.deltaY > 0){
//       return false
//   }
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
$(function(){
    $('.imgs > img:gt(0)').hide();
    setInterval(function(){
        $('.imgs > img:first-child').fadeOut()
                            .next('.imgs > img').fadeIn().end()
                            .appendTo('.imgs');
    },5000);
    
}); 

});

$(function(){
    $(".slide .item1").animate({
        opacity : 0,
        scale: 0,
    }, 3000, "swing", function() {
        // $(".txt1")의 애니메이션 다음에 $(".txt2")의 애니메이션이 순차적 실행하도록 콜백함수로 작성
        $(".slide .item2").animate({
            opacity : 0,
            scale: 0,
            "font-size": "50px"
        }, 2500, "swing"); 
    });
});

// 딜레이 필료 없음 루나폴더 33번 참고 
// on: {
//   slideChangeTransitionStart: function() {
//       $('.title').hide();
//   },

