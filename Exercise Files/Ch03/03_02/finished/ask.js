// Importing your readline function
const readline = require("readline");
// Creating a function using readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// You are calling readline and applying it to the question
rl.question("How do you like Node?", (answer) => {
  console.log(`Your answer: ${answer}`);
});

/* ==================================
OUTPUT: 
How do you like Node?It's great! 
Your answer: It's great!
*/
