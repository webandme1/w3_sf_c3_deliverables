// function declaration
// 1. Max of two numbers
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  console.log(maxOfTwoNumbers(3, 9));
  
  // Function Expression
  // 2. Max of Three 
  // Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
    var maxOfThree = function(num1,num2,num3){
        console.log("Max of parameters are:", Array.from(arguments).sort()[arguments.length-1]);
    } 
    //console.log("Max of parameters are:", Math.max.apply(null,arguments));
    maxOfThree(2,3,1);


 // Function Declaration
 //3. Is Char a Vowel  
 //Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
  function isCharAVowel(c){
    console.log("Is char a vowel", ['a','e','i','o','u'].indexOf(c)!=-1);
  }
  isCharAVowel('d');
  isCharAVowel('e');

// Function Expression
//4. Sum of Array of numbers
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
//const sumArray = (a) => {let sum = 0; a.every(e => sum += e ); console.log("Sum of array of numbers : ",sum)};
// sumArray([2, 4, 5]);
const sumPromise = (a) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        let sum = 0; a.every(e => sum += e ); 
        resolve(sum);
    }, 2000 )
})};
const sumArray = async function(arr){
    return await sumPromise(arr);
}
sumArray([2, 4, 5]).then((sum) => {
    console.log("Sum of array of numbers : ",sum);
});


// Function Declaration
//5. Multiply array of numbers
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(a) {
    let product = 1; a.every(e => product *= e ); 
    console.log("Product of array of numbers : ",product)
};
multiplyArray([2, 4, 5]);


// Function Expression
// returns the number of arguments passed
// 6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numargs = function () {console.log("Number of arguments passed", arguments.length)};
// const numargs = (...args) => console.log("Number of arguments passed", args.length);
numargs("A", "B", "C", "D", "E");
numargs("1", "2");


// Function Declaration
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
// 7. Reverse String
const reverseString = (s) => console.log("Reverse string : ",  Array.from(s).reverse().join(''))
reverseString('rockstar');

// Function Expression
// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
// 8. Longest string Length
const longestStringLength = (a) => {
    max=0; 
    a.every(e => max = (e.length > max) ?  e.length : max); 
    console.log("Length of longest string is:", max);
}
longestStringLength(["Anantha", "Ramakrishnan", "Subramanian"]);


// Function Declaration
//Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(a, num){
    console.log("Strings lonkger than the number are : ", a.filter(e => e.length > num));
}

stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
