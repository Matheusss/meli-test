import Vue from 'vue'
import Router from 'vue-router'
import { DEFAULT_ROUTE } from './constants'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // routes: [{ path: '*', redirect: { name: DEFAULT_ROUTE } }],
  routes: [{ path: '*' }],
})

// GUARD
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {})

export default router
