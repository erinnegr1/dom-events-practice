
let btnCounter=document.querySelector("#btn")
let display=0;
btnCounter.addEventListener('click', function() {
  display++
  console.log(display);
  let counter=document.querySelector("#display")
  counter.textContent=display;
})


