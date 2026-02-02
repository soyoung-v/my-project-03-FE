import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/MemoList.vue'),
    },
    {
      path: '/write',
      component: () => import('../views/MemoFrom.vue'),
    },
    {
      path: '/mod/:id',
      component: () => import('../views/MemoFrom.vue'),
    },
    {
      path: '/detail/:id',
      component: () => import('../views/MemoDetail.vue'),
    }
  ],
})

export default router
