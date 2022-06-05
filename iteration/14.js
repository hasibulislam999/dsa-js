/* Write a JS program to calculate sum of digits of a number. */
function productOfDigits(number) {
    let sum = 0, reminder;
    while (number != 0) {
        reminder = number % 10;
        sum += reminder;
        number = parseInt(number / 10);
    }
    return sum;
}

console.log(productOfDigits(1234));