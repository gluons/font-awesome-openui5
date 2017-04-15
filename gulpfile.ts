import * as faIconChars from 'font-awesome-icon-chars';
import * as gulp from 'gulp';
import * as isNil from 'lodash.isnil';
import * as source from 'vinyl-source-stream';

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
