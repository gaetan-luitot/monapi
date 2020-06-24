import { CategoryModel } from '../models/CategoryModel';
import { IOut } from '../interfaces/IOut';

export class CategoryService {

    static async GetAllCategories(): Promise<IOut> {
        return await CategoryModel.GetAllCategories();
    }

    static async CheckNameExist(body: any): Promise<IOut> {
        if (body.name) {
            return await CategoryModel.CheckNameExist(body.name);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

    static async CreateCategory(category: any): Promise<IOut> {
        if (category.name) {
            return await CategoryModel.CreateCategory(category);
        }

        return {
            code: 500,
            success: false,
            info: 'No name provided.',
            data: null,
        };
    }

}
