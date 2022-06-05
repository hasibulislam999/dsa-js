/* Write a JS program to check whether a number is palindrome or not. */
function isPalindrome(number) {
    let lastDigit, reverse, temp;
    lastDigit = reverse = 0;
    temp = number;
    while(temp != 0){
        lastDigit = temp % 10;
        reverse *= 10;
        reverse += lastDigit;
        temp = parseInt(temp / 10);
    }

    if(reverse == number) return true;
    else return false;
}

if(isPalindrome(121) == true) console.log("Palindrome!");
else console.log("Not Palindrome!");