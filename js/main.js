// Load Google Charts packages
// Load the Visualization API, chart package and table package
google.load("visualization", "1.0", {packages:["corechart"]});
google.load("visualization", "1.0", {packages:["table"]});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);
google.setOnLoadCallback(drawChart2);
google.setOnLoadCallback(drawTable);

// Declare metric ID's, values, goals, names and categories
var metrics=["metric1","metric2","metric3"];
var metricnames=["metric1name","metric2name","metric3name"];
var metriccats=["Category1","Category2","Category3"];
var values=[85,68,300];
var goals=[80,70,300];
var names=["Attendance Rate","GED Pass Rate","Enrollment"];
var categories=["School Environment","Student Achievement","Demographics and Enrollment"];

// Write metric values, names and categories in HTML file
window.onload = function() {
	for (var i=0, total=values.length; i < total; i++) {
		document.getElementById(metrics[i]).innerHTML=values[i];
		document.getElementById(metricnames[i]).innerHTML=names[i];
		document.getElementById(metriccats[i]).innerHTML=categories[i];
	}
};

// Apply conditional formatting to metrics, based on if they meet/exceed their goal.
$(document).ready(function() {
	for (var i=0,  total=metrics.length; i < total; i++) {
		if ((metrics[i]> 0) && (metrics[i] < goals[i])) {
			var myElement = document.querySelector("#metric1");
			myElement.style.backgroundColor = "#f76e6e";
			
			//$(metrics[i]).css('backgroundColor', '#f76e6e'); 
		}
		else {
			var myElement = document.querySelector("#metric1");
			myElement.style.backgroundColor = "#99faa0";
			
			//$(metrics[i]).css('backgroundColor', '#99faa0'); 
		}
 }	