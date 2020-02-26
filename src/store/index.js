import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage,
  reducer: state => ({
    authUser: state.authUser
  })
})

export default new Vuex.Store({
  state: {
    authUser: '',
    error: '',
    books: [],
    users: [],
    orders: []
  },
  mutations: {
    setAuthUser (state, payload) {
      state.authUser = payload
    },
    setLoginError (state, error) {
      state.error = error
    },
    logout (state) {
      state.authUser = ''
      router.push('/')
    },
    setBooks (state, books) {
      state.books = books
    },
    setUsers (state, users) {
      state.users = users
    },
    removeUser (state, id) {
      const index = state.users.findIndex(user => user.id === id)
      state.users.splice(index, 1)
    },
    removeBook (state, id) {
      const index = state.books.findIndex(book => book.id === id)
      state.books.splice(index, 1)
    },
    setOrder (state, orders) {
      state.orders = orders
    },
    removeOrder (state, id) {
      const index = state.orders.findIndex(order => order.id === id)
      state.orders.splice(index, 1)
    }
  },
  actions: {
    async login ({ commit }, credentials) {
      const response = await axios.post('/api/login', credentials)
      if (response.data.error) {
        commit('setLoginError', response.data.error)
        return
      }
      commit('setAuthUser', response.data)
      router.push('/')
    },
    async createAccount ({ dispatch }, credentials) {
      const response = await axios.post('/api/user', credentials)
      dispatch('login', response.data.user)
    },
    async updateAccount ({ commit }, credentials) {
      await axios.patch(`/api/users/${credentials.id}`, credentials)
    },
    async createBook ({ commit }, credentials) {
      await axios.post('/api/book', credentials)
    },
    async updateBook ({ commit }, credentials) {
      await axios.patch(`/api/books/${credentials.id}`, credentials)
    },
    async getBooks ({ commit }) {
      const response = await axios.get('/api/books')
      commit('setBooks', response.data.books)
    },
    async getUsers ({ commit }) {
      const response = await axios.get('/api/users')
      commit('setUsers', response.data.users)
    },
    async deleteBook ({ commit }, id) {
      const response = await axios.delete(`/api/book/${id}`)
      if (response.data.message === 'Success') {
        commit('removeBook', id)
      }
    },
    async deleteUser ({ commit }, id) {
      const response = await axios.delete(`/api/user/${id}`)
      if (response.data.message === 'Success') {
        commit('removeUser', id)
      }
    },
    async createOrder ({ commit }, credentials) {
      const response = await axios.post('/api/order', credentials)
      console.log(response)
    },
    async getOrders ({ commit }) {
      const response = await axios.get('/api/orders?include=user')
      commit('setOrder', response.data.orders)
    },
    async deleteOrder ({ commit }, id) {
      const response = await axios.delete(`/api/order/${id}`)
      if (response.data.message === 'Success') {
        commit('removeOrder', id)
      }
    }
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
