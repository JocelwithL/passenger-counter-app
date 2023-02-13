let count = 0;
let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-el");

function incrementedCount () {
    count += 1;
    countEl.innerText = count;
}

function savedCount () {
    let countStr = " " + count + " - "
    savedEl.innerText = savedEl.innerHTML + countStr;
}

//1:06:43 - JavaScript Programming - Full Course
