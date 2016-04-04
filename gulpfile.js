var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var Q = require('q');
var del = require('del');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('clean', function () {
	var deferred = Q.defer();

	del(['dist/*']).then(() => {
		deferred.resolve();
	});

	return deferred.promise;
});

gulp.task('build:main', ['clean'], function () {
	var b = browserify({
		entries: 'src/font-awesome-openui5.js'
	});
	b.external('font-awesome-icon-chars');

	return b.bundle()
		.pipe(source('font-awesome-openui5.js'))
		.pipe(plumber())
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build:external', ['clean'], function () {
	var b = browserify();
	b.require('font-awesome-icon-chars');

	return b.bundle()
		.pipe(source('font-awesome-icon-chars.js'))
		.pipe(plumber())
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/modules'));
});

gulp.task('build:bundle', ['clean'], function () {
	var b = browserify({
		entries: 'src/font-awesome-openui5.js'
	});

	return b.bundle()
		.pipe(source('font-awesome-openui5.js'))
		.pipe(plumber())
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename({
			suffix: '.bundle.min'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['build:main', 'build:external', 'build:bundle']);

gulp.task('watch', ['build'], function () {
	watch('src/*.js', () => {
		gulp.start('build');
	});
});

gulp.task('default', ['watch']);
