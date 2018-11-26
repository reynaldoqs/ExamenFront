export default [
  {
    path: '/modulo-a',
    component: () => import('@/moduloA/views/Main.vue'),
    children: [
      {
        path: '/',
        redirect: 'inicio'
      },
      {
        path: 'inicio',
        name: 'inicio-a',
        components: {
          moduloA: () => import('@/moduloA/views/Inicio.vue')
        }
      }
    ]
  }
]