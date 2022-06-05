/* Linear Search  */
// nf => no function using here!

var data = [1, 3, 5, 2, 4, 7, -9, 6];
var keyword = 4;
var flag = false;

for (var i = 0; i < data.length; i++)
    if (data[i] == keyword) {
        flag = true;
        break;
    }

if (flag == true)
    console.log("Element founded!");
else
    console.log("Element not founded!");