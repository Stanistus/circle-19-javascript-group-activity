// Activity 8
// Group Discussion PART 1
// 1.	Imagine a vending machine: you put in money and a selection, and it gives you a snack. How is that similar to how a function works?

// Answer: 
// A function is a reusable block of code designed to perform a particular task.
// A function is similar to vending machine because when a function is created and only declared it won’t do anything, until it is called.  So we can say; Create a function-declare-and call. With a vending machine¬¬, you give money(input)-the machine processes and gives a-output.

// 2.	What's the difference between a "parameter" and an "argument"? Many beginners mix these up, discuss until your group agrees on clear definitions.
// A parameter is the variable written inside the function definition while An argument is the actual value you provide when you call the function. So you can say Parameter = placeholder
// Argument = actual value. Parameter is in the function. Argument is in the function call.

// 3.	Why would a programmer create a function instead of just writing the same block of code every time it's needed?
// The biggest advantage is reusability. Instead of writing the same code repeatedly, you write it once with a function and reuse it.
// Functions also make programs: easier to read, easier to organize, easier to maintain, easier to debug, less repetitive.

// 4. If a function is declared but never called, what happens when the program runs? Discuss your prediction.
// When a function is declared but never called, the function does not execute. Declaring a function simply tells JavaScript that the function exists and what instructions it contains. JavaScript will not run those instructions until we actually call the function.

// 5. Can a function have more than one parameter? What do you think happens if you call the function without providing all the arguments it expects?

// A function can have multiple parameters. If you call a function without providing all the parameters it expects the output of the argument not provided will be undefined.
// Scenario: Build a "Tip Calculator Toolkit" made of two functions: one that calculates a tip based on a bill amount and tip percentage, and another that displays a formatted final message. 

// PART 2: Predict the Output
// Snippet a 
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Ifeoma");
greet("David");

// Here, name is the parameter. It is a placeholder for whatever name we provide inside the function.JavaScript combines "Hello, " with the value given to name. console.log("Hello, Ifeoma!");console.log("Hello, David!"); 

// Snippet B
function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(4, 7);
addNumbers(10);
// The first output would be 7+4=11
// The second out only one argumeny was provide, b is undefined. The result will be NaN.

// Snippet C
function sayHi() {
    console.log("Hi there!");
}

console.log("Before calling function");
sayHi();
console.log("After calling function");
// Final output
// Before calling function
// Hi there!
// After calling function

// Debug Challenge PART 3
function calculateArea(length, width) {
    console.log(length * width)

    function displayMessage(msg) {
        console.log(msg);
    }

    displayMessage("Area calculator ready");
    CalculateArea(5, 10);
}
// Error 1: displayMessage is in the wrong place, there is no closing } immediately after console.log(length * width). Instead, the code defines displayMessage inside calculateArea.

// The correct Code
// function calculateArea(length, width) {
//     console.log(length * width);
// }

// function displayMessage(msg) {
//     console.log(msg);
// }

// Error 2 JavaScript is case-sensitive.calculateArea the c is in lower case CalculateArea here the c is in uppercase, so they are considered as two different names.

// Corrected code
// function calculateArea(length, width) {
//     console.log(length * width);
// }

// function displayMessage(msg) {
//     console.log(msg);
// }

// displayMessage("Area calculator ready");
// calculateArea(5, 10);

// Part 4: Collaborative Technical Challenge
// Step 1 — understand the Problem: Explain what each function should do, separately. 
// Function 1would Calculate the tip
// This function receives: the bill amount and the tip percentage 
// It then calculates how much the tip should be.
// Function 2 would Display the final message
// The second function does not perform calculation instead takes the relevant information and creates a nice message and presents result.

// Step 2 — Identify Inputs: What parameters does each function need? 
// Function 1 would need these two parameters; bill and tip percentage because of the calculation.
// Function 2 would need these parameters bill and tip.

// Step 3 — Identify Processing: What calculation happens inside the tip function?
// The calculation would be; Tip = Bill × Tip Percentage ÷ 100. (let tip = bill * tipPercentage / 100)

//  Step 4 — Identify Outputs: What should each function produce or display? 
// For Function 1, the tip function should return the calculated tip.
// The second function should display a formatted message like this; (Your bill is ₦10,000 and your tip is ₦1,000).

// Step 5 — Plan the Solution: Decide as a group how many functions you'll use and what each one is responsible for, before writing code. 
// The first function would calculateTip()
// The input would be; bill, tip percentage.
// The output would be; tip amount.
// The second function would display the final Message()
// The input would bill, tip.	
// The output would be formatted message.

// Step 6 — Write the Code: Declare your functions with parameters, then call them with test values. 
function calculateTip(bill, tipPercentage) {
    let tip = bill * tipPercentage / 100;
    return tip;
}

function displayMessage(bill, tip) {
    console.log(`Your bill is ₦${bill} and your tip is ₦${tip}.`);
}

let billAmount = 10000;
let tipPercentage = 10;

let tipAmount = calculateTip(billAmount, tipPercentage);

displayMessage(billAmount, tipAmount);

// PART 5: Extension Challenge 
// Add a third function that calculates the total bill split evenly between a given number 
// of people 

function calculateArea(length, width) {
    console.log(length * width);
}

function displayMessage(msg) {
    console.log(msg);
}

function splitBill(totalBill, numberOfPeople) {
    return totalBill / numberOfPeople;
}

displayMessage("Area calculator ready");

calculateArea(5, 10);

let amountEach = splitBill(100, 4);

console.log(`Each person pays $${amountEach.toFixed(2)}`);