let hello = "Hello World from Node.js";
// This takes everything past the 17th item; Node.js
let justNode = hello.slice(17);
// When you do ``, it means you are pre-formatting the string
// When you do ${} it basically allows you to put the variable in there
console.log(`Who let the ${justNode} out?`);
