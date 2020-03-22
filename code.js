/*
JavaScript Code
===============

This is the JavaScript file where all your code will live. You can start by 
writing your code in any one of the functions below. You can add functions as
well. 

To see your output from your JavaScript code, double click/launch output.html
to see it in a browser. If you update the code in this file then refresh the 
browser page to the see the new results.

The 3 functions below work as follows:
	1) Runs as soon as you open the accompaning output.html file in a browser.
	2) Runs after you press the Submit 2 button.
	3) Runs after you enter text in Input 3 and press the Submit 3 button.
*/


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

