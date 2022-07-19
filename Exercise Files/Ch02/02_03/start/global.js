// This prints out the processes
// console.log(process.argv);

function grab(flag) {
  // Gives us the position after the index
  // 'Eve' | 'hello from node'
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

// Gets the value of greeting and user
let greeting = grab("--greeting");
let user = grab("--user");

// Prints out the greeting and user once it has been grabbe
console.log(greeting);
console.log(user);
