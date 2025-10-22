/**
 * Converts a string to title case.
 *
 * This function uses a regular expression to replace each word in the string with
 * its capitalized version. The regular expression matches any word character
 * sequence, and the replacement function takes the matched text and returns the
 * capitalized version.
 *
 * @param {string} str The string to be converted to title case.
 * @returns {string} The title case string.
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        // Capitalize the first character, and lowercase the rest
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export default toTitleCase;