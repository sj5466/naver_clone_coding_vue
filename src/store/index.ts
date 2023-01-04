import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// modules
 
import moduleExample from '../modules/example/store'
 
Vue.use(Vuex)

// initial state
const state: RootState = {}

export default new Vuex.Store<RootState>({
  state,
  actions,
  getters,
  mutations,
  modules: {
  
    $example: moduleExample,
   
  },
})
