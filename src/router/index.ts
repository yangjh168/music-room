import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'main' },
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: 'room',
        name: 'main-room',
        component: () => import('@/views/room/index.vue'),
        children: [
          {
            path: ':id?',
            name: 'main-room-detail',
            component: () => import('@/views/room/detail/index.vue'),
          },
        ],
      },
      {
        path: 'setting',
        name: 'main-setting',
        component: () => import('@/views/setting/index.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/views/about.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
