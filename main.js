// This is the js file to check the answers on the World Capital's Quiz;
var i = 0;
var passingScore = 7;

function submitCapitals() {
	// Create variables for each countries response in form of ansCountry
	var ansAu = document.querySelector("input[name='australia']:checked").value;

	if (ansAu == "correct") {
		document.querySelector(".australia-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".australia-capital").innerHTML = "Wrong";
	}

	// Check to see if England is correct
	var ansEngland = document.querySelector("input[name='england']:checked").value;

	if (ansEngland == "correct") {
		document.querySelector(".england-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".england-capital").innerHTML = "Wrong!";
	}
	

	// Check to see if Germany is correct
	var ansGermany = document.querySelector("input[name='germany']:checked").value;

	if (ansGermany == "correct") {
		document.querySelector(".germany-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".germany-capital").innerHTML = "Wrong!";
	}

	// Check to see if Russia is correct
	var ansRussia = document.querySelector("input[name='russia']:checked").value;

	if (ansRussia == "correct") {
		document.querySelector(".russia-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".russia-capital").innerHTML = "Wrong!";
	}
	
	// Check to see if Mexico correct
	var ansMexico = document.querySelector("input[name='mexico']:checked").value;

	if (ansMexico == "correct") {
		document.querySelector(".mexico-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".mexico-capital").innerHTML = "Wrong!";
	}

	// Check to see if US is correct
	var ansUs = document.querySelector("input[name='us']:checked").value;

	if (ansUs == "correct") {
		document.querySelector(".us-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".us-capital").innerHTML = "Wrong!";
	}

	// Check to see if China is correct
	var ansChina = document.querySelector("input[name='china']:checked").value;

	if (ansChina == "correct") {
		document.querySelector(".china-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".china-capital").innerHTML = "Wrong!";
	}

	// check to see if Egypt is correct
	var ansEgypt = document.querySelector("input[name='egypt']:checked").value;

	if (ansEgypt == "correct") {
		document.querySelector(".egypt-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".egypt-capital").innerHTML = "Wrong!";
	}

	// check to see if Japan is correct
	var ansJapan = document.querySelector("input[name='japan']:checked").value;

	if (ansJapan == "correct") {
		document.querySelector(".japan-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".japan-capital").innerHTML = "Wrong!";
	}

	// Check to see if Italy correct
	var ansItaly = document.querySelector("input[name='italy']:checked").value;

	if (ansItaly == "correct") {
		document.querySelector(".italy-capital").innerHTML = "Correct!";
		i++;
	} else {
		document.querySelector(".italy-capital").innerHTML = "Wrong!";
	}
	
	if (i > 7) {
		document.querySelector(".score").innerHTML = "You passed!";
		document.querySelector(".numRight").innerHTML = i;
	} else {
		document.querySelector(".score").innerHTML = "You failed!";
		document.querySelector(".numRight").innerHTML = i;
	}
}
