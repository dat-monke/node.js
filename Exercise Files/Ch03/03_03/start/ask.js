const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Questions list
const questions = [
  "what is your name",
  "where do you live",
  "what are you going to do with node.js"
];

// Function to ask and retrieve the answer
rl.question("How do you like Node?", (answer) => {
  console.log(`Your answer: ${answer}`);
});

// Takes in the questions array, and the done status
function collectAnswers(questions, done) {
  // Creating answers array
  const answers = [];
  // Creating a function called questionAnswered
  const questionAnswered = (answer) => {
    // Takes the answer and trims out the white space
    answers.push(answer.trim());
    // Checks if the are any more questions to be answered
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      return done(answers);
    }
  };
  rl.question(questions[0], questionAnswered);
}

// Once you are done asking questions you thank them
collectAnswers(questions, (answers) => {
  console.log("Thank you for your answers!");
  // Print out the collected answers
  console.log(answers);
  process.exit();
});
