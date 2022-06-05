/* Write a JS program to print all Prime numbers between 1 to n. */
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

let startRange = 2;
const endRange = 72;

while (!(startRange > endRange)) {
    if (isPrime(startRange) == true)
        process.stdout.write(startRange + ' ');
    startRange++;
}