/* Write a JS program to find sum of all natural numbers between 1 to n. */
function printNaturalSum(endRange) {
    let i = 1, sum = 0;
    while (i <= endRange) {
        sum += i;
        i++;
    }
    console.log("Sum = " + sum);
}

printNaturalSum(100);