/* Finding length of an array string or element of an array string */

let friends = ['Rakib', 'Laish', 'Dibos', 'Sabbir', 'Shakil', 'Monir', 'Mehedi', 'Partho', 'Nabil'];
// find length of friends array
console.log(friends.length);

// find length of an element of friends array
console.log(friends[3].length);

if (friends[Math.round(Math.random() * 5)].toUpperCase() == 'MONIR') {
    console.log(`Monir Printed Successfully.`);
}
else {
    console.log(`Monir is not printed successfully.`);
}

let friends = 'Rakib, Laish, Dibos, Sabbir, Shakil, Monir, Mehedi, Partho, Nabil';
// find length of friends array
console.log(friends.length);

// find length of an element of friends array
console.log(friends[3].length);
