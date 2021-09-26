import { Item } from '../src/domain/item';

test ('Invalid item Id should throw error', () => {
    expect(() => { Item.getById(999) }).toThrow('Item not found')
})

test ('getById should return Item', () => {
    const item1 = Item.getById(1);
    expect(item1.id).toBe(1)
})