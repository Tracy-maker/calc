function init(){
    var num= document.getElementById("num");
    num.value=0;
    disabled="disabled";
}
function num_1_click(){
  var num = document.getElementById("num");
  var n =num.value;
  if (n=="0"){
    n="1";
  }else{
    n=n+"1";
  }
  document.getElementById("num").value=n;
}