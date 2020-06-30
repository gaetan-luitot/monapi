import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { IFlowInDTO } from '../dtos/IFlowDTO';
import { con } from '../config/Database';

export class FlowModel {

    static async Create(flow: IFlowInDTO): Promise<IOut> {
        try {
            const rows: any = await con.query(`
                INSERT INTO flow VALUES(
                    DEFAULT,
                    '${flow.what}',
                    ${flow.the},
                    ${flow.operatorInId},
                    ${flow.operatorOutId},
                    ${flow.categoryId},
                    ${flow.amount},
                    ${flow.meanId},
                    '${flow.date}',
                    ${flow.userId});`
            );
            return { code: 200, success: true, info: '', data: { id: rows.insertId } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Flow', e.code);
        }
    }

    static async GetCount(what: string): Promise<IOut> {
        try {
            const row: any = await con.query(`
                SELECT COUNT(id) as count FROM flow WHERE what = '${what}' AND user_id = 1;`
            );
            return { code: 200, success: true, info: '', data: { count: row[0].count } };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Flow', e.code);
        }
    }

    static async GetMonthsFromYear(year: number): Promise<IOut> {
        try {
            const rows: any = await con.query(`
                SELECT MONTH(flow_date) AS 'month', SUM(amount) AS 'amount'
                FROM flow WHERE YEAR(flow_date) = ${year}
                GROUP BY month
                ORDER BY month ASC;`
            );
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Flow', e.code);
        }
    }

}
