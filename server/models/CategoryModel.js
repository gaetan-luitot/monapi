const db = require('./DataBase');

class CategoryModel {

  constructor() {

  }

  static async CheckNameExist(name) {
    try {
      let rows = await db(`SELECT name FROM category WHERE name = '${name}';`);
      return { success: true, error: '', data: { exist: !!rows[0] } };
    } catch (e) {
      return { success: false, error: 'Can\'t find category', data: null };
    }
  }

  static async CreateCategory(category) {
    try {
      let rows = await db(`INSERT INTO category VALUES(DEFAULT, '${category.name}');`);
      return { success: true, error: '', data: { exist: !!rows[0] } };
    } catch (e) {
      console.log(e);
      return {
        success: false,
        error: 'Can\'t create category',
        data: null,
      };
    }
  }

}

module.exports = CategoryModel;
