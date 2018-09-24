import Vue from 'vue'
import App from './App.vue'
import todoStore from './todo-store'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  todoStore,
  router,
  render: h => h(App)
}).$mount('#app');
