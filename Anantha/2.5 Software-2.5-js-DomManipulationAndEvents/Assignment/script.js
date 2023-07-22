
const add = () => {
  let num1, num2;
  num1 = parseInt(document.getElementById("firstnumber").value);
  num2 = parseInt(document.getElementById("secondnumber").value);
  addition(num1,num2);
}
const substratct = () => {
  let num1, num2;
  num1 = parseInt(document.getElementById("firstnumber").value);
  num2 = parseInt(document.getElementById("secondnumber").value);
  substraction(num1,num2);
}

const multiply = () => {
  let num1, num2;
  num1 = parseInt(document.getElementById("firstnumber").value);
  num2 = parseInt(document.getElementById("secondnumber").value);
  multiplication(num1,num2);
}

const divide = () => {
  let num1, num2;
  num1 = parseInt(document.getElementById("firstnumber").value);
  num2 = parseInt(document.getElementById("secondnumber").value);
  division(num1,num2);
}

document.getElementById("add").addEventListener("click",add);
document.getElementById("substract").addEventListener("click",substratct);
document.getElementById("multiply").addEventListener("click",multiply);
document.getElementById("divide").addEventListener("click",divide);

function addition(num1,num2)
{
  let  sum;
  sum = num1 + num2;
  document.getElementById("answer").innerText = sum;
}

function substraction(num1,num2)
{
  let  diff;
  diff = num1 - num2;
  document.getElementById("answer").innerText = diff;
}

function multiplication(num1,num2)
{
  let  mul;
  mul = num1 * num2;
  document.getElementById("answer").innerText = mul;
}
function division(num1,num2)
{
  let  d;
  d = num1 / num2;
  document.getElementById("answer").innerText = d;
}

console.log("Finished");