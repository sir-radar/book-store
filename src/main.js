import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'buefy/dist/buefy.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './utils/server'
import i18n from './i18n'
import { Table } from 'buefy'

Vue.use(Table)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.authUser === '') {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else if (store.state.authUse !== '' && store.state.authUser.role !== 'Admin') {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
