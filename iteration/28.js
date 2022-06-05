/* Write a JS program to find sum of all prime numbers between 1 to n. */
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

let startRange = 2, primeSum = 0;
const endRange = 6;

while (!(startRange > endRange)) {
    if (isPrime(startRange) == true)
        primeSum += startRange;
    startRange++;
}

console.log(primeSum);