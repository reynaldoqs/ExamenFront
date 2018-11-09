
import mainRoutes from './routes.js'
import { routes as moduleB } from '@/moduloB'
/*
import { routes as moduleB } from '@/moduloVisitante'
*/

let routes = [...mainRoutes, ...moduleB]

console.log('rutassssssssss', routes);
import Vue from 'vue'
import VueRouter from 'vue-router'/* 
import store from '@/stores/stores' */
Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth) && !store.getters['isAuthenticated']) {
    if (!store.getters['isAuthenticated']) {
      next({
        path: '/usuario',
        query: { action: 'login' }
      })
    } else {
      next()
    }
  } else {
    next()
  }
}) */

Vue.router = router
export default {
  router
}
