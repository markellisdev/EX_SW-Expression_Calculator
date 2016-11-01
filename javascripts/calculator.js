"use strict";

// <-------- Variables ----------->

var firstInput = document.getElementById("in1");

var secondInput = document.getElementById("in2");

var addButton = document.getElementById("add");

var subButton = document.getElementById("subtract");

var multButton = document.getElementById("multiply");

var divButton = document.getElementById("divide");



// <-------------- Functions ----------->

//Checking to make sure both fields have numeric input



function verifyInput(firstNum, secondNum, operator) {

	console.log("firstNum", firstNum);

	if (isNaN(firstNum) || isNaN(secondNum)) {
		alert("Please enter a number into each field");
	}
	else {
		console.log("both numbers", firstNum, secondNum);
		var result = calculator(firstNum, secondNum, operator);
		console.log("result", result);
		printOut(result);
	}
}

function addition(firstNum, secondNum) {
	console.log("add", firstNum, secondNum);
	return firstNum+secondNum;
	}
function subtraction(firstNum, secondNum) {
	return firstNum-secondNum;
	}
function multiplication(firstNum, secondNum) {
	return firstNum*secondNum;
	}
function division(firstNum, secondNum) {
	return firstNum/secondNum;
	}

function calculator(firstNum, secondNum, operator) {
	var total;
	if (operator === "add") {
	console.log("calculator" );
		total = addition(firstNum, secondNum);
	}
	else if (operator === "subtract") {
		total = subtraction(firstNum, secondNum);
	}
	else if (operator === "multiply") {
		total = multiplication(firstNum, secondNum);
	}
	else if (operator === "divide") {
		total = division(firstNum, secondNum);
	}
	return total;
}

function printOut(result) {
	console.log("result", result);
	document.getElementById("results").innerHTML = "Your total is " + result;
}


// <-------------- Event Listeners ------------>

// target main container then individual listener

var mathFunctions = document.getElementsByClassName("functions");
for (var i=0; i < mathFunctions.length; i++) {
	console.log("event", mathFunctions[i]);
	mathFunctions[i].addEventListener("click", addListener);
}



function addListener(event) {
	console.log("addListener", event);
	var firstNum = parseInt(in1.value);
	var secondNum = parseInt(in2.value);
	var buttonClicked = event.target.id;

	verifyInput(firstNum, secondNum, buttonClicked);
};
