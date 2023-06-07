//For CSC669 Lab 2
function doCalculate() {
	var p = document.getElementById('p').value;
	var q = document.getElementById('q').value;
	var n = p*q;
	var on = (p-1)*(q-1);
	document.getElementById('n').value = n;
	document.getElementById('on').value = on;
	var e = getE(on);
	var d = getD(e,on);
	document.getElementById('e').value = e;
	document.getElementById('d').value = d;
	document.getElementById('public').value = "(" + e + "," + n + ")";
	document.getElementById('private').value = "(" + d + "," + n + ")";
}
function getE(on) {
	var a = 2;
	while (a < on) {
		if (gcd(a, on) == 1)
			break;
		else
			a++;
	}
	return a;
}
function gcd(a, b) {
	var temp;
	while(b>0) {
		r = a%b;
		if (r == 0)
			return b;
		a = b;
		b = r;
	}
}
function getD(a,b) {
	var temp = 1 ;
	var limit = b;
	while (temp < limit) {
		var c = b+1;
		if (c%a == 0) {
			temp = c/a;
			break;
		}
		b = b + limit;
	}
	return temp;
}
function doEncrypt() {
	var e = document.getElementById('e').value;
	var n = document.getElementById('n').value;
	var m = document.getElementById('m').value;
	
	var size = m.length;
	var index = 0;
	var newChar = "";
	var newCode ;
	
	while (index < size) {
		var code = m.codePointAt(index);
		var power = Math.pow(code,e);
		newCode = power%n;
		newChar += String.fromCharCode(newCode);
		index++;
	}
	
	document.getElementById('c').value = newChar;
}
function doDecrypt() {
	var d = document.getElementById('d').value;
	var n = document.getElementById('n').value;
	var c = document.getElementById('c2').value;
	
	var size = c.length;
	var index = 0;
	var newChar = "";
	var e = BigInt(d);
	var m = BigInt(n);
	
	/*var code = c.codePointAt(index);
	code = code.toString();
	code = BigInt(code);
	var power = code**e;
	var test = power%m;
	test = test.toString();
	newChar += String.fromCharCode(test);*/ 
	
	while (index < size) {
		var code = c.codePointAt(index);
		code = code.toString();
		code = BigInt(code);
		var power = code**e;
		var newCode = power%m;
		newCode = newCode.toString();
		newChar += String.fromCharCode(newCode);
		index++;
	}
	
	document.getElementById('m2').value = newChar;
}
