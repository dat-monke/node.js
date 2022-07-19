const fs = require("fs");

let md = `
  This is a New File 
  ==================
  
  ES6 Template Strings are cool since they honor whitespace
  
  * Template Strings
  * Node File System 
  * Readline CLIs
`;

// This will make a new file called javascript.md with md inside
fs.writeFile("javascript.md", md.trim(), function (err) {
  if (err) {
    throw err;
  }
  // This appends "\n\n### Node.js Everyone" to the end of the file
  fs.appendFileSync("javascript.md", "\n\n### Node.js Everyone");
  console.log("Markdown Created");
});
