/* Write a JS program to print all even or odd numbers in given range using recursion. */
function printEvenOdd(startRange, endRange) {
    if(startRange % 2 == 0) process.stdout.write(startRange + ' ');
    if(startRange == endRange){
        console.log();
        return;
    }
    printEvenOdd(startRange + 1, endRange);
    if(startRange % 2 != 0) process.stdout.write(startRange + ' ');
}

printEvenOdd(1, 50);