const cpf = require('./cpf')

test("CPF should be valid", () => {
    const result = cpf.validate("935.411.347-80")
    expect(result).toBe(true)
})

test("CPF should be valid", () => {
    const result = cpf.validate("123.456-789 09")
    expect(result).toBe(true)
})

test("CPF with equal numbers should not be valid", () => {
    const result = cpf.validate("111.111.111-11")
    expect(result).toBe(false)
})

test("CPF should be invalid", () => {
    const result = cpf.validate("123.456.789-99")
    expect(result).toBe(false)
})

test("Malformated CPF should be invalid", () => {
    const result = cpf.validate("23.456.789-99")
    expect(result).toBe(false)
})

test("CPF with letter should be invalid", () => {
    const result = cpf.validate("a23.456.789-99")
    expect(result).toBe(false)
})

test("Undefined CPF should be invalid", () => {
    const result = cpf.validate(undefined)
    expect(result).toBe(false)
})