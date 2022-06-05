/* Binary Search */
// nf => no function using here!

var data = [-2, -4, 6, 8, 10, 12, 14, 16, 18, 20];
var keyword = -4;
var start = 0, end = data.length - 1;
var mid_value = parseInt((start + end) / 2);;
var flag = false;

while (!(start > end)) {
    mid_value = parseInt((start + end) / 2);
    if (keyword == data[mid_value]) {
        flag = true;
        break;
    }

    else if (keyword < data[mid_value])
        end = mid_value - 1;

    else if (keyword > data[mid_value])
        start = mid_value + 1;
}

if (flag == true)
    console.log("Element founded!");
else
    console.log("Element not founded!");
