let grid = document.getElementsByClassName("grid")[0];
let gridElements = [];
let numberOfRows = 16;

grid.style.cssText = (`grid-template-columns: repeat(${numberOfRows}, auto);`);

for (let i = 0; i < numberOfRows * numberOfRows; i++)
{
    gridElements[i] = document.createElement("div");
    gridElements[i].setAttribute('class','gridElement');
    gridElements[i].style.cssText = ('border: 1px solid;');
    gridElements[i].addEventListener('mouseover', function onMouseOver () {
        gridElements[i].style.cssText = (`background-color: rgb${randomColor()};`);
    });
    grid.appendChild(gridElements[i]);
}

// returns random rgb value in the format (r, g, b)
function randomColor () {
    return `(${Math.floor (Math.random() * 255)}, ${Math.floor (Math.random() * 255)}, ${Math.floor (Math.random() * 255)})`;
}