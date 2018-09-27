import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const todos = [
  {
    id: 1,
    title: 'title1',
    description: 'description'
  }
];

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    FETCH_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    fetchTodos({ commit } )  {
      return new Promise(resolve => {
        commit("FETCH_TODOS", todos);
        resolve();
      });
    },

    fetchTodo( { commit }, { id } ){
      return new Promise(resolve => {
        commit("FETCH_TODOS", todos);
        resolve();
      });
    }
  }
})
