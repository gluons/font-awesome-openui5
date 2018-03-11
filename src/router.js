import VueRouter from 'vue-router';

import Home from './views/Home';
import Start from './views/Start';
import API from './views/API';
import Demo from './views/Demo';

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

const router = new VueRouter({
	routes,
	mode: 'history'
});

export default router;
