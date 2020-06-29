function page (path) {
    return () => import(/* webpackChunkName: '' */ `./../pages/${path}`).then(m => m.default || m)
  }
  
  export default [
    {
      path: '/',
      name: 'main',
      component: page('main.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/create-cupboard',
      name: 'create_cupboard',
      component: page('crud/create_cupboard.vue')
    },

    { path: '*', component: page('errors/404.vue') }
  ]
  