import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCity: '深圳'
  },
  mutations: {
    // 设置当前城市
    setCurrentCity (state, payload) {
      state.currentCity = payload
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentCity (state) {
      return state.currentCity
    }
  },
  plugins: [createPersistedState()]
})
