/* Write a JS program to find sum of first and last digit of a number. */
function sumFirstLastDigit(number) {
    /* approach 1 */
    storeNumber = number.toString()
    console.log("First digit is: " + storeNumber[0] + ' & ' + "Last digit is: " + storeNumber[storeNumber.length - 1]);
    console.log("Summation of first and last digits: " + (parseInt(storeNumber[0]) + parseInt(storeNumber[storeNumber.length - 1])));

    /* approach 2 */
    // let reminder = 0, count = 0, firstDigit, lastDigit;
    // while (number != 0) {
    //     reminder = number % 10;
    //     count++;
    //     if (count == 1)
    //         lastDigit = reminder;
    //     else
    //         firstDigit = reminder;
    //     number = parseInt(number / 10);
    // }
    // console.log("First digit: " + firstDigit + ' & ' + "Last digit: " + lastDigit);
    // console.log("Summation of first and last digits: " + (firstDigit + lastDigit));
}

sumFirstLastDigit(1935205);