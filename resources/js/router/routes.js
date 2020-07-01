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
      path: '/cell/:cell_slug',
      name: 'cell_folders',
      component: page('cupboards/cell_folders.vue')
    },
    {
      path: '/folder/:folder_slug',
      name: 'folder_files',
      component: page('folders/folder_files.vue')
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
    {
      path: '/upload-file',
      name: 'upload_file',
      component: page('files/upload_file.vue')
    },
    {
      path: '/search/:text',
      name: 'search',
      component: page('search.vue')
    },

    { path: '*', component: page('errors/404.vue'), name: 'error404' }
  ]
  