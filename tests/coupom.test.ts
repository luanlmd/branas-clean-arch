import { Coupom } from '../src/domain/coupom';

test ('Coupom should be created', () => {
    const futureDate = new Date(Date.now() + ( 3600 * 1000 * 24))
    const coupom = new Coupom('code', 10, futureDate)
    expect(coupom.discount).toBe(10)
})

test('Coupom should be expired', () => {
    const expiredDate = new Date(Date.now() - 1)
    const coupom = new Coupom('code', 10, expiredDate)
    expect(coupom.isExpired()).toBeTruthy()
})