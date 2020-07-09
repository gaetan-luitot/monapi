import { DatabaseHelper } from '../helpers/DatabaseHelper';  /** @Todo : include this for all models **/
import { IOut } from '../dtos/IOut';
import { IFlowInDTO } from '../dtos/IFlowDTO';
import { con } from '../config/Database';

export class FlowModel {

    static async GetYearsForAccount(operatorId: number): Promise<IOut> {
        try {
            const rows: any = await con.query(`
                SELECT YEAR(flow_date) as 'year' FROM flow
                WHERE user_id = 1 AND (operator_in = ${operatorId} OR operator_out = ${operatorId})
                GROUP BY year ORDER BY year DESC;`
            );
            return { code: 200, success: true, info: '', data: rows };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Flow', e.code);
        }
    }

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

    static async GetMonthsFromYear(operatorId: number, year: number): Promise<IOut> {
        try {
            const inputs: any = await con.query(`
                SELECT MONTH(flow_date) AS 'month', SUM(amount) AS 'amount' FROM flow
                WHERE YEAR(flow_date) = ${year} AND operator_in = ${operatorId}
                GROUP BY month
                ORDER BY month ASC;`
            );
            const outputs: any = await con.query(`
                SELECT MONTH(flow_date) AS 'month', SUM(amount) AS 'amount' FROM flow
                WHERE YEAR(flow_date) = ${year} AND operator_out = ${operatorId}
                GROUP BY month
                ORDER BY month ASC;`
            );
            return { code: 200, success: true, info: '', data:
                { inputs: inputs, outputs: outputs }
            };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Flow', e.code);
        }
    }

    static async GetCatFromYear(operatorId: number, year: number): Promise<IOut> {
        try {
            const categories: any = await con.query(`
                SELECT C.name, SUM(amount) as 'amount' FROM flow F
                INNER JOIN category C ON C.id = F.category_id
                WHERE F.operator_out = ${operatorId} AND YEAR(flow_date) = ${year}
                AND F.user_id = 1 GROUP BY C.name ORDER BY amount;`
            );
            return { code: 200, success: true, info: '', data: categories };
        } catch (e) {
            return DatabaseHelper.errorHandler(e.errno, 'Flow', e.code);
        }
    }
}
