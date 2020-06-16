const Database = require('../helpers/DatabaseHelper');  /** @Todo : include this for all models **/

class CategoryModel {

    constructor() {

    }

    static async CheckNameExist(name) {
        try {
            let rows = await Database.db(`SELECT name FROM category WHERE name = '${name}';`);
            console.log(r)
            return { success: true, error: '', data: { exist: !!rows[0] } };
        } catch (e) {
            return { success: false, error: 'Can\'t find category', data: null };
        }
    }

    static async CreateCategory(category) {
        try {
            let rows = await Database.db(`INSERT INTO category VALUES(DEFAULT, '${category.name}');`);
            return { success: true, error: '', data: { exist: !!rows[0] } };
        } catch (e) {
            return Database.errorHandler(e.errno, 'Category', e.sqlMessage);
        }
    }

}

module.exports = CategoryModel;
