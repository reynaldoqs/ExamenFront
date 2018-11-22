
import Vue from 'vue'
import Vuex from 'vuex'
import { vuex as storeA } from '@/moduloA'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: storeA,
  strict: debug
})
