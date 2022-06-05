/* add or remove element within array or string array */
const months = ['January', '', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const newMonth = months.splice(1, 0, 'February');
const newMonth = months.splice(1, 1, 'February');
// const newMonth = months.splice(1, 2, 'February');
console.log(newMonth);
for (const month of months) {
    process.stdout.write(month + ' ');
}
