import store from '@/main/store'
import service from './service/details.service'

const state = {
  details: [],
}

const getters = {
  details() {
    return state.details
  },
}

const actions = {
  async getDetails({ commit }, id) {
    try {
      const result = await service.getDetails(id)
      commit('setData', result)
    } catch (error) {

    }
  },
}

const mutations = {
  setData(state, details) {
    state.details = details
  },
}

store.registerModule('items-details', {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
})
