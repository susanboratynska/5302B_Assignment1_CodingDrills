window.onload = function (){
	// alert("Testing");

	// Set variables:
	var formHandle = document.forms.treats;

	var output = document.getElementById("output");

	var small = document.getElementById("small");
	var med = document.getElementById("med");
	var large = document.getElementById("large");

	var smalltreatval = 1;
	var medtreatval = 2;
	var largetreatval = 3;

	var sad = "Barley is sad.";
	var happy = "Barley is happy.";

	var totaltreatvalue;

	// Function to output select values:
	function selectvalues (idname){
		var i = 0;
		while (i <= 10){
			idname.innerHTML += "<option value='" + i + "'>" + i + "</option>";
			i++;
		}
	}

	selectvalues(small);
	selectvalues(med);
	selectvalues(large);




	// Calculate happiness score:

	formHandle.onsubmit = happinessscore;

	function happinessscore(form){
		form.preventDefault();
		var small = formHandle.smalltreats.value;
		var medium = formHandle.medtreats.value;
		var large = formHandle.largetreats.value;

		totaltreatvalue = (smalltreatval * parseInt(small)) + (medtreatval * parseInt(medium)) + (largetreatval * parseInt(large));
		console.log(totaltreatvalue);

		if(totaltreatvalue >= 10){
			output.innerHTML = happy;
		} else {
			output.innerHTML = sad; 
		}

	}






}