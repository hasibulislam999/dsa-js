/* Write a JS program to check whether a number is Perfect number or not. */
function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    if (number == sum) return true;
}

const number = 6;
if (isPerfect(number) == true)
    console.log('Perfect');
else
    console.log('Not perfect');