/* Write a JS program to check whether a number is palindrome or not using recursion. */
function isPalindrome(number) {
    if (number == 0) return 0;
    return ((number % 10) * Math.pow(10, parseInt(Math.log10(number)))) + isPalindrome(parseInt(number / 10));
}

const number = 121;
if (number == isPalindrome(number))
    console.log('Palindrome');
else
    console.log('Not palindrome');