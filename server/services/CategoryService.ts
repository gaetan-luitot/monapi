import { CategoryModel } from '../models/CategoryModel';
import { IOut } from '../dtos/IOut';
import { ICategoryInDTO } from '../dtos/ICategoryDTO';

export class CategoryService {

    static async GetAllCategoriesName(): Promise<IOut> {
        let categories = await CategoryModel.GetAllCategories();
        let data: string[] = [];
        for (let i = 0; i < categories.data.length; ++i) {
            data.push(categories.data[i].name);
        }
        categories.data = data;
        return categories;
    }

    static async CheckNameExist(body: any): Promise<IOut> {
        if (body.name) {
            return CategoryModel.GetByName(body.name);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

    static async CreateCategory(body: any): Promise<IOut> {
        if (body.name) {
            const categoryDTO: ICategoryInDTO = { name: body.name, userId: 1 };
            return CategoryModel.CreateCategory(categoryDTO);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

}
