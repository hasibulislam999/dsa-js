/* Write a JS program to find sum of digits of a given number using recursion. */
function sumOfDigits(number, sum) {
    if(number == 0) return sum;
    else sum += (number % 10);
    return sumOfDigits(parseInt(number / 10), sum);
}

console.log(sumOfDigits(1234, 0));