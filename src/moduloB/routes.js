export default [
  {
    path: '/modulo-b',
    name: 'modulo-b',
    component: () => import('@/moduloB/views/Main.vue'),
    children: [
      {
        path: 'inicio',
        name: 'inicio',
        components: {
          moduloB: () => import('@/moduloB/views/Inicio.vue')
        }
      },
    ]
  }
]