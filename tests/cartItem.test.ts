import { CartItem } from '../src/domain/cartItem';
import { Item } from '../src/domain/item';

test ('CartItem should be created', () => {
    const cartItem = new CartItem(new Item(1, 'Title', 'Description', 10, 1, 1, 1, 1), 2);
    expect(cartItem.getTotalPrice()).toBe(20)
})

test ('Should calculate weight', () => {
    const cartItem = new CartItem(new Item(1, 'Title', 'Description', 10, 1, 1, 1, 1), 2);
    expect(cartItem.getWeight()).toBe(2)
})

test ('Should calculate cubage', () => {
    const cartItem = new CartItem(new Item(1, 'Title', 'Description', 10, 1, 20, 15, 10), 2);
    expect(cartItem.getCubage()).toBe(0.006)
})

test ('Should calculate density', () => {
    const cartItem = new CartItem(new Item(1, 'Title', 'Description', 10, 1000, 20, 15, 10), 2);
    expect(cartItem.getDensity()).toBe(333)
})