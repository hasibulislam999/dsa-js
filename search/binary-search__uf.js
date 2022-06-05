/* Binary Search */
/* uf => using function */

function binarySearch(array, data) {
    let left = 0, right = array.length - 1;
    while (!(left > right)) {
        let middle = parseInt((left + right) / 2);
        if (data == array[middle])
            return true;
        else if (data > array[middle])
            left = middle + 1;
        else
            right = middle - 1;
    }
    return false;
}

if (binarySearch([5, 9, 17, 23, 25, 45, 59, 63, 71, 89], 23) == true)
    console.log('Founded!');
else
    console.log('Not Founded!');