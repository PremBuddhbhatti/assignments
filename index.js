let op1,
  op2,
  opr,
  perform,
  flag = true;

function btnpress(val) {
  if (flag !== true) {
    console.log(flag);
    btnClear();
  }
  console.log("press:" + flag);
  opr = document.getElementById("ans").innerHTML;
  if (parseInt(opr) === 0) {
    opr = val;
  } else {
    opr = opr + val;
  }

  console.log(opr);
  document.getElementById("ans").innerHTML = opr;
}

function btnOpration(opration) {
  perform = opration;
  op1 = document.getElementById("ans").innerHTML;
  document.getElementById("ans").innerHTML = 0;
}

function getAns() {
  flag = false;
  op2 = document.getElementById("ans").innerHTML;
  let ans;
  switch (perform) {
    case "+":
      ans = (parseFloat(op1) + parseFloat(op2)).toFixed(2);
      document.getElementById("ans").innerHTML = ans;
      break;
    case "-":
      ans = (parseFloat(op1) - parseFloat(op2)).toFixed(2);
      document.getElementById("ans").innerHTML = ans;
      break;
    case "*":
      ans = (parseFloat(op1) * parseFloat(op2)).toFixed(2);
      document.getElementById("ans").innerHTML = ans;
      break;
    case "/":
      ans = (parseFloat(op1) / parseFloat(op2)).toFixed(2);
      document.getElementById("ans").innerHTML = ans;
      break;

    case "mod":
      ans = parseInt(op1) % parseInt(op2);
      document.getElementById("ans").innerHTML = ans;
      break;
  }
  op1 = 0;
  op2 = 0;
  perform = "";
  console.log("ans:" + flag);
}

function btnClear() {
  document.getElementById("ans").innerHTML = 0;
  flag = true;
}

function btnDel() {
  document.getElementById("ans").innerHTML = document
    .getElementById("ans")
    .innerHTML.slice(0, -1);
  if (document.getElementById("ans").innerHTML === "") {
    document.getElementById("ans").innerHTML = 0;
  }
}

function btnAbs() {
  document.getElementById("ans").innerHTML = Math.abs(
    document.getElementById("ans").innerHTML
  );
}

function changesign() {
  let ans = document.getElementById("ans").innerHTML;
  ans[0] === "-"
    ? (document.getElementById("ans").innerHTML = Math.abs(ans))
    : (document.getElementById("ans").innerHTML = "-" + ans);
}

function btnFactorial() {
  let val = document.getElementById("ans").innerHTML;
  let ans = 1;
  if (val == 0 || val == 1) {
    document.getElementById("ans").innerHTML = 1;
  } else {
    for (var i = val; i >= 1; i--) {
      ans *= i;
    }
    document.getElementById("ans").innerHTML = ans;
  }
}
