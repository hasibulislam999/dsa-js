/* Write a JS program to find reverse of any number using recursion. */
function numberReverse(number) {
    if(number == 0) return 0;
    return ((number % 10) * Math.pow(10, parseInt(Math.log10(number)))) + numberReverse(parseInt(number / 10));
}

console.log(numberReverse(1234));