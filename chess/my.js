// chess board practice
// there are 8 rows and 8 tiles in each row, so this is a perfect time 
// create a nested loop
// outloop - rows, innerloop - squares

const main = document.querySelector('main');

const numRows = 3;
const numColumns = 3;

for(let i =0; i < numRows; i++){       //loop through up to the max number of rows
const row = document.createElement('div'); // create row element
row.classList.add('chess-row'); // create a class and add it to classlist

  for(let j=0; j < numColumns; j++){
      const tile = document.createElement('div');
      tile.classList.add('chess-tile');

     /* if (i % 2 == 1) {  // row odd
          if(j % 2 == 0) {  // tile even
              tile.classList.add('black')
          }
      } else { //row even
          if (j % 2 == 1) { //tile odd
              tile.classList.add('black');
          }
      }*/

      row.append(tile);  
}


main.append(row); // append to main section(we can only append to html elements)
}

// sometimes using non-semantic elements (ie div, section) because it's purely for layout purposes
// paragraph or article would otherwise better with actual content

