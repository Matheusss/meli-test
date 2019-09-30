import router from '@/main/router'

router.addRoutes([
  {
    name: 'items',
    path: '/items',
    component: () => import(/* webpackChunkName: "items-list" */ './submodules/List/page/items-list.vue'),
  },
  {
    name: 'items.details',
    path: '/items/:id',
    component: () => import(/* webpackChunkName: "items-details" */ './submodules/Details/page/items-details.vue'),
  },
])
