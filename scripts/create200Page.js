const { copyFile, existsSync } = require('fs');
const { resolve } = require('path');

const indexPath = resolve(__dirname, '../dist/index.html');
const page200Path = resolve(__dirname, '../dist/200.html');

if (existsSync(indexPath)) {
	copyFile(indexPath, page200Path, err => {
		if (err) {
			console.error(err);
		} else {
			console.log('200 page created.');
		}
	});
}
