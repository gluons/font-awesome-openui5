import * as merge from 'webpack-merge';

import baseConfig from './base';

export default merge(baseConfig, {
	output: {
		filename: 'font-awesome-openui5.js'
	}
});
