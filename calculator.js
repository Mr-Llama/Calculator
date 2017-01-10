// JavaScript Document

// Change Display
funtion d(val)  {
	document.getElementById("d").value = val;
}

// Type numbers and operators
funtction v(val) {
		document.getElementById("d").value += val;
}

// Evaluate the expression
function e() {
		try {
			  d(eval(document.getElementById("d").value));
		}
		catch(err) {
				d("Error");
		}
}