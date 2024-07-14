import { createRouter, createWebHistory } from 'vue-router';
import GameBoard from '@/components/GameBoard.vue';
import GameBoard1 from '@/components/GameBoard1.vue';
import GameBoard2 from '@/components/GameBoard2.vue';

const routes = [
  {
    patch: '/',
    component: GameBoard,
  },
  {
    path: '/game',
    component: GameBoard1,
  },
  {
    path: '/game1',
    component: GameBoard2,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
