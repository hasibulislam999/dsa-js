/* Write a JS program to find LCM of two numbers. */
function lcm(firstNumber, secondNumber) {
    const max = (firstNumber < secondNumber) ? firstNumber : secondNumber;
    let hcf = max, lcm;
    while(true){
        if((hcf % firstNumber == 0) && (hcf % secondNumber == 0)){
            lcm = hcf;
            break;
        }
        hcf += max;
    }

    return lcm;
}

console.log(lcm(12, 30));