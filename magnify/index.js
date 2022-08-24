




let btnMinimize=document.querySelector("#btnMin") // grab the id for button
let size= 20;  // assigned a new variable text to a number
btnMinimize.addEventListener('click', function() {  //added event listener to listen for click of butten
 size--  // decrementing by 1 each time it's clicked
 document.querySelector("#textstyle").style.fontSize = size+"px" //took the id textstyel and assigned it the fontsize to our variable text
// if statement to check if the px number is >< 1px.
// if greater, continue,
// else stop
})
 
 
 
 // for (let i = 20; i< 101; i++)  // at each click loop through and increase the number
 /*let variable =document.querySelector("#textstyle") // grab the element that holds the style font size
 textstyle.textContent=text;  // set the number from the for loop to equal the font size of the element
  
  
  console.log(i);
  let =document.querySelector("#display")
  counter.textContent=display;

  //textsize = textelement size
})
*/