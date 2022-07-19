const fs = require("fs");

// Calls up the error if it happens when reading the file
let files = fs.readdir("./", function (err, files) {
  if (err) {
    throw err;
  }
  console.log(files);
});

console.log("reading files...");
