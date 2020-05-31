
export default {
  data: () => ({
    errors: [],
    name: null,
  }),
  methods: {
    async CheckForm(e) {
      this.errors = [];
      if (!this.name) {
        this.errors.push('Name required.');
      } else {
        let nameExist = await this.CheckName();
        nameExist = await nameExist.json();
        if (!nameExist.success) {
          this.errors.push(`${nameExist.error}`);
        } else if (nameExist.data.exist) {
          this.errors.push('This name is already used.');
        }
      }


      if (this.errors.length <= 0) {
        return this.CreateCategory();
      }
      return e.preventDefault();
    },
    CreateCategory() {
      return fetch('http://localhost:4000/add/category', {
        method: 'POST',
        body: JSON.stringify({ name: this.name }),
        headers: { 'content-type': 'application/json' },
      });
    },
    CheckName() {
      return fetch('http://localhost:4000/category/check_name', {
        method: 'POST',
        body: JSON.stringify({ name: this.name }),
        headers: { 'content-type': 'application/json' },
      });
    },
  },
};
