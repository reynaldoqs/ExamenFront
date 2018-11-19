export default [
  {
    path: '/modulo-b',
    name: 'modulo-b',
    component: () => import('@/moduloB/views/Main.vue'),
    children: [
     /*  {
        path: '/',
        redirect: 'inicio'
      }, */
      {
        path: 'inicio',
        name: 'inicio',
        components: {
          moduloB: () => import('@/moduloB/views/Inicio.vue')
        }
      },
      {
        path: 'login',
        name: 'login',
        components: {
          moduloB: () => import('@/moduloB/views/Login.vue')
        }
      },
      {
        path: 'composicion',
        name: 'composicion',
        components: {
          moduloB: () => import('@/moduloB/views/Composicion.vue')
        }
      },
    ]
  }
]