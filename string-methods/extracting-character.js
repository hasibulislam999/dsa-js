/*
    There are 3 methods for extracting string characters:
    * charAt(position)
    * charCodeAt(position) // (an integer between 0 and 65535)
    * Property access [ ]
*/
const str = 'Hello JavaScript';

/* string charAt() */
var newStr = str.charAt(0);
console.log(newStr);

/* string charCodeAt() */
var newStr = str.charCodeAt(0);
console.log(newStr);

/* string property access string_name[index] */
var newStr = str[0]; /* replacement or assignment not work */
console.log(newStr);
