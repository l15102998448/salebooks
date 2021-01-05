import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Login from '@/pages/login'
import Registered from '@/pages/registered'
import HomeContent from '@/pages/homeContent'
import Category from '@/pages/category'
import Detail from '@/pages/detail'
import Car from '@/pages/car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/homeContent',
          name: 'homeContent',
          component: HomeContent
        },
        {
          path: '/category',
          name: 'category',
          component: Category
        },
        {
          path: '/detail',
          name: 'detail',
          component: Detail
        },
        {
          path: '/car',
          name: 'car',
          component: Car
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registered',
      name: 'registered',
      component: Registered
    }
  ]
})
