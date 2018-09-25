import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import TodoShow from './views/todo-show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todo/:id',
      name: 'todo-show',
      component: TodoShow
    }
  ]
})
