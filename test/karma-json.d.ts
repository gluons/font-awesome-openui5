interface KarmaJSON {
	$get: (property: string) => any;
	[property: string]: any;
}

interface Window {
	__json__: KarmaJSON
}
