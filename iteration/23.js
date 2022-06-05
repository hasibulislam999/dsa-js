/* Write a JS program to calculate factorial of a number. */
function findFactors(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++)
        fact *= i;
    return fact;
}

factResult = findFactors(5);
console.log(factResult);