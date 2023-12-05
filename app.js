document.addEventListener('DOMContentLoaded', function(){
    const gridBox = document.getElementById('sketchBox');
    const gridSizeSlider = document.getElementById('sizeSelector')
    const clearBtn = document.getElementById('clear')
    let isDrawing = false;
    let gridSize = gridSizeSlider.value;
    gridSizeSlider.addEventListener('input', updateGrid);
    clearBtn.addEventListener('click', clearGrid);

    initGrid(gridSize);


function initGrid(gridSize){
    console.log('begin init')
    gridSize = gridSizeSlider.value;
    let squareSize = 512/gridSize;

    gridBox.innerHTML = '';

    for(i=0; i<gridSize**2; i++){
        var square = document.createElement('div');
        square.classList.add('gridSquare');
        square.classList.add('gridBorder');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px' ;
        square.addEventListener('mousedown', drawToggle)
        square.addEventListener('mouseover', draw)
        square.addEventListener('mouseup', drawToggle)
        square.setAttribute('draggable','false');
        gridBox.appendChild(square);
        console.log('appended')
    }
}

function drawToggle(event){
    isDrawing = !isDrawing;
    draw(event);
}

function draw(event){
    if(isDrawing){
        const square = event.target;
        square.style.backgroundColor = '#000000';
    }
}

function updateGrid(gridSize){
    clearGrid();
    initGrid(gridSize);
}

function clearGrid(){
    for(const child of gridBox.children){
        child.style.backgroundColor = '#ffffff';
    }

    console.log('cleared')
}

window.onload = function(){


    //initGrid(gridSizeSlider.value);
}
});