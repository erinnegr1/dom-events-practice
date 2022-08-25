




let btnMinimize=document.querySelector("#btnMin") // grab the id for button
let size= 20;  // assigned a new variable text to a number
btnMinimize.addEventListener('click', function() {  //added event listener to listen for click of butten
 size--  // decrementing by 1 each time it's clicked
 document.querySelector("#textstyle").style.fontSize = size+"px" //took the id textstyel and assigned it the fontsize to our variable text
// if statement to check if the px number is >< 1px.
// if greater, continue,
// else stop
})
 
 
 
 