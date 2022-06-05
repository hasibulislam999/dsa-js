/*
    JavaScript Search Methods
        * String indexOf()
        * String lastIndexOf()
        * String startsWith()
        * String endsWith()
*/
const str = 'The Brown Fox Jump Over The Lazy Dog';
// for(let i = 0; i < str.length; i++)
//     console.log(`${i} => ${str[i]}`);

// string indexOf() => returns the index of (the position of) the first occurrence of a specified text in a string
// console.log(str.indexOf('Brown')); /* gives the index of first characters of specified string */

// string lastIndexOf() => returns the index of the last occurrence of a specified text in a string
// console.log(str.lastIndexOf('The')); /* gives the index of first characters of specified string */

// Both indexOf(), and lastIndexOf() return -1 if the text is not found
// console.log(str.indexOf('Java'));
// console.log(str.lastIndexOf('Script'));

// Both indexOf(), and lastIndexOf() accept a second parameter as the starting position for the search
// console.log(str.indexOf('The', 15)); /* search for 'The' index after 15 no index */
// console.log(str.lastIndexOf('The', 10)); /* search for 'The' index before 10 no index */

// string search() => searches a string for a specified value and returns the position of the match
// console.log(str.search('The')); /* similar with 'indexOf()' method */
// console.log(str.search('The', 26)); /* can't take a second start position argument */

// string match() => searches a string for a match against a regular expression, and returns the matches, as an Array object
// const str = "The rain in SPAIN stays mainly in the plain";
// console.log(str.match(/in/gi));
/* (g => global match, i => case-intensive, m => multiline-match) => there are flags */
/* g => global match -> same category or type matches in a line */
/* i => case-intensive -> whatever it is upper-case or lower-case */
/* m => multiline-match -> use 'g or i or both' for multiline matches */

/* string startWith() => method returns true if a string begins with a specified value, otherwise false */
// console.log(str.startsWith('Brown', 4)); /* search_string, starting_position */
// console.log(str.startsWith('Brown')); /* search with a string value */

/* string endWith() => method returns true if a string ends with a specified value, otherwise false */
// console.log(str.endsWith('Dog')); /* end string_name */
// console.log(str.endsWith('Brown', 9)); /* end index of specific string */