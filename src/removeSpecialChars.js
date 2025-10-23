/**
 *  Removes all special characters from a string
 * 
 * @param {string} str The string to remove special characters from
 * @returns {string} The string without special characters
 */
function removeSpecialChars(str) {
    if (typeof str !== "string") {
        throw new TypeError("removeSpecialChars() expects a string as its argument")
    }

    return str.replace(/[^a-zA-Z0-9]/g, "");
}

export default removeSpecialChars;