import { Item } from '../src/domain/item';

test ('Item should be created', () => {
    const item1 = new Item(1, 'Title', 'Description', 10, 1, 1, 1, 1);
    expect(item1.id).toBe(1)
})

test ('Should calculate cubage', () => {
    const camera = new Item(1, 'Camera', 'Description', 10, 1000, 20, 15, 10);
    expect(camera.getCubage()).toBe(0.003)
})

test ('Should calculate density', () => {
    const camera = new Item(1, 'Camera', 'Description', 10, 1000, 20, 15, 10);
    expect(camera.getDensity()).toBe(333)
})