import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'


export const userService = {
    query,
    // getEmptyOrder
    saveOrder
   
}
const KEY='users_db'

_createLoggedInUser()

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
       
      const users = await storageService.query(KEY)
      // console.log('orders',orders )
      return Promise.resolve(users)
    } catch (err) {
      console.error(err)
    }
  }

  
function _createLoggedInUser() {
  let loggedInUser = utilService.loadFromStorage(KEY)
  if (!loggedInUser || !loggedInUser.length) {
    loggedInUser = [
        
    
      {
        "_id": "u101",
        "fullname": "User 1",
        "imgUrl": "/img/img1.jpg",
        "username": "user1",
        "password": "secret",
        "level": "basic/premium",}
    ]

    utilService.saveToStorage(KEY, loggedInUser)
  }
  return loggedInUser
}

