




let btnMinimize=document.querySelector("#btnMin") // grab the id for button
let size= 20;  // assigned a new variable text to a number
const lowNumber = 1;
btnMinimize.addEventListener('click', function() {  //added event listener to listen for click of butten
 size--  // decrementing by 1 each time it's clicked
 document.querySelector("#textstyle").style.fontSize = size+"px" //took the id textstyel and assigned it the fontsize to our variable text
// if statement to check if the px number is >< 1px.
// if greater, continue,
// else stop
if (size <= 1) {
  document.querySelector("#textstyle").style.fontSize = lowNumber+"px" 
}
})


let btnMaximize=document.querySelector("#btnMax") // grab the id for button
let size2 = 20;  // assigned a new variable text to a number
const highNumber =100;
btnMaximize.addEventListener('click', function() {  //added event listener to listen for click of butten
 size2++  // decrementing by 1 each time it's clicked
 document.querySelector("#textstyle").style.fontSize = size2+"px" //took the id textstyel and assigned it the fontsize to our variable text
// if statement to check if the px number is >< 1px.
// if lower, continue,
// else stop
if (size2>=100) {
  document.querySelector("#textstyle").style.fontSize = highNumber+"px" 
}
})