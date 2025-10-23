/**
 *  Converts a string to PascalCase.
 * @param {string} str The string to convert
 * @returns {string} The PascalCase string
 */
function pascalCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('pascalCase() expects a string as its argument');
    };

    // Trim whitespace
    str = str.trim();

    // Convert camelCase/PascalCase words to space-separated words
    //    e.g., "helloWorld" -> "hello World"
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Replace all non-alphanumeric characters with spaces
    str = str.replace(/[^a-zA-Z0-9]+/g, ' ');

    // Normalize spaces: collapse multiple spaces/tabs/newlines into one
    str = str.replace(/\s+/g, ' ');

    // Split the string into words
    const words = str.split(' ');

    // Capitalize the first letter of each word and join them
    const pascal = words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');

    return pascal;
}

export default pascalCase