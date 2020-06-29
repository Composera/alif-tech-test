import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        categories
    },
    
    strict: process.env.NODE_ENV !== 'production'
})

export default store