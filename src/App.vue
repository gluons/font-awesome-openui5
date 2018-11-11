<template lang="pug">
#app
	Menu(
		mode='horizontal'
		:active-name='currentMenuName'
	)
		MenuItem(name='home' to='/')
			Icon(type='md-home' size='20')
			| Home
		MenuItem(name='start' to='/start')
			Icon(type='md-play' size='20')
			| Get started
		MenuItem(name='api' to='/api')
			Icon(type='md-document' size='20')
			| API
		Submenu(name='demo')
			template(slot='title')
				Icon(type='md-desktop' size='20')
				| Demo
			MenuItem(name='demo-solid' to='/demo/solid') Solid Icons
			MenuItem(name='demo-regular' to='/demo/regular') Regular Icons
			MenuItem(name='demo-brands' to='/demo/brands') Brands Icons
	router-view
	footer
		p Made with #[Icon(type='md-heart' size='30' color='red')] by #[BlankLink(url='https://github.com/gluons') Saran Tanpituckpong]
</template>


<script>
const demoPathRegex = /^\/(demo)\/([a-z]+)/;

function pathToMenuName(path) {
	if (demoPathRegex.test(path)) {
		const [, demo, style] = path.match(demoPathRegex);

		return `${demo}-${style}`;
	} else {
		return path !== '/' ? path.substr(1) : 'home';
	}
}

export default {
	name: 'App',
	data() {
		return {
			currentMenuName: 'home'
		};
	},
	created() {
		this.currentMenuName = pathToMenuName(this.$route.path);
		this.$router.afterEach(({ path }) => {
			this.currentMenuName = pathToMenuName(path);
		});
	},
	updated() {
		this.currentMenuName = pathToMenuName(this.$route.path);
	}
};
</script>

<style lang="scss" scoped>
.ivu-menu {
	.ivu-menu-item {
		@media screen and (max-width: 576px) {
			padding: 0 10px;
		}
	}
	&, .ivu-menu-item {
		@media screen and (max-width: 576px) {
			font-size: 10px;
		}
	}
}
footer {
	text-align: center;
	margin-bottom: 1rem;

	.ivu-icon {
		vertical-align: middle;
	}
	.ivu-icon-heart {
		color: red;
	}
}
</style>
