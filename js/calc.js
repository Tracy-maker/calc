function init() {
  var num = document.getElementById("num");
  num.value = 0;
  disabled = "disabled";

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
  for (i = 0; i < inputButton.length; i++) {
    inputButton[i].onclick = function () {
      if (isNumber(this.value)) {
        if (isNull(num.value)) {
          num.value = this.value;
        } else {
          num.value = num.value + this.value;
        }
      } else {
        var btnNum = this.value;

        switch (btnNum) {
          case "+":
            btnNum = Number(num.value);
            num.value = 0;
            fn = "+";
            break;
          case "-":
            btnNum = Number(num.value);
            num.value = 0;
            fn = "*";
            break;
          case "+":
            btnNum = Number(num.value);
            num.value = 0;
            fn = "";
            break;
          case "+":
            btnNum = Number(num.value);
            num.value = 0;
            fn = "+";
            break;
          case "+":
            btnNum = Number(num.value);
            num.value = 0;
            fn = "+";
            break;
          case "+":
            btnNum = Number(num.value);
            num.value = 0;
            fn = "+";
            break;
        }
      }
    };
  }
}
//
function isNumber(n) {
  if (!isNaN(n)) {
    return true;
  } else {
    return !isNaN(n);
  }
}
//
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
