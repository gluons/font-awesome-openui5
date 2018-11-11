<template lang="pug">
#app
	Menu(
		mode='horizontal'
		:active-name='currentMenuName'
		@on-select='onMenuSelect'
	)
		MenuItem(name='home')
			Icon(type='md-home' size='20')
			| Home
		MenuItem(name='start')
			Icon(type='md-play' size='20')
			| Get started
		MenuItem(name='api')
			Icon(type='md-document' size='20')
			| API
		Submenu(name='demo')
			template(slot='title')
				Icon(type='md-desktop' size='20')
				| Demo
			MenuItem(name='demo-solid') Solid Icons
			MenuItem(name='demo-regular') Regular Icons
			MenuItem(name='demo-brands') Brands Icons
	router-view
	footer
		p Made with #[Icon(type='md-heart' size='30' color='red')] by #[BlankLink(url='https://github.com/gluons') Saran Tanpituckpong]
</template>


<script>
import BlankLink from '@/components/BlankLink';

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
	components: {
		BlankLink
	},
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
