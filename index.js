$('.fa-up').mouseenter(function () {
var currentValue = parseInt(document.querySelector(".faUp-val").textContent)
console.log(currentValue);
currentValue= (currentValue )+1;
console.log(currentValue);
document.querySelector(".faUp-val").innerText = currentValue;
console.log(currentValue);
});

$('.fa-down').mouseenter(function () {
  var currentValue = parseInt(document.querySelector(".faDown-val").textContent)
  console.log(currentValue);
  currentValue= (currentValue )+1;
  console.log(currentValue);
  document.querySelector(".faDown-val").innerText = currentValue;
  console.log(currentValue);
  });
