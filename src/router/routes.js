const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/tests',
    component: () => import('layouts/TestLayout.vue'),
    children: [
      {
        path: 'line-variable',
        component: () => import('pages/tests/Index.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
