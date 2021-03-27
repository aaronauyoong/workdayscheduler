// Define main variables

// Display current time by using moment.js, and updating time every second using jQuery
let updateTime = function () {
    date = moment(new Date())
    datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$(document).ready(function() {
    datetime = $('#currentDay')
    updateTime ();
    setInterval (updateTime, 1000);
});

// Function to create current day

// Function to allow textContent within already filled rows to be overwritten and saved to localStorage

// Function/button to save to localStorage

// Function/button to clear day (clear localStorage)