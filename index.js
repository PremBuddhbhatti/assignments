let op1,
	op2,
	opr,
	perform,
	flag = true,
	dot = true;

function btnpress(val) {
	if (flag !== true) {
		console.log(flag);
		btnClear();
	}
	console.log("press:" + flag);
	opr = document.getElementById("ans").innerHTML;

	if (val === "." && dot !== false) {
		opr = opr + val;
		dot = false;
	} else if (val === "." && dot === false) {
	} else {
		if (parseInt(opr) === 0 && dot !== false) {
			opr = val;
		} else {
			opr = opr + val;
		}
	}
	console.log(opr);
	document.getElementById("ans").innerHTML = opr;
}

function btnOpration(opration) {
	perform = opration;
	dot = true;
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

		case "xy":
			ans = btnPower_xy();
			console.log("op1:" + op1 + " op2:" + op2 + " ans:" + ans);
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
	dot = true;
	document.getElementById("selTrigo").getElementsByTagName("option")[0].selected = "selected";
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
	document.getElementById("ans").innerHTML = Math.abs(document.getElementById("ans").innerHTML);
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

function btnPie() {
	document.getElementById("ans").innerHTML = (
		parseFloat(document.getElementById("ans").innerHTML) * 3.14159
	).toFixed(2);
}

function btnLog() {
	document.getElementById("ans").innerHTML = Math.log10(
		parseFloat(document.getElementById("ans").innerHTML)
	);
}

function btnLn() {
	document.getElementById("ans").innerHTML = Math.log(
		parseFloat(document.getElementById("ans").innerHTML)
	);
}

function btnPower() {
	document.getElementById("ans").innerHTML = Math.pow(
		document.getElementById("ans").innerHTML,
		2
	);
}

function btnPower10() {
	document.getElementById("ans").innerHTML = Math.pow(
		10,
		parseFloat(document.getElementById("ans").innerHTML).toFixed(2)
	);
}

function btnPower_xy() {
	return Math.pow(parseInt(op1), parseInt(op2));
}

function btnSqrt() {
	document.getElementById("ans").innerHTML = Math.sqrt(document.getElementById("ans").innerHTML);
}
function btnInverse() {
	document.getElementById("ans").innerHTML = Math.pow(
		document.getElementById("ans").innerHTML,
		-1
	);
}

function btnE() {
	document.getElementById("ans").innerHTML = (
		parseFloat(document.getElementById("ans").innerHTML) * 2.71828
	).toFixed(2);
}

function btnExpo() {
	document.getElementById("ans").innerHTML = Math.exp(
		parseFloat(document.getElementById("ans").innerHTML)
	);
}

function Trigo() {
	var select = document.getElementById("selTrigo");
	var text = select.options[select.selectedIndex].text;
	console.log(text);
	if (text === "Sin") {
		document.getElementById("ans").innerHTML = Math.sin(
			parseFloat(document.getElementById("ans").innerHTML)
		).toFixed(4);
	} else if (text === "Cos") {
		document.getElementById("ans").innerHTML = Math.cos(
			parseFloat(document.getElementById("ans").innerHTML)
		).toFixed(4);
	} else if (text === "Tan") {
		document.getElementById("ans").innerHTML = Math.tan(
			parseFloat(document.getElementById("ans").innerHTML)
		).toFixed(4);
	} else if (text === "Sinh") {
		document.getElementById("ans").innerHTML = Math.sinh(
			parseFloat(document.getElementById("ans").innerHTML)
		).toFixed(4);
	} else if (text === "Cosh") {
		document.getElementById("ans").innerHTML = Math.cosh(
			parseFloat(document.getElementById("ans").innerHTML)
		).toFixed(4);
	} else if (text === "Tanh") {
		document.getElementById("ans").innerHTML = Math.tanh(
			parseFloat(document.getElementById("ans").innerHTML)
		).toFixed(4);
	}
}
