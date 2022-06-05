/* Write a JS program to find HCF (GCD) of two numbers. */
function lcm(firstNumber, secondNumber) {
    const min = (firstNumber < secondNumber) ? firstNumber : secondNumber;
    let hcf;
    for (let i = 1; i <= min; i++)
        if ((firstNumber % i == 0) && (secondNumber % i == 0))
            hcf = i;

    return hcf;
}

console.log(lcm(12, 30));