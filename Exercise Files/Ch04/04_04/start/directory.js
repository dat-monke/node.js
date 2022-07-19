const fs = require("fs");

if (fs.existsSync("your-files-here")) {
  // Lets you know if there is already a file there
  console.log("already there!");
}
// Run the file creation process
else {
  // This will create a directory
  fs.mkdir("your-files-here", function (err) {
    // If something is wrong then it will OUTPUT: ERROR: {output message}
    if (err) {
      console.log(`ERROR: ${err}`);
    }
    // If not then it will say that the directory was created successfully
    else {
      console.log("directory created");
    }
  });
}
