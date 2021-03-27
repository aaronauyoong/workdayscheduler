// Define main variables
let timeNow = moment();
let hourNow = moment().hour();
let eventSaveBtn = $(".saveBtn");

// Display current time by using moment.js, and updating time every second using jQuery
let updateTime = function () {
    date = moment(new Date())
    datetime.html(date.format("dddd, MMMM Do YYYY"));
};

$(document).ready(function() {
    datetime = $('#currentDay')
    updateTime ();
    setInterval (updateTime, 1_000);
});

// Function for time block colour - colour coded to represent past, present or future
function setTimeblockColor() {

    let compareHour = $("#hour")
    if (hourNow === compareHour) {
        $("textarea").addClass("present");
    } else if (hourNow > compareHour) {
        $("textarea").addClass("future");
    } else if (hourNow > compareHour) {
        $("textarea").addClass("past");
    } else {
        // for when it hits midnight and early morning before work hours
        $("textarea").addClass("future");
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

setTimeblockColor();
activateWorkPlanner();

// Replace text in divs with hour class to AM/PM 

for (let index = 9; index <= 17; index++) {
    const hour12 = index > 12 ? index - 12 : index;
    const meridiem = index < 12 ? "AM" : "PM";
    const hourInput = hour12 + meridiem;

    function replaceHours() {
    }

    $(".hour").replaceWith('<div class="hour col-2"> hour12 meridiem </div>');
};