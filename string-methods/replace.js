/* Replacing string content */

// let friends = ['Rakib', 'Laish', 'Dibos', 'Sabbir', 'Shakil', 'Monir', 'Mehedi', 'Partho', 'Nabil'];
// const newFriend = friends[0].replace('Rakib', 'Rk Rakib');
// as string is immutable therefore no internal changes happen
// console.log(newFriend);

const text = 'Welcome to Microsoft, look forward to Microsoft library';
const newText = `Welcome to ${text.replace('Microsoft', 'W3School')}. Look forward to it.`;
console.log(newText);