import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../module/dashboard/view/dashboard.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page-1',
    name: 'Page 1',
    component: Page1
  },
  {
    path: '/page-2',
    name: 'Page 2',
    component: Page2
  },
  {
    path: '/page-3',
    name: 'Page 3',
    component: Page3
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
