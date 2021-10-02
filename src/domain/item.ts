export interface IItem {
    id: number;
    title: string;
    description: string;
    price: number;
}

export class Item implements IItem {
    constructor(readonly id: number, readonly title: string, readonly description: string, readonly price:number) {}
}