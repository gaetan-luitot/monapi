import Add from '../views/add/Add.vue';
import AddCategory from '../views/add/AddCategory.vue';
import AddHome from '../views/add/AddHome.vue';
import AddAccount from '../views/add/AddAccount.vue';
import AddMean from '../views/add/AddMean.vue';
import AddFlow from '../views/add/AddFlow.vue';
import AddOperator from '../views/add/AddOperator.vue';


const AddRoutes = {
    routes: {
        path: '/add',
        component: Add,
        children: [
            {
                path: '',
                name: 'AddHome',
                component: AddHome,
            },
            {
                path: 'category',
                name: 'AddCategory',
                component: AddCategory,
            },
            {
                path: 'operator',
                name: 'AddOperator',
                component: AddOperator,
            },
            {
                path: 'account',
                name: 'AddAccount',
                component: AddAccount,
            },
            {
                path: 'mean',
                name: 'AddMean',
                component: AddMean,
            },
            {
                path: 'flow',
                name: 'AddFlow',
                component: AddFlow,
            },
        ],
    },
};

export default AddRoutes;
