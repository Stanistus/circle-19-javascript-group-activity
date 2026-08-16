/*
Activity 1: The Digital Memory Box
Part 1: Group Discussion
1. How would a variable help a program remember a user's name?
A variable acts like a labeled storage box in the computer's memory. Once the user's name is stored in a variable (e.g., userName), the program can reference that variable later — such as in a greeting — without asking the user again.
2. Difference between console.log(), alert(), prompt(), and confirm()?
console.log() prints output to the browser's developer console — useful for debugging, invisible to regular users. alert() shows a popup message the user must dismiss — used for simple notifications. prompt() shows a popup with a text input and returns whatever the user types (as a string) — used to collect input. confirm() shows a popup with OK/Cancel buttons and returns true or false — used to confirm a decision. A programmer picks alert/prompt/confirm when they need to interact with the end user, and console.log when they only need to inspect values while building/debugging.
3. What does let allow that const doesn't, and why choose const anyway?
let allows the variable to be reassigned later; const locks the variable to its initial value and throws an error if you try to reassign it. Programmers choose const on purpose to signal 'this value should never change,' which prevents accidental reassignment bugs and makes the code easier for others to reason about.
4. Why does JavaScript need different data types instead of one type for everything?
Different types let JavaScript treat data appropriately — numbers can be added and compared mathematically, strings can be joined and searched, booleans can drive true/false logic. Using the correct type prevents nonsensical operations (like trying to do math on a sentence) and makes the language more efficient and less error-prone.
5. What problems arise if teammates use different variable names for the same data?
It creates confusion about which variable is the 'real' source of truth, makes the code harder to read, causes bugs when one part of the program updates userName but another still reads name1, and makes merging code or debugging much more difficult.
*/

// Part 2: Predict the Output

// Snippet A

let age = 25;
console.log(age);
 // output: 25
age = "twenty-five";
console.log(age);
// Output: 25 "twenty-five" 

// Snippet B
const isRaining = true;
console.log("Is it raining? " + isRaining);

// output: "Is it raining? true"
// Output: "Is it raining? true" — this is because the boolean true is converted to the string "true" when concatenated.

// Snippet C
let favoriteNumber;
console.log(favoriteNumber);

// Output: undefined — a variable declared without a value automatically holds undefined.
// Part 3: Debugging Challenge

/*
let userName = "Amara"
console.log(username);
 
Const favoriteColor = "blue";
console.log(favoriteColor);
*/

// Issues found:
// 1. username (lowercase) is not the same variable as userName — JavaScript is case-sensitive, so this throws a ReferenceError.
// 2. Const is capitalized — the keyword must be lowercase const, otherwise it's a SyntaxError.
// 3. Missing semicolon after "Amara" (minor style issue; JS auto-inserts one here but it's best practice to include it).
// Corrected code:

let userName = "Amara";
console.log(userName);
 
const favoriteColor = "blue";
console.log(favoriteColor);

// Corrected output: "Amara" then "blue".


// Part 4 & 5: Collaborative Technical Challenge + Extension

// Step 1 — Understand the Problem: The program should ask a new user for their name and age, then greet them and tell them the approximate year they were born.
// Step 2 — Identify Inputs: The user's name (text) and current age (number).
// Step 3 — Identify Processing: Subtract the age from the current year to estimate the birth year.
// Step 4 — Identify Outputs: A greeting message that includes the user's name and estimated birth year.
// Step 5 — Plan (plain English): 1) Ask for name. 2) Ask for age, convert to a number. 3) Get the current year. 4) Subtract age from current year. 5) Build and display a greeting with the name and birth year.
// Step 6 — Code (includes Part 5 hobby extension):

const userName = prompt("What is your name?");
const userAge = Number(prompt("How old are you?"));
const hobby = prompt("What is your favorite hobby?"); // stored as a string
 
const currentYear = new Date().getFullYear();
const birthYear = currentYear - userAge;
 
const message = `Welcome, ${userName}! You were born around ${birthYear}, and we hear you love ${hobby}.`;
console.log(message);
alert(message);

// Step 7 — Test the Program: Name "Sam", Age 20 → born ~2006. Name "Bola", Age 45 → born ~1981 (using 2026 as the current year).
// Step 8 — Improve the Solution: userName, userAge, and hobby are all clear, descriptive names — a new reader would immediately understand what each variable holds.
// Part 5 note: hobby is stored as a string, since a hobby is a piece of text (e.g., "reading"), not a number or true/false value.
