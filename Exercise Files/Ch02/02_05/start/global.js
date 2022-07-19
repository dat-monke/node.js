process.stdout.write("Hello  \n \n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language"
];
const answers = [];

ask();

// Basically setting the loop
function ask(i = 0) {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` > `);
}

// Here you are collecting the answers until there is no more to ask
process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// Grabbing all the answers from previous and putting it into preformatted string
process.on("exit", function () {
  process.stdout.write("\n\n\n\n");
  process.stdout.write(
    `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
  );
});

/* ======================================== 
SAMPLE OUTPUT: 
What is your name? > Eve
What would you rather be doing? > Skiing 
What is your preffered programming language? > JavaScript 

Go Skiiing Eve you can finish writing JavaScript later
=========================================== */
