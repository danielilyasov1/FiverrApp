import { createStore } from 'vuex'

import gigStore from './modules/gig-store.js'
import orderStore from './modules/order-store.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gigStore,
    orderStore,
  },
})

export default store

