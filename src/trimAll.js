/** 
* Removes all leading and trailing whitespace characters from a string.
* 
* This function takes a string as an argument, and returns a new string with
* all leading and trailing whitespace characters removed.
*
* @param {string} str The string to be trimmed.
* @returns {string} The trimmed string.
*/
function trimAll(str) {
    if (typeof str !== "string") {
        throw new TypeError("trimAll() expects a string as its argument");
    };

    return str.trim().replace(/\s+/g, " ");
}

export default trimAll;