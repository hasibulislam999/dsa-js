/* The throw statement defines a custom error */
const number = 3;
try {
    if (number == '')
        // throw 'empty';
        throw Error('empty');
    else if (number < 5)
        throw Error('too low');
    else if (number > 10)
        throw Error('too high');
    else if (isNaN(number))
        throw Error('not a number');
    else
        console.log('enter correct one');
} catch (error) {
    // console.log('the input is: ' + error);
    console.log('the input is, ' + error);
}
