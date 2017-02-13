/// <reference types="font-awesome-icon-chars" />

declare abstract class FontAwesomeOpenUI5 {
	public static load(icons?: FontAwesomeIconChars.Icon[], includeAliases?: boolean): void
	public static loadAsync(icons?: FontAwesomeIconChars.Icon[], includeAliases?: boolean): Promise<void>
}

export = FontAwesomeOpenUI5;
