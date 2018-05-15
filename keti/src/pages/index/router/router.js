/**
 * Created by liao on 2017/7/31.
 */
import Vue from 'vue'
import Router from 'vue-router'

import modulesA from '../pageComponents/modulesA'
import modulesB from '../pageComponents/modulesB'






Vue.use(Router);
// Vue.component('addTag', addTag)






export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/modulesA'
    },
    {
      path: '/modulesA',
      name: 'modulesA',
      component: modulesA
    },
    {
      path: '/modulesB',
      name: 'modulesB',
      component: modulesB
    },
  ]
})
