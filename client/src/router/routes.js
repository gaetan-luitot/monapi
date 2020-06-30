import Vue from 'vue';
import VueRouter from 'vue-router';
// SubRouter :
import AddRoutes from './AddRoutes';
import ViewRoutes from './ViewRoutes';

Vue.use(VueRouter);

const routes = [
    ViewRoutes.routes,
    AddRoutes.routes,
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
