'use strict';

const gulp = require('gulp');
const source = require('vinyl-source-stream');

const faIconChars = require('font-awesome-icon-chars');

gulp.task('count:test', () => {
	let iconCount = {
		count: faIconChars.length,
		aliases: {},
		totalCount: faIconChars.length
	};
	for (let icon of faIconChars) {
		if (icon.aliases) {
			iconCount.aliases[icon.id] = icon.aliases.length;
			iconCount.totalCount += icon.aliases.length;
		}
	}
	let stream = source('icon-count.json');
	stream.write(JSON.stringify(iconCount, null, '\t'));
	return stream.pipe(gulp.dest('test'));
});
