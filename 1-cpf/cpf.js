const validate = (str) => {
    if (!str) { return false }
    str = str.replace(/[^0-9]/g, '')
    if (str.length != 11) { return false }
    if (str.split("").every(c => c === str[0])) { return false }

    let d2, dg1, dg2;
    d2 = dg1 = dg2 = 0;

    console.log(str.substring(0, str.length - 2).split('').map((value) => parseInt(value)));

    let d1 = str.padStart(1, '0').substring(0, str.length - 2).split('').map((value) => parseInt(value)).reduce((acumulator, currentValue, index) => {
        console.log('reduce', 10 - index - 1, currentValue)
        // console.log(currentValue)
        return acumulator + (10 - index - 1) * currentValue;
    })

    // console.log('reduce', d1);
    d1 = 0
    for (let index = 0; index < str.length -2; index++) {
        console.log('for', 10 - index, str[index])
        const digit = parseInt(str[index]);
        d1 = d1 + ( 10 - index ) * digit;
    };
    // console.log('for', d1);

    const rest1 = (d1*10 % 11);
    dg1 = (rest1 < 10) ? rest1 : 0;

    const firstVerifyingDigit = str.substring(str.length-2, str.length-1)
    if (dg1 != firstVerifyingDigit) { return false; }

    for (let index = 0; index < str.length -1; index++) {
        const digit = parseInt(str[index]);
        d2 = d2 + ( 11 - index ) * digit;
    };

    const rest2 = (d2*10 % 11);
    dg2 = (rest2 < 10) ? rest2 : 0;

    const secondVerifyingDigit = str.substring(str.length-1, str.length)
    if (dg2 != secondVerifyingDigit) { return false; }

    return true;
}

module.exports = { validate };

validate('12345678012')