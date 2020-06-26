const CategoryService = require('../../services/CategoryService');

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
                const res = await (await CategoryService.createCategory(this.name)).json();
                if (res.success) {
                    this.success = 'Category successfully created!';
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
