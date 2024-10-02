/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, "")
  str = str.toLowerCase().trim();
  let str1 = str.split(""); // Split the string into an array of characters
  let str2 = [...str1].reverse(); // Create a reversed version of the array
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false; // If a mismatch is found, it's not a palindrome
    }
  }
  return true; // If no mismatches are found, it is a palindrome
}

module.exports = isPalindrome;
