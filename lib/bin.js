var run = require("./colorscheme-less");

var command;
var file;

command = process.argv[2];
file = process.argv[3];


if (!command && !file) {
	console.log("Usage: colorscheme-less [generate|shuffle] [path/to/file.less]");
	process.exit();
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

