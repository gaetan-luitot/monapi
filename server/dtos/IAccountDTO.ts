export interface IAccountOutDTO {
    id: number,
    name: string,
    operatorId: number,
}

export interface IAccountInDTO {
    operatorId: number,
    userId: number,
}
