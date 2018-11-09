import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'

import './plugins'

Vue.config.productionTip = false

new Vue({
  router,
  /* router,
  store, */
  render: h => h(App)
}).$mount('#app')
