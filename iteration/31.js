/* Write a JS program to print all Armstrong numbers between 1 to n. */
function isArmstrong(number) {
    let reminder, sum = 0, temp = number;
    const digits = (number.toString()).length;
    while (number != 0) {
        reminder = number % 10;
        sum += (Math.pow(reminder, digits));
        number = parseInt(number / 10);
    }

    if (temp == sum) return true;
}

let startRange = 1;
const endRange = 9999;

while(!(startRange > endRange)){
    if(isArmstrong(startRange) == true)
        process.stdout.write(startRange + ' ');
    startRange++;
}