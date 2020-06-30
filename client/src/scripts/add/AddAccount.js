import { autocomplete } from '../helpers/autocomplete';

const OperatorService = require('../../services/OperatorService');
const AccountService = require('../../services/AccountService');

export default {
    data: () => ({
        errors: [],
        success: '',
        operator: null,
        operators: [],
        afterUpdateEvent: new Event('afterUpdate'),
        operatorAddedEvent: new Event('operatorAdded'),
    }),
    methods: {
        async CheckForm() {
            this.errors = [];
            this.success = '';

            if (!this.operator) {
                this.errors.push('Operator required.');
            }

            if (this.errors.length <= 0) {
                const result = await (await AccountService.createAccount(
                    this.operator,
                )).json();

                if (result.success) {
                    this.success = result.info;
                    await document.getElementById('input-operator-name').dispatchEvent(this.operatorAddedEvent);
                    this.operator = '';
                    return true;
                }
                this.errors.push(result.info);
            }

            return true;
        },
        async loadOperator() {
            const result = await (await OperatorService.getAllOperatorName()).json();
            if (result.success) {
                this.operators = result.data;
            } else {
                this.errors.push('Operators can\'t be loaded.');
            }

            return result.success;
        },
    },
    async mounted() {
        await this.loadOperator();
        const input = document.getElementById('input-operator-name');
        if (this.operators.length || input) {
            autocomplete(
                input, this.operators, this.afterUpdateEvent, 'operatorAdded',
            );
            input.addEventListener('afterUpdate', () => {
                this.operator = input.value;
            });
        }
    },
};
