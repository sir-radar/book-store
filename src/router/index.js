import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/store',
    component: () => import(/* webpackChunkName: "store" */ '../views/Store.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/create-account',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  },

  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Admin/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/manage-books',
    component: () => import(/* webpackChunkName: "manageBooks" */ '../views/Admin/ManageBooks.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/manage-users',
    component: () => import(/* webpackChunkName: "manageUsers" */ '../views/Admin/ManageUsers.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/manage-orders',
    component: () => import(/* webpackChunkName: "manageOrders" */ '../views/Admin/ManageOrders.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/edit-book/:id',
    name: 'bookEdit',
    component: () => import(/* webpackChunkName: "editBook" */ '../views/Admin/AddOrEditBook.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/add-book',
    component: () => import(/* webpackChunkName: "addBook" */ '../views/Admin/AddOrEditBook.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/edit-user/:id',
    name: 'userEdit',
    component: () => import(/* webpackChunkName: "editUser" */ '../views/Admin/EditUser.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "signup" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
