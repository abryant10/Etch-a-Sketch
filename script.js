const container = document.getElementById('container');
const clearButton = document.querySelector('.clearButton');
let gridNumber = 16;
let i = 0;


function makeTheBox (gridNumber) {
    i = 0;
    while ( i < (gridNumber ** 2)) {
        var square = document.createElement("div");
        square.classList.add("gridSquare");
        container.style.gridTemplateColumns = (`repeat(${gridNumber}, 1fr`);
        container.style.gridTemplateRows = (`repeat(${gridNumber}, 1fr`);
        container.appendChild(square);
        i++;
    }
  var gridItems = document.querySelectorAll('.gridSquare');
  
  gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
  }));
}

makeTheBox(gridNumber);



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



clearButton.addEventListener('click', clearGrid);


/*

size slider



*/