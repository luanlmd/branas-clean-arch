import { CartItem } from '../src/domain/cartItem';
import { Item } from '../src/domain/item';

test ('CartItem should be created', () => {
    const cartItem = new CartItem(new Item(1, 'Title', 'Description', 10), 2);
    expect(cartItem.getTotalPrice()).toBe(20)
})