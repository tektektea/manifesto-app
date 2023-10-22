
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'home', component: () => import('pages/IndexPage.vue') },
      { path: 'party/:id',name:'party:detail', component: () => import('pages/party/Party.vue') },
      { path: 'party/:party/candidates',name:'party:candidates', component: () => import('pages/party/candidate/List.vue') },
      { path: 'candidates',name:'candidates', component: () => import('pages/candidates/List.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
