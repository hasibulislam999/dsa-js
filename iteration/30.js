/* Write a JS program to check whether a number is Armstrong number or not. */
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

number = 407;
if (isArmstrong(number) == true)
    console.log("Armstrong");
else
    console.log("Not armstrong");