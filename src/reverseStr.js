/**
 *  Reverses a string
 * 
 * @param {string} str The string to reverse
 * @returns {string} The reversed string
 */
function reverseStr(str) {
    if (typeof str !== "string") {
        throw new TypeError("reverseStr() expects a string as its argument")
    }
    return str.split("").reverse().join("");
}

export default reverseStr;