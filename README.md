# Font Awesome icons for OpenUI5
[![license](https://img.shields.io/github/license/gluons/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5/blob/master/LICENSE)
[![Bower](https://img.shields.io/bower/v/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5)
[![Travis](https://img.shields.io/travis/gluons/font-awesome-openui5.svg?style=flat-square)](https://travis-ci.org/gluons/font-awesome-openui5)

Provides [Font Awesome](http://fontawesome.io/) icons for using in [OpenUI5](http://openui5.org/).

## Installation
Via [Bower](http://bower.io/).
```
bower install font-awesome-openui5
```

## Usage
### Core
Using `dist/font-awesome-openui5.min.js` or `dist/font-awesome-openui5.js` file.

**API:**
 - [FontAwesomeOpenUI5.importFont(iconSource, sourceProperties)](#fontawesomeopenui5importfonticonsource-sourceproperties)
 - [FontAwesomeOpenUI5.loadIcons(iconFilePath)](#fontawesomeopenui5loadiconsiconfilepath)

#### FontAwesomeOpenUI5.importFont(iconSource, sourceProperties)
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

##### iconSource
Type: `Array of Object`

Array of icon source object that contain icon id and icon unicode character.

##### sourceProperties
Type: `Object`  
Default: `{ id: 'id', char: 'unicode' }`

Specific properties in icon source object. Must have `id` and `char` properties.

`id` is **id** property name.  
`char` is **unicode character** property name.

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
	}
);
```

#### FontAwesomeOpenUI5.loadIcons(iconFilePath)
Return: `Promise` (See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Load icon source from JSON file.

```javascript
FontAwesomeOpenUI5.loadIcons('font-awesome-icon-chars/character-list/character-list.json').then(function (iconSource) {
	FontAwesomeOpenUI5.importFont(iconSource);
});
```

##### iconFilePath
Type: `String`

Path to icon source JSON file.

---

### Bundle
Using `dist/font-awesome-openui5.bundle.min.js` or `dist/font-awesome-openui5.bundle.js` file.

No need any code. Font Awesome icons will be imported into OpenUI5 when refer these file in webpage.
