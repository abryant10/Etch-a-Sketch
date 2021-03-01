const container = document.getElementById('container');
let gridNumber = 100;
let i = 0;

function makeTheBox (gridNumber) {
    while ( i < (gridNumber ** 2)) {
        var square = document.createElement("div");
        square.classList.add("gridSquare");
        container.style.gridTemplateColumns = (`repeat(${gridNumber}, 1fr`);
        container.style.gridTemplateRows = (`repeat(${gridNumber}, 1fr`);
        container.appendChild(square);
        i++;
    }
}

makeTheBox(gridNumber);

/*

loop while i is less than or equal to number col squared creat div with class for css
append div to conatiner 
make loop limit


*/