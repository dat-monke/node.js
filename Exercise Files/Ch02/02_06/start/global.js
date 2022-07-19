// Setting the time [3000 = 3 seconds]
const waitTime = 3000;

// Console text saying that you are seeting a {time} delay
console.log(`setting a ${waitTime / 1000} second delay`);

// Print done when you are done based on the interval
// Example: 3 seconds at a 0.5 interval, basically 6x
const timerFinished = () => {
  clearInterval(interval);
  console.log("done");
};

// This stops the program when it reaches the waitTime
setTimeout(timerFinished, waitTime);

// Specifying the interval
const waitInterval = 500;
let currentTime = 0;

// Setting the increment time, adding more and more till it is equal
const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime / 1000} seconds`);
};

// Setting interval
const interval = setInterval(incTime, waitInterval);

// // "data" means that this function is only called when an data event is happening
// process.stdin.on("data", function (data) {
//   answers.push(data.toString().trim());
//   if (answers.length < questions.length) {
//     ask(answers.length);
//   } else {
//     process.exit();
//   }
// });

// // "exit" means that this function is only called when an exit event is happening
// process.on("exit", function () {
//   process.stdout.write("\n\n\n\n");
//   process.stdout.write(
//     `Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`
//   );
// });
