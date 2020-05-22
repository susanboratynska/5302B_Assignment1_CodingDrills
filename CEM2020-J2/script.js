window.onload = function (){
	// alert("Testing");

	// Set variables:
	var formHandle = document.forms.epidemiology;
	var output = document.getElementById('output');

	
	// Calculate spread of disease:
	formHandle.onsubmit = calculate;


	function calculate (form) {

		form.preventDefault();

		// Set variables:
		var P = parseInt(formHandle.p.value);
		console.log(P);
		var Norig = parseInt(formHandle.n.value);
		var N = parseInt(formHandle.n.value);
		console.log(N);
		var R = parseInt(formHandle.r.value);
		console.log(R);

		var perror = document.getElementById('p-error');
		var nerror = document.getElementById('n-error');
		var rerror = document.getElementById('r-error');


		var totalInfected = 0;
		var days = 0;

		//Error handling:

		if (P > Math.exp(10, 7) || P < 0 || P == "" || isNaN(P)) {
			perror.innerHTML = "Please enter a value between 0 and 10^7.";
		} else {
			perror.innerHTML = "";
		}


		if (N < 0 || N == "") {
			nerror.innerHTML = "Please enter a positive number.";
		} else if (N > P ) {
			nerror.innerHTML = "Please enter a value lower than P";
		} else {
			nerror.innerHTML = "";
		}


		if (R == 0 ) {
			rerror.innerHTML = "Please select a value between 1-10.";
		} else {
			rerror.innerHTML = "";
		}

		console.log(totalInfected);

		// Determine the number of days when P > R:
		while (P > totalInfected) {
			totalInfected = N * R;
			console.log(totalInfected);

			N = totalInfected;
			console.log(P);

			days++;
			console.log(days);
		}

		output.innerHTML = "If <strong>" + Norig + "</strong> person(s) have the disease on Day 0 and they infect exactly <strong>" + R + "</strong> people but only on the very next day, it would take <strong>" + (days - 1) + "</strong> days for over <strong>" + P + "</strong> people to infected.";

	};

}