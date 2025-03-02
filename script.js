/* Date Update in html using js */
let dayMainName = document.getElementById("dayName");
let localFullDate = document.getElementById("localFullDate");
let date = document.getElementById("date");
let newDay = new Date().toDateString();
newDay = newDay.split(" ");
//newDay = `${newDay[0]} , ${newDay[1]} ${newDay[2]} ${newDay[3]}`;
let dayName = `${newDay[0]} ,`;
let localDate = `${newDay[1]} ${newDay[2]} ${newDay[3]}`;
dayMainName.innerText = dayName;
localFullDate.innerText = localDate;
/* Discover Button related js */
let discoverBtn = document.getElementById("discoverBtn");
discoverBtn.addEventListener("click", function () {
  window.location.href = "blog.html";
});
/* Task related js */
let task = document.getElementById("task");
let totalTask = document.getElementById("total-task");
let collectBtn = document.querySelectorAll(".collect-btn");
let activity = document.getElementById("activity-log");
for (let i = 0; i < collectBtn.length; i++) {
  collectBtn[i].addEventListener("click", function () {
    alert("Board Updated Successfully");
    collectBtn[i].setAttribute("disabled", true);
    collectBtn[i].style.backgroundColor = "#dee2e6";
    collectBtn[i].style.color = "#adb5bd";
    task.innerText = parseInt(task.innerText) - 1;
    totalTask.innerText = parseInt(totalTask.innerText) + 1;
    let newActivity = document.createElement("p");
    newActivity.classList.add("bg-gray-100", "p-2", "rounded-xl");
    let taskTitle =
      collectBtn[i].parentElement.parentElement.parentElement.childNodes[3]
        .innerText;
    newActivity.innerText = `You have Complete The Task ${taskTitle} at ${new Date().toLocaleTimeString()}`;
    activity.appendChild(newActivity);
    if (task.innerText == 0) {
      alert("Congrats !!! You have completed all the current task");
    }
  });
}
let clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {
  activity.innerHTML = "";
});

/* Background Change */

let themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let bgColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = bgColor;
});
