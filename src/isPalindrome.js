import reverseStr from "./reverseStr.js";

function isPalindrome(str) {
    return str === reverseStr(str);
}

export default isPalindrome;