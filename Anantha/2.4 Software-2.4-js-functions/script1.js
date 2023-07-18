// console.log("functions");
//  Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    // If the number is divisible by 3, print 'Fizz'.
    // If the number is divisible by 5, print 'Buzz'.
    // If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    // If the number is not divisible by 3 or 5, print 'Pop'.
    function fizzBuzz(num){
        (num % 3 === 0) && (num % 5 === 0) ? console.log("Divisble by 3 and 5 : ", "FizzBuzz"):
        (num % 3 !== 0) && (num % 5 !== 0) ? console.log("Divisble by neither 3 nor 5 : ", "Pop"):
        num % 3 === 0 ? console.log("Divisble by 3 :", "Fizz") :
        num % 5 === 0 ? console.log("Divisble by 5 : ", "Buzz"):
        null;
    }


// Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz


/* Q2. Create a function called averager that gets the average of an array. */
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];
const averager = (p) => {
    let sum = 0;
    p.forEach(element => {
        sum += element;   
    });
    return sum / p.length;
}
let result = averager(prices);
console.log("Average:", result);


/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 
*/
const celToFah = function (c) {console.log("Celcius to Farnheit : ",9/5 * (c) + 32)};
const celToKel = function (c) {console.log("Celcius to Kelvin : ", c + 273.15)};

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);


/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8
Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/
const pow = (a,b) => console.log("a to Power b is : ", a**b);
pow(2, 3);