/* Write a JS program to find one's complement of a binary number. */
function twosComplement(onesComplement) {
    for(let i = 0; i < onesComplement.length; i++){
        if(onesComplement[i] == '0') process.stdout.write('1');
        else if(onesComplement[i] == '1') process.stdout.write('0');
    }
}

const number = '01000011';
twosComplement(number);