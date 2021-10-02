import { ICartItem } from "./cartItem";
import { IClient } from "./client";
import { Coupom, ICoupom } from "./coupom";
import { IItem, Item } from "./item";

export interface ICart {
    cartItems: ICartItem[]
    coupom: ICoupom | undefined
}

export class Cart {
    private cartItems: ICartItem[] = [];
    private coupom?: ICoupom;

    addItem(cartItem: ICartItem) {
        this.cartItems.push(cartItem);
    }

    getItemCount() {
        return this.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
    }

    applyCoupom(coupom: ICoupom){
        this.coupom = coupom;
    }

    getTotalPrice() {
        let total = this.cartItems.reduce((acc, cartItem) =>  acc + cartItem.getTotalPrice(), 0)

        if (this.coupom) {
            total = total * ((100 - this.coupom.discount) / 100)
        }

        return total;
    }
}