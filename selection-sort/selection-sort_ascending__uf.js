/* Selection Sort in ascending order */
/* uf => using funciton */
function printArray(array) {
    for (const it of array)
        process.stdout.write(it + ' ');
    console.log();
}

function selectionSortAscending(array) {
    printArray(array);

    let temp, min, k;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (min != i) {
            temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}

printArray(selectionSortAscending([15, 16, 6, 8, 5, 33, -11, 9, 0, 3, 71, -99, 78]));