import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import Dashboard from '@/views/Dashboard'

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
        }

      ]
    }
  ]
})
