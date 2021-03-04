const container = document.getElementById('container');
let gridNumber = 20;
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

var gridItems = document.querySelectorAll('.gridSquare');
gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
  }));

/*
hover
clear button 
prompt
size slider



*/