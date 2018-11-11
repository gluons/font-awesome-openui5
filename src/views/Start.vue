<template lang="pug">
.container#start
	BackTop
	.section
		h1 Installation
		p: strong Via #[BlankLink(url='https://www.npmjs.com/') npm]:
		p: BlankLink(url='https://www.npmjs.com/package/font-awesome-openui5')
			img(
				src='https://nodei.co/npm/font-awesome-openui5.png?downloads=true&downloadRank=true&stars=true'
				alt='npm'
			)
		highlight-code(lang='sh') npm install font-awesome-openui5
		.gap
		p: strong Via #[BlankLink(url='https://yarnpkg.com/') Yarn]:
		highlight-code(lang='sh') yarn add font-awesome-openui5
	.section
		h1 Usage
		ul.usage
			li
				h3 In browser
				p You can use this via CDN such as #[BlankLink(url='https://www.jsdelivr.com/') jsDelivr] or #[BlankLink(url='https://unpkg.com/') unpkg].
				ul.with-code
					li
						strong.no-sel jsDelivr:
						highlight-code(inline) https://cdn.jsdelivr.net/npm/font-awesome-openui5@^3
					li
						strong.no-sel unpkg:
						highlight-code(inline) https://unpkg.com/font-awesome-openui5@^3
				highlight-code(lang='html', :code='usageCode')
			li
				h3 Node Module
				highlight-code(lang='javascript').
					import FontAwesomeOpenUI5 from 'font-awesome-openui5';

					// Load icons synchronously.
					FontAwesomeOpenUI5.loadIcons();

					// Load icons asynchronously.
					FontAwesomeOpenUI5.loadIconsAsync();
		.gap
		h2 Icon URI
		p Each Font Awesome icons styles have its own collection name in #[BlankLink(url='https://openui5.hana.ondemand.com/#/api/sap.ui.core.IconPool') IconPool].
		ul.with-code
			li
				strong.no-sel #[BlankLink(url='https://fontawesome.com/icons?d=gallery&s=solid&m=free') Solid]:
				highlight-code(inline) font-awesome-solid
			li
				strong.no-sel #[BlankLink(url='https://fontawesome.com/icons?d=gallery&s=regular&m=free') Regular]:
				highlight-code(inline) font-awesome-regular
			li
				strong.no-sel #[BlankLink(url='https://fontawesome.com/icons?d=gallery&s=brands&m=free') Brands]:
				highlight-code(inline) font-awesome-brands
		p: strong Example:
		highlight-code(lang='javascript').
			let button = new sap.m.Button({
				text: 'Send',
				icon: 'sap-icon://font-awesome-solid/paper-plane'
			});
	.section
		h1 Note
		p You probably need to add some custom CSS classes to make icon show properly.
		highlight-code(lang='css').
			.fa-icon.solid .sapUiIcon:before {
				font-weight: 900;
			}
			.fa-icon.brands .sapUiIcon:before, .fa-icon.regular .sapUiIcon:before {
				font-weight: 400;
			}
		highlight-code(lang='javascript') {{ ui5Buttons }}
</template>


<script>
import BlankLink from '@/components/BlankLink';

import usageCode from '@/code/usage.txt';
import ui5Buttons from '@/code/ui5-buttons.txt';

export default {
	name: 'Start',
	components: {
		BlankLink
	},
	data() {
		return {
			usageCode,
			ui5Buttons
		};
	}
};
</script>

<style lang="scss" scoped>
ul.with-code li {
	line-height: 2.5em;

	strong {
		margin-right: .3rem;
	}
}
.gap {
	margin: 2rem 0;
}
</style>
