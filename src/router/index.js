import Vue from 'vue';
import VueRouter from 'vue-router';
import PhotoList from '../views/PhotoList.vue';
import PhotoCard from '../views/PhotoCard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'list',
    component: PhotoList,
  },
  {
    path: '/photo/:id',
    name: 'card',
    component: PhotoCard,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
