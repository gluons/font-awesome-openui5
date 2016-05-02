var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var buffer = require('gulp-buffer');
var rename = require('gulp-rename');
var tap = require('gulp-tap');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var umd = require('gulp-umd');

var Q = require('q');
var del = require('del');

var browserify = require('browserify');

var KarmaServer = require('karma').Server;

var headerComment = `/*
Font Awesome icons for OpenUI5

The MIT License (MIT)
Copyright (c) 2016 Saran Tanpituckpong
*/
`;

gulp.task('clean', function () {
	return del(['dist/*']);
});

gulp.task('build:bundle', ['clean'], function () {
	return gulp.src('src/*.bundle.coffee', { read: false })
		.pipe(plumber())
		.pipe(tap(function (file) {
			file.contents = browserify(file.path, {
				transform: 'coffeeify'
			}).bundle();
		}))
		.pipe(buffer())
		.pipe(header(headerComment))
		.pipe(rename({
			extname: '.js'
		}))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(header(headerComment))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build:core', ['clean'], function () {
	return gulp.src(['src/*.coffee', '!src/*.bundle.coffee'])
		.pipe(plumber())
		.pipe(coffee({
			bare: true
		}))
		.pipe(umd({
			dependencies: function () {
				return [{
					amd: 'jquery',
					global: 'jQuery'
				}];
			},
			exports: function () {
				return 'FontAwesomeOpenUI5';
			},
			namespace: function () {
				return 'FontAwesomeOpenUI5';
			},
			template: 'umd-templates/amdWeb.js'
		}))
		.pipe(header(headerComment))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(header(headerComment))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:bundle', 'build:core']);

/*
	Run tests in queue.
	1. Core test
	2. Bundle test
*/
gulp.task('test:clean', function () {
	return del(['test/js/*']);
});
gulp.task('test:compile', ['test:clean'], function () {
	return gulp.src('test/*.coffee')
		.pipe(coffee({
			bare: true
		}))
		.pipe(gulp.dest('test/js'));
});
gulp.task('test', ['test:compile', 'build'], function () {
	return (function () {
		var deferred = Q.defer();

		new KarmaServer({
			configFile: __dirname + '/karma.conf.js',
			singleRun: true
		}, function (exitCode) {
			deferred.resolve(exitCode);
		}).start();

		return deferred.promise;
	})().then(function (exitCode) {
		var deferred = Q.defer();

		if (exitCode == 0) {
			new KarmaServer({
				configFile: __dirname + '/karma.bundle.conf.js',
				singleRun: true
			}, function (exitCode2) {
				process.exit(exitCode2);
				deferred.resolve(exitCode2);
			}).start();
		} else {
			process.exit(exitCode);
		}

		return deferred.promise;
	});
});

gulp.task('watch', ['build'], function () {
	watch('src/*.coffee', () => {
		gulp.start('build');
	});
});

gulp.task('default', ['watch']);
