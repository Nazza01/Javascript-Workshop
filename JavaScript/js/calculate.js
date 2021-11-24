function sqrt() {
	// Still need to get the variable or assign it
	return(Math.sqrt());
}

function ans() {
	
}

function posneg() {
	/*
	// If the variable is greater than 0, we want to assign negative
	if (var >= 0 ) {
	
	}
	// If the variable is less than 0, we want to assign positive
	else if (var <= 0) {
		var *= 1;
	}
	else {
		console.log("Could not assign a sign! a");
	}
	*/
	
	let answerElement = document.getElementById("answer");
	let answerNumber = abs(answerElement);
	
	console.log("answerNumber = " + answerNumber);
	answerElement.value = answerNumber;
}

function multiply() {
	let value1Element = document.getElementById("value1");
	let value2Element = document.getElementById("value2");
	let answerElement = document.getElementById("answer");
	let value1Number = value1Element.value;
	let value2Number = value2Element.value;
	let answerNumber = value1Number * value2Number;
	
	console.log("value1Number = " + value1Number);
	console.log("value2Number = " + value2Number);
	console.log("answerNumber = " + answerNumber);
	answerElement.value = answerNumber;
}

function addition() {
	let value1Element = document.getElementById("value1");
	let value2Element = document.getElementById("value2");
	let answerElement = document.getElementById("answer");
	let value1Number = value1Element.value;
	let value2Number = value2Element.value;
	let answerNumber = value1Number + value2Number;
	
	console.log("value1Number = " + value1Number);
	console.log("value2Number = " + value2Number);
	console.log("answerNumber = " + answerNumber);
	answerElement.value = answerNumber;
}

function divide() {
	let value1Element = document.getElementById("value1");
	let value2Element = document.getElementById("value2");
	let answerElement = document.getElementById("answer");
	let value1Number = value1Element.value;
	let value2Number = value2Element.value;
	let answerNumber = value1Number / value2Number;
	
	console.log("value1Number = " + value1Number);
	console.log("value2Number = " + value2Number);
	console.log("answerNumber = " + answerNumber);
	answerElement.value = answerNumber;
}

function subtract() {
	let value1Element = document.getElementById("value1");
	let value2Element = document.getElementById("value2");
	let answerElement = document.getElementById("answer");
	let value1Number = value1Element.value;
	let value2Number = value2Element.value;
	let answerNumber = value1Number - value2Number;
	
	console.log("value1Number = " + value1Number);
	console.log("value2Number = " + value2Number);
	console.log("answerNumber = " + answerNumber);
	answerElement.value = answerNumber;
}