export default [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/shared/components/NotFound.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('@/moduloB/views/Inicio.vue')

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/moduloB/views/Login.vue')

  },

]