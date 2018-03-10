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
		MenuItem(name='demo')
			Icon(type='film-marker')
			| Demo
	router-view
</template>


<script>
function pathToMenuName(path) {
	return path !== '/' ? path.substr(1) : 'home';
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
			let path = '/';
			if (menuName === 'home') {
				path = '/';
			} else {
				path = `/${menuName}`;
			}
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
