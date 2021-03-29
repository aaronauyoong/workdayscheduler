// Define main variables
let eventSaveBtn = $(".saveBtn");

// Display current time by using moment.js, and updating time every second using jQuery
let updateTime = function () {
    date = moment(new Date())
    datetime.html(date.format("dddd, MMMM Do YYYY hh:mm:ss a"));
};

$(document).ready(function () {
    datetime = $('#currentDay')
    updateTime();
    setInterval(updateTime, 1_000);

    updateTimeblocks();
    // updates every 15 minutes
    setInterval(updateTimeblocks, 900_000);
});


function updateTimeblocks() {
    let hourNow = moment().hour();

    $(".time-block").each(function () {
        let timeBlockHour = parseInt($(this).attr("id"));

        $(this).find("textarea").removeClass("present past future");

        if (hourNow === timeBlockHour) {
            $(this).find("textarea").addClass("present")
        } else if (hourNow > timeBlockHour) {
            $(this).find("textarea").addClass("past")
        } else {
            $(this).find("textarea").addClass("future")
        };
    })
};

// Save button will allow user's plans to be saved to localStorage
eventSaveBtn.on('click', function() {
    let savedTime = $(this).siblings(".hour").text();
    let savedPlan = $(this).siblings(".userPlan").val();

    localStorage.setItem(savedTime, savedPlan);
});

// Upon page refresh, plans made will appear as saved/intended
function startDayScheduler() {
    $(".hour").each(function() {
        let thisHour = $(this).text();
        let thisPlan = localStorage.getItem(thisHour);

        if(thisPlan !== null) {
            $(this).siblings(".userPlan").val(thisPlan);
        }
    });
};

startDayScheduler();