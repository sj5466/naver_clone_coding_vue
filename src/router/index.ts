import Vue from 'vue'
import VueRouter, { NavigationGuard, RouteConfig } from 'vue-router'
// modules

import moduleExample from '../modules/example/router'
import BaseLayout from '@/template/BaseLayout.vue'

Vue.use(VueRouter)
 

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: 'example',
    component: BaseLayout,
     
    children: [
      ...moduleExample,
    ],
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

 
export default router
