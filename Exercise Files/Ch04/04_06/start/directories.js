const fs = require("fs");

// This moves the files/directories
// fs.renameSync("./assets/logs", "accounts/logs");

// Confirmation of the logs being moved
// console.log("logs folder moved");

// fs.rmdir("./accounts", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("./assets directory removed");
//   }
// });

// Removing directory after the files are removed
fs.readdirSync("./accounts").forEach((file) => {
  fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log("Files Removed");
fs.rmdirSync("./accounts");
console.log("Folder Removed");
