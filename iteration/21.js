/* Write a JS program to find power of a number using for loop. */
function powerOfNumber(base, exponent) {
    let temp = base;
    for (i = 1; i < exponent; i++)
        base *= temp;
    return base;
}

const base = 2;
const exponent = 5;
console.log(powerOfNumber(base, exponent));