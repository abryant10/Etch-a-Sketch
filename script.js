const container = document.getElementById('container');
const clearButton = document.querySelector('.clearButton');
let i = 0;1
var slider = document.getElementById("myRange");
let gridNumber = slider.value;

function makeTheBox (gridNumber) {
    i = 0;
    while ( i < (gridNumber ** 2)) {
        var square = document.createElement("div");
        square.classList.add("gridSquare");
        square.dataset.darker = 0;
        container.style.gridTemplateColumns = (`repeat(${gridNumber}, 1fr`);
        container.style.gridTemplateRows = (`repeat(${gridNumber}, 1fr`);
        container.appendChild(square);
        i++;
    }

    var gridItems = document.querySelectorAll('.gridSquare');
  
  gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function (e) {
    e.target.dataset.darker++;
    switch (e.target.dataset.darker) {
        case '1' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 255) + 0)}, ${Math.floor((Math.random() * 255) + 0)}, ${Math.floor((Math.random() * 255) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;
        
        case '2' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 204) + 0)}, ${Math.floor((Math.random() * 204) + 0)}, ${Math.floor((Math.random() * 204) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '3' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 178.5) + 0)}, ${Math.floor((Math.random() * 178.5) + 0)}, ${Math.floor((Math.random() * 178.5) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '4' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 153) + 0)}, ${Math.floor((Math.random() * 153) + 0)}, ${Math.floor((Math.random() * 153) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '5' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 127.5) + 0)}, ${Math.floor((Math.random() * 127.5) + 0)}, ${Math.floor((Math.random() * 127.5) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '6' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 102) + 0)}, ${Math.floor((Math.random() * 102) + 0)}, ${Math.floor((Math.random() * 102) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '7' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 76.5) + 0)}, ${Math.floor((Math.random() * 76.5) + 0)}, ${Math.floor((Math.random() * 76.5) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '8' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 51) + 0)}, ${Math.floor((Math.random() * 51) + 0)}, ${Math.floor((Math.random() * 51) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '9' : e.target.style.backgroundColor = `rgba(${Math.floor((Math.random() * 25.5) + 0)}, ${Math.floor((Math.random() * 25.5) + 0)}, ${Math.floor((Math.random() * 25.5) + 0)}, ${0.15 * e.target.dataset.darker})`;
        break;

        case '10' : e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        break;
        default : e.target.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    }  
  }));
}

makeTheBox(gridNumber);

function clearGrid () {
    var gridNumber = slider.value;
    let allCells = document.querySelectorAll(".gridSquare").forEach(gridItem => {
        gridItem.style.backgroundColor = "white";
    })
    while (container.firstChild)  {
        container.removeChild(container.lastChild);
    }
    makeTheBox(gridNumber);
}

slider.oninput = clearGrid;

clearButton.addEventListener('click', clearGrid);


/*
TO DO? 
color / BW bottons
click pen on?
*/


/*
old function for window prompt for grid size:

function clearGrid () {
    var gridNumber = prompt('How large would you like the grid (no larger than 100)', '');
    while (isNaN(gridNumber) || (gridNumber > 100)){
        gridNumber = prompt('How large would you like the grid (no larger than 100)');
    }
    let allCells = document.querySelectorAll(".gridSquare").forEach(gridItem => {
        gridItem.style.backgroundColor = "white";
    })
    while (container.firstChild)  {
        container.removeChild(container.lastChild);
    }
    makeTheBox(gridNumber);
}
*/
