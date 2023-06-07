function romanToArabic(romanNum) {
    const romanNumerals = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    let result = 0;
    let i = 0;

    while (i < romanNum.length) {
        if (i + 1 < romanNum.length && romanNumerals[romanNum.substring(i, i + 2)]) {
            result += romanNumerals[romanNum.substring(i, i + 2)];
            i += 2;
        } else {
            result += romanNumerals[romanNum.charAt(i)];
            i++;
        }
    }

    return result;
}

// Conversor de números arábicos para romanos
function arabicToRoman(arabicNum) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (arabicNum >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            arabicNum -= romanNumerals[i].value;
        }
    }

    return result;
}

const romanNumber = 'MCMLXXIV';
const arabicNumber = 1974;

console.log(`O número romano ${romanNumber} é igual a ${romanToArabic(romanNumber)} em formato arábico.`);
console.log(`O número arábico ${arabicNumber} é igual a ${arabicToRoman(arabicNumber)} em formato romano.`);

let romano = "MMXXIII"
console.log( romanToArabic(romano) )