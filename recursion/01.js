/* Write a JS program to find cube of any number using function. */
function cubeOfNumber(base, exponent) {
    if(exponent == 0) return 1;
    return base * cubeOfNumber(base, exponent - 1);
}

console.log(cubeOfNumber(2, 5));
