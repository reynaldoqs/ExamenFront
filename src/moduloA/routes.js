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
      },
      {
        path: 'composicion',
        name: 'composicion',
        components: {
          moduloA: () => import('@/moduloA/views/Composicion.vue')
        }
      },
      {
        path: 'perfil',
        name: 'perfil',
        components: {
          moduloA: () => import('@/moduloA/views/Perfil.vue')
        }
      }
    ]
  }
]