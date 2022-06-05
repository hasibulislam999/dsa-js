/* Linear Search */
/* ul => using function */

function linearSearch(array, data) {
    for (const index of array)
        if (index == data)
            return true;
    return false;
}

if (linearSearch([15, 5, 20, 35, 2, 42, 67, 17], 42) == true)
    console.log('Founded!');
else
    console.log('Not Founded!');