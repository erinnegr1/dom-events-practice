////// Chessboard demo
const main = document.querySelector("main");

function makeChessBoard(numRows, numColumns){

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("div");
    row.classList.add("chess-row");
  
    for (let j = 0; j < numColumns; j++){
      const tile = document.createElement("div");
      tile.classList.add("chess-tile");
      
      if (i % 2 == 1){
        if (j % 2 == 0){
          tile.classList.add('black');
        }
      }else {
        if (j % 2 == 1){
          tile.classList.add('black');
        }
      }
      
      row.append(tile);
    }
  
   main.append(row);
  }
  
}

//makeChessBoard(8,8);

// syntax
// ParentHTMLElement.append(ChildHTMLElement)
/*
const title = document.createElement('h1');
title.innerText = "Hello World";

const title2 = document.createElement('h2');
title2.innerText = "Goodbye world";

main.append(title);
main.appendChild(title2);

// QuerySelector singular returns the first matching child
// QuerySelectorAll returns an array of ALL matching children

const titles = document.querySelectorAll('h1');

for (let i = 0; i < titles.length; i++){
  const title = titles[i];
  title.remove();
}
*/


///////// Button demo
const button = document.querySelector('button');
let i = 0;

function addHiToMain(){
  const greeting = document.createElement('h1');
  i++;
  greeting.textContent = i;
  main.append(greeting);
}

button.addEventListener('click', addHiToMain);