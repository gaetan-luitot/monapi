import View from '../views/view/View.vue';
import ViewHome from '../views/view/ViewHome.vue';
import viewYear from '../views/view/ViewYear.vue';

const ViewRoutes = {
    routes: {
        path: '/view',
        component: View,
        children: [
            {
                path: '',
                name: 'ViewHome',
                component: ViewHome,
            },
            {
                path: ':accountId/:year',
                name: 'ViewYear',
                component: viewYear,
            },
        ],
    },
};

export default ViewRoutes;
