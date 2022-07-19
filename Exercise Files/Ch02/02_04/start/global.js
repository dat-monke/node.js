// This types out in the output: Hello
process.stdout.write("Hello \n \n");

// These are the questions that are to be asked
const questions = [
  "what is your name",
  "what are you doing",
  "what is your pref language"
];

// This is an empty array where the responses are collected
const answers = [];

// A function with a preformatted string that ask the questions
function ask(i) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
}

// Takes the response, trims whitespace, then puts it back out in the terminal
process.stdin.on("data", function (data) {
  process.stdout.write(data.toString().trim());
});

// Asks all the questions and answers
ask(answers.length);
