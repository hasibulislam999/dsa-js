/* Write a JS program to find sum of all natural numbers between 1 to n using recursion. */
function sumOfNaturalNumber(startRange, endRange) {
    if(startRange == endRange) return startRange;
    return startRange + sumOfNaturalNumber(startRange + 1, endRange);
}

console.log(sumOfNaturalNumber(30, 114));