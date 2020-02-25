import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../layouts/Base.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Base,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'store',
        component: () => import(/* webpackChunkName: "about" */ '../views/Store.vue')
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
      },
      {
        path: 'create-account',
        component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
