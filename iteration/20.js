/* Write a JS program to print all ASCII character with their values. */
for(let i = 0; i <= 127; i++)
    process.stdout.write(String.fromCharCode(i) + ' ');