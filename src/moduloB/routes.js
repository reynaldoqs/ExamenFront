export default [
  {
    path: '/',
    redirect: 'modulo-b'
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/shared/components/NotFound.vue')
  },
  {
    path: '/modulo-b',
    component: () => import('@/moduloB/views/Main.vue'),
    children: [
      {
        path: '/',
        redirect: 'inicio'
      },
      {
        path: 'inicio',
        name: 'inicio',
        component: () => import('@/moduloB/views/Inicio.vue')

      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/moduloB/views/Login.vue')

      },
      {
        path: 'composicion',
        name: 'composicion',
        component: () => import('@/moduloB/views/Composicion.vue')

      },
    ]
  }
]