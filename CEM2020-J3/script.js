window.onload = function (){
	// alert("Testing");

	// Set variables:
	var formHandle = document.forms.art;
	var output1 = document.getElementById('output1');
	var output2 = document.getElementById('output2');

	var autogencoordinate = document.getElementById('autogencoordinate');

	// Calculate spread of disease:
	formHandle.onsubmit = calculate;


	// Function to generate random number:
	function randomNumber(){
		return Math.floor(Math.random() * 101);
	}	

	// Function to calculate smallest canvas coordinates:
	function calculate (form) {

		form.preventDefault();

		// Set variables:
		var N = parseInt(formHandle.n.value);
		console.log(N);

		// Used to test samples values provided in question:

		// var X1 = parseInt(formHandle.x1.value);
		// console.log(X1);
		// var Y1 = parseInt(formHandle.y1.value);

		// var X2 = parseInt(formHandle.x2.value);
		// var Y2 = parseInt(formHandle.y2.value);

		// var X3 = parseInt(formHandle.x3.value);
		// var Y3 = parseInt(formHandle.y3.value);

		// var X4 = parseInt(formHandle.x4.value);
		// var Y4 = parseInt(formHandle.y4.value);

		// var X5 = parseInt(formHandle.x5.value);
		// var Y5 = parseInt(formHandle.y5.value);

		var xarray = [];
		var yarray = [];


		var i = 1;

		while (i <= N) {

			var x = randomNumber();
			var y = randomNumber();

			xarray.push(x);
			yarray.push(y);

			console.log(x);
			console.log(y);

			i++;

			autogencoordinate.innerHTML += "<div>(" + x + "," + y +  ")</div>";
		}


		// Determine the coordinates of the bottom-left corner and top right corner of the frame:

		var xsorted = xarray.sort(function (a,b){return a-b});
		var ysorted = yarray.sort(function (a,b){return a-b});

		// Top Right Coordinates - add 1 to encompass the drop of paint:
		var xbig = xsorted[xsorted.length - 1] + 1;
		var ybig = ysorted[ysorted.length - 1] + 1;

		// Bottom Left Coordinates - minus 1 to encompass the drop of paint:
		var xsmall = xsorted[0] - 1;
		var ysmall = ysorted[0] - 1;

		console.log(xsmall);
		console.log(ysmall);

		console.log(xbig);
		console.log(ybig);

		output1.innerHTML = "Bottom left coordinates: (" + xsmall + "," + ysmall + ")";
		output2.innerHTML = "Top right coordinates: (" + xbig + "," + ybig + ")";

	};

}