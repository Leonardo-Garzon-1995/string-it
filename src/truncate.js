/**
 * Truncates a string to a given length and adds an ellipsis if needed.
 *
 * @param {string} str - The string to truncate
 * @param {number} length - Maximum length of the returned string
 * @param {object} options - Optional settings
 * @param {boolean} options.wordBoundary - If true, truncates without breaking words
 * @param {string} options.ellipsis - String to append when truncating (default "…")
 * @returns {string} Truncated string
 */
function truncate(str, length, options = {}) {
    if (typeof str !== 'string') {
        throw new TypeError('truncate() expects a string as its first argument');
    };
    if (typeof length !== 'number' || length <= 0) {
        throw new TypeError('truncate() expects a positive number as its second argument');
    };

    const { wordBoundary = false, ellipsis = '…' } = options;

    if (str.length <= length) return str;

    let truncated = str.slice(0, length);

    if (wordBoundary) {
        // Avoid breaking a word: remove partial word at the end
        truncated = truncated.replace(/\s+\S*$/, '');
    }

    return truncated + ellipsis;
}

export default truncate