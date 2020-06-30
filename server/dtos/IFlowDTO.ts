export interface IFlowOutDTO {
    id: number,
    what: string,
    operatorInId: number,
    operatorOutId: number,
    categoryId: number,
    amount: float,
    meanId: number,
    date: Date,
    the: number,
    userId: number,
}

export interface IFlowInDTO {
    what: string,
    operatorInId: number,
    operatorOutId: number,
    categoryId: number,
    amount: float,
    meanId: number,
    date: Date,
    the: number,
    userId: number,
}
