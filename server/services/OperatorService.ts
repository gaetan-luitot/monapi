import { OperatorModel } from '../models/OperatorModel';
import { CategoryModel } from '../models/CategoryModel';
import { IOut } from '../dtos/IOut';
// import { ICategoryOutDTO } from '../dtos/ICategoryDTO';

export class OperatorService {

    static async CreateOperator(body: any): Promise<IOut> {
        try {
            // Check -> Operator Already Exist :
            const nameExist: IOut = await OperatorModel.NameExist(body.name);
            console.log(nameExist);
            if (nameExist.data && nameExist.data.exist) {
                return {
                    code: 200, success: false, info: 'This Operator already exist.', data: null,
                };
            }

            // Check -> Category Already Exist :
            let category: IOut = await CategoryModel.GetByName(body.categoryName);
            console.log('category', category);
            if (!category.data || !category.data.category_id) {
                category = await CategoryModel.CreateCategory({
                    name: body.categoryName,
                    userId: 1,
                });
            }

            // Finaly :
            return OperatorModel.CreateOperator(body.name, category.data.category_id/** @Todo : DTO **/);
        } catch (e) {
            console.log(e);
            return {
                code: 500, success: false, info: 'Maybe something missing.', data: null,
            };
        }
    }

}
