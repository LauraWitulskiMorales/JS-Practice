let size = 8;
let board = "";

for (let row = 0; row < size; row++) {
  for (let column = 0; column < size; column++) {
    if ((row + column) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);