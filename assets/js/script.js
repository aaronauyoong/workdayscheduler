// Define main variables
let timeNow = moment();
let hourNow = moment().hour();
let eventSaveBtn = $(".saveBtn");

// console.log(hourJSON);

// Hourly variables
// let time9 = $("#9am").text();
// let time10 = $("#10am").text();
// let time11 = $("#11am").text();
// let time12 = $("#12pm").text();
// let time13 = $("#1pm").text();
// let time14 = $("#2pm").text();
// let time15 = $("#3pm").text();
// let time16 = $("#4pm").text();
// let time17 = $("#5pm").text();
// console.log(time9);
// console.log(time11);

// Array to store each hour (extracted from html timeblock id)
let $arrayTime = [];
$('textarea').each(function(){
    let id = $(this).attr('id');
    $arrayTime.push(id);
});

let arrayExtract = $arrayTime[1]
console.log(arrayExtract)
console.log($arrayTime);

// Display current time by using moment.js, and updating time every second using jQuery
let updateTime = function () {
    date = moment(new Date())
    datetime.html(date.format("dddd, MMMM Do YYYY hh:mm:ss a"));
};

$(document).ready(function () {
    datetime = $('#currentDay')
    updateTime();
    setInterval(updateTime, 1_000);
});

// For loop to set timeblock colour

// for (let index = 0; index <= $arrayTime.length; index++) {
//     if (hourNow === $arrayTime[index]) {
//         $("textarea").addClass("present")
//     } else if (hourNow > $arrayTime[index]) {
//         $("textarea").addClass("future").removeClass("present")
//     } else {
//         $("textarea").addClass("past").removeClass("future present")
//     };

// };

// function updateTimeblock() {
//     // current hour = hourNow

//     // Loop over time blocks
//     $(".time-block").each(function () {
//         let timeBlockHour = parseInt($(this).attr("id"));

//         console.log($(this).find("textarea")[0]);

//         if (hourNow === timeBlockHour) {
//             $(this).find("textarea")[0].element.classList.add("present")
//         } else if (hourNow > timeBlockHour) {
//             $(this).find("textarea")[0].element.classList.add("future")
//         } else {
//             $(this).find("textarea")[0].element.classList.add("past")
//         };
//     });

// }

// updateTimeblock();

// Function for time block colour - colour coded to represent past, present or future
// function setTimeblockColor() {

//     for (let index = 9; index <= $arrayTime; index++) {
    
//         if (hourJSON === $arrayTime[index]) {
//             $("#9").addClass("present")
//         } else if (hourJSON > $arrayTime[index]) {
//             $("#9").addClass("future")
//         } else {
//             $("#9").addClass("past")
//         };
        
//     };

    // hourJSON === time9 ? $("#9am").addClass("present")
    // : hourJSON > time9 ? $("#9am").addClass("future")
    // : $("#9am").addClass("past");

    // hourJSON === time10 ? $(".hour").addClass("present")
    // : hourJSON > time10 ? $(".hour").addClass("future")
    // : $(".hour").addClass("past");

    // hourJSON === time11 ? $("textarea").addClass("present")
    // : hourJSON > time11 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

    // hourJSON === time12 ? $("textarea").addClass("present")
    // : hourJSON > time12 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

    // hourJSON === time13 ? $("textarea").addClass("present")
    // : hourJSON > time13 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

    // hourJSON === time14 ? $("textarea").addClass("present")
    // : hourJSON > time14 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

    // hourJSON === time15 ? $("textarea").addClass("present")
    // : hourJSON > time15 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

    // hourJSON === time16 ? $("textarea").addClass("present")
    // : hourJSON > time16 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

    // hourJSON === time17 ? $("textarea").addClass("present")
    // : hourJSON > time17 ? $("textarea").addClass("future")
    // : $("textarea").addClass("past");

// };

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

// Replace text in divs with hour class to AM/PM 
// function replaceHours() {
//     $("#9am").replaceWith('<div class="hour col-2"> 9AM </div>');
//     $("#10am").replaceWith('<div class="hour col-2"> 10AM </div>');
//     $("#11am").replaceWith('<div class="hour col-2"> 11AM </div>');
//     $("#12pm").replaceWith('<div class="hour col-2"> 12PM </div>');
//     $("#1pm").replaceWith('<div class="hour col-2"> 1PM </div>');
//     $("#2pm").replaceWith('<div class="hour col-2"> 2PM </div>');
//     $("#3pm").replaceWith('<div class="hour col-2"> 3PM </div>');
//     $("#4pm").replaceWith('<div class="hour col-2"> 4PM </div>');
//     $("#5pm").replaceWith('<div class="hour col-2"> 5PM </div>');
// };

// setTimeblockColor();
// replaceHours();
startDayScheduler();
