
/**
 * Removes all HTML tags from a given string.
 *
 * This function takes a string as an argument, and returns a new string with all
 * HTML tags removed.
 *
 * @param {string} str The string to have its HTML tags removed.
 * @returns {string} The string with all HTML tags removed.
 */
function stripHtml(str) {
    if (typeof str !== "string") {
        throw new TypeError("stripHtml() expects a string as its argument")
    };
    
    const htmlTagRegex = /<[^>]+>/g;
    return str.replace(htmlTagRegex, '');
}

export default stripHtml