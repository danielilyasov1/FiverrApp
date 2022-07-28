import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'


export const orderService = {
    query,
    getEmptyOrder,
    saveOrder,
   
}
const KEY='orders_db'

_createOrders()

async function saveOrder(order) {
  console.log('order', order)
  const res = await storageService.post(KEY, order)
  return res
  
}



async function getEmptyOrder() {
    return Promise.resolve({
          
      _id: utilService.makeId(),
      createdAt:  await utilService.getFormattedDate() ,
      buyer: {
        imgUrl:'',
        fullname:'',
        memberSince:''
      },
      seller: {

      },
      gig: {
        _id: '',
        title: '',
        price: '',
        daysToMake: '',
      },
      status: 'Pending',
    })
}

  async function query() {
    try {
       
      const orders = await storageService.query(KEY)
      return Promise.resolve(orders)
    } catch (err) {
      console.error(err)
    }
  }

  
function _createOrders() {
  let orders = utilService.loadFromStorage(KEY) || []
  console.log('firstOrders',orders)
      
  //       {
  //           "_id": "o1225",
  //           "createdAt": new Date(),
  //           "buyer": "mini-user",
  //           "seller": "mini-user",
  //           "gig": {
  //             "_id": "i101",
  //             "name": "Design Logo",
  //             "price": 20
  //           },
  //           "status": "pending"
  //         }
  //   utilService.saveToStorage(KEY, orders)
  // }
  return orders
}
