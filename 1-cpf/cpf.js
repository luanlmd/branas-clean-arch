const calculateVerifyingDigit = (cpf, digit) => {
    const multiplierStart = (digit === 1)? 10 : 11;
    const calculateUntil = (digit === 1)? 9 : 10;

    let accumulatedDigit = 0;
    let multiplier = multiplierStart;
    for (let index = 0; index < calculateUntil; index++, multiplier--) {
        const digit = cpf[index];
        accumulatedDigit += ( multiplier * digit );
    }

    const rest = ((accumulatedDigit * 10) % 11);
    return (rest < 10) ? rest : 0;
}

const validate = (cpf) => {
    if (!cpf) { return false }

    cpf = cpf.replace(/[^0-9]/g, '')
    if (cpf.length != 11) { return false }

    if (cpf.split("").every(c => c === cpf[0])) { return false }

    const firstVerifyingDigit = calculateVerifyingDigit(cpf, 1);
    if (firstVerifyingDigit != cpf[9]) { return false; }

    const secondVerifyingDigit = calculateVerifyingDigit(cpf, 2);
    if (secondVerifyingDigit != cpf[10]) { return false; }

    return true;
}

module.exports = { validate };