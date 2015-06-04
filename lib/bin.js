var run = require("./colorscheme-less");

var command;
var file;

if (process.argv[0] === "node" || process.argv[0] === "iojs") {
	command = process.argv[2];
	file = process.argv[3];
}
else {
	// run directly as JS (windows)
	command = process.argv[1];
	file = process.argv[2];
}

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

