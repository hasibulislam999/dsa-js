/* Insertion Sort in descending order */
/* uf => using funciton */
function printArray(array) {
    for (const it of array)
        process.stdout.write(it + ' ');
    console.log();
}

function insertionSortDescending(array) {
    printArray(array);

    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        let j = i - 1;
        while ((j >= 0) && (temp > array[j])) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }

    return array;
}

printArray(insertionSortDescending([15, 16, 6, 8, 5, 33, -11, 9, 0, 3, 71, -99, 78]));