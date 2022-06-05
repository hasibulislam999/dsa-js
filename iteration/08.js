/* Write a JS program to find sum of all od numbers between 1 to n. */
function printOddSum(endRange) {
    let i = 1, sum = 0;
    while (i <= endRange) {
        if (i % 2 != 0)
            sum += i;
        i++;
    }
    console.log("Odd sum = " + sum);
}

printOddSum(100);