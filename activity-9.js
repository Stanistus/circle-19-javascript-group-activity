/*
Part 1: GROUP DISCUSSION ANSWERS

1. What makes a function "anonymous"?
An anonymous function has no name. JS knows when to run it because it's stored in a variable. Example: const 
square2 = function(num){}. You call it with the variable name: square2(5).

2. Why choose arrow function over regular? Downside?
Why: Shorter syntax, easier to read, and this binding is simpler.
Downside: Can't use this, arguments, or be used as a constructor with new. Also less readable for complex logic.

3. If you stored an anonymous function in a variable, how call it later?
You call it using the variable name: const fn = function(){}; fn();Shorter arrow: (num) => num * num.

5. What happened?
When you remove {} curly braces, you get "implicit return". You don't need the word return. 
It automatically returns the expression after =>.
*/


// Part 2: Predict the Output

// Snippet A
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4));
//Output: 12
// Why: 3 * 4 = 12

//Snippet B
const double = num => num * 2;
console.log(double(6));
console.log(double(0));
//Output:12,0
//Why: 6 _ 2 = 12, and 0 _ 2 = 0

//Snippet C
const introduce = (name, age) => {
  console.log(`My name is ${name} and I am ${age} years old.`);
};
introduce("Zainab", 22);

//Output: My name is Zainab and I am 22 years old.

//Part 3: DEBUGGING CHALLANGE

const greetUser = (name) => {
  console.log(Welcome, ${name})
}
greetUser("Emeka");

// 2
const subtract = (a, b) => a - b
console.log(subtract(10, 4))

/*ERROR BEFORE FIXING:
1. GREETING ERROR
* The string Welcome, ${name} is not in backticks. Template literals need `` not " "
* Missing ;at the end of console.log line. Not required but good practice.
* Function name is greetUser but called as greetuser - JS is case sensitive!

2.SUBTRACTION ERROR:
  
* None! This one is actually correct. 10 - 4 = 6 will log fine.
*/
//Fixed Code:js

const greetUser = (name) => {
  console.log(`Welcome, ${name}`);
}
greetUser("Emeka"); // Output: Welcome, Emeka

const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6

//Part 4: Collaborative Technical Challenge - Math Helper Toolkit

//Here’s the full code with the 4 functions:
// Step 5 & 6: Write the Code

// 1. Percentage to decimal
const percentToDecimal = (percent) => percent / 100;

// 2. Rectangle area
const rectangleArea = (length, width) => length * width;

// 3. Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// 4. Step 7: Test the Program
console.log("Percentage 25 ->", percentToDecimal(25)); // 0.25
console.log("Rectangle 4x9 ->", rectangleArea(4, 9)); // 36
console.log("Celsius 35 ->", celsiusToFahrenheit(35)); // 95
console.log("Celsius 100 ->", celsiusToFahrenheit(100)); // 212
console.log("Rectangle 10x5 ->", rectangleArea(10, 5)); // 50

// QUIK BREAKDOWN OF THE STEPS:
/*
Step 1 - Understand: Each function takes numbers and returns a calculated result.
Step 2 - Inputs: percentToDecimal needs 1, rectangleArea needs 2, celsiusToFahrenheit needs 1.
Step 3 - Processing: /100, l_w, (c_9/5)+32
Step 4 - Outputs: All return a number. We use console.log to display.
Step 8 - Improve: Arrow functions felt more natural here because they're short, 1-line calculations. 
No need for function keyword or return for simple math.

Part 5:EXTENSION CHALLENGE
Add Fahrenheit to Celsius to "undo" the conversion:
*/
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
// Test if they undo each other
let c = 35;
let f = celsiusToFahrenheit(c); // 95
let cBack = fahrenheitToCelsius(f); // 35
console.log(cBack); // 35 






