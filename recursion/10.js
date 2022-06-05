/* Write a JS program to generate nth Fibonacci term using recursion. */
function fibonacci(number) {
    if (number == 0) return 0;
    else if (number == 1) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

const number = 8;
for (let i = 0; i < 8; i++)
    process.stdout.write(fibonacci(i) + ' ');
