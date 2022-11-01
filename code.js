let grid = document.getElementsByClassName("grid")[0];
let gridElements = [];
let numberOfRows = 16;
let toggledRainbow = false;

let btnToggle = document.getElementById('toggleRainbow');
let btnChangeGridSize = document.getElementById('changeGridSize');

// render grid
renderGrid(numberOfRows);

btnChangeGridSize.addEventListener('click', function() {
    while (true)
    {
        let userInput = prompt ('Enter a value up to 100');
        if (userInput < 100) {
            grid.innerHTML = '';
            gridElements = [];
            renderGrid(userInput);
            break;
        }
    }

})

function renderGrid (numberOfRows) {
    grid.style.cssText = (`grid-template-columns: repeat(${numberOfRows}, auto);`);
    for (let i = 0; i < numberOfRows * numberOfRows; i++)
{
    gridElements[i] = document.createElement("div");
    gridElements[i].setAttribute('class','gridElement');
    gridElements[i].style.cssText = ('border: 1px solid;');
    gridElements[i].addEventListener('mouseover', function onMouseOver () {
        if (toggledRainbow)
        {
            gridElements[i].style.cssText = (`background-color: rgb${randomColor()};`);
        }
        else {
            gridElements[i].style.cssText = (`background-color: black`);
        }
    });
    grid.appendChild(gridElements[i]);
}
}

// returns random rgb value in the format (r, g, b)
function randomColor () {
    return `(${Math.floor (Math.random() * 255)}, ${Math.floor (Math.random() * 255)}, ${Math.floor (Math.random() * 255)})`;
}