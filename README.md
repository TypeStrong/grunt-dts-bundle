# grunt-dts-bundle

> Grunt [plugin](http://gruntjs.com/) to export TypeScript .d.ts files as an external module definition with [dts-bundle](https://github.com/TypeStrong/dts-bundle)

[![Build Status](https://secure.travis-ci.org/TypeStrong/grunt-dts-bundle.svg?branch=master)](http://travis-ci.org/TypeStrong/grunt-dts-bundle) [![NPM version](https://badge.fury.io/js/grunt-dts-bundle.svg)](http://badge.fury.io/js/grunt-dts-bundle) [![Dependency Status](https://david-dm.org/TypeStrong/grunt-dts-bundle.svg)](https://david-dm.org/TypeStrong/grunt-dts-bundle) [![devDependency Status](https://david-dm.org/TypeStrong/grunt-dts-bundle/dev-status.svg)](https://david-dm.org/TypeStrong/grunt-dts-bundle#info=devDependencies)

Simple wrapper for [dts-bundle](https://github.com/TypeStrong/dts-bundle)

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-dts-bundle --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dts-bundle');
```

## The "grunt-dts-bundle" task

### Default Options

All options are passed directly to [dts-bundle](https://github.com/TypeStrong/dts-bundle)

```js
grunt.initConfig({
	dts_bundle: {
		build: {
			options: {
				name: 'my-project',
				main: 'build/index.d.ts'
			}
		}
	}
});
```

## History

* 0.3.0 - Updated to dts-bundle v0.3.0
* 0.2.0 - Updated to dts-bundle v0.2.0
* 0.1.0 - First release

## Contributing

Contributions are very welcome, please create an Issue before doing something major.

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License

Copyright (c) 2014 [Bart van der Schoor](https://github.com/Bartvds)

Licensed under the MIT license.
