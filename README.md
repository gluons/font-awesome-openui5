# Font Awesome icons for OpenUI5
[![license](https://img.shields.io/github/license/gluons/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![npm](https://img.shields.io/npm/dt/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![Bower](https://img.shields.io/bower/v/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5)
[![Travis branch](https://img.shields.io/travis/gluons/font-awesome-openui5/master.svg?style=flat-square)](https://travis-ci.org/gluons/font-awesome-openui5)

Provides [Font Awesome](http://fontawesome.io/) icons for using in [OpenUI5](http://openui5.org/).

## Installation
Via [Bower](http://bower.io/).
```
bower install font-awesome-openui5
```

Or download from **[Latest Release](https://github.com/gluons/font-awesome-openui5/releases/latest)**.

## Usage
### Core
Using [`dist/font-awesome-openui5.min.js`](./dist/font-awesome-openui5.min.js) or [`dist/font-awesome-openui5.js`](./dist/font-awesome-openui5.js) file.

**API:**
 - [FontAwesomeOpenUI5.importFont(iconSource, sourceProperties, aliasesIncluded)](#fontawesomeopenui5importfonticonsource-sourceproperties-aliasesincluded)
 - [FontAwesomeOpenUI5.loadIcons(iconFilePath)](#fontawesomeopenui5loadiconsiconfilepath)

<br>

#### FontAwesomeOpenUI5.importFont(iconSource, sourceProperties, aliasesIncluded)
Import icons with icon source object.

```javascript
FontAwesomeOpenUI5.importFont(
	[
		{
			id: 'glass',
			unicode: 'f000'
		},
		{
			id: 'music',
			unicode: 'f001'
		}, ...
	]
);
```

Or with [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
```javascript
require('font-awesome-openui5', function (FontAwesomeOpenUI5) {
	FontAwesomeOpenUI5.importFont(
		[
			{
				name: 'glass',
				code: 'f000'
			},
			{
				name: 'music',
				code: 'f001'
			}, ...
		],
		{
			id: 'name',
			char: 'code'
		}
	);
});
```

##### iconSource
Type: `Array of Object`

Array of icon source object that contain icon id and icon unicode character.

##### sourceProperties
Type: `Object`  
Default: `{ id: 'id', char: 'unicode', aliases: 'aliases' }`

Specific properties name in icon source object.

`id` is **id** property name in each object.  
`char` is **unicode character** property name in each object.  
`aliases` is **aliases** property name in each object.

##### aliasesIncluded
Type: `Boolean`  
Default: true

Option to include Font Awesome icon **alias**.

**Example:**
```javascript
FontAwesomeOpenUI5.importFont(
	[
		{
			name: 'glass',
			code: 'f000'
		},
		{
			name: 'music',
			code: 'f001'
		}, ...
	],
	{
		id: 'name',
		char: 'code'
	},
	false
);
```

<br>

#### FontAwesomeOpenUI5.loadIcons(iconFilePath)
Return: `Promise` (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Load icon source from JSON file. (Use [`jQuery.getJSON()`](http://api.jquery.com/jQuery.getJSON/).)

```javascript
FontAwesomeOpenUI5.loadIcons('font-awesome-icon-chars/character-list/character-list.json').then(function (iconSource) {
	FontAwesomeOpenUI5.importFont(iconSource);
});
```

Or with [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)
```javascript
require('font-awesome-openui5', function (FontAwesomeOpenUI5) {
	FontAwesomeOpenUI5.loadIcons('font-awesome-icon-chars/character-list/character-list.json').then(function (iconSource) {
		FontAwesomeOpenUI5.importFont(iconSource);
	});
});
```


##### iconFilePath
Type: `String`

Path to icon source JSON file.

<br>

---

### Bundle
Using [`dist/font-awesome-openui5.bundle.min.js`](./dist/font-awesome-openui5.bundle.min.js) or [`dist/font-awesome-openui5.bundle.js`](./dist/font-awesome-openui5.bundle.js) file.

No need more code. Font Awesome icons will be automatically imported into OpenUI5 when add either of these files in webpage. 😄

## Dependencies
Use Font Awesome icons from  [Font-Awesome-Icon-Chars](https://github.com/gluons/Font-Awesome-Icon-Chars).
