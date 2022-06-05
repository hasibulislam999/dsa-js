/* Write a JS program to find all prime factors of a number. */
function isPrime(number) {
    if ((number == 2) || (number == 1)) return true;
    
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

function primeFactors(number){
    for(let i = 0; i <= number; i++){
        if((number % i) == 0){
            if(isPrime(i) == true)
                process.stdout.write(i + ' ');
        }
    }
}

primeFactors(99);