let op1: string,
	op2: string,
	opr: string,
	perform: string,
	flag = true,
	dot = true,
	performFlg = true,
	DOMdisp = document.getElementById("ans"),
	DOMwhlStr = document.getElementById("whlStr"),
	DOMselTrigo = document.getElementById("selTrigo").getElementsByTagName("option")[0];
console.log("dom:" + DOMdisp.innerHTML);

function btnpress(val) {
	if (flag !== true) {
		console.log(flag);
		reset();
	}
	console.log("press:" + flag);
	opr = DOMdisp.innerHTML;

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
	DOMdisp.innerHTML = opr;
}

function btnOpration(opration) {
	perform = opration;
	dot = true;
	op1 = DOMdisp.innerHTML;
	if (performFlg === true) {
		if (perform == "xy") {
			DOMwhlStr.innerHTML = op1 + "^";
		} else {
			DOMwhlStr.innerHTML = op1 + perform;
		}
	} else {
		DOMwhlStr.innerHTML = DOMdisp.innerHTML + perform;
	}
	DOMdisp.innerHTML = "0";
	performFlg = false;
}

function getAns() {
	flag = false;
	op2 = DOMdisp.innerHTML;
	let ans;
	DOMwhlStr.innerHTML = op1 + perform + op2;
	switch (perform) {
		case "+":
			ans = (parseFloat(op1) + parseFloat(op2)).toFixed(2);
			DOMdisp.innerHTML = ans;
			break;
		case "-":
			ans = (parseFloat(op1) - parseFloat(op2)).toFixed(2);
			DOMdisp.innerHTML = ans;
			break;
		case "*":
			ans = (parseFloat(op1) * parseFloat(op2)).toFixed(2);
			DOMdisp.innerHTML = ans;
			break;
		case "/":
			ans = (parseFloat(op1) / parseFloat(op2)).toFixed(2);
			DOMdisp.innerHTML = ans;
			break;

		case "mod":
			ans = parseInt(op1) % parseInt(op2);
			DOMdisp.innerHTML = ans;
			break;

		case "xy":
			ans = btnPower_xy();
			console.log("op1:" + op1 + " op2:" + op2 + " ans:" + ans);
			DOMdisp.innerHTML = ans;
			DOMwhlStr.innerHTML = op1 + "^" + op2;
			break;
	}
	op1 = ans;
	op2 = "0";
	perform = "";
	console.log("ans:" + flag);
}

function reset() {
	DOMdisp.innerHTML = "0";
	flag = true;
	dot = true;
	DOMselTrigo.selected = true;
}

function btnClear() {
	DOMdisp.innerHTML = "0";
	DOMwhlStr.innerHTML = "0";
	op1 = "0";
	op2 = "0";
	perform = "";
	performFlg = true;
	flag = true;
	dot = true;
	DOMselTrigo.selected = true;
}

function btnDel() {
	DOMdisp.innerHTML = DOMdisp.innerHTML.slice(0, -1);
	if (DOMdisp.innerHTML === "") {
		DOMdisp.innerHTML = "0";
	}
}

function btnAbs() {
	DOMdisp.innerHTML = Math.abs(parseInt(DOMdisp.innerHTML)).toString();
}

function changesign() {
	let ans = DOMdisp.innerHTML;
	ans[0] === "-"
		? (DOMdisp.innerHTML = Math.abs(parseInt(ans)).toString())
		: (DOMdisp.innerHTML = "-" + ans);
}

function btnFactorial() {
	let val = parseInt(DOMdisp.innerHTML);
	DOMwhlStr.innerHTML = DOMdisp.innerHTML + "!";
	let ans = 1;
	if (val == 0 || val == 1) {
		DOMdisp.innerHTML = "1";
	} else {
		for (var i = val; i >= 1; i--) {
			ans *= i;
		}
		DOMdisp.innerHTML = ans.toString();
	}
}

function btnPie() {
	DOMwhlStr.innerHTML = DOMdisp.innerHTML + "&#960";
	DOMdisp.innerHTML = (parseFloat(DOMdisp.innerHTML) * 3.14159).toFixed(2);
}

function btnLog() {
	DOMwhlStr.innerHTML = "log10(" + DOMdisp.innerHTML + ")";
	DOMdisp.innerHTML = Math.log10(parseFloat(DOMdisp.innerHTML)).toFixed(4);
}

function btnLn() {
	DOMwhlStr.innerHTML = "ln(" + DOMdisp.innerHTML + ")";
	DOMdisp.innerHTML = Math.log(parseFloat(DOMdisp.innerHTML)).toFixed(4).toString();
}

function btnPower() {
	DOMwhlStr.innerHTML = DOMdisp.innerHTML + "^2";
	DOMdisp.innerHTML = Math.pow(parseInt(DOMdisp.innerHTML), 2).toString();
}

function btnPower10() {
	DOMwhlStr.innerHTML = "10^" + DOMdisp.innerHTML;
	DOMdisp.innerHTML = Math.pow(
		10,
		parseFloat(parseFloat(DOMdisp.innerHTML).toFixed(2))
	).toString();
}

function btnPower_xy() {
	return Math.pow(parseInt(op1), parseInt(op2));
}

function btnSqrt() {
	DOMwhlStr.innerHTML = DOMdisp.innerHTML + "^1/2";
	DOMdisp.innerHTML = Math.sqrt(parseInt(DOMdisp.innerHTML)).toString();
}
function btnInverse() {
	DOMwhlStr.innerHTML = DOMdisp.innerHTML + "^-1";
	DOMdisp.innerHTML = Math.pow(parseInt(DOMdisp.innerHTML), -1).toString();
}

function btnE() {
	DOMwhlStr.innerHTML = DOMdisp.innerHTML + "e";
	DOMdisp.innerHTML = (parseFloat(DOMdisp.innerHTML) * 2.71828).toFixed(2);
}

function btnExpo() {
	DOMwhlStr.innerHTML = "Exp(" + DOMdisp.innerHTML + ")";
	DOMdisp.innerHTML = Math.exp(parseFloat(DOMdisp.innerHTML)).toString();
}

function Trigo(text: string) {
	/* var select = document.getElementById("selTrigo");
	var text = select.innerHTML; */
	console.log(text);
	DOMwhlStr.innerHTML = text + "(" + DOMdisp.innerHTML + ")";
	if (text === "Sin") {
		console.log("sin:" + DOMdisp.innerHTML);
		DOMdisp.innerHTML = Math.sin(parseFloat(DOMdisp.innerHTML)).toFixed(4);
	} else if (text === "Cos") {
		console.log("cos:" + DOMdisp.innerHTML);
		DOMdisp.innerHTML = Math.cos(parseFloat(DOMdisp.innerHTML)).toFixed(4);
	} else if (text === "Tan") {
		DOMdisp.innerHTML = Math.tan(parseFloat(DOMdisp.innerHTML)).toFixed(4);
	} else if (text === "Sinh") {
		DOMdisp.innerHTML = Math.sinh(parseFloat(DOMdisp.innerHTML)).toFixed(4);
	} else if (text === "Cosh") {
		DOMdisp.innerHTML = Math.cosh(parseFloat(DOMdisp.innerHTML)).toFixed(4);
	} else if (text === "Tanh") {
		DOMdisp.innerHTML = Math.tanh(parseFloat(DOMdisp.innerHTML)).toFixed(4);
	}
}
