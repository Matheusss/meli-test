import store from '@/main/store'
import service from './service/list.service'

const state = {
  list: [],
}

const getters = {
  list() {
    return state.list
  },
}

const actions = {
  async getList({ commit }, search) {
    try {
      commit('setData', [])
      const result = await service.getList(search)
      commit('setData', result)
    } catch (error) {

    }
  },
}

const mutations = {
  setData(state, list) {
    state.list = list
  },
}

store.registerModule('items-list', {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
})
