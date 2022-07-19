const fs = require("fs");

// In theory it should read the file, unless there is an issue
fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
  console.log(ipsum);
});

// This will fire off first while the other procedure is occuring
// This is an asynchronous event
console.log("reading the file...");
