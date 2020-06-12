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
        component: AddHome,
      },
      {
        path: 'category',
        component: AddCategory,
      },
      {
        path: 'operator',
        component: AddOperator,
      },
      {
        path: 'account',
        component: AddAccount,
      },
      {
        path: 'mean',
        component: AddMean,
      },
      {
        path: 'flow',
        component: AddFlow,
      },
    ],
  },
};

export default AddRoutes;
