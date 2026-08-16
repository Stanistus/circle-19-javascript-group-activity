// Activity 6: Shortcuts and Choices By IDOKO STANISTUS CHIBUZO

// Topics Covered: Ternary Operators (with review of Conditional Statements)

/*
Part 1: Group Discussion 
1. 
A ternary operator is often described as a "shortcut" for if/else. What do you 
think that means, based on what you've seen? 
Look at this if/else block. As a group, try to say out loud (without writing code yet) 
what the equivalent ternary might look like: 
    if (age >= 18) {
    console.log("Adult");
    } else {
        console.log("Minor");
    }

2. Can a ternary operator replace an if/else if/else with three branches? Why or 
why not? 


3. When might a ternary operator make code harder to read instead of easier? 
Discuss a case where you'd stick with regular if/else. 

*/

// PART 3: Predict the Output

// Snippet A

let score = 72;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);

//output: Pass

// Snippet B

let cartTotal = 0;
let message = cartTotal > 0 ? "Proceed to checkout" : "Your cart is empty";
console.log(message);

//output: Your cart is empty

// Snippet C

let stock = 5;
console.log(`Stock status: ${stock > 0 ? "Available" : "Out of stock"}`);

// Part 3: Debugging Challenge

/*
let temperature = 28;
let feelining = temperature > 25 ? "hot" "cold";
console.log(feeling)

let isMember = true
let discount = isMember ? 10 : 0;
console.log(`Discoung: ${discount}%);

*/
// Discuss the errors before fixing them.