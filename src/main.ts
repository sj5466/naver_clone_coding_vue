import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
 

 

Vue.config.productionTip = false

//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: I N I T   V U E   R O O T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

const bootstrap = async () => {
 

  new Vue({
    router,
    store,
 
    render: (h) => h(App),
    beforeCreate() {},
  }).$mount('#app')
}
bootstrap()
