// This is how you to get file paths easier
const path = require("path");
// This allows you view util related information such as date/time
const util = require("util");
// This allows you to see the amount of memory is being used
const v8 = require("v8");

// Prints out the file name
console.log(path.basename(__filename));

// This appends www/files/uploads to the file location
const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);

// Prints out the date/time for the file
util.log(path.basename(__filename));

// Prints out how much memory is being used
util.log(v8.getHeapStatistics());
