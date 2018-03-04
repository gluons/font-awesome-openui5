# Font Awesome icons for OpenUI5
[![license](https://img.shields.io/github/license/gluons/font-awesome-openui5.svg?style=flat-square)](https://github.com/gluons/font-awesome-openui5/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![npm](https://img.shields.io/npm/dt/font-awesome-openui5.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-openui5)
[![Travis](https://img.shields.io/travis/gluons/font-awesome-openui5.svg?style=flat-square)](https://travis-ci.org/gluons/font-awesome-openui5)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)

Provides [Font Awesome](https://fontawesome.com/) icons for using in [OpenUI5](http://openui5.org/).

> Use icons source from [Font-Awesome-Icon-Chars](https://github.com/gluons/Font-Awesome-Icon-Chars).

## Installation

**Via [npm](https://www.npmjs.com):**

[![npm](https://nodei.co/npm/font-awesome-openui5.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/font-awesome-openui5)

```
npm install font-awesome-openui5
```

**Via [Yarn](https://yarnpkg.com):**

```
yarn add font-awesome-openui5
```

## Usage

- **In browser**

  You can use this via CDN such as [**unpkg**](https://unpkg.com/) or [**jsDelivr**](https://www.jsdelivr.com/).

  - **unpkg:** `https://unpkg.com/font-awesome-openui5@^3`
  - **jsDelivr:** `https://cdn.jsdelivr.net/npm/font-awesome-openui5@^3`

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  	<title>Document</title>

  	<!-- OpenUI5 -->
  	<script
  		id="sap-ui-bootstrap"
  		src="https://openui5.hana.ondemand.com/1.52.7/resources/sap-ui-core.js"
  		data-sap-ui-theme="sap_belize"
  		data-sap-ui-libs="sap.m"
  	>
  	</script>

  	<!-- Via unpkg -->
  	<script src="https://unpkg.com/font-awesome-openui5@^3"></script>
  	<!-- Or via jsDelivr -->
  	<script src="https://cdn.jsdelivr.net/npm/font-awesome-openui5@^3"></script>
  </head>
  <body>
  	<div id="content"></div>
  	<script>
  		sap.ui.getCore().attachInit(function () {
  			let button = new sap.m.Button({
  				text: 'Send',
  				icon: 'sap-icon://font-awesome-solid/paper-plane'
  			});
  			button.placeAt('content');
  		});
  	</script>
  </body>
  </html>
  ```

- **Node Module**

  ```js
  import FontAwesomeOpenUI5 from 'font-awesome-openui5';

  // Load icons synchronously.
  FontAwesomeOpenUI5.loadIcons();

  // Load icons asynchronously.
  FontAwesomeOpenUI5.loadIconsAsync();
  ```

### Icon URI

Each Font Awesome icons styles have its own collection name in [IconPool](https://openui5.hana.ondemand.com/#/api/sap.ui.core.IconPool).

- **[Solid](https://fontawesome.com/icons?d=gallery&s=solid&m=free):** `font-awesome-solid`
- **[Regular](https://fontawesome.com/icons?d=gallery&s=regular&m=free):** `font-awesome-regular`
- **[Brands](https://fontawesome.com/icons?d=gallery&s=brands&m=free):** `font-awesome-brands`

**Example:**

```js
let button = new sap.m.Button({
	text: 'Send',
	icon: 'sap-icon://font-awesome-solid/paper-plane'
});
```
