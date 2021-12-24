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
  op1 = parseInt(document.getElementById("ans").innerHTML);
  document.getElementById("ans").innerHTML = 0;
}

function getAns() {
  flag = false;
  op2 = document.getElementById("ans").innerHTML;
  let ans;
  switch (perform) {
    case "+":
      ans = parseInt(op1) + parseInt(op2);
      document.getElementById("ans").innerHTML = ans;
      break;
    case "-":
      ans = parseInt(op1) - parseInt(op2);
      document.getElementById("ans").innerHTML = ans;
      break;
    case "*":
      ans = parseInt(op1) * parseInt(op2);
      document.getElementById("ans").innerHTML = ans;
      break;
    case "/":
      ans = parseInt(op1) / parseInt(op2);
      document.getElementById("ans").innerHTML = ans;
      break;
  }
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
