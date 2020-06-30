import { FlowModel } from '../models/FlowModel';
import { IOut } from '../dtos/IOut';
import { IFlowInDTO } from '../dtos/IFlowDTO';
import { OperatorChecker } from './checkers/OperatorChecker';
import { AccountChecker } from './checkers/AccountChecker';
import { CategoryChecker } from './checkers/CategoryChecker';
import { MeanChecker } from './checkers/MeanChecker';

export class FlowService {

    static async GetMonthsFromYear(params: any): Promise<IOut> {
        if(params.year) {
            const months = await FlowModel.GetMonthsFromYear(+params.year);
            return months;
        }

        return {
            code: 500, success: false, info: 'No year provided in params.', data: null,
        };
    }

    static async Create(body: any): Promise<IOut> {
        if (body.what && body.account && body.operator
            && body.category && body.amount && body.mean && body.date
        ) {
            // Check To :
            if (body.to !== true && body.to !== false) {
                return {
                    code: 500, success: false, info: 'Direction is not correct.', data: null,
                };
            }

            // Check Account :
            const operatorIdFromAccount: number = await AccountChecker.GetOperatorIdFromName(body.account);

            // Check Operator :
            const operatorId: number = await OperatorChecker.GetIdFromName(body.operator);

            // Check Category :
            const categoryId: number = await CategoryChecker.GetIdFromName(body.category);;

            // Check Mean :
            const meanId: number = await MeanChecker.GetIdFromName(body.mean);;

            // Set HowMany :
            const howMany = await FlowModel.GetCount(body.what);
            try {
                const flowDTO: IFlowInDTO = {
                    what: body.what,
                    operatorOutId: body.to ? operatorIdFromAccount : operatorId,
                    operatorInId: body.to ? operatorId: operatorIdFromAccount,
                    categoryId: categoryId,
                    amount: Number.parseFloat(body.amount.replace(',', '.')),
                    meanId: meanId,
                    the: howMany.data.count ? howMany.data.count + 1 : 1,
                    date: body.date,
                    userId: 1,
                };
                return FlowModel.Create(flowDTO);
            } catch (e) {
                console.log(e);
                return {
                    code: 500, success: false, info: 'Incorrect body.', data: null,
                };
            }
        }

        return {
            code: 500,
            success: false,
            info: 'Incorrect body.',
            data: null,
        };
    }

}
