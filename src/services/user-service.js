import { storageService } from "./storage-service.js"
import { utilService } from './util-service.js'


export const userService = {
    query,
    // getEmptyOrder
    // saveOrder
   
}
const KEY='users_db'

_createLoggedInUser()

  async function query() {
    try {
       
      const users = await storageService.query(KEY)
      // console.log('orders',orders )
      return Promise.resolve(users)
    } catch (err) {
      console.error(err)
    }
  }

  async function getById(gigId) {
    try {
      // const res = await axios.get(BASE_URL + gigId)
      const gig = await storageService.get(KEY, gigId)
      return gig
    } catch (err) {
      console.error(err)
    }
  }

  
function _createLoggedInUser() {
  let loggedInUser = utilService.loadFromStorage(KEY)
  if (!loggedInUser || !loggedInUser.length) {
    loggedInUser = 
      {
        _id: 'u101',
        fullname: 'User 1',
        imgUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2019%2F11%2F17%2Fbooks%2Freview%2F17Salam%2FSalam1-superJumbo.jpg&imgrefurl=https%3A%2F%2Fwww.nytimes.com%2F2019%2F10%2F01%2Fbooks%2Freview%2Fthings-we-didnt-talk-about-when-i-was-a-girl-jeannie-vanasco.html&tbnid=e3a-KctQI9Qs2M&vet=12ahUKEwin9qbXrJf5AhUR_6QKHRPGC-cQMygNegUIARDRAQ..i&docid=XLRK46SlAOazFM&w=1752&h=1558&q=woman&ved=2ahUKEwin9qbXrJf5AhUR_6QKHRPGC-cQMygNegUIARDRAQ",
        username: 'user1',
        password: 'secret',
        level: 'basic/premium'}
    

    utilService.saveToStorage(KEY, loggedInUser)
  }
  return loggedInUser
}
  

