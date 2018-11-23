import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import store from './stores/stores'

//importanto plugins
import './plugins'
//importando components compartidos
import './shared/components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
