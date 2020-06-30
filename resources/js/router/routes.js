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
      component: page('cupboards/create_cupboard.vue')
    },
    {
      path: '/cupboard/:slug',
      name: 'cupboard',
      component: page('cupboards/cupboard_cells.vue')
    },
    {
      path: '/create-cell',
      name: 'create_cell',
      component: page('cells/create_cell.vue')
    },
    {
      path: '/create-folder',
      name: 'create_folder',
      component: page('folders/create_folder.vue')
    },

    { path: '*', component: page('errors/404.vue'), name: 'error404' }
  ]
  