/* Bubble Sort in ascending order */
// nf => no function using here!

var data = [1, 3, 5, 2, 4, 7, -9, 6];
var temp; /* temp => temporary variable */

for (var i = 0; i < data.length - 1; i++) {
    for (var j = 0; j < data.length - 1; j++) {
        if (data[j] > data[j + 1]) {
            temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
        }
    }
}

for (var i = 0; i < data.length; i++)
    process.stdout.write(data[i] + ' ');
