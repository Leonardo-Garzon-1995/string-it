/**
 * Returns a new string with the first character of the given string capitalized.
 *
 * @param {string} str The string to be capitalized.
 * @returns {string} The capitalized string.
 */
function capitalizeFirst(str) {
    if (typeof str !== "string") {
        throw new TypeError("capitalizeFirst() expects a string as its argument");
    }
    
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalizeFirst;