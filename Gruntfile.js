/*
 * grunt-export-dts-bundle
 * https://github.com/grunt-ts/grunt-export-dts-bundle
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.loadTasks('tasks');

	var path = require('path');

	grunt.registerTask('verify', function () {
		var done = this.async();

		var expected = [
			'lib/barbazz.js',
			'Foo.js',
			'index.js',
			'test-project.d.ts'
		];
		var expectedNot = [
			'lib/barbazz.d.ts',
			'Foo.d.ts'
		];

		var recursive = require('recursive-readdir');
		var assert = require('assert');

		recursive('test/tmp', function (err, files) {
			if (err) {
				done(err);
				return;
			}

			expected.map(function (file) {
				return path.join('test', 'tmp', file.replace(/[\\\/]/g, path.sep));
			}).forEach(function (file, i) {
				assert(files.indexOf(file) > -1, 'file ' + i + ' ' + expected[i]);
			});

			expectedNot.map(function (file) {
				return path.join('test', 'tmp', file.replace(/[\\\/]/g, path.sep));
			}).forEach(function (file, i) {
				assert(files.indexOf(file) < 0, 'file ' + i + ' ' + expectedNot[i]);
			});

			grunt.log.writeln('verfied ' + (expected.length + expectedNot.length) + ' files');
			done();
		});
	});

	grunt.initConfig({
		clean: {
			test: ['./test/tmp']
		},
		copy: {
			test: {
				files: [
					{expand: true, cwd: 'test/fixtures', src: ['**'], dest: 'test/tmp'}
				]
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'tasks/**/*.js'
			]
		},
		dts_bundle: {
			test: {
				options: {
					name: 'test-project',
					removeSource: true,
					main: './test/tmp/index.d.ts'
				}
			}
		}
	});

	grunt.registerTask('test', ['clean', 'jshint', 'copy:test', 'dts_bundle:test', 'verify']);
	grunt.registerTask('default', ['test']);
};
