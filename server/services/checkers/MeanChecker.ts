import { MeanModel } from '../../models/MeanModel';
import { IOut } from '../../dtos/IOut';

export class MeanChecker {

    static async GetIdFromName(name: string): Promise<number> {
        let mean: IOut = await MeanModel.GetByName(name);
        if (!mean.data || !mean.data.id) {
            mean = await MeanModel.Create({
                name: name,
                userId: 1,
            });
        }
        return mean.data.id;
    }

}
