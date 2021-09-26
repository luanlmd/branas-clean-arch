import { Cart } from '../src/domain/cart'
import { Coupom } from '../src/domain/coupom';
import { Item } from '../src/domain/item';

let cart:Cart;

beforeEach(() => { 
    cart = new Cart();
})

test ('Invalid item Id should throw error', () => {
    expect(() => {cart.addItem(999) }).toThrow('Item not found')
})

test ('Empty cart to show 0 items count', () => {
    expect(cart.getItemCount()).toBe(0)
})

test ('Empty cart to show 0 total', () => {
    expect(cart.getTotalPrice()).toBe(0)
})

test ('Item count should match added Items', () => {
    cart.addItem(1);
    cart.addItem(2);
    cart.addItem(3);
    expect(cart.getItemCount()).toBe(3)
})

test ('Total price to be sum of items prices', () => {
    cart.addItem(1);
    cart.addItem(2);
    const item1 = Item.getById(1)
    const item2 = Item.getById(2)
    const totalPrice = item1.price + item2.price;
    expect(cart.getTotalPrice()).toBe(totalPrice)
})

test ('Total price to be sum of items prices minus coupom', () => {
    cart.addItem(1);
    cart.addItem(5);
    cart.applyCoupom('disc10');

    const item1 = Item.getById(1)
    const item2 = Item.getById(5)
    const coupom = Coupom.getByCode('disc10')
    const totalPrice = item1.price + item2.price;

    const finalPrice = totalPrice * ((100 - coupom.discount) / 100)
    expect(cart.getTotalPrice()).toBe(finalPrice)
})