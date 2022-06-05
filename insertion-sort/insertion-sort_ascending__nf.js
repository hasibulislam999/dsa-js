/* Insertion Sort in ascending order */
// nf => no funciton using here!
var data = [5, 4, -10, 1, 6, 2];
var i, j; /* i & j => iteration */
var temp; /* temp => temporary */

for (i = 1; i < data.length; i++) {
    temp = data[i];
    j = i - 1;
    while ((j >= 0) && (data[j] > temp)) {
        data[j + 1] = data[j];
        j--;
    }
    data[j + 1] = temp;
}

/*
// alternatively
var k;
for (i = 1; i < data.length; i++) {
    temp = data[i];
    k = i;
    for (j = i; j >= 0; j--) {
        if (temp < data[j - 1]) {
            data[j] = data[j - 1];
            k--;
        }
    }
    data[k] = temp;
}

// alternatively
for(let j = i - 1; j >= 0; j--){
            if(temp < array[j]){
                array[j + 1] = array[j];
                k = j;
                flag = 1;
            }
        }
        if(flag == 1) array[k] = temp;
        else continue;

*/

for (i = 0; i < data.length; i++)
    process.stdout.write(data[i] + ' ');