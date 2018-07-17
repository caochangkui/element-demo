import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    // 所有用户
    users: [
      {
        username: 'admin',
        password: '123456'
      }
    ],
    productDetail: JSON.parse(localStorage.getItem('productDetail'))
  },
  // getters: {
  //   getUsers (state) {
  //     try {
  //       if (localStorage.getItem('users')) {
  //         return JSON.parse(localStorage.getItem('users'))
  //       } else {
  //         return state.users
  //       }
  //     } catch (e) {}
  //   }
  // },
  mutations: {
    register (state, user) {
      state.users.push(user)
      console.log(state.users)
    },
    showProductDetail (state, product) {
      state.productDetail = product
      try {
        localStorage.setItem('productDetail', JSON.stringify(product))
      } catch (e) {}
    }
  }
})

export default store
