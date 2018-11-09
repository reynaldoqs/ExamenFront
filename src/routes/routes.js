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
]