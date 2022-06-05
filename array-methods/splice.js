/*
    splice(start)
    splice(start, deleteCount)
    splice(start, deleteCount, item1)
    splice(start, deleteCount, item1, item2, itemN)
*/
// changes the contents of an array by removing or replacing existing elements and/or adding new elements
let arr, newArr;
arr = [1, 3, 4, 5, 6, 7, 8, 9, 10];
newArr = arr.splice(1, 0, 2);
console.log(arr);
newArr = arr.splice(1, 3, 2);
console.log(arr);
