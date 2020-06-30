import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories'
import cupboards from './modules/cupboards'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories,
        cupboards
    },
    
    strict: process.env.NODE_ENV !== 'production'
})

export default store