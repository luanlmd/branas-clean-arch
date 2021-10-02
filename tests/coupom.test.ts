import { Coupom } from '../src/domain/coupom';

test ('Coupom should be created', () => {
    const coupom = new Coupom('code', 10)
    expect(coupom.discount).toBe(10)
})