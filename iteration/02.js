/* Write a JS program to print all natural numbers in reverse (from n to 1). - using while loop */
function printNumbersReverse(endRange) {
    let i = endRange;
    while (i >= 1) {
        process.stdout.write(i + ' ');
        i--;
    }
}

printNumbersReverse(100);