var run = require("./colorscheme-less");

var command = process.argv[2];
var file = process.argv[3];

if (!file) {
	file = command;
	command = null;
}

console.log("command: " + (command || "generate"));
console.log("file: " + file);

run(command, file)
.then(function () {
	console.log("success.");
	process.exit();
});

