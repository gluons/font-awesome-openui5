<template lang="pug">
.container#api
	.section
		h1 API
	.section
		h2 FontAwesomeOpenUI5.loadIcons()
		p Load Font Awesome icons into OpenUI5 synchronously.
	.section
		h2 FontAwesomeOpenUI5.loadIconsAsync()
		.meta
			strong Return:
			|
			|
			BlankLink(url='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise')
				highlight-code(lang='js' inline) Promise
		p Load Font Awesome icons into OpenUI5 asynchronously.
</template>

<script>
import BlankLink from '@/components/BlankLink';

export default {
	name: 'API',
	components: {
		BlankLink
	}
};
</script>

<style lang="scss" scoped>
.meta {
	line-height: 2.5em;

	strong {
		margin-right: .3rem;
	}
}
</style>

