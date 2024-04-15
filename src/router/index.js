import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import NotFoundPage from '../views/NotFoundPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      status: 404,
      component: NotFoundPage,
    },
  ],
  beforeEnter: function (to, from, next) {
    const exists = store.destinations.find(destination => destination.slug === to.params.slug);
  
    if (exists) {
      next();
    } else {
      next({ name: 'notFound' });
    }
  }
});



export default router;
