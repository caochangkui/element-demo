import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    productDetail: {
      id: '027',
      name: 'faf s dsd  dsrererd evcry',
      address: 'shanghai pudongxinqu',
      telephone: '18345678900'
    }
  }
})

export default store
