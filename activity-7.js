/* Activity 7: Repeat After Me

Part 1: Group Discussion
1. Why would a programmer use a loop instead of writing the same line of code multiple times?

A programmer uses a loop to repeat a block of code automatically. This saves time, reduces repetition, makes the code shorter, and makes it easier to maintain or modify.

Answer:
A loop allows a programmer to repeat code efficiently without writing the same code multiple times. It makes programs shorter, cleaner, and easier to maintain. */

/* 2. What's the difference between a for loop and a while loop? When might you prefer one over the other?

Answer:
A for loop is best when the number of repetitions is known, 
while a while loop is useful when repetition depends on a condition. For example, I would use a for loop to print numbers from 1 to 10, but a while loop when waiting for a condition to become false. */

/* 3. What is an "infinite loop," and what usually causes one by accident?

Answer:
An infinite loop is a loop that continues forever because its stopping condition is never reached. It can happen when a programmer forgets to update the loop variable, uses the wrong condition, or accidentally creates a condition that is always true. */

/* 4. If a loop is supposed to run 5 times but only runs 4, what part of the loop would you check first?

Answer:
I would first check the loop condition and starting/ending values, especially whether the condition uses < or <=. I would also check the update step to make sure the counter is changing correctly.

For example:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

This runs 5 times. */

/* 5. Real-life example using loop logic

Example: Brushing my teeth

Starting point: Start brushing at the front teeth.
Condition: Continue brushing until all areas of the teeth have been cleaned.
Step: Move the toothbrush in circular motions to the next section. */

/* Part 2: Predict the Output
Snippet A 


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output 
1
2
3
4
5

Snippet B

let count = 3;


while (count > 0) {
    console.log(`Countdown: ${count}`);
    count--;
} 

console.log("Liftoff!");

Output:
Countdown: 3
Countdown: 2
Countdown: 1
Liftoff! /*

/* Snippet C


for (let i = 0; i < 10; i = i + 2) {
    console.log(i);
}

Output:
0
2
4
6
8 /*

/* Part 3: Debugging Challenge

Snippet 1

The code shown is essentially:

let total = 0;


for (let i = 1; i <= 5; i++) {
    total = total + i;
}


console.log("Total: " + total);
Is there an error?

No. This code is correct. /*

It adds:

1 + 2 + 3 + 4 + 5 = 15

Therefore, the output is:

Total: 15
Explanation

The loop starts with i = 1 and continues while i <= 5.

Each time, the current value of i is added to total.

total = 0
total = 0 + 1 → 1
total = 1 + 2 → 3
total = 3 + 3 → 6
total = 6 + 4 → 10
total = 10 + 5 → 15

So:

Total: 15
Snippet 2

The code shown is:

let count = 5;


while (count > 0) {
    console.log(count);
}
What is the problem?

The problem is that count never changes.

The loop checks:

count > 0

Since count starts at 5 and is never decreased, it remains 5 forever.

Therefore, the loop becomes an infinite loop and keeps printing:

5
5
5
5
5
...
Corrected code:
let count = 5;


while (count > 0) {
    console.log(count);
    count--;
}
Correct output:
5
4
3
2
1

Then count becomes 0, so the loop stops. */