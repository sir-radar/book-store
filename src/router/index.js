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
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'store',
        component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
      },
      {
        path: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
      },
      {
        path: 'create-account',
        component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: Base,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/Dashboard.vue')
      },
      {
        path: 'manage-books',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/ManageBooks.vue')
      },
      {
        path: 'manage-users',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/ManageUsers.vue')
      },
      {
        path: 'manage-orders',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/ManageOrders.vue')
      },
      {
        path: 'edit-book/:id',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/AddOrEditBook.vue')
      },
      {
        path: 'add-book',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/AddOrEditBook.vue')
      },
      {
        path: 'edit-user/:id',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/AddOrEditUser.vue')
      },
      {
        path: 'add-user',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Admin/AddOrEditUser.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
