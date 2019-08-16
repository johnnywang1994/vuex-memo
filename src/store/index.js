import Vue from 'vue';
import Vuex from 'vuex';

import ModuleA from './module_a';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: 'Johnny',
    age: 0,
    users: [
      { id: 1, name: 'Chris' },
      { id: 2, name: 'Amy' },
      { id: 3, name: 'Kevin' },
    ]
  },
  getters: {
    info: state => {
      return state.username + ' ' + state.age;
    },
    getUser: state => id => {
      return state.users.find(user => user.id === id);
    },
    // getRoot: (state, getters, rootState) => {
    //   return state;
    // }
  },
  mutations: {
    increment(state, n) {
      state.age += n;
    },
    addUser(state, payload) {
      const newUsers = [...state.users];
      console.log(payload);
      newUsers.push(payload);
      state.users = newUsers;
    }
  },
  actions: {
    increment({ commit }, payload) {
      commit('increment', payload);
    }
  },
  modules: {
    'a': ModuleA
  }
})

export default store;