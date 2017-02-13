/// <reference path="./definitions/faui5.d.ts" />

declare module 'font-awesome-openui5' {
	import faIconChars = require('font-awesome-icon-chars');
	abstract class FontAwesomeOpenUI5 {
		public static load(icons?: FontAwesomeIconChars.Icon[], includeAliases?: boolean): void
		public static loadAsync(icons?: FontAwesomeIconChars.Icon[], includeAliases?: boolean): Promise<void>
	}
	export = FontAwesomeOpenUI5;
}
