import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import { userService } from './user-service.js'

const KEY = 'reviews_db'

_createReviews()
export const reviewService = {
  query,
  getById,
  remove,
  save,
  getEmptyGig,
  getLabels,
}

const BASE_URL =
  process.env.NODE_ENV !== 'development'
    ? '/api/gig'
    : '//localhost:3030/api/gig'

async function query(filterBy) {
  try {
    const reviews = await storageService.query(KEY)
    return Promise.resolve(reviews)
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

  // return axios.get(BASE_URL + gigId).then((res) => res.data);
  // return storageService.get(KEY, gigId)
}

async function remove(gigId) {
  try {
    // const res = await axios.delete(BASE_URL + gigId)
    const res = await storageService.remove(KEY, gigId)
    return res
  } catch (err) {
    console.error(err)
  }

  // return axios.delete(BASE_URL + gigId).then((res) => res.data);
  // return storageService.remove(KEY, gigId)
}

async function save(gig) {
  try {
    if (gig._id) {
      // const res = await axios.put(BASE_URL + gig._id, gig)
      const res = await storageService.put(KEY, gig)
      return res
    } else {
      // const res = await axios.post(BASE_URL, gig)
      const res = await storageService.post(KEY, gig)
      return res
    }
  } catch (err) {
    console.error(err)
  }

  // if (gig._id) {
  //   return axios.put(BASE_URL + gig._id, gig).then((res) => res.data);
  // } else {
  //   return axios.post(BASE_URL , gig).then((res) => res.data);
  // }

  // if (gig._id) return storageService.put(KEY, gig)
  // return storageService.post(KEY, gig)
}

function getEmptyGig() {
  return {}
}

function getLabels() {
  return labels
}

function _createReviews() {
  let reviews = utilService.loadFromStorage(KEY)
  if (!reviews || !reviews.length) {
    reviews = [
        
    {
        "userId": userService.query(),
        "gigId":"sss",
        "txtRreview": "Very kind and works fast",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "/img/img2.jpg"
        }
        
      }
    ]
    

    utilService.saveToStorage(KEY, reviews)
  }
  return reviews
}

