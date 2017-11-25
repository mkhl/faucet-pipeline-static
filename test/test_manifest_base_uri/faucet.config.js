"use strict";
let path = require("path");

module.exports = {
	static: [{
		source: "./src",
		target: "./dist"
	}],
	manifest: {
		file: "./dist/manifest.json",
		value: f => `/assets/${path.relative("./dist", f)}`
	}
};
