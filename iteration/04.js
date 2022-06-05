/* Write a JS program to print all even numbers between 1 to 100. - using while loop */
function printEven(endRange) {
    let i;
    
    i = 1;
    while (i <= endRange) {
        if (i % 2 == 0)
            process.stdout.write(i + ' ');
        i++;
    }
}

printEven(100);