import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'


export const orderService = {
    query,
    // getEmptyOrder
    saveOrder
   
}
const KEY='users_db'


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
      console.log('orders',orders )
      return Promise.resolve(orders)
    } catch (err) {
      console.error(err)
    }
  }

  
function _createOrders() {
  let orders = utilService.loadFromStorage(KEY)
  if (!orders || !orders.length) {
    orders = [
      
        {
            "_id": "o1225",
            "createdAt": 9898989,
            "buyer": "mini-user",
            "seller": "mini-user",
            "gig": {
              "_id": "i101",
              "name": "Design Logo",
              "price": 20
            },
            "status": "pending"
          }
    
    ]
      
      

    utilService.saveToStorage(KEY, orders)
  }
  return orders
}
