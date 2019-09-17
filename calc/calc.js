(function() {
	"use strict";

	var num = 0;

	var op = "";

	var flag = true;

	const dsp = document.getElementById("display");

	function clear() {
		num = 0;
		op = "";
		flag = true;
		document.getElementById("display").innerText = "0";
	}

	function addOrEqual() {
		if (op == "") {
			op = "+";
			num = Number(dsp.innerText);
		} else {
			num = eval(num + op + "("+dsp.innerHTML+")");
			dsp.innerHTML = num;
			op = ""; 
		}
		flag = true;
	}

	function minus() {
		if (flag) {
			dsp.innerHTML = "-";
			flag = false
		} else {
			if (op != "") {
				num = eval(num + op + "("+dsp.innerHTML+")");
				dsp.innerHTML = num;
			} else {
				num = Number(dsp.innerText);
			}
			flag = true;
			op = "-";
		}
	}

	function operator(opt) {
		if (!flag) {
			if (op != "") {
				num = eval(num + op + "("+dsp.innerHTML+")");
				dsp.innerHTML = num;
			} else {
				num = Number(dsp.innerText);
			}
			flag = true;
		}
		op = opt;
	}

	function init() {
		let nums = 10;
		for (var i = 0; i < nums; i++) {
			var id = "G" + i;
			var btn = document.getElementById(id);
			btn.addEventListener("click", function() {
				if (flag) {
					dsp.innerHTML = this.innerHTML;
					flag = false;
				} else {
					var temp = Number(dsp.innerHTML + this.innerHTML);
					if (Math.abs(temp) <= Number.MAX_SAFE_INTEGER) {
						dsp.innerHTML = temp;
					}
				}
				
			});
		}
		document.getElementById("dot").addEventListener("click", function() {
			if (!dsp.innerText.includes(".")) {
				if (flag) {
					dsp.innerText = ".";
					flag = false;
				} else {
					dsp.innerHTML += ".";
				}
				
			}
		});
		document.getElementById("plus").addEventListener("click", addOrEqual);
		document.getElementById("minus").addEventListener("click", minus);
		document.getElementById("times").addEventListener("click", () => 
			{operator("*")});
		document.getElementById("divide").addEventListener("click", () => 
			{operator("/")});
		document.getElementById("clear").addEventListener("click", clear);
	}

	window.addEventListener("load", init, false);
})();
