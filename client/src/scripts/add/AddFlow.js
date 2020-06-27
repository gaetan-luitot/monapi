const flowService = require('../../services/FlowService');

export default {
    data: () => ({
        errors: [],
        success: '',
        what: null,
        account: null,
        operator: null,
        category: null,
        to: true,
        amount: null,
        mean: null,
        date: new Date(Date.now()).toISOString().split('T')[0],
    }),
    methods: {
        async CheckForm(e) {
            this.errors = [];
            this.success = '';

            if (this.what) {
                const res = await (await flowService.createFlow(this.what)).json();
                if (res.success) {
                    this.success = 'Flow successfully created!';
                    return res;
                }
                this.errors.push(res.info);
            } else {
                this.errors.push('Field "What" is required.');
            }
            return e.preventDefault();
        },
    },
    async mounted() {
        const amountInput = document.getElementById('input-flow-amount');
        // Set only number in this input :
        amountInput.addEventListener('keydown', (e) => {
            console.log(document.getElementById('input-flow-date'));
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
