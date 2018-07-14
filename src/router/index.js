import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Dashboard from '@/views/Dashboard'
import Product from '@/views/product/Product'
import ProductList from '@/views/product/ProductList'
import PortraitList from '@/views/product/PortraitList'
import ProductDetail from '@/views/product/ProductDetail'
import Login from '@/views/login/Login'
import Register from '@/views/login/Register'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      meta: {
        requireLogin: true
      },
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: {
            requireLogin: true
          },
          component: Dashboard
        },
        {
          path: 'product',
          redirect: '/product/product_list',
          name: 'Product',
          meta: {
            requireLogin: true
          },
          component: Product,
          children: [
            {
              path: 'product_list',
              name: 'ProductList',
              meta: {
                requireLogin: true
              },
              component: ProductList
            },
            {
              path: '/product/product_list/:id', // 传入不同的id,就可以跳转到不同的子路由
              name: 'ProductDetail',
              meta: {
                requireLogin: true
              },
              component: ProductDetail
            },
            {
              path: 'portrait_list',
              name: 'PortraitList',
              meta: {
                requireLogin: true
              },
              component: PortraitList
            }
          ]
        }
      ]
    }
  ]
})
// 全局导航钩子
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
