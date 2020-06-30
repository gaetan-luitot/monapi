import { CategoryModel } from '../../models/CategoryModel';
import { IOut } from '../../dtos/IOut';

export class CategoryChecker {

    static async GetIdFromName(name: string): Promise<number> {
        let category: IOut = await CategoryModel.GetByName(name);
        if (!category.data || !category.data.id) {
            category = await CategoryModel.Create({
                name: name,
                userId: 1,
            });
        }
        return category.data.id;
    }

}
