import { AccountModel } from '../../models/AccountModel';
import { OperatorChecker } from './OperatorChecker';
import { IOut } from '../../dtos/IOut';

export class AccountChecker {

    static async GetIdFromName(opName: string): Promise<number> {
        // Account already exist ? :
        const accountLinked: IOut = await AccountModel.GetByOperatorName(opName);
        if (accountLinked.data && accountLinked.data.id) {
            // If Account exist -> return its id
            return accountLinked.data.id
        }

        // If Account doesn't exist -> check if an Operator has its name :
        const opId: number = await OperatorChecker.GetIdFromName(opName);

        // Create Account :
        const account: IOut = await AccountModel.Create({
            operatorId: opId,
            userId: 1,
        });
        return account.data.id;
    }

    static async GetOperatorIdFromName(opName: string): Promise<number> {
        // Account already exist ? :
        const accountLinked: IOut = await AccountModel.GetByOperatorName(opName);
        if (accountLinked.data && accountLinked.data.id) {
            // If Account exist -> return its id
            return accountLinked.data.operatorId;
        }

        // If Account doesn't exist -> check if an Operator has its name :
        const opId: number = await OperatorChecker.GetIdFromName(opName);

        // Create Account :
        const account: IOut = await AccountModel.Create({
            operatorId: opId,
            userId: 1,
        });
        return opId;
    }

}
