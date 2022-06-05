/*
    slice()
    slice(start)
    slice(start, end)
*/
// returns a shallow copy of a portion of an array. The original array will not be modified.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.slice(2)); // 3 4 5 6 7 8 9 10
console.log(arr.slice(3, 7)); // 4 5 6 7
console.log(arr.slice(-1)); // 10
console.log(arr.slice(6, -2)); // 7 8
console.log(arr.slice()); // 1 2 3 4 5 6 7 8 9 10
const newArr = arr.slice(-3, -1);
console.log(newArr); // 8 9
