// let hr = document.getElementById("di_hr");
// let min = document.getElementById("di_min");
// let sec = document.getElementById("di_sec");

// function updateclock() {
//   let date = new Date();
//   let hrs = date.getHours();
//   let mins = date.getMinutes();
//   let secs = date.getSeconds();
//   hr.innerHTML = hrs;
//   min.innerHTML = mins;
//   sec.innerHTML = secs;
// }
// setInterval(updateclock, 1000);
// updateclock();

// function changingFormat(){
//   let date = new Date();
//   let hrs = date.getHours();
//   let mins = date.getMinutes();
//   let secs = date.getSeconds();
//   if(date - 12){
    
//   }


// }



let hr = document.getElementById("di_hr");
let min = document.getElementById("di_min");
let sec = document.getElementById("di_sec");
let convertingPmAm = document.getElementById("ampm");
let button = document.getElementById("button");

let is12Hour = true; // default 12-hour format

function updateClock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = "AM";

    if (is12Hour) {
        if (hrs >= 12) ampm = "PM";
        if (hrs > 12) hrs -= 12;
        if (hrs === 0) hrs = 12;
        convertingPmAm.textContent = ampm;
    } else {
        convertingPmAm.textContent = ""; // 24-hour me AM/PM hide
    }

    hr.textContent = hrs.toString().padStart(2, "0");
    min.textContent = mins.toString().padStart(2, "0");
    sec.textContent = secs.toString().padStart(2, "0");
}

setInterval(updateClock, 1000);
updateClock();

// simple function jo HTML se call hoga
function changingFormat() {
    is12Hour = !is12Hour;
    button.textContent = is12Hour ? "Switch to 24 hrs" : "Switch to 12 hrs";
    updateClock();
}
