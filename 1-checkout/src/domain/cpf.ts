const enum Digit {
    FIRST = 10,
    SECOND = 11
}

const calculateVerifyingDigit = (cpf: string, digit: Digit) => {
    const calculateUntil = digit -1;

    const accumulatedDigit = cpf
        .substring(0, calculateUntil)
        .split('')
        .map(char => parseInt(char))
        .reduce((accumulator, currentValue, index) => {
            return accumulator + (calculateUntil - index + 1) * currentValue
        }, 0)

    const rest = ((accumulatedDigit * 10) % 11);
    return (rest < 10) ? rest : 0;
}

export const sanitize = (cpf: string) => {
    return cpf.replace(/[^0-9]/g, '')
}

export const validate = (cpf: string) => {
    if (!cpf) { return false }

    cpf = sanitize(cpf);
    if (cpf.length != 11) { return false }

    if (cpf.split("").every((c: string) => c === cpf[0])) { return false }

    const firstVerifyingDigit = calculateVerifyingDigit(cpf, Digit.FIRST);
    if (firstVerifyingDigit != parseInt(cpf[9])) { return false; }

    const secondVerifyingDigit = calculateVerifyingDigit(cpf, Digit.SECOND);
    if (secondVerifyingDigit != parseInt(cpf[10])) { return false; }

    return true;
}