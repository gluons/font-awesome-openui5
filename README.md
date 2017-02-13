# Font Awesome icons for OpenUI5
[![license](https://img.shields.io/github/license/gluons/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![npm](https://img.shields.io/npm/dt/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![Bower](https://img.shields.io/bower/v/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5)
[![Travis](https://img.shields.io/travis/gluons/font-awesome-openui5.svg?style=flat-square)](https://travis-ci.org/gluons/font-awesome-openui5)
[![Dependency Status](https://dependencyci.com/github/gluons/font-awesome-openui5/badge?style=flat-square)](https://dependencyci.com/github/gluons/font-awesome-openui5)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Provides [Font Awesome](http://fontawesome.io/) icons for using in [OpenUI5](http://openui5.org/).

Uses default icons source from [Font-Awesome-Icon-Chars](https://github.com/gluons/Font-Awesome-Icon-Chars).

## Installation

Via [Bower](https://bower.io/):

```
bower install font-awesome-openui5
```

Via [NPM](https://www.npmjs.com/):

[![NPM](https://nodei.co/npm/font-awesome-openui5.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/font-awesome-openui5)

```
npm install font-awesome-openui5
```

Or [Yarn](https://yarnpkg.com/):

```
yarn add font-awesome-openui5
```

## Usage

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="https://openui5.hana.ondemand.com/1.44.6/resources/sap-ui-core.js"></script>
		<script src="./dist/font-awesome-openui5.min.js"></script>
	</head>
	<body>
		<script>
			FontAwesomeOpenUI5.load(); // Synchronously load Font Awesome icons to OpenUI5

			/*
			 * Or
			 */

			FontAwesomeOpenUI5.loadAsync(); // Asynchronously load Font Awesome icons to OpenUI5
		</script>
	</body>
</html>
```

## API

### FontAwesomeOpenUI5.load([icons, [includeAliases]])

Synchronously load icon characters.

```javascript
FontAwesomeOpenUI5.load(); // Load icons from default icons source (include aliases).
```

#### icons
Type: `Array`  
Default: Icons source from [Font-Awesome-Icon-Chars](https://github.com/gluons/Font-Awesome-Icon-Chars)

Icons source to import.  
Must be array of **object** with `id` and `unicode`.

```javascript
FontAwesomeOpenUI5.load([
	{ id: 'glass', unicode: 'unicode' },
	{ id: 'music', unicode: 'f001' }
]);
```

#### includeAliases
Type: `Boolean`  
Default: `true`

`true` to include icons **aliases**.  
If you don't want to include icons **aliases**, set it to `false`.

```javascript
// This will not load icons aliases to OpenUI5.
FontAwesomeOpenUI5.load([
	{ id: 'times', unicode: 'f00d', aliases: ['remove', 'close'] },
	{ id: 'university', unicode: 'f19c', aliases: ['institution', 'bank'] }
], false);
```

You can also use [**default icons source**](https://github.com/gluons/Font-Awesome-Icon-Chars) without **aliases**.  
Just set `icons` to `null`.

```javascript
FontAwesomeOpenUI5.load(null, false);
```

### FontAwesomeOpenUI5.loadAsync([icons, [includeAliases]])
Return: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Asynchronously load icon characters.

```javascript
FontAwesomeOpenUI5.loadAsync().then(() => {
	console.log('Icons loaded.'); // Finish.
}).catch(err => {
	console.error(err); // Error.
});
```

#### icons

Same as `FontAwesomeOpenUI5.load()`'s `icons`.

#### includeAliases

Same as `FontAwesomeOpenUI5.load()`'s `includeAliases`
