export default [
  {
    path: '/',
    redirect: 'general'
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
  {
    path: '/general',
    component: () => import('@/moduloB/views/PantallaGeneral.vue'),
    children: [
      {
        path: '/',
        redirect: 'default'
      },
      {
        path: 'default',
        name: 'default',
        components: {
          general: () => import('@/moduloB/components/Default.vue')
        }
      },
      {
        path: 'adicionar',
        name: 'adicionar',
        components: {
          general: () => import('@/moduloB/components/Adicionar.vue')
        }
      },
      {
        path: 'registro',
        name: 'registro',
        components: {
          general: () => import('@/moduloB/components/Registro.vue')
        }
      }
    ]

  },

]