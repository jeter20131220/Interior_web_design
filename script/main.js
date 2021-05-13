// Navigation 下滑效果
$("#Navigation").hide();
$(window).scroll(function(){
   var y = window.scrollY;
    
  if(y>10){
    $("#Navigation").show();
  }else{
     $("#Navigation").hide();
  }
    
});

$("#slider1").slick({
  // 無限
  // 一次顯示幾個
  slidesToShow: 3,
  // 一次捲動幾個
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
});
