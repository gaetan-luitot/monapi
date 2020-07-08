const AccountService = require('../../services/AccountService');

export default {
    data: () => ({
        accounts: [],
    }),
    methods: {
        async loadAccounts() {
            const accounts = await (await AccountService.getAllAccounts()).json();
            if (accounts.success && accounts.data.length) {
                this.accounts = accounts.data;
            } else {
                this.accounts = [];
            }
        },
    },
    async created() {
        await this.loadAccounts();
    },
};
