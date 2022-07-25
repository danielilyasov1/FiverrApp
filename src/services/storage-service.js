import { gigService } from '../services/gig-service.js'

// const fs = require('fs')
// const gigs = require('../../data/gigs.json')

// import gigs from '../../data/gigs.json'
// import orders from '../../data/orders.json'

export const storageService = {
  query,
  queryOrder,
  get,
  post,
  put,
  remove,
  postMany,
}

function queryOrder(key) {
  return Promise.resolve(
    JSON.parse(localStorage.getItem(key)) || _createDefaultOrders()
  )
}

function _createDefaultOrders() {
  return [
    {
      _id: 'b101',
      title: 'Button is missing',
      severity: 1,
    },
    {
      _id: 'b102',
      title: 'Error while watching',
      severity: 2,
    },
    {
      _id: 'b103',
      title: 'Warning appears',
      severity: 3,
    },
  ]
}

// function queryOrder (key) {
//   return Promise.resolve(JSON.parse(localStorage.getItem(key))||
//   [
//     {
//       "_id":"o101",
//       "category": "Logo",
//       "title": "I will do superb, unique and modern business logo design",
//       "owner": {
//         "_id": "u101",
//         "fullname": "Dudu Da",
//         "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/044fb5914a845a4eb59fc2b69f7f7b32-1634120039750/4dbc2acb-7322-4cd0-9afb-e5190e8e8a0d.jpg",
//         "level": "basic/premium",
//         "rate": 4,
//         "loc": "India",
//       "memberSince": "Jun 2014",
//       "avgResponceTime": "2 hours",
//       "lastDelivery": "about 3 hours",
//       "about": "Hello! My name is VD. I am a connoisseur of art and music. I love being around nature and my pets. I have a team of professional graphic designers with an experience of 8+ years. We specialize in logo designing. We're available exclusively on fiverr to rock your world with our designing skills. Come and experience it for yourself!"
//       },
//       "daysToMake": 3,
//       "img":
//         "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/116971341/original/609e515ad8fb3f361fcd5c7de44544d56815e0af.png",

//       "description": "Hi there ! Thanks for stopping by !!\nA Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, expertise as Logo Maker, You'll get creative & AWESOME logo design for your business.\nMy portfolio : https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh\n★ Why Us? ★\nTalented Logo Maker Team\nFully custom made, creative, original, UNIQUE and AWESOME designs\nProfessional customer support 24/7\nHigh Quality work\n100% money back policy if not satisfied\n★ WHAT DO YOU GET? ★\n✔ Highly Professional, UNIQUE & High Quality designs\n✔ UNLIMITED revisions until u r 100% satisfied\n✔ Fast turn around time 24 to 48 hours only.\n✔ 100% original & unique vector design from Adobe Illustrator\n✔ Vector Source Files (scalable without any quality loss) (AI, EPS, PDF) for the final design ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔ Guaranteed High Quality work\nIf you have any question,\nFeel free to★ Contact Me! ★I'll be happy to help !\nLet's get started!\n-Your Logo Maker",
//       "tags": [
//         "logo-design",
//         "artisitic",
//         "proffesional",
//         "accessible"
//       ],
//       "likedByUsers" : ["mini-user"]

//     }

//   ]
//   )
// }

function query(key) {
  return Promise.resolve(JSON.parse(localStorage.getItem(key)))
}

function get(entityType, entityId) {
  console.log(entityId)
  return query(entityType).then((entities) =>
    entities.find((entity) => entity._id === entityId)
  )
}

function post(entityType, newEntity) {
  console.log('ggggggggggggggggggggggg')
  newEntity._id = _makeId()
  return query(entityType).then((entities) => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function postMany(entityType, newEntities) {
  return query(entityType).then((entities) => {
    entities.push(...newEntities)
    _save(entityType, entities)
    return entities
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then((entities) => {
    const idx = entities.findIndex((entity) => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
