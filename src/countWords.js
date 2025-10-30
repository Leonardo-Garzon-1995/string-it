/**
 * Counts the number of words in a string
 * 
 * @param {string} str The string to count words in
 * @returns {number} The number of words in the string
 */
function countWords(str) {
    if (typeof str !== "string") return "";
    
    return str.split(" ").length;
}

export default countWords;