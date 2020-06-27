import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { IMeanInDTO } from '../dtos/IMeanDTO';
import { con } from '../config/Database';

export class MeanModel {

    static async Create(mean: IMeanInDTO): Promise<IOut> {
        try {
            const rows: any = await con.query(`INSERT INTO mean VALUES(DEFAULT, '${mean.name}', ${mean.userId});`);
            return { code: 200, success: true, info: '', data: { id: rows.insertId } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Mean', e.code);
        }
    }

}
