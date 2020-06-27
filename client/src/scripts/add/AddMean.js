const MeanService = require('../../services/MeanService');

export default {
    data: () => ({
        errors: [],
        success: '',
        name: null,
    }),
    methods: {
        async CheckForm(e) {
            this.errors = [];
            this.success = '';

            if (this.name) {
                const res = await (await MeanService.createMean(this.name)).json();
                if (res.success) {
                    this.success = 'Mean successfully created!';
                    return res;
                }
                this.errors.push(res.info);
            } else {
                this.errors.push('Name required.');
            }
            return e.preventDefault();
        },
    },
};
