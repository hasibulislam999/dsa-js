/* Write a JS program to print all natural numbers between 1 to n using recursion. */
function printNaturalNumbers(startRange, endRange) {
    process.stdout.write(startRange + ' ');
    if(startRange == endRange) return;
    printNaturalNumbers(startRange + 1, endRange);
}

printNaturalNumbers(1, 73);