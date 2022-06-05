/* Write a JS program to find frequency of each digit in a given integer. */
function digitFrequency(number) {
    let numberToString = number.toString();
    let numberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < numberToString.length; i++)
        numberArray[parseInt(numberToString[i])]++;

    for (let i = 0; i < numberArray.length; i++)
        console.log(i, 'in', number, 'this number:', numberArray[i], 'times.');
}

digitFrequency(123321111);