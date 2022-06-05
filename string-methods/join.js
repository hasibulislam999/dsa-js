/* join elements of an array target the separator and replace that separator */
let friends = ['Rakib', 'Laish', 'Dibos', 'Sabbir', 'Shakil', 'Monir', 'Mehedi', 'Partho', 'Nabil'];
console.log(friends.join());
console.log(friends.join('-'));
console.log(friends.join(',')); /* default almost */
console.log(friends.join(' '));

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
