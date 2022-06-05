/* String comparison using toLowerCase & toUpperCase */
const friends = ['Rakib', 'Laish', 'Dibos', 'Sabbir', 'Shakil', 'Monir', 'Mehedi', 'Partho', 'Nabil'];

// print output in console
/* for (const iterator of friends) {
    // convert all the name to uppercase
    process.stdout.write(iterator.toUpperCase() + ' ');
} */
// console.log();
/* for (const iterator of friends) {
    // convert all the name to lowercase
    process.stdout.write(iterator.toLowerCase() + ' ');
} */
// console.log();

// print single element from string array
// console.log(friends[3]);

// compare for sure match
if(friends[3].toLowerCase() == 'sabbir'){
    console.log(`${friends[3]} printed successfully.`);
}
else{
    console.log(`${friends[3]} is not printed successfully.`);
}
