// PART 1

// 1.What's the difference between the + operator used for math and the + operator used for joining strings? How does JavaScript decide which one to do? 
// The + operator can be used for addition when working with numbers, or concatenation when working with strings.
// When both are numbers performs a mathematical addition.
// If one value is a string, javascript will convert the other value to a string and concatenate them.

// 2. Compare this line written two ways: "Hello, " + name + "! You are " + age + " years old." vs `Hello, ${name}! You are ${age} years old.` Which do you find easier to read, and why?
// Template literals make the code cleaner, shorter and easier to understand especially if there are many variables.
// The texts looks more like a normal sentence, you don’t need to repeatedly use the + operator or worry about adding spaces.

// 3. What would happen if you tried to add a number and a string together, like 5 + "5"? Discuss your predictions before checking. 
// Javascript would treat the “5” in a quotation mark as a string not a number so it concatenates them. If both values are numbers it adds.

// 4. Why do you think template literals use back ticks (`) instead of regular quotes?
// Template literals use back ticks so javascript can distinguish them from normal stringd. Back ticks provides special features especially interpolation, which allows us to insert variables and expressions directly into a string using ${}. Back ticks allow multi-line strings more easily.

// Predict The Output  PART 2
// Snippet A
let a = 10;
let b = "5";

console.log(a + b);
console.log(a - b);

// First line:Here, a is a number (10), while b is a string ("5").
// When the + operator is used with a string, JavaScript converts the number to a string and oconcatenates.
// The - operator converts the string to a number and performs mathematical operation.

// Snippet B
let price = 20;
let quantity = 3;

// console.log(`Total cost: $${price * quantity}`);
// The ${price * quantity} calculates the total and inserts it into the template literal.

// Snippet C
let x = 4;
let y = 2;

console.log("Result: " + x + y);
console.log("Result: " + (x + y));
// First line;JavaScript evaluates from left to right
// For the second line; The parentheses force JavaScript to calculate x + y first

// Debugging Challenge PART 3
let firstName = "Tunde";
let lastName = "Okafor";
let fullName = firstName + " " + lastName;

// console.log("Welcome, " + fullname + "!");
// Javascript is case senstive, the variable declared fullName was declared with a capital N but in console.log it was declared with a small n.They would be treated as seperate variables.

// Part 2
let Price = "15";
let total = Price + 5;
console.log(`Your total is $${total}`);

// Because one of the values is a string, JavaScript uses + for string concatenation instead of mathematical addition

// PART 4: Collaborative Technical Challenge;Receipt Generator
// Step 1 — Understand the Problem: Explain the goal in your own words. 
// The goal is to create a JavaScript program that takes an item name, price, and quantity, calculates the total cost, and displays the information as a formatted receipt message. For example:Item: Notebook | Price: $2.50 | Quantity: 4 | Total: $10.00

// Step 2 — Identify Inputs: What three pieces of information do you need? 
// The three pieces of information we need from the user is item name, price, quantity.

// Step 3 — Identify Processing: What calculation turns those inputs into a total? The formula is Total = Price × Quantity

// Step 4 — Identify Outputs: What should the final receipt look like? The output would look like Item: Notebook | Price: $2.50 | Quantity: 4 | Total: $10.00. It would display a readable receipt line.

// Step 5 — Plan the Solution: Write the steps in plain English first.Ask the user for the item name.
// The steps would be:
// Ask the user for the price.
// Ask the user for the quantity.
// Convert the price and quantity into numbers.
// Multiply the price by the quantity to get the total.
// Create a formatted receipt using a template literal.
// Display the receipt to the user.

// Step 6 — Write the Code: Use variables, a calculation, and a template literal to build the final message. 

// let itemName = prompt("Enter the item name:");
// let itemsPrice = Number(prompt("Enter the price:"));
// let quantities = Number(prompt("Enter the quantity:"));

// let totals = price * quantity;

// console.log(
//   `Item: ${itemName} | Price: $${price.toFixed(2)} | Quantity: ${quantity} | Total: $${total.toFixed(2)}`
// );

// Step 7 — Test the Program
// Item: "Notebook", Price: 2.50, Quantity: 4

// let itemName = "Notebook";
// let itemPrice = 2.50;
// let itemQuantity = 4;

// let itemTotal = itemPrice * itemQuantity;

// console.log(
//   `Item: ${itemName} | Price: $${itemPrice.toFixed(2)} | Quantity: ${itemQuantity} | Total: $${itemTotal.toFixed(2)}`
// );

//  Item: "Notebook", Price: 2.50, Quantity: 4 
// let itemName = "Notebook";
// let price = 2.50;
// let quantity = 4;

// let total = price * quantity;

// console.log(
//   `Item: ${itemName} | Price: $${price.toFixed(2)} | Quantity: ${quantity} | Total: $${total.toFixed(2)}`
// );

// Item: "Pen", Price: 0.75, Quantity: 10
// let itemName = "Pen";
// let price = 0.75;
// let quantity = 10;

// let total = price * quantity;

// console.log(
//   `Item: ${itemName} | Price: $${price.toFixed(2)} | Quantity: ${quantity} | Total: $${total.toFixed(2)}`
// );

// Quantity entered as 0
// let itemName = "Pen";
// let price = 0.75;
// let quantity = 0;

// let total = price * quantity;

// console.log(
//   `Item: ${itemName} | Price: $${price.toFixed(2)} | Quantity: ${quantity} | Total: $${total.toFixed(2)}`
// );

// Price Entered as "Free"
// let itemName = "Notebook";
// let price = "free";
// let quantity = 4;

// let total = price * quantity;

// console.log(
//   `Item: ${itemName} | Price: ${price} | Quantity: ${quantity} | Total: ${total}`
// );

// Quantity Entered as 1
// let itemName = "Notebook";
// let price = 2.50;
// let quantity = 1;

// let total = price * quantity;

// console.log(
//   `Item: ${itemName} | Price: $${price.toFixed(2)} | Quantity: ${quantity} | Total: $${total.toFixed(2)}`
// );


// Step 8 — Improve the Solution: Could you make the output easier to read by rounding the total or adding a currency symbol?Discuss as a group. 
//yes we can make the output easier to read by,Adding a currency symbol and secondly Rounding to two decimal places.

// PART 5: Extension Challenge Add a "discount code" variable to your program. If a discount amount (as a number) is applied, subtract it from the total before displaying the final receipt line.
// Step 1: Add a discount variable
// let itemName = "Notebook";
// let price = 2.50;
// let quantity = 4;
// let discount = 2;

// let itemName = "Notebook";
// let price = 2.50;
// let quantity = 4;
// let discount = 2;

// let total = price * quantity;
// let finalTotal = total - discount;

// console.log(
//   `Item: ${itemName} | Price: $${price.toFixed(2)} | Quantity: ${quantity} | Discount: $${discount.toFixed(2)} | Final Total: $${finalTotal.toFixed(2)}`
// );