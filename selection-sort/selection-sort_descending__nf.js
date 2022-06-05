/* Selection Sort in descending order */
// nf => no function using here!
var data = [7, 4, 10, -8, 3, 1];
var i, j; /* iteration */
var min; /* min => minimum */
var temp; /* temp => temporary */

for(i = 0; i < data.length - 1; i++){
    min = i;
    for(j = i + 1; j < data.length; j++){
        if(data[j] > data[min]){
            min = j;
        }
    }
    if(min != i){
        temp = data[i];
        data[i] = data[min];
        data[min] = temp;
    }
}

// alternatively
/* var k;
for (i = 0; i < data.length; i++) {
    min = data[i];
    for (j = i + 1; j < data.length; j++) {
        if (data[j] < min) {
            k = j;
            min = data[j];
        }
    }
    data[k] = data[i];
    data[i] = min;
} */

for (i = 0; i < data.length; i++)
    process.stdout.write(data[i] + ' ');