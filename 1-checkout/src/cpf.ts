const enum Digit {
    FIRST = 10,
    SECOND = 11
}

const calculateVerifyingDigit = (cpf: string, digit: Digit) => {
    const multiplierStart = digit
    const calculateUntil = digit -1;

    let accumulatedDigit = 0;
    let multiplier = multiplierStart;
    for (let index = 0; index < calculateUntil; index++, multiplier--) {
        const digit = parseInt(cpf[index]);
        accumulatedDigit += ( multiplier * digit );
    }

    const rest = ((accumulatedDigit * 10) % 11);
    return (rest < 10) ? rest : 0;
}

export const validate = (cpf: string) => {
    if (!cpf) { return false }

    cpf = cpf.replace(/[^0-9]/g, '')
    if (cpf.length != 11) { return false }

    if (cpf.split("").every((c: string) => c === cpf[0])) { return false }

    const firstVerifyingDigit = calculateVerifyingDigit(cpf, Digit.FIRST);
    if (firstVerifyingDigit != parseInt(cpf[9])) { return false; }

    const secondVerifyingDigit = calculateVerifyingDigit(cpf, Digit.SECOND);
    if (secondVerifyingDigit != parseInt(cpf[10])) { return false; }

    return true;
}