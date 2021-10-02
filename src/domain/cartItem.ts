import { IClient } from "./client";
import { Coupom, ICoupom } from "./coupom";
import { IItem, Item } from "./item";

export interface ICartItem {
    item: IItem
    quantity: number;

    getTotalPrice: () => number;
}

export class CartItem implements ICartItem {
    constructor(readonly item: IItem, readonly quantity: number) { }

    public getTotalPrice() {
        return this.item.price * this.quantity;
    }
}