$(function(){
  /*input focus*/

  $("tr:nth-of-type(1) td input").val("8~12자까지").css("color","#c3c3c3").one("focus",function(){
    $(this).val('').css("color","#000");
  }).blur(function(){
    if( $(this).val() == '' ){
      $(this).val("8~12자까지").css("color","#c3c3c3").one("focus",function(){
        $(this).val('').css("color","#000");
      })
    }
  })
  $("tr:nth-of-type(2) td input").val("10~14자/ 문자+숫자+특수문자 조합").css("color","#c3c3c3").one("focus",function(){
    $(this).val('').css("color","#000");
  }).blur(function(){
    if( $(this).val() == '' ){
      $(this).val("10~14자/ 문자+숫자+특수문자 조합").css("color","#c3c3c3").one("focus",function(){
        $(this).val('').css("color","#000");
      })
    }
  })
  $("tr:nth-of-type(6) td input").val("예) 1동 1002호(00동, 00아파트) *단독주택일 경우 건물번호 입력").css("color","#c3c3c3").one("focus",function(){
    $(this).val('').css("color","#000");
  }).blur(function(){
    if( $(this).val() == '' ){
      $(this).val("예) 1동 1002호(00동, 00아파트) *단독주택일 경우 건물번호 입력").css("color","#c3c3c3").one("focus",function(){
        $(this).val('').css("color","#000");
      })
    }
  })

  /*select change*/
  $(".email").change(function(){
    let thisVal = $(this).val();
    console.log($(this).prev().val())
    $(this).prev().val(thisVal);
  })
});
