import { AccountModel } from '../models/AccountModel';
import { IOut } from '../dtos/IOut';
import { OperatorChecker } from './checkers/OperatorChecker';
import { IAccountOutDTO } from '../dtos/IAccountDTO';

export class AccountService {

    static async GetAllNames(): Promise<IOut> {
        let accounts: IOut = await AccountModel.GetAllNames();
        let data: string[] = [];
        for (let i = 0; i < accounts.data.length; ++i) {
            data.push(accounts.data[i].name);
        }
        accounts.data = data;
        return accounts;
    }

    static async GetAll(): Promise<IOut> {
        let accounts: IOut = await AccountModel.GetAll();
        let data: IAccountOutDTO[] = [];
        for (let i = 0; i < accounts.data.length; ++i) {
            data.push({
                id: accounts.data[i].id,
                name: accounts.data[i].name,
                operatorId: accounts.data[i].operatorId,
            });
        }
        accounts.data = data;
        return accounts;
    }

    static async GetName(params: any): Promise<IOut> {
        if(params.account_id) {
            return AccountModel.GetName(+params.account_id);
        }

        return {
            code: 500, success: false, info: 'Bad params provided.', data: null,
        };
    }

    static async Create(body: any): Promise<IOut> {
        try {
            // Check -> Account Already Exist :
            const accountLinked: IOut = await AccountModel.GetByOperatorName(body.operatorName);
            if (accountLinked.data && accountLinked.data.id) {
                return {
                    code: 200, success: false, info: 'This Account already exist.', data: null,
                };
            }

            // Check -> Operator Already Exist :
            const opId: number = await OperatorChecker.GetIdFromName(body.operatorName);

            // Finaly :
            return AccountModel.Create({
                operatorId: opId,
                userId: 1,
            });
        } catch (e) {
            console.log(e);
            return {
                code: 500, success: false, info: 'Maybe something missing.', data: null,
            };
        }
    }

}
