import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { ICategoryInDTO } from '../dtos/ICategoryDTO';
import { con } from '../config/Database';

export class CategoryModel {

    static async GetAllNames(): Promise<IOut> {
        try {
            const rows: any = await con.query(`SELECT name FROM category WHERE user_id = 1;`);
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Category', e.code);
        }
    }

    static async GetByName(name: string): Promise<IOut> {
        try {
            const row: any = await con.query(`SELECT id, name FROM category WHERE name = '${name}' AND user_id = 1 LIMIT 1;`);
            return { code: 200, success: true, info: '', data: row[0] };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Category', e.code);
        }
    }

    static async Create(category: ICategoryInDTO): Promise<IOut> {
        try {
            const rows: any = await con.query(`INSERT INTO category VALUES(DEFAULT, '${category.name}', ${category.userId});`);
            return { code: 200, success: true, info: '', data: { id: rows.insertId } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Category', e.code);
        }
    }

}
