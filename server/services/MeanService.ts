import { MeanModel } from '../models/MeanModel';
import { IOut } from '../dtos/IOut';
import { IMeanInDTO } from '../dtos/IMeanDTO';

export class MeanService {

    static async Create(body: any): Promise<IOut> {
        if (body.name) {
            const meanDTO: IMeanInDTO = { name: body.name, userId: 1 };
            return MeanModel.Create(meanDTO);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

}
