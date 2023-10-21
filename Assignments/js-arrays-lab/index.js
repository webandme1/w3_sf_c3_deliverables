// Initialize the foods array
let foods = [];
console.log("Exercise 1 Result:\n", foods);
// Add 'pizza' & 'cheeseburger' to the foods array
foods.push('pizza', 'cheeseburger');
console.log(foods);

// Add 'taco' to the start of foods array
foods.unshift('taco');
console.log(foods);

// Access 'pizza' and assign to favFood
let favFood = foods[1];
console.log(favFood);

// Insert 'tofu' between 'pizza' & 'cheeseburger'
foods.splice(2, 0, 'tofu');
console.log(foods);

// Replace 'pizza' with 'sushi' & 'cupcake'
foods.splice(1, 1, 'sushi', 'cupcake');
console.log(foods);

// Use slice to get 'sushi' & 'cupcake'
const yummy = foods.slice(1, 3);
console.log(yummy);

// Get the index of 'tofu'
let soyIdx = foods.indexOf('tofu');
console.log(soyIdx);

// Create the allFoods string
let allFoods = foods.join(' -> ');
console.log(allFoods);

// Check if 'soup' exists in foods
let hasSoup = foods.includes('soup');
console.log(hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Add odd numbers to odds array
let odds = [];
nums.forEach(num => {
    if (num % 2 !== 0) {
        odds.push(num);
    }
});
console.log("Exercise 11 Result:", odds);

// Add numbers to fizz, buzz, and/or fizzbuzz arrays
let fizz = [];
let buzz = [];
let fizzbuzz = [];
nums.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) fizzbuzz.push(num);
    else if (num % 3 === 0) fizz.push(num);
    else if (num % 5 === 0) buzz.push(num);
});
console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
];

// Get the last nested array
let numList = numArrays[numArrays.length - 1];
console.log("Exercise 13 Result:", numList);

// Access number 66
let num = numArrays[2][1];
console.log("Exercise 14 Result:", num);

// Sum up all the numbers in numArrays
let total = 0;
numArrays.forEach(arr => {
    arr.forEach(num => {
        total += num;
    });
});
console.log("Exercise 15 Result:", total);
