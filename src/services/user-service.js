import { httpService } from './http-service.js'

const ENDPOINT = 'auth'

export const userService = {
  login,
  signup,
  logout,
  // getById,
  // getGuestUser,
   
}
const KEY='users_db'

  
async function login(cred) {
  return await httpService.post(ENDPOINT + '/login', cred)
}

async function signup(cred) {
  return await httpService.post(ENDPOINT + '/signup', cred)
}

async function logout() {
  return await httpService.post(ENDPOINT + '/logout')
}


// async function getById(userId) {
//   try {
//     // const res = await axios.get(BASE_URL + gigId)
//     // const gig = await storageService.get(KEY, gigId)
//     // return gig
//     return await httpService.get(`${ENDPOINT}/${userId}`)

//   } catch (err) {
//     console.error(err)
//   }

//   // return axios.get(BASE_URL + gigId).then((res) => res.data);
//   // return storageService.get(KEY, gigId)
// }