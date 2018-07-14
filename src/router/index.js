import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Dashboard from '@/views/Dashboard'
import Product from '@/views/product/Product'
import ProductList from '@/views/product/ProductList'
import PortraitList from '@/views/product/PortraitList'
import ProductDetail from '@/views/product/ProductDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'product',
          redirect: '/product/product_list',
          name: 'Product',
          component: Product,
          children: [
            {
              path: 'product_list',
              name: 'ProductList',
              component: ProductList
            },
            {
              path: '/product/product_list/:id', // 传入不同的id,就可以跳转到不同的子路由
              name: 'ProductDetail',
              component: ProductDetail
            },
            {
              path: 'portrait_list',
              name: 'PortraitList',
              component: PortraitList
            }
          ]
        }
      ]
    }
  ]
})
