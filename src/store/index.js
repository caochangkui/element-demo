import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    // 所有用户
    users: [
      {
        id: 1,
        username: 'admin',
        password: '123456'
      }
    ],
    productDetail: JSON.parse(localStorage.getItem('productDetail'))
  },
  getters: {

  },
  mutations: {
    showProductDetail (state, product) {
      state.productDetail = product
      try {
        localStorage.setItem('productDetail', JSON.stringify(product))
      } catch (e) {}
    }
  }
})

export default store
