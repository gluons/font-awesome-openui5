<template lang="pug">
#app
	Menu(
		mode='horizontal'
		:active-name='currentMenuName'
		@on-select='onMenuSelect'
	)
		MenuItem(name='home')
			Icon(type='home')
			| Home
		MenuItem(name='start')
			Icon(type='play')
			| Get started
		MenuItem(name='api')
			Icon(type='document-text')
			| API
		Submenu(name='demo')
			template(slot='title')
				Icon(type='film-marker')
				| Demo
			MenuItem(name='demo-solid') Solid Icons
			MenuItem(name='demo-regular') Regular Icons
			MenuItem(name='demo-brands') Brands Icons
	router-view
</template>


<script>
const demoNameRegex = /^(demo)-([a-z]+)/;
const demoPathRegex = /^\/(demo)\/([a-z]+)/;

function pathToMenuName(path) {
	if (demoPathRegex.test(path)) {
		let matches = path.match(demoPathRegex);
		let demo = matches[1];
		let style = matches[2];
		return `${demo}-${style}`;
	} else {
		return path !== '/' ? path.substr(1) : 'home';
	}
}

function menuNameToPath(menuName) {
	let path;
	if (menuName === 'home') {
		path = '/';
	} else if (demoNameRegex.test(menuName)) {
		let matches = menuName.match(demoNameRegex);
		let demo = matches[1];
		let style = matches[2];
		path = `/${demo}/${style}`;
	} else {
		path = `/${menuName}`;
	}
	return path;
}

export default {
	name: 'App',
	data() {
		return {
			currentMenuName: 'home'
		};
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
			let path = to.path;
			this.currentMenuName = pathToMenuName(path);

			next();
		});
		this.currentMenuName = pathToMenuName(this.$router.currentRoute.path);
	},
	methods: {
		onMenuSelect(menuName) {
			let path = menuNameToPath(menuName);
			this.$router.push(path);
		}
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
</style>
