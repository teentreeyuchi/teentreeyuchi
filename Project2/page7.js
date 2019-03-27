$(document).ready(function(){

  $(".punish").hide();
  $(".scold").click(function(){
    $(".punish").show();
  });
  $(".chinese").hide();
  $(".newyear").click(function(){
    $(".chinese").show();
  });
});
