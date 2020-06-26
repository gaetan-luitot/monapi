import { CategoryModel } from '../models/CategoryModel';
import { IOut } from '../dtos/IOut';
import { ICategoryInDTO } from '../dtos/ICategoryDTO';

export class CategoryService {

    static async GetAllNames(): Promise<IOut> {
        let categories = await CategoryModel.GetAllNames();
        let data: string[] = [];
        for (let i = 0; i < categories.data.length; ++i) {
            data.push(categories.data[i].name);
        }
        categories.data = data;
        return categories;
    }

    static async Create(body: any): Promise<IOut> {
        if (body.name) {
            const categoryDTO: ICategoryInDTO = { name: body.name, userId: 1 };
            return CategoryModel.Create(categoryDTO);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

}
