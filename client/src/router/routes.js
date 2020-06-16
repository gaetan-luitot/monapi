import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// SubRouter :
import AddRoutes from './addRoutes';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    AddRoutes.routes,
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
