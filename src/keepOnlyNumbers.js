/**
 *  Keeps only the numbers in a string by removing letters and special characters.
 * 
 * @param {string} str The string to keep only numbers from
 * @returns {string} The string with only numbers
 */
function keepOnlyNumbers(str) {
    if (typeof str !== "string") {
        throw new TypeError("keepOnlyNumbers() expects a string as its argument");
    }
    
    return str.replace(/[^0-9]/g, "");
}

export default keepOnlyNumbers;