/*Activity 4:

Math.random() is used to generate random values. It is commonly used in games, quizzes, simulations, lotteries, and random selections.
.includes() checks whether a string contains a particular word, character, or sequence. For example, email.includes("@") checks whether an email contains @.
.slice() extracts part of a string and returns a new string, while .split() breaks a string into parts and returns an array. */

//.includes()
//let email = "chinedu@gmail.com"
//console.log(email.includes("@"))

//let sentence = "I love Javascript";
//console.log(sentence.split(" "));

//let word = "I love Javascript";
//console.log(word.slice(0, 4));

//Part two: Predict the output
// Snippet A

console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

/*Output
5
4
5*/

/*Snippet B*/

let phrase = "I love JavaScript";
console.log(phrase.includes("love"));
console.log(phrase.split(" "));

/*Output

true
["I", "love", "JavaScript"] */

/*Snippet C*/

let num = 7;
console.log(Math.max(num, 10, 3));
console.log(Math.min(num, 10, 3));

/* Output

10
3 */

/* Part 3: Debugging Challenge */

/* First code */

let score = 87.6;
let rounded = Math.Round(score);
console.log("Rounded score: " rounded);

/* There are two errors here:

JavaScript uses Math.round() with a lowercase r, not Math.Round().
In console.log(), you need + (or a comma) between the string and rounded.

This shows that the first code has a capitalization error and a missing concatenation operator.

 Corrected code: */

 let score = 87.6;
let rounded = Math.round(score);
console.log("Rounded score: " + rounded);

/* Output 

Rounded score: 88 */

/* Second code */

let sentence = "Learning to code is fun"
let firstWord = sentence.split(" ")[0]
console.log(firstWord);

/* 
the second code does not contain an error.

The code is already correct. It splits the sentence wherever there is a space and [0] selects the first word. */

/* Output:
Learning */

/* Part Four

Step 1 — Understand the Problem

The goal is to create a Grade Rounder and Reporter program. The program should receive a student's name and exact numerical score, round the score to the nearest whole number, convert the student's name to uppercase, and then display a clear message containing the student's name and rounded score.

Step 2 — Identify Inputs

The program needs two inputs from the user:

Student's name
Student's exact numerical score

For example:

Name: grace
Score: 89.5

Step 3 — Identify Processing

We need the following JavaScript methods:

Math.round() — to round the student's score.
.trim() — to remove unnecessary spaces before or after the name.
.toUpperCase() — to convert the student's name to uppercase.
A template literal — to combine the name and rounded score into one message.

Step 4 — Identify Outputs

The final message should report the student's name in uppercase and the rounded score.

For example:

Student GRACE scored 90.

For Chuka:

Student CHUKA scored 100.

Step 5 — Plan the Solution

The plan is:

Get the student's name.
Remove unnecessary spaces from the name.
Convert the name to uppercase.
Get the student's numerical score.
Round the score using Math.round().
Create a message using a template literal.
Display the final message.

Step 6 — Write the Code

Here is a complete solution: */

let name = "grace";
let score = 89.5;


let studentName = name.trim().toUpperCase();
let roundedScore = Math.round(score);

let message = `Student ${studentName} scored ${roundedScore}.`;
console.log(message);


/* Step 7 — Test the Program

Test 1:

Input:

Name: grace
Score: 89.5

Output:

Student GRACE scored 90.

Test 2:

Input:

Name: Chuka
Score: 100

Output:

Student CHUKA scored 100.

Test 3:

Input:

Name: " Bisi " 
Score: 59.3

Because .trim() removes the extra spaces, the output is:

Student BISI scored 59.
Step 8 — Improve the Solution

Yes, trimming the name before converting it to uppercase makes the program more reliable.

For example, if the user enters:

"   Bisi   "

Without .trim(), the spaces would remain in the result.

With:

name.trim().toUpperCase()

the name becomes:

BISI

This gives us comprehensive

let name = " Bisi ";
let score = 59.3;


let studentName = name.trim().toUpperCase();
let roundedScore = Math.round(score);


let message = `Student ${studentName} scored ${roundedScore}.`;


console.log(message);

Expected output:

Student BISI scored 59.*/
