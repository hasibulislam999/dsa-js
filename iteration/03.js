/* Write a JS program to print all alphabets from a to z. - using while loop */
function printAlphabets() {
    let i;

    i = 65;
    while (i <= 90) {
        process.stdout.write(String.fromCharCode(i) + ' ');
        i++;
    }

    console.log();

    i = 97;
    while (i <= 122) {
        process.stdout.write(String.fromCharCode(i) + ' ');
        i++;
    }
}

printAlphabets();