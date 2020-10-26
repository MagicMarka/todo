import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  plugins: [createPersistedState()],
  mutations: {
    deleteTask(state, payload) {
      state.tasks.splice(state.tasks.indexOf(payload), 1);
    },
    addTask(state, payload) {
      state.tasks.unshift(payload)
    },
    toogleComplete(state, index) {
      state.tasks[index].done = !state.tasks[index].done 
    }
  },
  actions: {
    deleteTask({commit}, payload) {
      commit('deleteTask', payload);
    },
    addTask({state, commit}, payload) {
      let newTask = {
        id: state.tasks.length,
        title: payload,
        done: false,
      };
      commit('addTask', newTask);
    },
    toogleComplete({commit}, index) {
      commit('toogleComplete', index);
    },
  },
  modules: {
  }
})
