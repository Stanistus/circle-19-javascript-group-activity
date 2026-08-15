/*
PART 1: GROUP DISCUSSION
1. Prompt() always retun a string and itn does not recognise figure or numbers  as number 
rather as a string, it can only be fixed by add number(). Eg Number( prompt())

2. The different between number(), parseInt(), parseFloat() is that:
Number() converts sring to number.
parseInt() conver string to a whole number irrespective of the decimal points
parseFloat is a respecter of decimal point , it convert to decimal point unlike ParseFloat.

3. .toupperCase does not change the original variable reather it convert it to Capital letter
let word = "hello";
word.toUpperCase(); // returns "HELLO"
console.log(word); // still "hello"

4.  A program must  check the lenght of a sting the user uses to avoid errors , security and to give
the user good user experience

5. Real senerio that potrays the conversion of strigs to number :
*customers age 
*Price of items

*/

//PART 2: PREDICT THE OUTCOME
//SNIPPET A
let input = "42";
let converted = Number(input);
console.log(input + 8);   // "428"  because "42" is still a string
console.log(converted + 8); // 50  because 42 + 8
//SNIPPET B
let name = " Chidinma ";
console.log(name.trim());  // "Chidinma"  removes spaces
console.log(name.length);  // it   counts spaces too

//SNIPPET C
let word = "javascript"
console.log(word.toUpperCase()); // this will return "JAVASCRIPT"
console.log(wrord)

// PART: DEBUGGING CHALLENGE

let userAge = (prompt("25"));
let nextYearAge = userAge + 1; // Problem: userAge is a string
console.log("Next year you will be " + nextYearAge); // "251" if user typed 25
/*
PART 4  GROUP DISCUSSION -  Username Generator

Step 1 - Understand: Ask for first name and favorite number. Clean the name, make it lowercase, 
combine with number to make username.
Step 2 - Identify Inputs: firstName string, favNumber string/number
Step 3 - Identify Processing: trim() to remove spaces, toLowerCase() to make lowercase, 
Number() to convert number, slice() if name > 8 chars
Step 4 - Identify Outputs: Example: sarah7, kunle12, ada0, fermi3.5
Step 5 - Plan: 
Get name and number from userTrim name and make lowercase Convert number Combine
 them Print usernameStep 6 - Write the Code:jslet firstName = prompt("Enter your first name:");


SARAH, 7 → sarah7kunle, "12" → kunle12 " Ada ", 0 → ada0Femi, 3.5 → femi3.5Step 8 - Improve: Yes, use .trim(). Why: Users often add extra spaces by mistake. " Ada " should become ada not  ada.
Part 5: Extension Challenge
Add length check:jsif(firstName.length > 8){
  firstName = firstName.slice(0, 8);
}
let username = firstName + favNumber;
*/

// THE ILLUSTRATION OF PART 4 QUESTION
let firstName = prompt("Enter your first name:");
let favNumber = prompt("Enter your favorite number:");

firstName = firstName.trim().toLowerCase();
favNumber = Number(favNumber);

let username = firstName + favNumber;
console.log("Your username is: " + username);


if(firstName.length > 8){
  firstName = firstName.slice(0, 8);
}
let username = firstName + favNumber;
console.log(username)


