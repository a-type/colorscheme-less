var run = require("./colorscheme-less");

var command = process.argv[2];
var file = process.argv[3];

if (!command && !file) {
	console.log("Usage: colorscheme-less [generate|shuffle] [path/to/file.less]");
}

if (!file) {
	file = command;
	command = "generate";
}

console.log("command: " + command);
console.log("file: " + file);

run(command, file)
.then(function () {
	console.log("success.");
	process.exit();
});

