
import Vue from 'vue'
import axios from 'axios';

import ElementUI from 'element-ui'
import echarts from 'echarts'

import router from './router/router'
import store from './store/store'

import App from './App.vue'


import 'element-ui/lib/theme-chalk/index.css'
import './../../css/main.css'
import Header from './components/header'

Vue.component('Header', Header)

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI)

axios.defaults.baseURL = '/topicSstc';

Vue.prototype.$http = axios;
// // Vue.config.productionTip = false;
// // //是否开启debug模式
// // Vue.config.debug = false;
//
/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
