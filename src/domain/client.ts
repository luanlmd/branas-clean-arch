export interface IClient {
    id: number;
    name: string;
    email: string;
    cpf: string;
}
export class Client implements IClient {
    constructor(readonly id:number, readonly name: string, readonly email: string, readonly cpf: string) {}
}