const fs = require("fs");

// Basic renaming
fs.renameSync("./lib/config.js", "./lib/project-config.js");

// Confirmation message
console.log("Config.js file renamed");

// You can rename the file using this method
fs.rename("./lib/notes.md", ".notes/md", function (err) {
  if (err) {
    throw err;
  }
  console.log("Notes markdown file moved");
});

// This will remove the file
// fs.unlinkSync("./lib/project-config.js");

// fs.unlink("notes.md", function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Notes are gone");
// });
