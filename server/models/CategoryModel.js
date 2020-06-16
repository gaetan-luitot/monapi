const db = require('../config/DataBase');  /** @Todo : include this for all models **/

class CategoryModel {

    constructor() {

    }

    static async CheckNameExist(name) {
        try {
            let rows = await db(`SELECT name FROM category WHERE name = '${name}';`);
            console.log(r)
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
            switch (e.errno) {
                case 1062:
                    return { success: false, error: 'This Category already exist.', data: null };
                default:
                    console.log(e);
                    return { success: false, error: 'Can\'t create category.', data: null };
            }
        }
    }

}

module.exports = CategoryModel;
