<template lang="pug">
#home
	.hero
		h1 Font Awesome icons for OpenUI5
		h2.subtitle Provides #[BlankLink(url='https://fontawesome.com/') Font Awesome] icons for using in #[BlankLink(url='http://openui5.org/') OpenUI5].
		.buttons
			Button(
				type='primary'
				size='large'
				shape='circle'
				icon='md-play'
				@click='getStarted'
			) Get started
			Button(
				size='large'
				shape='circle'
				icon='logo-github'
				@click='openGitHub'
			) View on GitHub
</template>

<script>
import BlankLink from '@/components/BlankLink';

export default {
	name: 'Home',
	components: {
		BlankLink
	},
	methods: {
		getStarted() {
			this.$router.push('/start');
		},
		openGitHub() {
			window.open('https://github.com/gluons/font-awesome-openui5', '_blank');
		}
	}
};
</script>

<style lang="scss" scoped>
#home {
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 576px) {
		align-items: flex-start;
		padding-top: 5rem;
	}
	.hero {
		font-size: 20px;
		text-align: center;

		@media screen and (max-width: 576px) {
			font-size: 10px;
		}
		.subtitle {
			font-weight: normal;
		}
		.buttons {
			margin: 1em 0;

			button {
				margin: 0 .5em;
			}
		}
	}
}
</style>
