/* Write a C program to print Fibonacci series up to n terms. */
function printArray(array) {
    for (const iterator of array) {
        process.stdout.write(iterator + ' ');
    }
}

function fibo(range) {
    fiboSeries = [0, 1];
    for(let i = 2; i < range; i++)
        fiboSeries[i] = fiboSeries[i - 1] + fiboSeries[i - 2];
    
    printArray(fiboSeries);
}

fibo(8);