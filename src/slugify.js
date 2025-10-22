
/**
 * Converts a string to a slug. This means converting the string a URL-friendly format.
 *
 * @param {string} str The string to be converted to a slug.
 * @returns {string} The slugified string.
 */
function slugify(str) {
    return str
        .toLowerCase()                  // lowercase
        .replace(/[^\w\s-]/g, '')       // remove special characters
        .trim()                         // remove whitespace at start/end
        .replace(/[\s_-]+/g, '-')       // replace spaces/underscores with hyphen
        .replace(/^-+|-+$/g, '');       // remove leading/trailing hyphens
}

export default slugify