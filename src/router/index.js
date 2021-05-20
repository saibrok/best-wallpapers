import Vue from 'vue';
import VueRouter from 'vue-router';
import PhotoList from '../views/PhotoList.vue';
import PhotoShow from '../views/PhotoShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/page/:number',
    name: 'list',
    component: PhotoList,
    props: true,
  },
  {
    path: '/photo/:id',
    name: 'card',
    component: PhotoShow,
    props: true,
  },
  {
    path: '/',
    redirect: { name: 'list', params: { number: 1 } },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
