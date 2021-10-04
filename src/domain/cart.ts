import { ICartItem } from "./cartItem";
import { Coupom, ICoupom } from "./coupom";

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
        if(coupom.isExpired()) {
            throw new Error('Coupom expired');
        }
        this.coupom = coupom;
    }

    getTotalPrice() {
        let total = this.cartItems.reduce((acc, cartItem) =>  acc + cartItem.getTotalPrice(), 0)
        if (this.coupom) {
            total = total * ((100 - this.coupom.discount) / 100)
        }
        return total;
    }

    getShipmentPrice() {
        const totalPrice = this.cartItems.reduce((acc, cartItem) => {
            return acc + (1000 * cartItem.getCubage()) * (cartItem.getDensity()/100)
        }, 0)
        return (totalPrice < 10)? 10 : totalPrice;
    }
}