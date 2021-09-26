import { validate } from '../src/domain/cpf'

test("CPF should be valid", () => {
    const result = validate("935.411.347-80")
    expect(result).toBe(true)
})

test("CPF should be valid", () => {
    const result = validate("123.456-789 09")
    expect(result).toBe(true)
})

test("CPF with equal numbers should not be valid", () => {
    const result = validate("111.111.111-11")
    expect(result).toBe(false)
})

test("CPF should be invalid", () => {
    const result = validate("123.456.789-99")
    expect(result).toBe(false)
})

test("Malformated CPF should be invalid", () => {
    const result = validate("23.456.789-99")
    expect(result).toBe(false)
})

test("CPF with letter should be invalid", () => {
    const result = validate("a23.456.789-99")
    expect(result).toBe(false)
})