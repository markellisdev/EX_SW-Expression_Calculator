// <-------- Variables ----------->

var firstNum = document.getElementById(num1);

var secondNum = document.getElementById(num2);

var addButton = document.getElementById(add);

var subButton = document.getElementById(subtract);

var multButton = document.getElementById(multiply);

var divButton = document.getElementById(divide);

var total;

// <-------------- Functions ----------->

//Checking to make sure both fields have numeric input
function verifyInput(true) {
	if (isNaN(firstNum.value || secondNum.value)) {
		alert("Please enter a number into each field");
	}
	else {
		a = firstNum.value;
		b = secondNum.value;
	}
};

total = function math(a, b, c) {
	if ()
}

//Is there a way to shorten (if addButton click is true)?


// <-------------- Event Listeners ------------>

addButton.addEventListener("click", verifyInput);

subButton.addEventListener("click", verifyInput);

multButton.addEventListener("click", verifyInput);

divButton.addEventListener("click", verifyInput);