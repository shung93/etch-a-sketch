function tileHover(color) { 
    let tile = document.getElementsByClassName("tile");
    for (let i=0; i<tile.length; i++) {
        tile[i].addEventListener("mouseover", function(event) {
            tile[i].classList.add("tileColor")
        })
    }
};

function createBoard(size=16) {
    document.getElementById("sketchBoard").style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    
    const boardHeight = document.getElementById("sketchBoard").clientHeight;    
    const numNewTiles = (size ** 2);
    
    let tile = document.createElement('div');
    tile.className = 'tile';
    
    for (let i = 0; i < numNewTiles; i++) {
        let newTile = tile.cloneNode(true);
        document.getElementById("sketchBoard").appendChild(newTile);
    }
};

function clearBoard() {
    document.getElementById("clearBoard").addEventListener("click", function(event) {
        let tile = document.getElementsByClassName("tile");
        for (let i=0; i<tile.length; i++) {
            tile[i].classList.remove("tileColor")
        }
    })
};

function setNewSize() {
    document.getElementById("boardSize").addEventListener("click", function(event) {
        
        let boardSize = 999
        while (boardSize > 100 || boardSize < 0 || isNaN(boardSize)) {
            boardSize = prompt("Please provide a board size less than 101 squares wide.");
        }
        
        const currBoard = document.getElementById("sketchBoard");
        while (currBoard.firstChild) {
            currBoard.removeChild(currBoard.firstChild)
        }
        
        createBoard(size=boardSize);
        tileHover();
    })
}

createBoard(size=32);
tileHover();
setNewSize();
clearBoard();
