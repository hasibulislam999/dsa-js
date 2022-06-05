/* Write a JS program to enter a number and print its reverse. */
function reverseNumberDigits(number) {
    let lastDigit, reverse;
    lastDigit = reverse = 0;
    while(number != 0){
        lastDigit = number % 10;
        reverse *= 10;
        reverse += lastDigit;
        number = parseInt(number / 10);
    }
    return reverse;
}

console.log(reverseNumberDigits(1213));