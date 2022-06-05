/* Write a JS program to check whether a number is Prime number or not. */
function isPrime(number) {
    if (number == 2) return true;

    let flag;
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number % i == 0) {
            flag = false;
            break;
        }
        else flag = true;
    }

    if (flag == true) return true;
}

const number = 4;
if (isPrime(number) == true)
    console.log('Prime number');
else
    console.log('Not a prime number');