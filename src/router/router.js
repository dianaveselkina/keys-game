import { createRouter, createWebHistory } from 'vue-router';
import GameBoard from '@/components/GameBoard.vue';
import GameBoard1 from '@/components/GameBoard1.vue';

const routes = [
  {
    patch: '/',
    component: GameBoard,
  },
  {
    path: '/game',
    component: GameBoard1,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
