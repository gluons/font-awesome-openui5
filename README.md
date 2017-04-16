# Font Awesome icons for OpenUI5
[![license](https://img.shields.io/github/license/gluons/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![npm](https://img.shields.io/npm/dt/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![Bower](https://img.shields.io/bower/v/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5)
[![Travis](https://img.shields.io/travis/gluons/font-awesome-openui5.svg?style=flat-square)](https://travis-ci.org/gluons/font-awesome-openui5)
[![Dependency Status](https://dependencyci.com/github/gluons/font-awesome-openui5/badge?style=flat-square)](https://dependencyci.com/github/gluons/font-awesome-openui5)
[![ESLint Gluons](https://img.shields.io/badge/code%20style-gluons-9C27B0.svg?style=flat-square)](https://github.com/gluons/eslint-config-gluons)

Provides [Font Awesome](http://fontawesome.io/) icons for using in [OpenUI5](http://openui5.org/).

> Use icons source from [Font-Awesome-Icon-Chars](https://github.com/gluons/Font-Awesome-Icon-Chars).

## Installation

**Via [Bower](https://bower.io):**

```
bower install font-awesome-openui5
```

**Via [NPM](https://www.npmjs.com):**

[![NPM](https://nodei.co/npm/font-awesome-openui5.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/font-awesome-openui5)

```
npm install font-awesome-openui5
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add font-awesome-openui5
```

## Usage

```javascript
import * as faIcons from 'font-awesome-icon-chars';
import FontAwesomeOpenUI5 from 'font-awesome-openui5';

FontAwesomeOpenUI5.loadIcons(faIcons);
```

## API

### FontAwesomeOpenUI5.loadIcons(icons, [includeAliases])

Add icons into OpenUI5.

#### icons
Type: `Array.<Icon>`

Icons source.

<details>
<summary><code>Icon</code></summary>

```json
{
	"id": "times",
	"unicode": "f00d",
	"aliases": [
		"remove",
		"close"
	]
}
```

- `id`  
  Type: `String`

  Icon **id**.
- `unicode`  
  Type: `String`

  Icon **unicode** character.
- `aliases`  
  Type: `Array.<String>`

  Icon **aliases**.  
  > If icon has no **aliases**, it won't has `aliases` field.

</details>

#### includeAliases
Type: `Boolean`  
Default: `true`

Include icons **aliases**.

### FontAwesomeOpenUI5.loadIconsAsync(icons, [includeAliases])
Return: [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Add icons into OpenUI5 asynchronously.

#### icons

> Same as `FontAwesomeOpenUI5.loadIcons`'s `icons`.

#### includeAliases

> Same as `FontAwesomeOpenUI5.loadIcons`'s `includeAliases`.
