const path = require("path");

// This is the relative path up till the file
console.log(__dirname);
// This is the complete path for the document
console.log(__filename);

// This will have a pre-formatted string
// Using path, you are able to grab only the last parts
console.log(`The file name is ${path.basename(__filename)}`);
// OUTPUT: The file name is global.js

// This tells you what is running
for (let key in global) {
  console.log(key);
}
