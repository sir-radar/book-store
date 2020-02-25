import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../store'
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
    error: ''
  },
  mutations: {
    setAuthUser (state, payload) {
      state.authUser = payload
    },
    setLoginError (state, error) {
      state.error = error
    }
  },
  actions: {
    async login ({ commit }, crendencials) {
      const response = await axios.post('/api/login', crendencials)
      if (response.data.error !== null) {
        commit('setLoginError', response.data.error)
        return
      }
      commit('setAuthUser', response.data)
      router.push('/')
    },
    async createAccount ({ commit }, crendencials) {
      const response = await axios.post('/api/user', crendencials)
      console.log(response)
    }
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin]
})
