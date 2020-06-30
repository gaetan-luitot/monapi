import { autocomplete } from '../helpers/autocomplete';

const flowService = require('../../services/FlowService');
const AccountService = require('../../services/AccountService');
const OperatorService = require('../../services/OperatorService');
const CategoryService = require('../../services/CategoryService');
const MeanService = require('../../services/MeanService');

export default {
    data: () => ({
        // Errors Handlers :
        errors: [],
        success: '',
        // HTML Properties :
        what: null,
        account: null,
        operator: null,
        category: null,
        to: true,
        amount: null,
        mean: null,
        date: new Date(Date.now()).toISOString().split('T')[0],
        // Containers :
        accounts: [],
        operators: [],
        categories: [],
        means: [],
        // Events :
        flowCreatedEvent: new Event('flowCreated'), // Flow Created
        accountUpdatedEvent: new Event('accountUpdated'), // Account
        operatorUpdatedEvent: new Event('operatorUpdated'), // Operator
        categoryUpdatedEvent: new Event('categoryUpdated'), // Category
        meanUpdatedEvent: new Event('meanUpdated'), // Mean
    }),
    methods: {
        async CheckForm(e) {
            this.errors = [];
            this.success = '';

            if (!this.what) {
                this.errors.push('Field "What" is required.');
            }
            if (!this.account) {
                this.errors.push('Field "Account" is required.');
            }
            if (!this.operator) {
                this.errors.push('Field "Operator" is required.');
            }
            if (this.operator && this.operator === this.account) {
                this.errors.push('Account and Operator must be different.');
            }
            if (!this.category) {
                this.errors.push('Field "Category" is required.');
            }
            if (!this.amount) {
                this.errors.push('Field "Amount" is required.');
            }
            if (!this.mean) {
                this.errors.push('Field "Mean" is required.');
            }
            if (!this.date) {
                this.errors.push('Field "Date" is required.');
            }
            if (this.errors.length <= 0) {
                const res = await (await flowService.createFlow(
                    this.what,
                    this.account,
                    this.operator,
                    this.to,
                    this.category,
                    this.amount,
                    this.mean,
                    this.date,
                )).json();
                if (res.success) {
                    this.success = 'Flow successfully created!';
                    await document.getElementById('input-flow-account').dispatchEvent(this.flowCreatedEvent);
                    await document.getElementById('input-flow-operator').dispatchEvent(this.flowCreatedEvent);
                    await document.getElementById('input-flow-category').dispatchEvent(this.flowCreatedEvent);
                    await document.getElementById('input-flow-mean').dispatchEvent(this.flowCreatedEvent);
                    return res;
                }
                this.errors.push(res.info);
            }
            return e.preventDefault();
        },
        async loadAccounts() {
            const result = await (await AccountService.getAllAccountsName()).json();
            if (result.success) {
                this.accounts = result.data;
            } else {
                this.errors.push('Accounts can\'t be loaded.');
            }
            return result.success;
        },
        async loadOperators() {
            const result = await (await OperatorService.getAllOperatorName()).json();
            if (result.success) {
                this.operators = result.data;
            } else {
                this.errors.push('Operators can\'t be loaded.');
            }
            return result.success;
        },
        async loadCategories() {
            const result = await (await CategoryService.getAllCategoriesName()).json();
            if (result.success) {
                this.categories = result.data;
            } else {
                this.errors.push('Categories can\'t be loaded.');
            }
            return result.success;
        },
        async loadMeans() {
            const result = await (await MeanService.getAllMeansName()).json();
            if (result.success) {
                this.means = result.data;
            } else {
                this.errors.push('Means can\'t be loaded.');
            }
            return result.success;
        },
    },
    async mounted() {
        // Accounts :
        await this.loadAccounts();
        const accountInput = document.getElementById('input-flow-account');
        if (this.accounts.length || accountInput) {
            autocomplete(
                accountInput, this.accounts, this.accountUpdatedEvent, 'flowCreated',
            );
            accountInput.addEventListener('accountUpdated', () => {
                this.account = accountInput.value;
            });
        }
        // Operators :
        await this.loadOperators();
        const operatorInput = document.getElementById('input-flow-operator');
        if (this.operators.length || operatorInput) {
            autocomplete(
                operatorInput, this.operators, this.operatorUpdatedEvent, 'flowCreated',
            );
            operatorInput.addEventListener('operatorUpdated', () => {
                this.operator = operatorInput.value;
            });
        }
        // Categories :
        await this.loadCategories();
        const categoryInput = document.getElementById('input-flow-category');
        if (this.categories.length || categoryInput) {
            autocomplete(
                categoryInput, this.categories, this.categoryUpdatedEvent, 'flowCreated',
            );
            categoryInput.addEventListener('categoryUpdated', () => {
                this.category = categoryInput.value;
            });
        }
        // Means :
        await this.loadMeans();
        const meanInput = document.getElementById('input-flow-mean');
        if (this.means.length || meanInput) {
            autocomplete(
                meanInput, this.means, this.meanUpdatedEvent, 'flowCreated',
            );
            meanInput.addEventListener('meanUpdated', () => {
                this.mean = meanInput.value;
            });
        }
        // Amount Input :
        const amountInput = document.getElementById('input-flow-amount');
        // Set only number in the amount input :
        amountInput.addEventListener('keydown', (e) => {
            if (!(
                e.ctrlKey || e.shiftKey || e.altKey
                || (e.keyCode >= 37 && e.keyCode <= 40)
                || !Number.isNaN(+e.key) || e.keyCode === 9
                || e.keyCode === 8 || e.keyCode === 17
                || e.key === '.' || e.key === ','
            )) {
                e.preventDefault();
            }
        });
    },
};
