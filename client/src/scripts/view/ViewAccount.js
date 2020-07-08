const FlowService = require('../../services/FlowService');

export default {
    data: () => ({
        years: [],
    }),
    methods: {
        async loadYears() {
            const years = await (await FlowService.getYears(this.$route.params.accountId)).json();
            if (years.success && years.data.length) {
                this.years = years.data;
            } else {
                this.years = [];
            }
        },
    },
    async created() {
        await this.loadYears();
    },
};
