let grid = document.getElementsByClassName("grid")[0];
let gridElements = [];
let numberOfRows = 16;

grid.style.cssText = (`grid-template-columns: repeat(${numberOfRows}, auto);`);

for (let i = 0; i < numberOfRows * numberOfRows; i++)
{
    gridElements[i] = document.createElement("div");
    gridElements[i].setAttribute('class','gridElement');
    gridElements[i].style.cssText = ('border: 1px solid;');
    grid.appendChild(gridElements[i]);
}

