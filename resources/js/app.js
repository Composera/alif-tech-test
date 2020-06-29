require('./bootstrap');

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import DefaultLayout from './layouts/default'

Vue.component('default-layout', DefaultLayout)

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',
    render: (h) => h(App),
    router,
    store
});
