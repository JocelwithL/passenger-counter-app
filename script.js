//1:06:43 - JavaScript Programming - Full Course

let count = 0;
let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-el");

function incrementedCount() {
     count += 1;
     countEl.innerHTML = count;
}

function savedCount() {
    countStr = count + " - ";
    savedEl.innerHTML += countStr;
    count = count - count;
    countEl.innerHTML = count;
}

function resetCount() {
    savedEl.innerHTML = "Previous Entries: ";
}