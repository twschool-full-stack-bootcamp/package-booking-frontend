import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/pageStored',
      name: 'pageStored',
      component: () => import('./views/pageStored.vue')
    },
    {
      path:'/fetchPackage',
      name:'fetchPackage',
      component:() =>import('./views/fetchPackage.vue')
    },{
      path:'/addInfo',
      name:'addInfo',
      component:() =>import('./views/addInfo.vue')
    }
  ]
})
