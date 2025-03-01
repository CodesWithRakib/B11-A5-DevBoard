let dayMainName = document.getElementById("dayName");
let localFullDate = document.getElementById("localFullDate");
let date = document.getElementById("date");
let newDay = new Date().toDateString();
newDay = newDay.split(" ");
let dayName = `${newDay[0]} ,`;
let localDate = `${newDay[1]} ${newDay[2]} ${newDay[3]}`;
newDay = `${newDay[0]} , ${newDay[1]} ${newDay[2]} ${newDay[3]}`;
dayMainName.innerText = dayName;
localFullDate.innerText = localDate;

let task = document.getElementById("task");
let totalTask = document.getElementById("total-task");
let collectBtn = document.querySelectorAll(".collect-btn");
let activity = document.getElementById("activity-log");
for (let i = 0; i < collectBtn.length; i++) {
  collectBtn[i].addEventListener("click", function () {
    alert("Board Updated Successfully");
    collectBtn[i].setAttribute("disabled", true);
    collectBtn[i].style.backgroundColor = "grey";
    collectBtn[i].style.color = "black";
    task.innerText = parseInt(task.innerText) - 1;
    totalTask.innerText = parseInt(totalTask.innerText) + 1;
    let newActivity = document.createElement("p");
    newActivity.classList.add("bg-gray-100", "p-2", "rounded-xl");
    let taskTitle =
      collectBtn[i].parentElement.parentElement.parentElement.childNodes[3]
        .innerText;
    newActivity.innerText = `You have Complete The Task ${taskTitle} at ${new Date().toLocaleTimeString()}`;
    activity.appendChild(newActivity);
  });
}
let clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {
  activity.innerHTML = "";
});
