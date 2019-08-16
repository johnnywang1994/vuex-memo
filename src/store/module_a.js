export default {
  state: {
    menuStatus: false
  },
  getters: {
    getRoot(state, getters, rootState) {
      return rootState;
    }
  },
  mutations: {
    changeMenuStatus(state) {
      state.status = !state.status;
    }
  },
  actions: {
    changeMenuStatus({ commit }) {
      commit('changeMenuStatus');
    }
  }
}