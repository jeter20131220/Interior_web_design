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