/* Write a JS program to print all Perfect numbers between 1 to n. */
function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    if (number == sum) return true;
}

let startRange = 1;
const endRange = 9999;

while(!(startRange > endRange)){
    if(isPerfect(startRange) == true)
        process.stdout.write(startRange + ' ');
    startRange++;
}