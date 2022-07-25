import { storageService } from "./storage-service.js"

export const orderService = {
    query,
    // getEmptyOrder
    saveOrder
   
}
const KEY='orders_db'


async function saveOrder(order) {
  console.log('order', order)
 
    
    const res = await storageService.post(KEY, order)
    return res
  
}



// function getEmptyOrder() {
//     return Promise.resolve({
//         _id: o1225,
//         createdAt: 9898989,
//         buyer: "mini-user",
//         seller: mini-user,
//         gig: {
//           _id: i101,
//           name: 'Design Logo',
//           price: 20
//         },
//         status: 'pending'
//     })
// }

  async function query() {
    try {
       
      const orders = await storageService.queryOrder(KEY)
      return Promise.resolve(orders)
    } catch (err) {
      console.error(err)
    }
  }