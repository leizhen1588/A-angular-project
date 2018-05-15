/**
 * Created by liao on 2017/9/12.
 */

import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    filesList:[],
  },
  mutations: {
    setFilesList(state,list){
      state.filesList=list;
    }
  }
})
export default store
