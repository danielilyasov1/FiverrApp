import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'
import { httpService } from './http-service'

const KEY='orders_db'
const ENDPOINT = 'order'

export const orderService = {
    query,
    getEmptyOrder,
    saveOrder,
   
}


async function query() {
  return await httpService.get(ENDPOINT)

  // try {
     
  //   const orders = await storageService.query(KEY)
  //   return Promise.resolve(orders)
  // } catch (err) {
  //   console.error(err)
  // }
}



// _createOrders()

async function saveOrder(order) {
  console.log('order', order)
  return await httpService.post(ENDPOINT, order)
  // const res = await storageService.post(KEY, order)
  // return res
  
}



async function getEmptyOrder() {
    return Promise.resolve({
          
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
