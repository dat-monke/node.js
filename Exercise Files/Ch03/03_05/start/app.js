// Taking the event module
const events = require("events");

// Shortening the evenEmitter wording
let emitter = new events.EventEmitter();

// Formatting customEvent, so that [message, user] is the parameters
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

// Testing out the customEvent
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's pretty cool", "Eve");

// Function that reads if you are done or not
// If you type exit, the OUTPUT would be: process: Goodbye!
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }
  emitter.emit("customEvent", data.toString().trim(), "terminal");
});
