//TODOs:
// 0.0 Hint button

// 1. Select tile (specific one from all the tiles)
  //1.5 For Each (<--keyword) tile

// 2. Listen to the click event (all the tiles need to be listening)
  //2.5 Check if it is adjacent to the empty tile (i.e. if it can move)

// 3. If it can, it needs to swap places with the empty tile
  //3.5 (define the tile we clicked on and the empty one)

// 4. Check if player won
//==========================================================================

// 1. Select tile (specific one from all the tiles)
const tiles = document.querySelectorAll('td');
// forEach tile
tiles.forEach((tile) => {
  // 2. Listen to the click event (all the tiles need to be listening)
  tile.addEventListener('click', (event) => {
    //2.5 Check if it is adjacent to the empty tile (i.e. if it can move)
    if (canMove(event.currentTarget)) {
      //3. If it can, it needs to swap places with the empty tile
      moveTile(event.currentTarget)
      setInterval(console.log('halt'), 3000)
      checkIfWin()
    }
  })
})
const canMove = (tile) => {
  
  //3.5 (define the tile we clicked on and the empty one)
  const tileColumn = tile.cellIndex
  const tileRow = tile.parentElement.rowIndex
  
  const emptyTile = document.querySelector('.empty')
  const emptyTileColumn = emptyTile.cellIndex
  const emptyTileRow = emptyTile.parentElement.rowIndex

  // // tile is above emptytile in same column
  // (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1)

  // // tile is below emptytile in same column
  // (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1)

  // // tile is on the right of empty tile
  // (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1)

  // // tile is on the left of empty tile
  // (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1)

  // return true or false based on if the tile can move
  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1)
}

const moveTile = (currentTile) => {
  const emptyTile = document.querySelector('.empty')
  emptyTile.classList.remove('empty')
  emptyTile.innerText = currentTile.innerText
  currentTile.innerText = ''
  currentTile.classList.add('empty')
}

// 0.0 Hint button
const hintButton = document.getElementById('show-hint')
hintButton.addEventListener("click", (event) => {
  // div with .hint class has opacity of 0 (see-through/invisible)
  // need to give it the class 'active' (see css) to change the opacity to 1
  document.querySelector('.hint').classList.toggle('active')
})

const checkIfWin = () => {
  // [1,2,3,4,5,6,8,7,9,10,..., ''/NaN].join() === [11,15,13,1,7,6,8,9..., ''/NaN].join()
  const tilesOrder = Array.from(document.querySelectorAll('td')).map(td => Number.parseInt(td.innerText, 10))
  console.log(tilesOrder.join())
  if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
    alert("You win!")
  }
}