import { Coupom } from '../src/domain/coupom';

test ('Invalid Coupom Code should throw error', () => {
    expect(() => { Coupom.getByCode('disc100') }).toThrow('Coupom not found')
})

test ('getById should return Item', () => {
    const item1 = Coupom.getByCode('disc10');
    expect(item1.discount).toBe(10)
})