import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import BoardComp from '@/views/BoardComp.vue';
import RegPage from '@/views/RegPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Main',
      name: 'MainPage',
      component: MainPage,

    },
    {
      path: '/board',
      name: 'BoardComp',
      component: BoardComp,
    },
    {
      path: '/autho',
      name: 'RegPage',
      component: RegPage,
      alias: '/'
    },
  ]
})




