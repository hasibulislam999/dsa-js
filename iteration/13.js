/* Write a JS program to swap first and last digits of a number. */
function swappedNum(num) {
    let firstDigit, lastDigit, digits;
    // find last digit
    lastDigit = num % 10;
    // find total number of digits - 1
    digits = parseInt(Math.log10(num));
    // find first digit
    firstDigit = parseInt(num / Math.pow(10, digits));
    // swap frist and last digits
    swappedNum = lastDigit;
    swappedNum *= parseInt(Math.pow(10, digits));
    swappedNum += num % parseInt(Math.pow(10, digits));
    swappedNum -= lastDigit;
    swappedNum += firstDigit;
    // print original number
    console.log(num);
    // print swapped number for first and last
    return swappedNum;
}

console.log(swappedNum(1935207));