import { userService } from '../../services/user-service.js'

export default {
  state: {
      user: [],
  },
  getters: {
    user({ user }) {
        return user
      },
  },
  mutations: {
    getLogedInUser(state, { user }) {
        state.user = user
      },
  
    
   
  },
  actions: {
    loadlogedInUser({ commit, user }) {
        userService.query().then((user) => {
          commit({ type: 'getLogedInUser', user })
        })
      },
    // getLogedInUser(){
    //     const user= {
    //         "_id": "u101",
    //         "fullname": "User 1",
    //         "imgUrl": "https://ca.slack-edge.com/T035GULFZRD-U03B4FRBQCF-03a3d8bc2ae8-72",
    //         "username": "user1",
    //         "password": "secret",
    //         "level": "basic/premium",
    //     }
    //     commit({ type: 'getLogedInUser', user })
    // }
  }
}

