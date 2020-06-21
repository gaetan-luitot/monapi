import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
// import { DatabaseConfig } from '../config/DatabaseConfig';  /** @Todo : include this for all models **/
import { query } from '../config/Database';

export class CategoryModel {

    constructor() {

    }

    static async CheckNameExist(name: string) {
        try {
            const rows: any = await query(`SELECT name FROM category WHERE name = '${name}';`);
            console.log(rows);
            return { success: true, error: '', data: { exist: !!rows } };
        } catch (e) {
            return { success: false, error: 'Can\'t find category', data: null };
        }
    }

    static async CreateCategory(category: any /** @Todo: DTO **/) {
        try {
            const rows: any = await query(`INSERT INTO category VALUES(DEFAULT, '${category.name}');`);
            return { success: true, error: '', data: rows[0] };
        } catch (e) {
            console.log(e);
            return DatabaseHelper.errorHandler(e.errno, 'Category', e.sqlMessage);
        }
    }

}
