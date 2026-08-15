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