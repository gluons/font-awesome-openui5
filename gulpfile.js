var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var buffer = require('gulp-buffer');
var rename = require('gulp-rename');
var tap = require('gulp-tap');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');

var Q = require('q');
var del = require('del');

var browserify = require('browserify');

var KarmaServer = require('karma').Server;

gulp.task('clean', function () {
	var deferred = Q.defer();

	del(['dist/*']).then(() => {
		deferred.resolve();
	});

	return deferred.promise;
});

gulp.task('build:bundle', ['clean'], function () {
	return gulp.src('src/*.bundle.coffee', { read: false })
		.pipe(plumber())
		.pipe(tap(function (file) {
			file.contents = browserify(file.path, { transform: 'coffeeify' }).bundle();
		}))
		.pipe(buffer())
		.pipe(rename({
			extname: '.js'
		}))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
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
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:bundle', 'build:core']);

gulp.task('test', function () {
	new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, function (exitCode) {
		console.log(exitCode);
	}).start();
	new KarmaServer({
		configFile: __dirname + '/karma.bundle.conf.js',
		singleRun: true
	}, function (exitCode) {
		console.log(exitCode);
		process.exit(exitCode);
	}).start();
});

gulp.task('watch', ['build'], function () {
	watch('src/*.coffee', () => {
		gulp.start('build');
	});
});

gulp.task('default', ['watch']);
