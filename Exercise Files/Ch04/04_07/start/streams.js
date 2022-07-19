const fs = require("fs");

// Creating the file stream; reading it one line/chunk at a time
let stream = fs.createReadStream("./chat-logs/george-ben-chat.log", "UTF-8");

let data;

// Reading the data in chunks
stream.once("data", (chunk) => {
  console.log("read stream started");
  console.log("=================");
  console.log(chunk);
});

// Lets you know how many chunks
stream.on("data", (chunk) => {
  console.log(`chunk: ${chunk.length}`);
  data += chunk;
});

// Completion message
stream.on("end", () => {
  console.log(`finished: ${data.length}`);
});

console.log("Reading the file");
