/*
----Activity 5: Decision Makers  handled by IDOKO STANISTUS CHIBUZO----

Topics Covered 
Control Flow, Conditional Statements 

Control flow is the order in which the computer executes statements in a script.


***
Part 1: Group Discussion 
----
1. What does it mean for a program to make a "decision"? Give a real-life 
=>

example of a decision that could be written as an if statement.
=> 
    
----
2. What's the difference between =, ==, and ===? Why might using the wrong one cause bugs? 
=>

----
3. If you have an if, an else if, and an else, can more than one block run? Discuss and explain your reasoning. 
=>


----
4. How do && (AND) and || (OR) change the way a condition behaves? Can your group come up with an everyday sentence that uses "and" versus "or" 
logically? 
=>


*****
Part 2: Predict the Output 
----
*/

// Snippet A

let temperature = 15;
if (temperature > 30) {
    console.log("It's hot!");
} else if (temperature > 15) {
    console.log("It's warm.");
}    else {
        console.log("It's cool.")
}


//---OUTPUT--
// It's cool.


//Snippet B 

let age = 20;
let hasID = false;
if (age >= 18 && hasID) {
    console.log("You may enter.");
} else {
    console.log("Entry denied.");
}

// --OUTPUT---
// // Entry denied.


//Snippet C

let password = "1234";
if (password === "0000") {
    console.log("Password changed!");
} else {
    console.log("No change.");
}

// OUTPUT
// No change.