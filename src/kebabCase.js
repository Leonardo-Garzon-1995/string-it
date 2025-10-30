/**
 *  Converts a string to kebab-case.
 * 
 * @param {string} str The string to convert
 * @returns {string} The kebab-case string
 */
function kebabCase(str) {
    if (typeof str !== 'string') return "";

    //  Trim whitespace
    str = str.trim();

    // Convert camelCase/PascalCase to space-separated words
    //    e.g., "helloWorld" -> "hello World"
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Replace all non-alphanumeric characters with spaces
    str = str.replace(/[^a-zA-Z0-9]+/g, ' ');

    // Normalize spaces: collapse multiple spaces/tabs/newlines into one
    str = str.replace(/\s+/g, ' ');

    // Convert spaces to hyphens
    str = str.replace(/ /g, '-');

    // Convert to lowercase
    str = str.toLowerCase();

    // Remove leading/trailing hyphens (optional)
    str = str.replace(/^-+|-+$/g, '');

    return str;
}

export default kebabCase