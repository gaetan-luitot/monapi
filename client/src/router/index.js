import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/add/Add.vue';
import AddCategory from '../views/add/AddCategory.vue';
import AddHome from '../views/add/AddHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    component: Add,
    children: [
      {
        path: '',
        component: AddHome,
      },
      {
        path: 'category',
        component: AddCategory,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
