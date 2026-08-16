/*
Activity 10: Build-a-Program Challenge 

Topics Covered 
● Variables 
● Data Types 
● Operators 
● Template Literals 
● Type Conversion 
● String/Math Methods 
● Conditionals 
● Ternary Operators 
● Loops 
● Functions (including Arrow Functions)


Part 1: Group Discussion 
1. 
Looking back at everything you've learned this course, which concept do you 
think connects to the most other concepts? Why? 


2. If you were explaining this entire course to a friend who has never coded, in 
two or three sentences, what would you say JavaScript actually lets you do? 


3. When building a larger program, why might it help to break it into small 
functions instead of writing one giant block of code? 


4. Think about a bug you fixed earlier in this course. What did that experience 
teach you about how to approach debugging in general? 


5. As a group, discuss: which combination of concepts (e.g., loops + functions, or 
conditionals + ternaries) do you feel most confident about, and which still 
feels shaky? 


*/

// Part 2: Predict the Output

// Snippet A

const getDiscount = (total)=> total >= 100 ? total * 0.1 : 0;

let orderTotal = 120;
let discount = getDiscount(orderTotal);
console.log(`Discount: $${discount}`);
console.log(`Final total: $${orderTotal - discount}`); 

// output: Discount: $12
//         Final total: $108

// Snippet B

function classifyNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
    }
}

classifyNumbers(4);

// output: 1 is odd
//         2 is even
//         3 is odd
//         4 is even

// Snippet C

const formatName = (name) => name.trim().toUpperCase();

let rawInput = " kelechi ";
console.log(`Welcome, ${formatName(rawInput)}!`);

// output: Welcome, KELECHI!

