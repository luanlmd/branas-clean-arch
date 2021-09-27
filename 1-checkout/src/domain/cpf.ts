const enum Digit {
    FIRST = 9,
    SECOND = 10
}

const calculateVerifyingDigit = (cpf: string, digit: Digit) => {
    const accumulatedDigit = cpf
        .substring(0, digit)
        .split('')
        .map(char => parseInt(char))
        .reduce((accumulator, currentValue, index) => {
            return accumulator + (digit - index + 1) * currentValue
        }, 0)

    const rest = ((accumulatedDigit * 10) % 11);
    return (rest < 10) ? rest : 0;
}

export const sanitize = (cpf: string) => {
    return cpf.replace(/[^0-9]/g, '')
}

export const validate = (rawCpf: string) => {
    if (!rawCpf) { return false }

    const cpf = sanitize(rawCpf);
    if (cpf.length != 11) { return false }
    if (cpf[0].repeat(11) === cpf) { return false }

    const firstVerifyingDigit = calculateVerifyingDigit(cpf, Digit.FIRST);
    if (firstVerifyingDigit != parseInt(cpf[Digit.FIRST])) { return false; }

    const secondVerifyingDigit = calculateVerifyingDigit(cpf, Digit.SECOND);
    if (secondVerifyingDigit != parseInt(cpf[Digit.SECOND])) { return false; }

    return true;
}