import { IClient } from "./client";
import { Coupom, ICoupom } from "./coupom";
import { IItem, Item } from "./item";

export interface ICart {
    items: IItem[]
    coupom: ICoupom
}

export class Cart {
    private items: IItem[] = []
    private coupom?: ICoupom;
    private cpf?: string;

    addItem(id: number) {
        const item = Item.getById(id)
        this.items.push(item);
    }

    getItemCount() {
        return this.items.length;
    }

    applyCoupom(code: string){
        this.coupom = Coupom.getByCode(code);
    }

    getTotalPrice() {
        let total = 0;
        this.items.map((item) => { 
            total += item.price
        });

        if (this.coupom) {
            total = total * ((100 - this.coupom.discount) / 100)
        }

        return total;
    }

    setClient(client: IClient) {

    }
}