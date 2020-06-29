import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    next()
})

router.afterEach((to, from) => {
})

export default router