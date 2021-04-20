// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE
// geting a reference to the table body
var tbody = d3.select("tbody");



// append all data in table
data.forEach((ufoReport) => {
	var row = tbody.append("tr");
	Object.entries(ufoReport).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});

// Select the button using D3
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

	// Prevent the page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputDate = d3.select("#datetime");
	var inputCity = d3.select("#city");
	var inputState = d3.select("#state");
	var inputCountry = d3.select("#country");
	var inputShape = d3.select("#shape");

	// Get the value property of the input element
	var inputDateValue = inputDate.property("value");
	var inputCityValue = inputCity.property("value");
	var inputStateValue = inputState.property("value");
	var inputCountryValue = inputCountry.property("value");
	var inputShapeValue = inputShape.property("value");

	// filter UFO data. city , state, country and shape  by serch value


	// if satisfied:
	// print("You are satisfied with your pay.")
	// else:
	// print("You are not satisfied with your pay.")

	var filteredData = data;
	if (inputDateValue) {
		filteredData = filteredData.filter(row => row.datetime === inputDateValue);
	}
	if (inputCityValue) {
		filteredData = filteredData.filter(row => row.city === inputCityValue);
	}
	if (inputStateValue) {
		filteredData = filteredData.filter(row => row.city === inputCityValue);
	}
	if (inputCountryValue) {
		filteredData = filteredData.filter(row => row.city === inputCityValue);
	}
	if (inputShapeValue) {
		filteredData = filteredData.filter(row => row.city === inputCityValue);
	}

	tbody.html("");

	// append all filtered data in table
	filteredData.forEach((ufoSelected) => {
		var row = tbody.append("tr");
		Object.entries(ufoSelected).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
};

