var box_container = document.querySelectorAll(".box");
var click = 0; // Initialize a variable to keep track of the number of clicks

// List of Combinations
var winningCombinations = [
    [1, 2, 3], // Vertical
    [4, 5, 6], // Vertical
    [7, 8, 9], // Vertical
    [1, 4, 7], // Horizontal
    [2, 5, 8], // Horizontal
    [3, 6, 9], // Horizontal
    [1, 5, 9], // Diagonal
    [3, 5, 7]  // Diagonal
];

for (var elem of box_container) {
    elem.addEventListener("click", handleClick);
}

let xAttempt = [];
let oAttempt = [];
let isWon = false;

function handleClick(event) {
    var id = event.target.id;

    if (!isBoxOccupied(id)) {
        var ptag = document.createElement("p");
        ptag.style.color = '#FAB201';
        box_container[id - 1].append(ptag);

        if (click % 2 === 0) {
            ptag.textContent = "X";
            click++;
            xAttempt.push(parseInt(id));
            result(xAttempt, "X");
        } else {
            ptag.textContent = "O";
            click++;
            oAttempt.push(parseInt(id));
            result(oAttempt, "O");
        }
        if (click == 9 && !isWon) {
            resultBox.style.visibility = "visible";
            messageBox.textContent = "It's A Draw";
        }
    }
}

let resultBox = document.getElementById("result");
let messageBox = document.getElementById("message");

function result(playerArray, player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let check = true;
        for (let j = 0; j < winningCombinations[i].length; j++) {
            if (!playerArray.includes(winningCombinations[i][j])) {
                check = false;
                break;
            }
        }
        if (check) {
            isWon = true;
            resultBox.style.visibility = "visible";
            messageBox.textContent = player + " won the match!";
        }
    }
}

function isBoxOccupied(id) {
    var ptag = box_container[id - 1].querySelector("p");
    return ptag !== null;
}

var button = document.getElementById("button");
button.addEventListener("click", () => {
    location.reload();
});
