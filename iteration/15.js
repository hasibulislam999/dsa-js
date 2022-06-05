/* Write a JS program to calculate product of digits of a number. */
function productOfDigits(number) {
    let mul = 1, reminder;
    while (number != 0) {
        reminder = number % 10;
        mul *= reminder;
        number = parseInt(number / 10);
    }
    return mul;
}

console.log(productOfDigits(1234));