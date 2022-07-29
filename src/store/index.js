import { createStore } from 'vuex'

import gigStore from './modules/gig-store.js'
import orderStore from './modules/order-store.js'
import reviewStore from './modules/review-store.js'
import userStore from './modules/user-store.js'

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
    userStore,
  },
})

export default store

