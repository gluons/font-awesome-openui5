import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';

import router from './router';
import App from './App';

import './plugins/iview';

import 'highlight.js/styles/atom-one-dark.css';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

// Register global components
const requireComponent = require.context('./components', false, /\.vue$/);
requireComponent.keys().forEach(fileName => {
	const componentConfig = requireComponent(fileName);
	const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1');

	Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
