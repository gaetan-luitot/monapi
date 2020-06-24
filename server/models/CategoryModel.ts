import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
// import { DatabaseConfig } from '../config/DatabaseConfig';  /** @Todo : include this for all models **/
import { IOut } from '../interfaces/IOut';
import { con } from '../config/Database';

export class CategoryModel {

    constructor() {

    }

    static async GetAllCategories() {
        try {
            const rows: any = await con.query(`SELECT category_id, name FROM category WHERE user_id = 1;`);
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return { code: 500, success: false, info: 'Can\'t find categories', data: null };
        }
    }

    static async CheckNameExist(name: string) {
        try {
            const rows: any = await con.query(`SELECT name FROM category WHERE name = '${name}' AND user_id = 1;`);
            return { code: 200, success: true, info: '', data: { exist: !!rows } };
        } catch (e) {
            return { code: 500, success: false, info: 'Can\'t find category', data: null };
        }
    }

    static async CreateCategory(category: any /** @Todo: DTO **/): Promise<IOut> {
        try {
            const rows: any = await con.query(`INSERT INTO category VALUES(DEFAULT, '${category.name}', 1);`);
            return { code: 200, success: true, info: '', data: rows[0] };
        } catch (e) {
            // console.log(e);
            return DatabaseHelper.errorHandler(e.errno, 'Category', e.sqlMessage);
        }
    }

}
