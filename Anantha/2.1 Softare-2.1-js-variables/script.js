let studentFirstName = "Brandon";
let studentLastName = "N";
let grade1 = 53;
let grade2 = 96;
let grade3 = 65;
let grade4 = 74;
let passingGrade = 80;
//1.Create a variable called average that computes for the average from grade1 to grade4
const avg = (grade1 + grade2 + grade3 + grade4)/4;
console.log("Average of Grades:",avg);
console.log("Using reducer", (() => {const array = [grade1,grade2,grade3,grade4]; return  array.reduce((x,y) => x+y)/array.length})());

//Using function
function average(array) {
    // if(!Array.isArray(array))
    // {
    //     return -1;
    // }

    if(!(array instanceof Array))
    {
        return -1;
    }
    sum = 0;
    array.forEach((element) => {
      sum += element;
    });
    return sum / array.length;
  }

  console.log("Using function", average([grade1,grade2,grade3,grade4]));



//2. Change the value of studentLastName to "Newman" 
console.log("Student Last Name, before re-assigning:", studentLastName);
studentLastName = "Newman";
console.log("Student Last Name, after re-assigning:", studentLastName);

//3. Print in console the following statement: "<value of studentFirstName> <value of studentLastName> has an average grade of <value of average>"
//ex. Jane Doe has an average grade of 100.
console.log(`${studentFirstName} ${studentLastName} has an average grade of ${avg}`);
//Alternatively,
console.log(studentFirstName + " " +  studentLastName + " has an average grade of " + avg);


//4. Write code that would answer this question: Did the student pass?
if(avg >= passingGrade)
{
    console.log(`${studentFirstName} ${studentLastName} passed with average grade of ${avg}`);
}
else
{
    console.log(`ohh!! ${studentFirstName} ${studentLastName}, you couldn't secure average grade ${passingGrade} required to pass. Better luck next time!!`);
}