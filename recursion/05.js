/* Write a JS program to find sum of all even numbers in given range using recursion. */
function sumOfEven(startRange, endRange, sum) {
    if(startRange % 2 == 0) sum += startRange;
    if(startRange == endRange) return sum;
    return sumOfEven(startRange + 1, endRange, sum);
}

console.log("Sum of all even: " + (sumOfEven(2, 100, 0)));
