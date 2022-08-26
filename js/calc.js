function init() {
  var num = document.getElementById("num");
  num.value = 0;
  num.disabled = "disabled";

  // function num_1_click() {
  //   var num = document.getElementById("num");
  //   var n = num.value;
  //   if (n == "0") {
  //     n = "1";
  //   } else {
  //     n = n + "1";
  //   }
  //   document.getElementById("num").value = n;
  // }
  var inputButton = document.getElementsByTagName("input");
  var fn;
  var btnNum1;
  
  for (var i = 0; i < inputButton.length; i++) {
 
    inputButton[i].onclick = function () {
      if (!isNaN(this.value)) {
          var btnNum;
        if (isNull(num.value)) {
          num.value = this.value;
        } else {
          num.value = num.value + this.value;
        }
      }else{ 
      
        var btnNum = this.value;

        switch (btnNum) {
          case "+":
            btnNum1 = Number(num.value);
            num.value = 0;
            fn = "+";
            break;
          case "-":
            btnNum1 = Number(num.value);
            num.value = 0;
            fn = "-";
            break;
          case "*":
            btnNum1 = Number(num.value);
            num.value = 0;
            fn = "*";
            break;
          case "/":
            btnNum1 = Number(num.value);
            num.value = 0;
            fn = "/";
            break;
          case ".":
            num.value = dotNumber(num.value);
            break;
          case "←":
            num.value = back(num.value);
            break;
          case "c":
            num.value = "0";
            break;
          case "+/-":
            num.value = sign(num.value);
            break;
          case "=":
            switch (fn) {
              case "+":
                num.value = btnNum1 + Number(num.value);
                break;
              case "-":
                num.value = btnNum1 - Number(num.value);
                break;
              case "*":
                num.value = btnNum1 * Number(num.value);
                break;
              case "/":
                if (Number(num.value) == 0) {
                  alert(" Divisor cannot be 0");
                  num.value = 0;
                } else {
                  num.value = btnNum1 / Number(num.value);
                }

                break;
            }
            break;
        }
      }
    }
  }
}


function isNull(n) {
  if (n == "0" || n.length == 0) {
    return true;
  } else {
    return false;
  }
}
//
function dotNumber(n) {
  if (n.indexOf(".") == -1) {
    n = n + ".";
  }
  return n;
}
//
function back(n) {
  n = n.substr(0, n.length - 1);
  if (isNull(n)) {
    n = "0";
  }
  return n;
}
//
function sign(n) {
  n = Number(n) * -1;
  return n;
}
