import Vue from 'vue'
import Router from 'vue-router'

import PxHome from '@/views/PxHome'
import PxAbout from '@/views/PxAbout'
import PxError from '@/views/PxError'
import PxCoinDetail from '@/views/PxCoinDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: PxHome,
    },
    {
      path: '/about',
      name: 'about',
      component: PxAbout,
    },
    {
      path: '/coin/:id',
      name: 'coin-detail',
      component: PxCoinDetail,
    },
    {
      path: '*',
      name: 'Error',
      component: PxError,
    },
  ],
})
