import { OperatorModel } from '../../models/OperatorModel';
import { IOut } from '../../dtos/IOut';

export class OperatorChecker {

    static async GetIdFromName(name: string): Promise<number> {
        let operator: IOut = await OperatorModel.GetByName(name);
        if (!operator.data || !operator.data.id) {
            operator = await OperatorModel.Create({
                name: name,
                userId: 1,
            });
        }
        return operator.data.id;
    }

}
