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
    books: []
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
    },
    setBooks (state, books) {
      state.books = books
    }
  },
  actions: {
    async login ({ commit }, crendencials) {
      const response = await axios.post('/api/login', crendencials)
      if (response.data.error) {
        commit('setLoginError', response.data.error)
        return
      }
      commit('setAuthUser', response.data)
      router.push('/')
    },
    async createAccount ({ commit }, crendencials) {
      const response = await axios.post('/api/user', crendencials)
      console.log(response)
    },
    async getBooks ({ commit }) {
      const response = await axios.get('/api/books')
      commit('setBooks', response.data.books)
    }
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
