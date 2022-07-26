import { orderService } from '../../services/order-service.js'

export default {
  state: {
      orders: [],
  },
  getters: {
    orders({ orders }) {
        return orders
      },
  },
  mutations: {
    setOrders(state, { orders }) {
        state.orders = orders
    },
    addOrder(state, { newOrder }){
      state.orders.unshift(newOrder)
    }
  },
  actions: {
  //    async loadOrders({ commit, state }) {
  //         const orders = await orderService.query()
        
  //       },
    loadOrders({ commit, state }) {
      orderService.query().then((orders) => {
        commit({ type: 'setOrders', orders })
      })
    },
    addOrder({ commit }, { newOrder }){
      console.log('eeeeee',newOrder)
      orderService
      .saveOrder(newOrder)
      .then((savedOrder) => {
        commit({ type: 'addOrder' , newOrder: savedOrder })
        return savedOrder
      })
    }
  }
}
