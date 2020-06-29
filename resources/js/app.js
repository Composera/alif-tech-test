require('./bootstrap');

import Vue from 'vue'
import ProgressBar from './plugins/progressbar'
import router from './router'
import store from './store'
import toasted from './plugins/toasted'
import App from './App.vue'
import DefaultLayout from './layouts/default'
import Card from './components/Card'

Vue.component('default-layout', DefaultLayout)
Vue.component('card', Card)

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
    store
});
