// from data.js
var tableData = data;
  console.log(tableData);

// YOUR CODE HERE!

// 1. Write code that appends a table to your webpage & adds new rows of data for each UFO sighting
// from data.js
var tableData = data;

// Call <tbody> tag for data placement
var tBody = d3.select("tbody");
var ufoTable = d3.select("table");

//Call the table class & link to html table (**where column names are located)
var tClass = d3.select("class", "table table-striped");
ufoTable.attr("class", "table table-striped");

// Build table
    // 1. Loop through all rows in data.js
    // 2. Add both keys and values of data.js
    // 3. Send data to columns
    // 4. Use this syntax so data is displayed properly
function builder(ufos) {
    ufos.forEach((urows) => {
        var tRow = tBody.append("tr");
        Object.entries(urows).forEach(([key, value]) => {
            var tCol = tRow.append("td");
            tCol.text(value);
        });
    });
};

builder(tableData);

// Print arrays to console for debugging purposes
console.log(tableData);

// 2. Use dateform in your HTML doc and write JavaScript code to set filters
    // 1. Call filter id
    // 2. Call "datetime" key from data.js
    // 3. Use .on() to create event "click"
    // 4. Pull values from datetime
    // 5. Build new filtered table
    // **Stop page from refreshing "event.preventDefault()"

var filterBtn = d3.select("#filter-btn");

var dateInput = d3.select("#datetime");

filterBtn.on("click", function() {
    d3.event.preventDefault(); 

    tBody.html("");
    
    var callValue = dateInput.property("value");
    // Print input calls to console for test/debugging purposes
    console.log(callValue);

    var newTable = tableData.filter(tableData => tableData.datetime === callValue);
    // Print new table to console for debugging purposes
    console.log(newTable);

    builder(newTable);
});
