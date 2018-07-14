import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
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
