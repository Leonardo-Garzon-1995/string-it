/**
 * Converts a string to camelCase format.
 *
 * This function takes a string as an argument, and returns a new string with the
 * words separated by uppercase letters.
 *
 * @param {string} str The string to be converted to camelCase format.
 * @returns {string} The camelCase formatted string.
 */
function camelCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("camelCase() expects a string as its argument")
    }
    const upperCaseWord = (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    };

    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, upperCaseWord)
        .replace(/\s+/g, '');
}

export default camelCase