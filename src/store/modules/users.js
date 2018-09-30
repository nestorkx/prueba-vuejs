import User from '../../services/UserService'

// initial state
const state = {
  users: []
};

// getters
const getters = {};

// actions
const actions = {
  loadUsers({ commit }){
    User.getUsers().then(users => {
      commit('SET_USERS',users)
    })
  }
};

// mutations
const mutations = {
  SET_USERS (state, users) {
    state.users = users
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
