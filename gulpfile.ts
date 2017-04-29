import * as del from 'del';
import * as gulp from 'gulp';
import * as babel from 'gulp-babel';
import * as sourcemaps from 'gulp-sourcemaps';
import * as ts from 'gulp-typescript';
import * as isNil from 'lodash.isnil';
import * as merge from 'merge2';
import * as source from 'vinyl-source-stream';

import * as typescript from 'typescript';

import * as faIconChars from 'font-awesome-icon-chars';

gulp.task('clean:browser', () => del('./dist/'));

gulp.task('clean:common', () => del('./common/'));

gulp.task('clean', ['clean:common', 'clean:browser']);

gulp.task('build:common', ['clean:common'], () => {
	let tsProject = ts.createProject('tsconfig.json');

	let tsResult = gulp.src('src/*.ts').pipe(sourcemaps.init()).pipe(tsProject());

	return merge([
		tsResult.js.pipe(babel()).pipe(sourcemaps.write('.')),
		tsResult.dts
	]).pipe(gulp.dest('./common'));
});

gulp.task('count:test', () => {
	let iconCount = {
		count: faIconChars.length,
		aliases: {},
		totalCount: faIconChars.length
	};
	faIconChars.forEach(icon => {
		if (!isNil(icon.aliases) && Array.isArray(icon.aliases) && (icon.aliases.length > 0)) {
			iconCount.aliases[icon.id] = icon.aliases.length;
			iconCount.totalCount += icon.aliases.length;
		}
	});
	let sourceStream = source('icon-count.json');
	sourceStream.write(JSON.stringify(iconCount, null, '\t'));

	return sourceStream.pipe(gulp.dest('./test'));
});
