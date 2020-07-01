import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories'
import cupboards from './modules/cupboards'
import search from './modules/search'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories,
        cupboards,
        search
    },
    
    strict: process.env.NODE_ENV !== 'production'
})

export default store