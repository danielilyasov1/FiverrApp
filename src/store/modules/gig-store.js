import { gigService } from '../../services/gig-service.js'

export default {
  state: {
    gigs: [],
    filterBy: {},
  },
  getters: {
    gigs({ gigs }) {
      return gigs
    },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs
    },

    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadGigs({ commit, state }) {
      gigService.query(state.filterBy).then((gigs) => {
        commit({ type: 'setGigs', gigs })
      })
    },

    setFilterBy({ commit, dispatch }, { filterBy }) {
      console.log('ueu', filterBy) //{10,50}
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
      // gigService.query(filterBy)
      // .then((gigs) => {
      //   commit({ type: 'setGigs', gigs })
      // })
    },
  },
}
