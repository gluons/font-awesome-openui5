<template lang="pug">
.container#api
	.section
		h1 API
	.section
		h2 FontAwesomeOpenUI5.loadIcons()
		p Load Font Awesome icons into OpenUI5 synchronously.
	.section
		h2 FontAwesomeOpenUI5.loadIconsAsync()
		p Load Font Awesome icons into OpenUI5 asynchronously.
		.meta
			strong Return:
			|
			|
			BlankLink(url='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise')
				highlight-code(inline) Promise
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

	&:first-of-type {
		margin-top: 1em;
	}
}
</style>

