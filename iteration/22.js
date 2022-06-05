/* Write a JS program to find all factors of a number. */
function factorsOfNumber(number) {
    for(let i = 1; i <= number; i++){
        if((number % i) == 0){
            process.stdout.write(i + ' ');
        }
    }
}

factorsOfNumber(12);