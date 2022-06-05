/* Write a C program to print all Strong numbers between 1 to n. */
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

let startRange = 1;
const endRange = 999;

while(!(startRange > endRange)){
    if(isStrong(startRange) == true)
        process.stdout.write(startRange + ' ');
    startRange++;
}