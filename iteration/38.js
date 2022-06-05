/* Write a JS program to represent Pascal Triangle within a range */
function factorial(number) {
    let fact = 1;
    for (i = 1; i <= number; i++)
        fact *= i;
    return fact;
}

function pascalTriangle(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j <= i; j++) {
            let term = parseInt(factorial(i) / (factorial(j) * factorial(i - j)));
            process.stdout.write(term + ' ');
        }
        console.log();
    }
}

pascalTriangle(10);