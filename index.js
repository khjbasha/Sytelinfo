
$(".fa-up").hover(function faup_add(){
  var val_old = $(".faUp-val").val();
  val_old=val_old+21;
  $(".faUp-val").html(val_old);
  });

document.getElementsByClassName('.fa-up').addEventListener('click',faup_add())

  function faup_add(){
    var val_old = $(".faUp-val").val();
    val_old=val_old+21;
    $(".faUp-val").html(val_old);
    };