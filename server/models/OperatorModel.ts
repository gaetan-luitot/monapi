import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { con } from '../config/Database';

export class OperatorModel {

    static async NameExist(name: string): Promise<IOut> {
        try {
            const row: any = await con.query(`SELECT operator_id FROM operator WHERE name = '${name}' AND user_id = 1 LIMIT 1;`);
            return { code: 200, success: true, info: '', data: {exist: !!row[0]} };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Operator', e.sql);
        }
    }

    static async CreateOperator(name: string, categoryId: number /** @Todo: DTO **/): Promise<IOut> {
        try {
            const rows: any = await con.query(`INSERT INTO operator VALUES(DEFAULT, '${name}', '${categoryId}', 1);`);
            return { code: 200, success: true, info: '', data: rows[0] };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Operator', e.sql);
        }
    }

}
