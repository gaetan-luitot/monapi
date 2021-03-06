import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { IMeanInDTO } from '../dtos/IMeanDTO';
import { con } from '../config/Database';

export class MeanModel {

    static async GetAllNames(): Promise<IOut> {
        try {
            const rows: any = await con.query(`SELECT name FROM mean WHERE user_id = 1;`);
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Mean', e.code);
        }
    }

    static async GetByName(name: string): Promise<IOut> {
        try {
            const row: any = await con.query(`SELECT id, name FROM mean WHERE name = '${name}' AND user_id = 1 LIMIT 1;`);
            return { code: 200, success: true, info: '', data: row[0] };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Mean', e.code);
        }
    }

    static async Create(mean: IMeanInDTO): Promise<IOut> {
        try {
            const rows: any = await con.query(`INSERT INTO mean VALUES(DEFAULT, '${mean.name}', ${mean.userId});`);
            return { code: 200, success: true, info: '', data: { id: rows.insertId } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Mean', e.code);
        }
    }

}
