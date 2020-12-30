import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import login from '@/pages/login'
import registered from '@/pages/registered'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registered',
      name: 'registered',
      component: registered
    }
  ]
})
