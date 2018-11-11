import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';

Vue.use(Router);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/start',
		component: () => import(/* webpackChunkName: "start" */ './views/Start')
	},
	{
		path: '/api',
		component: () => import(/* webpackChunkName: "api" */ './views/API')
	},
	{
		path: '/demo/:faStyle',
		component: () => import(/* webpackChunkName: "demo" */ './views/Demo'),
		props: true
	}
];

export default new Router({
	routes,
	mode: 'history'
});
