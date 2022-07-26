import { createStore } from 'vuex'

import gigStore from './modules/gig-store.js'
import orderStore from './modules/order-store.js'
import reviewStore from './modules/review-store.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    gigStore,
    orderStore,
    reviewStore,
  },
})

export default store

