/*
    There are 3 methods for extracting a part of a string:
    * slice(start, end)
    * substring(start, end)
    * substr(start, length)
*/
const friends = 'Rakib, Laish, Dibos, Sabbir, Shakil, Monir, Mehedi, Partho, Nabil';

/* string slice() => accept positive & negative index both */
// const newFriend = friends.slice(0, 5); /* positive diction */
// const newFriend = friends.slice(-13, -7); /* negative diction */
// const newFriend = friends.slice(-5, friends.length); /* negative diction approach last element */
// const newFriend = friends.slice(7); /* omit second parameter means specify start to end */

/* string substring() => accept only positive index */
// const newFriend = friends.substring(0, 5); /* positive diction */
// const newFriend = friends.substring(7); /* omit second parameter means specify start to end */
// const newFriend = friends.substring(14, friends.length);

/* string stbstr() */
// const newFriend = friends.substr(7, 12); /* start from index 7 and print upto 12 characters */
// const newFriend = friends.substr(7); /* omit second parameter */
const newFriend = friends.substr(-5); /* negative index applicable while omit second parameter */

console.log(newFriend);
