import { Cart } from '../src/domain/cart'
import { CartItem } from '../src/domain/cartItem';
import { Coupom } from '../src/domain/coupom';
import { Item } from '../src/domain/item';

let cart:Cart;

let item1: Item;
let item2: Item;
let item3: Item;

beforeEach(() => { 
    cart = new Cart();
    item1 = new Item(1, 'Camera', 'Item 1 top', 10, 1000, 20, 15, 10)
    item2 = new Item(2, 'Guitarra', 'Item 2 marromeno', 15, 3000, 100, 30, 10)
    item3 = new Item(3, 'Geladeira', 'Item 3 wow', 3, 40000, 200, 100, 50)
})

test ('Empty cart to show 0 items count', () => {
    expect(cart.getItemCount()).toBe(0)
})

test ('Empty cart to show 0 total', () => {
    expect(cart.getTotalPrice()).toBe(0)
})

test ('Item count should match added Items', () => {
    cart.addItem(new CartItem(item1, 1));
    cart.addItem(new CartItem(item2, 2));
    expect(cart.getItemCount()).toBe(3)
})

test ('Total price to be sum of items prices', () => {
    cart.addItem(new CartItem(item1, 1));
    cart.addItem(new CartItem(item2, 2));
    const totalPrice = item1.price + (item2.price*2);
    expect(cart.getTotalPrice()).toBe(totalPrice)
})

test('Total price to be sum of items prices minus coupom', () => {
    cart.addItem(new CartItem(item1, 1));
    cart.addItem(new CartItem(item2, 2));
    cart.addItem(new CartItem(item3, 3));
    const coupom = new Coupom('disc10', 10, new Date(Date.now() + ( 3600 * 1000 * 24)))
    cart.applyCoupom(coupom);
    const totalPrice = item1.price + (item2.price*2) + (item3.price*3);
    const finalPrice = totalPrice * ((100 - coupom.discount) / 100)
    expect(cart.getTotalPrice()).toBe(finalPrice)
})

test('Should not apply expired coupom', () => {
    const expiredCoupom = new Coupom('mrExpired', 99, new Date(Date.now() - 1));
    expect (() => {
        cart.applyCoupom(expiredCoupom);
    }).toThrowError('Coupom expired');
})

test('Shipment lass than 10 should be 10', () => {
    cart.addItem(new CartItem(item1, 1));
    expect(cart.getShipmentPrice()).toBe(10);
})

test('Should calculate shipment cost', () => {
    cart.addItem(new CartItem(item1, 2));
    expect(cart.getShipmentPrice()).toBe(19.98);
})

test('Should calculate shipment cost', () => {
    cart.addItem(new CartItem(item3, 1));
    expect(cart.getShipmentPrice()).toBe(400);
})

test('Should calculate shipment cost of multiple items', () => {
    cart.addItem(new CartItem(item1, 1));
    cart.addItem(new CartItem(item2, 1));
    cart.addItem(new CartItem(item3, 1));
    expect(cart.getShipmentPrice()).toBe(439.99);
})