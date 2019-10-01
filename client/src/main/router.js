import Vue from 'vue'
import Router from 'vue-router'
import { DEFAULT_ROUTE } from './constants'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'home', path: '/'},
    { path: '*', redirect: { name: 'home' } }
  ],
})

// GUARD
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {})

export default router
