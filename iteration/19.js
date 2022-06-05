/* Write a JS program to enter a number and print it in words. */
function numberToWords(number) {
    numberToString = number.toString();

    for(let i = 0; i < numberToString.length; i++){
        if(parseInt(numberToString[i]) == 0) process.stdout.write('zero ');
        else if(parseInt(numberToString[i]) == 1) process.stdout.write('one ');
        else if(parseInt(numberToString[i]) == 2) process.stdout.write('two ');
        else if(parseInt(numberToString[i]) == 3) process.stdout.write('three ');
        else if(parseInt(numberToString[i]) == 4) process.stdout.write('four ');
        else if(parseInt(numberToString[i]) == 5) process.stdout.write('five ');
        else if(parseInt(numberToString[i]) == 6) process.stdout.write('six ');
        else if(parseInt(numberToString[i]) == 7) process.stdout.write('seven ');
        else if(parseInt(numberToString[i]) == 8) process.stdout.write('eight ');
        else if(parseInt(numberToString[i]) == 9) process.stdout.write('nine ');
        else process.stdout.write('Wrong Input ');
    }
    console.log();
}

numberToWords(11235 + '&');
numberToWords(11235 + '&' + 77685);
numberToWords(11235 + '&' + 77685 + '%' + 8735427);
numberToWords(11235338745318346);