$(function(){
  /*serch input focus*/
  $(".search input").val("벚꽃따라 맛따라 컬리 미식여행").css("color","#c3c3c3").one("focus",function(){
    $(this).val('').css("color","#000");
  }).blur(function(){
    if( $(this).val() == '' ){
      $(this).val("벚꽃따라 맛따라 컬리 미식여행").css("color","#c3c3c3").one("focus",function(){
        $(this).val('').css("color","#000");
      })
    }
  })
});
