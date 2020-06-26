import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { IOperatorInDTO } from '../dtos/IOperatorDTO';
import { con } from '../config/Database';

export class OperatorModel {

    static async GetAllNames(): Promise<IOut> {
        try {
            const rows: any = await con.query(`SELECT name FROM operator WHERE user_id = 1;`);
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Operator', e.code);
        }
    }

    static async GetByName(name: string): Promise<IOut> {
        try {
            const row: any = await con.query(`SELECT id, name FROM operator WHERE name = '${name}' AND user_id = 1 LIMIT 1;`);
            return { code: 200, success: true, info: '', data: row[0] };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Operator', e.code);
        }
    }

    static async Create(operator: IOperatorInDTO): Promise<IOut> {
        try {
            const rows: any = await con.query(
              `INSERT INTO operator VALUES(DEFAULT, '${operator.name}', ${operator.userId});`
            );
            return { code: 200, success: true, info: '', data: { id: rows.insertId } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Operator', e.code);
        }
    }

}
