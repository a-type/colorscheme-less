/*
 * coolors-less
 * https://github.com/a-type/coolors-less
 *
 * Copyright (c) 2015 Grant Forrest
 * Licensed under the MIT license.
 */

'use strict';
var Bluebird = require("bluebird");
var ColorScheme = require("color-scheme");
var fs = require("fs");
var _ = require("lodash");

Bluebird.promisifyAll(fs);

var scheme = new ColorScheme();

var template = _.template([
	"@scheme-color-1: <%= colors[0] %>;",
	"@scheme-color-2: <%= colors[1] %>;",
	"@scheme-color-3: <%= colors[2] %>;",
	"@scheme-color-4: <%= colors[3] %>;",
	"@scheme-color-5: <%= colors[4] %>;"
].join("\n"));

function readColors (filePath) {
	var colors = [];
	return fs.readFileAsync(filePath)
	.then(function (contents) {
		var lines = _.compact(contents.toString().split(";"));
		lines.forEach(function (line) {
			var color = line.split(":")[1].trim();
			colors.push(color);
		});

		return colors;
	});
}

function writeColors (colors, filePath) {
	var contents = template({ colors: colors });
	return fs.writeFileAsync(filePath, contents);
}

function shuffle (filePath) {
	return readColors(filePath)
	.then(function (colors) {
		colors = _.shuffle(colors);
		return writeColors(colors, filePath);
	});
}

function generate (filePath) {
	return writeColors(
		_.map(
			scheme.scheme("triade")
			.colors(),
			function (color) { return "#" + color; }
		),
		filePath
	);
}

module.exports = function colorscheme (command, filePath) {
	if (command === "shuffle") {
		return shuffle(filePath)
		.catch(function (err) {
			console.log(err.stack);
			console.log("shuffle failed");
		});
	}
	else {
		return generate(filePath)
		.catch(function (err) {
			console.log(err.stack);
			console.log("generation failed");
		});
	}
};
