import Vue from 'vue'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/reset.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

let storsssse = {}
console.log(store)
console.log(store.state.users[0].username)
console.log(storsssse.state.users[0].username)

let a = store.state.users[0].username

console.log(a)
