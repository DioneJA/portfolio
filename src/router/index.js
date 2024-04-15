import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(
        /*webpackChunkName: "NotFound" */
        '../views/NotFoundPage.vue') 
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
