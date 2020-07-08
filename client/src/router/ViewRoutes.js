const ViewRoutes = {
    routes: {
        path: '/view',
        component: () => import('@/views/View.vue'),
        children: [
            {
                path: '',
                name: 'ViewHome',
                component:
                    () => import('@/views/view/ViewHome.vue'),
            },
            {
                path: ':accountId',
                name: 'ViewAccount',
                component:
                    () => import('@/views/view/ViewAccount.vue'),
            },
            {
                path: ':accountId/:year',
                name: 'ChartYear',
                component:
                    () => import('@/views/view/charts/ChartYear.vue'),
            },
        ],
    },
};

export default ViewRoutes;
