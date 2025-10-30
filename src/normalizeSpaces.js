
/**
 * Replaces multiple whitespace characters (tabs, newlines, spaces) in a string with a single space.
 *
 * This function takes a string as an argument, and returns a new string with
 * all occurrences of one or more whitespace characters replaced with a single
 * space.
 *
 * @param {string} str The string to be normalized.
 * @returns {string} The normalized string.
 */
function normalizeSpaces(str) {
    // Check if the argument is a string
    if (typeof str !== "string") {
        throw new TypeError("normalizeSpaces() expects a string as its argument");
    };

    return str.replace(/\s+/g, " ");
}

export default normalizeSpaces;
