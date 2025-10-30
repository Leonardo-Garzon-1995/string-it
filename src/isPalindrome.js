import reverseStr from "./reverseStr.js";
/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    if (typeof str !== "string") return "";
    
    return str === reverseStr(str);
}

export default isPalindrome;