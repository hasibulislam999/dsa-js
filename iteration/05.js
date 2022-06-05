/* Write a C program to print all odd number between 1 to 100. */
function printOdd(endRange) {
    let i;
    i = endRange;
    while (i >= 1) {
        if (i % 2 != 0)
            process.stdout.write(i + ' ');
        i--;
    }
}

printOdd(100);