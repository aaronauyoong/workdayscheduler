// Define main variables
let timeNow = moment();
let hourNow = moment().hour();
let eventSaveBtn = $(".saveBtn");


let comparingHour =  $(".hour").text();

console.log(comparingHour)


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

    let compareHour = $(".hour").text();

    if (hourNow === compareHour) {
        $("textarea").addClass("present");
    } else if (hourNow > compareHour) {
        $("textarea").addClass("future");
    } else {
        $("textarea").addClass("past");
    // } else {
    //     // for when it hits midnight and early morning before work hours
    //     $("textarea").addClass("future");
    }
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
