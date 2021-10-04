import { IItem } from "./item";

export interface ICartItem {
    item: IItem
    quantity: number;

    getTotalPrice: () => number;
    getCubage: () => number;
    getWeight: () => number;
    getDensity: () => number;    
}

export class CartItem implements ICartItem {
    constructor(readonly item: IItem, readonly quantity: number) { }

    getTotalPrice() {
        return this.item.price * this.quantity;
    }

    getCubage() {
        return this.item.getCubage() * this.quantity;
    }

    getWeight() {
        return this.item.weight * this.quantity;
    }

    getDensity () {
        return this.item.getDensity()
    }
}