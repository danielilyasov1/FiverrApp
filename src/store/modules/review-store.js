import { reviewService } from '../../services/1review-service.js'

export default {
  state: {
      reviews: [],
  },
  getters: {
    reviews({ reviews }) {
        return reviews
      },
  },
  mutations: {
    setReviews(state, { reviews }) {
        state.reviews = reviews
      },
   
  },
  actions: {
     loadReviews({ commit, state }) {
        reviewService.query().then((reviews) => {
          commit({ type: 'setReviews', reviews })
        })
      },
 
  }
}
