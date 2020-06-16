
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
                const res = await (await this.CreateCategory()).json();
                if (res.success) {
                    this.success = 'Category successfully created!';
                    return res;
                }
                this.errors.push(res.error);
            } else {
                this.errors.push('Name required.');
            }
            return e.preventDefault();
        },
        async CreateCategory() {
            return fetch('http://localhost:4000/category', {
                method: 'POST',
                body: JSON.stringify({ name: this.name }),
                headers: { 'content-type': 'application/json' },
            });
        },
    },
};
