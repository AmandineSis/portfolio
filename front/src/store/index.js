import { createStore, createLogger } from 'vuex'
import instance from './axios'

export default createStore({
  trict: debug,
  plugins: debug ? [createLogger()] : [],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
