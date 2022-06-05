/* Write a JS program to find sum of all even numbers between 1 to n. */
function printEvenSum(endRange) {
    let i = 1, sum = 0;
    while (i <= endRange) {
        if (i % 2 == 0)
            sum += i;
        i++;
    }
    console.log("Even sum = " + sum);
}

printEvenSum(100);