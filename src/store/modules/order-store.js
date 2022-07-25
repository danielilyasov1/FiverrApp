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
          addOrder(state, { order }){
            state.orders.unshift(order)
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

           addOrder({ commit }, { order }){
            orderService
             .saveOrder(order)
             .then((savedOrder) => {
      
            commit({ type: 'addOrder' , order: savedOrder })
            return savedOrder

          
        })
    }
        
  }
}
