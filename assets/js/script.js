// Define main variables
let timeNow = moment();
let hourNow = moment().hour();
let hourJSON = JSON.stringify(hourNow);
let eventSaveBtn = $(".saveBtn");

console.log(hourJSON);

// Hourly variables
let time1 = $("#nine").text();
let time2 = $("#ten").text();
let time3 = $("#eleven").text();
let time4 = $("#twelve").text();
let time5 = $("#thirteen").text();
let time6 = $("#fourteen").text();
let time7 = $("#fifteen").text();
let time8 = $("#sixteen").text();
let time9 = $("#seventeen").text();

console.log(time1);
console.log(time3);

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

    hourJSON == time1 ? $("textarea").addClass("present")
    : hourJSON > time1 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time2 ? $("textarea").addClass("present")
    : hourJSON > time2 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time3 ? $("textarea").addClass("present")
    : hourJSON > time3 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time4 ? $("textarea").addClass("present")
    : hourJSON > time4 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time5 ? $("textarea").addClass("present")
    : hourJSON > time5 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time6 ? $("textarea").addClass("present")
    : hourJSON > time6 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time7 ? $("textarea").addClass("present")
    : hourJSON > time7 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time8 ? $("textarea").addClass("present")
    : hourJSON > time8 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    hourJSON == time9 ? $("textarea").addClass("present")
    : hourJSON > time9 ? $("textarea").addClass("future")
    : $("textarea").addClass("past");

    // if (hourNow === time1) {
    //     $("textarea").addClass("present");
    // } else if (hourNow > time1) {
    //     $("textarea").addClass("future");
    // } else {
    //     $("textarea").addClass("past");
    // }
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
    $("#nine").replaceWith('<div class="hour col-2"> 9AM </div>');
    $("#ten").replaceWith('<div class="hour col-2"> 10AM </div>');
    $("#eleven").replaceWith('<div class="hour col-2"> 11AM </div>');
    $("#twelve").replaceWith('<div class="hour col-2"> 12PM </div>');
    $("#thirteen").replaceWith('<div class="hour col-2"> 1PM </div>');
    $("#fourteen").replaceWith('<div class="hour col-2"> 2PM </div>');
    $("#fifteen").replaceWith('<div class="hour col-2"> 3PM </div>');
    $("#sixteen").replaceWith('<div class="hour col-2"> 4PM </div>');
    $("#seventeen").replaceWith('<div class="hour col-2"> 5PM </div>');
};

setTimeblockColor();
replaceHours();
activateWorkPlanner();
