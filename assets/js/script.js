// Define main variables
let timeNow = moment();
let hourNow = moment().hour();
let hourJSON = JSON.stringify(hourNow);
let eventSaveBtn = $(".saveBtn");

console.log(hourJSON);

// Hourly variables
let time9 = $("#9").text();
let time10 = $("#10").text();
let time11 = $("#11").text();
let time12 = $("#12").text();
let time13 = $("#13").text();
let time14 = $("#14").text();
let time15 = $("#15").text();
let time16 = $("#16").text();
let time17 = $("#17").text();

console.log(time9);
console.log(time11);

// Display current time by using moment.js, and updating time every second using jQuery
let updateTime = function () {
    date = moment(new Date())
    datetime.html(date.format("dddd, MMMM Do YYYY hh:mm:ss a"));
};

$(document).ready(function() {
    datetime = $('#currentDay')
    updateTime ();
    setInterval (updateTime, 1_000);
});


// Function for time block colour - colour coded to represent past, present or future
function setTimeblockColor() {

    hourJSON === time9 ? $("#9am").addClass("present")
    : hourJSON > time9 ? $("#9am").addClass("future")
    : $("#9am").addClass("past");

    hourJSON === time10 ? $(".hour").addClass("present")
    : hourJSON > time10 ? $(".hour").addClass("future")
    : $(".hour").addClass("past");

    hourJSON === time11 ? $("textarea").addClass("present")
    : hourJSON > time11 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON === time12 ? $("textarea").addClass("present")
    : hourJSON > time12 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON === time13 ? $("textarea").addClass("present")
    : hourJSON > time13 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON === time14 ? $("textarea").addClass("present")
    : hourJSON > time14 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON === time15 ? $("textarea").addClass("present")
    : hourJSON > time15 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON === time16 ? $("textarea").addClass("present")
    : hourJSON > time16 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON === time17 ? $("textarea").addClass("present")
    : hourJSON > time17 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

};

// Save button will allow user's plans to be saved to localStorage
eventSaveBtn.on('click', function() {
    let savedTime = $(this).siblings(".hour").text();
    let savedPlan = $(this).siblings(".userPlan").val();

    localStorage.setItem(savedTime, savedPlan);
});

// Upon page refresh, plans made will appear as saved/intended
function activateWorkPlanner() {
    $(".hour").each(function() {
        let currentHour = $(this).text();
        let currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".userPlan").val(currentPlan);
        }
    });
}

// Replace text in divs with hour class to AM/PM 

function replaceHours() {
    $("#9").replaceWith('<div class="hour col-2"> 9AM </div>');
    $("#10").replaceWith('<div class="hour col-2"> 10AM </div>');
    $("#11").replaceWith('<div class="hour col-2"> 11AM </div>');
    $("#12").replaceWith('<div class="hour col-2"> 12PM </div>');
    $("#13").replaceWith('<div class="hour col-2"> 1PM </div>');
    $("#14").replaceWith('<div class="hour col-2"> 2PM </div>');
    $("#15").replaceWith('<div class="hour col-2"> 3PM </div>');
    $("#16").replaceWith('<div class="hour col-2"> 4PM </div>');
    $("#17").replaceWith('<div class="hour col-2"> 5PM </div>');
};

setTimeblockColor();
replaceHours();
activateWorkPlanner();
