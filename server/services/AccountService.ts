import { AccountModel } from '../models/AccountModel';
import { OperatorModel } from '../models/OperatorModel';
import { IOut } from '../dtos/IOut';
// import { IOperatorOutDTO } from '../dtos/IOperatorDTO';

export class AccountService {

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
            let operator: IOut = await OperatorModel.GetByName(body.operatorName);
            if (!operator.data || !operator.data.id) {
                operator = await OperatorModel.Create({
                    name: body.operatorName,
                    userId: 1,
                });
            }

            // Finaly :
            return AccountModel.Create({
                operatorId: operator.data.id,
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
