import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';

import router from './router';
import App from './App';

import './plugins/iview';

import 'highlight.js/styles/atom-one-dark.css';
import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

new Vue({
	el: '#app',
	render: h => h(App),
	router
});
