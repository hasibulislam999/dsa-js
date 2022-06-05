/* Write a JS program to count number of digits in a number. */
function countNumberDigits(number) {
    /* approach 1 */
    // console.log(number.toString().length);

    /* approach 2 */
    let reminder = 0, count = 0;
    while (number != 0) {
        reminder = number % 10;
        number = parseInt(number / 10);
        count++;
    }
    console.log("Total digits: " + count);
}

countNumberDigits(1935202062);