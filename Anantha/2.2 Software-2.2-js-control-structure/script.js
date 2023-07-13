//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.
let q1test = 3;
if(q1test % 3 == 0 || q1test % 5 == 0)
{
    console.log("Number is divisible by 3 or 5");
}
else
{
    console.log("Number is not divisible by 3 or 5");
}


//Add code here

//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 1999;
// let year = 2000;
// let year = 1900;
// let year = 2024;

if(year % 4 == 0)
{
    console.log("It's a leap year");
}
else
{
    console.log("It's not a leap year");
}


//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.
// let number = 0;
// do{
//     if(number % 3 == 0 || number % 4 == 0){
//         console.log(`Number ${number} is divisible by 3 or 4`);
//     }
//     number += 1;
// }while(number <= 100);

// number = 0;
// while (number <= 100){
//     if(number % 3 == 0 || number % 4 == 0){
//         console.log(`Number ${number} is divisible by 3 or 4`);
//     }
//     number += 1;
// }

for (let number = 0; number <=100; number ++){
    if(number % 3 == 0 || number % 4 == 0){
        console.log(`Number ${number} is divisible by 3 or 4`);
    }
}

