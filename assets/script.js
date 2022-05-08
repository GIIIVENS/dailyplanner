

// gets todays date 
getTodaysDate();
function getTodaysDate() {
    var rightNow = moment().format('dddd, MMMM Do');
    $("#currentDay").text(rightNow);
}


// general  hours of the day, time, 
var todaysPlans = [
    {  
        hour: "9",
        time: "9",
        amOrPm: "am",
        dayLog: ""
    },
    {
        hour: "10",
        time: "10",
        amOrPm: "am",
        dayLog: ""
    },
    {
        hour: "11",
        time: "11",
        amOrPm: "am",
        dayLog: ""
    },
    {
        hour: "12",
        time: "12",
        amOrPm: "pm",
        dayLog: ""
    },
    {
        hour: "01",
        time: "1",
        amOrPm: "pm",
        dayLog: ""
    },
    {
        hour: "02",
        time: "2",
        amOrPm: "pm",
        dayLog: ""
    },
    {
        hour: "3",
        time: "3",
        amOrPm: "pm",
        dayLog: ""
    },
    {
        hour: "04",
        time: "4",
        amOrPm: "pm",
        dayLog: ""
    },
    {
        hour: "05",
        time: "5",
        amOrPm: "pm",
        dayLog: ""
    },
    
]





// visualize planneer
todaysPlans.forEach(function(thisHour) {

    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);


    var hourArea = $("<div>")
        .text(`${thisHour.hour}${thisHour.amORpm}`)
        .attr({
            "class": "col-md-2 hour"
    });

    var hoursandhours = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
        });
    var planData = $("<textarea>");
    hoursandhours.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("Ha")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("Ha")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("Ha")) {
        planData.attr({
            "class": "future"
        })
    }


    var SaveTheDateButton = $("<i class='far fa-save fa-lg'></i>")
    var saveItn = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveItn.append(SaveTheDateButton);
    hourRow.append(hourArea, hoursandhours, saveItn);
})


// button to save data to localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
})

// saves data to localStorage
function savedayLogs() {
    localStorage.setItem("theDay", JSON.stringify(todaysPlans));
}