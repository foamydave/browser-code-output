
function Function1() {
	var x =	"Auto-runs when page loads.\n It also honors newline (\\n).";
	document.getElementById("result1").innerHTML = x;
}

function Function2() {
	var x = "Runs when button is pressed.";
	document.getElementById("result2").innerHTML = x;

}

function Function3() {
	var x = document.getElementById("input3").value;
	document.getElementById("result3").innerHTML = x;
}

