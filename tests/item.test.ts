import { Item } from '../src/domain/item';

test ('Item should be created', () => {
    const item1 = new Item(1, 'Title', 'Description', 10);
    expect(item1.id).toBe(1)
})