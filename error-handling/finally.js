/*
    The try statement defines a code block to run (to try).
    The catch statement defines a code block to handle any error.
    The finally statement defines a code block to run regardless of the result.
*/
const message = 'Hello JavaScript with ES6';
console.log(message);
// observe the error which created in `try block`
try {
    message = "It's JS constant variable";
    console.log(message);
    // any single error just truncate `try block` ASAP
} catch (error) {
    // console.log(error.name);
    // console.log(error.message);
    process.stdout.write(error.name + error.message);
}
finally{
    // this portion must execute
    console.log('\nThis portion must be printed');
    console.log('Whatever try-catch execute or not');
}
