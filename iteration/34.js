/* Write a JS program to check whether a number is Strong number or not. */
function fact(number) {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }

    return fact;
}

function isStrong(number) {
    const temp = number;
    let reminder, sum = 0;
    while (number != 0) {
        reminder = number % 10;
        sum += fact(reminder);
        number = parseInt(number / 10);
    }

    if (temp == sum) return true;
}

const number = 145;
if (isStrong(number) == true)
    console.log('Strong');
else
    console.log('Not strong');