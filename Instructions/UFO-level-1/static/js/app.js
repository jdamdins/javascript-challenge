// from data.js
var tableData = data;

// Select the form
var tbody = d3.select("tbody");
// 
tableData.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  }); 

// Select the button
var selector = d3.select("#filter-btn");

// Select the form
//var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
selector.on("click", runEnter);
//form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
  tbody.html("")
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);

  //Filtering the data with input value
  var result=tableData.filter(x => x.datetime === inputValue)
  console.log(result);

 //Showing the result
  result.forEach(function(UFOReport) {
    console.log(UFOReport);
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  }); 

}




