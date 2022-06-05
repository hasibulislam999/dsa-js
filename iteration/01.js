/* Write a JS program to print all natural numbers from 1 to n. - using while loop */
function printNaturalNumbers(endRange) {
    let i = 1;
    while (i <= 100) {
        process.stdout.write(i + ' ');
        i++;
    }
}

printNaturalNumbers(100);