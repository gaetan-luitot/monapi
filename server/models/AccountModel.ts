import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { IAccountInDTO } from '../dtos/IAccountDTO';
import { con } from '../config/Database';

export class AccountModel {

    static async GetAllNames(): Promise<IOut> {
        try {
            const rows: any = await con.query(`
                SELECT O.name FROM account A
                INNER JOIN operator O ON A.operator_id = O.id AND A.user_id = O.user_id
                WHERE O.user_id = 1;`
            );
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Account', e.code);
        }
    }

    static async GetByOperatorName(name: string): Promise<IOut> {
        try {
            const row: any = await con.query(`
                SELECT A.id, O.id as 'operatorId' FROM account A
                INNER JOIN operator O ON A.operator_id = O.id AND A.user_id = O.user_id
                WHERE O.name = '${name}' AND A.user_id = 1 LIMIT 1;`
            );
            return { code: 200, success: true, info: '', data: row[0] };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Account', e.code);
        }
    }

    static async Create(account: IAccountInDTO): Promise<IOut> {
        try {
            const rows: any = await con.query(
              `INSERT INTO account VALUES(DEFAULT, '${account.operatorId}', ${account.userId});`
            );
            return { code: 200, success: true, info: 'Account successfully created!', data: { id: rows.insertId } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Account', e.code);
        }
    }

}
