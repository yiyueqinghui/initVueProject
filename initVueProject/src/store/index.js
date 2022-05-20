import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// 读取modules下的目录
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})

// 持久化存储
let vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['table']   // 需要持久化存储的模块，即文件名
})

// 实例化仓库
var store = new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin]
})

export default store

