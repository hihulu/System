import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 初始化全局的一个变量
    login: {"code":-1,"msg":"123"}
  },
  mutations: {
    modifyTips(state,msg) {
      state.testTxt.tips= msg;
    }
  }
})
export default store
