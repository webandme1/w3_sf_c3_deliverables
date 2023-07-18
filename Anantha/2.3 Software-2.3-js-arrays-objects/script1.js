// Q1: 
// 1. Create an array called grades and put the following values: 56, 87, 99, 40
let grades = [56, 87, 99, 40]
// 2. Add another element at the end of the array with value: 68
//Add at the end
grades.push(68);

// //Add at the end
// grades[4]=68;

// //Add at beginning
// grades.unshift(68);

console.log(grades);

// 3. Remove the 1st element of the array
grades.shift();
// Alternatively
// delete grades[0]; //Leaves undefined so use pop or shift

// grades.pop(); // P.S. Remove last enelement

console.log(grades);


// 4. Change 40 to 60.
grades[2]=60;
console.log(grades);

// 5. Create a variable called average and compute for the average of the grades array.
//     Tip: you can create another variable as a placeholder for the sum first.

const average = grades.reduce((a,b)=> a + b) / grades.length;
console.log(average);
// Alternatively
// let sum = 0;
// grades.forEach((p) => sum += p );
// console.log(sum/grades.length);

// let sum = 0;
// for(num in grades)
// {
//     sum += grades[num];
// }
// const avg = sum / grades.length;
// console.log(avg);

// let sum = 0;
// for(num of grades)
// {
//     sum += num;
// }
// const avg = sum / grades.length;
// console.log(avg);

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
*/

const vehicle = {
    name                    : "car",
    brand                   : "Maruti",
    yearOfMake              : 2017,
    numberOfWheels          : 4,
    isEnvironmentFriendly   : false
}
console.log(vehicle);

// 2. Use the for-in loop to display both the properties and values of the object.
// for(key in vehicle)
// {
//     console.log(`Property ${key} has value ${vehicle[key]}.`);
// }

// let obj = [];
// console.log( obj.concat(Object.keys(vehicle),[], Object.values(vehicle)) );

// const obj = [...Object.keys(vehicle), ...Object.values(vehicle)];
// console.log(obj);


