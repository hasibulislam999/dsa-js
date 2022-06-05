/*
    // Functionless
    sort()

    // Arrow function
    sort((firstEl, secondEl) => {
        // code here...
    } )

    // Compare function
    sort(compareFn)

    // Inline compare function
    sort(function compareFn(firstEl, secondEl) {
        // code here...
    })
*/
// sort array or array string in ascending or descending order

/* ascending order */
// approach 1
/* const array1 = [1, 3, 5, 7, 2, 9, 6];
console.log(array1.sort()); */

// approach 2
/* const array2 = [1, 11, 21, 99, 88, 77, 66, 55, 44, 33, 66];
array2.sort(function(a, b){
    return a - b;
});
console.log(array2); */

// approach 3
/* const array3 = [-1, 55, 32, 65, 32, 876, 22];
array3.sort((a, b) => {
    return a - b;
});
console.log(array3); */

// approach 4
/* const array4 = [-33, -21, -34, 21, 95, 85439, 193, 193, 1004575];
array4.sort(function compareFn(a, b){
    return a - b;
});
console.log(array4); */

/* descending order */
const array1 = [1, 3, 5, 7, 2, 9, 6];
console.log(array1.sort().reverse());

// approach 2
const array2 = [1, 11, 21, 99, 88, 77, 66, 55, 44, 33, 66];
array2.sort(function(a, b){
    return b - a;
});
console.log(array2);

// approach 3
const array3 = [-1, 55, 32, 65, 32, 876, 22];
array3.sort((a, b) => {
    return b - a;
});
console.log(array3);

// approach 4
const array4 = [-33, -21, -34, 21, 95, 85439, 193, 193, 1004575];
array4.sort(function compareFn(a, b){
    return b - a;
});
console.log(array4);
