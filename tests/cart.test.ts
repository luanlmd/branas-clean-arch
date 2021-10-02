import { Cart } from '../src/domain/cart'
import { CartItem } from '../src/domain/cartItem';
import { Coupom } from '../src/domain/coupom';
import { Item } from '../src/domain/item';

let cart:Cart;

let item1: Item;
let item2: Item;
let item3: Item;

let cartItem1: CartItem;
let cartItem2: CartItem;
let cartItem3: CartItem;

beforeEach(() => { 
    cart = new Cart();
    item1 = new Item(1, 'Item 1', 'Item 1 top', 10)
    item2 = new Item(2, 'Item 2', 'Item 2 marromeno', 15)
    item3 = new Item(3, 'Item 3', 'Item 3 wow', 3)
})

test ('Empty cart to show 0 items count', () => {
    expect(cart.getItemCount()).toBe(0)
})

test ('Empty cart to show 0 total', () => {
    expect(cart.getTotalPrice()).toBe(0)
})

test ('Item count should match added Items', () => {
    cartItem1 = new CartItem(item1, 1);
    cartItem2 = new CartItem(item2, 2);
    cart.addItem(cartItem1);
    cart.addItem(cartItem2);
    expect(cart.getItemCount()).toBe(3)
})

test ('Total price to be sum of items prices', () => {
    cartItem1 = new CartItem(item1, 1);
    cartItem2 = new CartItem(item2, 2);
    cart.addItem(cartItem1);
    cart.addItem(cartItem2);
    const totalPrice = item1.price + (item2.price*2);
    expect(cart.getTotalPrice()).toBe(totalPrice)
})

test('Total price to be sum of items prices minus coupom', () => {
    cartItem1 = new CartItem(item1, 1);
    cartItem2 = new CartItem(item2, 2);
    cart.addItem(cartItem1);
    cart.addItem(cartItem2);
    const coupom = new Coupom('disc10', 10, new Date(Date.now() + ( 3600 * 1000 * 24)))
    cart.applyCoupom(coupom);
    const totalPrice = item1.price + (item2.price*2);
    const finalPrice = totalPrice * ((100 - coupom.discount) / 100)
    expect(cart.getTotalPrice()).toBe(finalPrice)
})

test('Should not apply expired coupom', () => {
    const expiredCoupom = new Coupom('mrExpired', 99, new Date(Date.now() - 1));
    expect (() => {
        cart.applyCoupom(expiredCoupom);
    }).toThrowError('Coupom expired');
})