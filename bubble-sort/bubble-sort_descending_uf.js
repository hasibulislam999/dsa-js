/* Bubble Sort in descending order */
/* uf => using function */
function printArray(array) {
    for (const it of array)
        process.stdout.write(it + ' ');
    console.log();
}

function bubbleSortDescending(array) {
    printArray(array);

    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array.length; j++)
            if (array[j] < array[j + 1])
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

    return array;
}

printArray(bubbleSortDescending([15, 16, 6, 8, 5, 33, -11, 9, 0, 3, 71, -99, 78]));