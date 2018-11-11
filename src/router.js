import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home';
import Start from './views/Start';
import API from './views/API';
import Demo from './views/Demo';

Vue.use(Router);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/start',
		component: Start
	},
	{
		path: '/api',
		component: API
	},
	{
		path: '/demo/:faStyle',
		component: Demo,
		props: true
	}
];

export default new Router({
	routes,
	mode: 'history'
});
