module.exports = function (grunt) {
	'use strict';

	grunt.registerMultiTask('dts_bundle', 'Export TypeScript .d.ts definition', function () {
		// simplest task ever!
		var dts = require('dts-bundle');
		var options = this.options({});
		dts.bundle(options);
	});
};
