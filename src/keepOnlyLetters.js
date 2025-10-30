/**
 *  Keeps only the letters in a string by removing numbers and special characters.
 * 
 * @param {string} str The string to keep only letters from
 * @returns {string} The string with only letters
 */
function keepOnlyLetters(str) {
    if (typeof str !== "string") return "";
    
    return str.replace(/[^a-zA-Z]/g, "");
}

export default keepOnlyLetters;