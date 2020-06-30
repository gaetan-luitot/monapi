import { OperatorModel } from '../models/OperatorModel';
import { IOut } from '../dtos/IOut';
import { IOperatorInDTO } from '../dtos/IOperatorDTO';

export class OperatorService {

    static async GetAllNames(): Promise<IOut> {
        let operators: IOut = await OperatorModel.GetAllNames();
        let data: string[] = [];
        for (let i = 0; i < operators.data.length; ++i) {
            data.push(operators.data[i].name);
        }
        operators.data = data;
        return operators;
    }

    static async Create(body: any): Promise<IOut> {
        if (body.name) {
            const operatorDTO: IOperatorInDTO = {
                name: body.name,
                userId: 1,
            };
            return OperatorModel.Create(operatorDTO);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

}
