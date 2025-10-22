/**
 * Converts a string to snake_case.
 *
 * This function takes a string as an argument, and returns a new string with all
 * camelCase words replaced with snake_case.
 *
 * @param {string} str The string to be converted to snake case.
 * @returns {string} The snake case string.
 */
function snakeCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("snakeCase() expects a string as its argument");
    }

    try {
        // Trim whitespace
        str = str.trim();

        // Convert PascalCase/camelCase to space-separated words
        //    e.g., "helloWorld" -> "hello World"
        str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

        // Replace all non-alphanumeric characters (except numbers/letters) with spaces
        str = str.replace(/[^a-zA-Z0-9]+/g, ' ');

        // Normalize spaces: collapse multiple spaces/tabs/newlines into one
        str = str.replace(/\s+/g, ' ');

        // Convert spaces to underscores
        str = str.replace(/ /g, '_');

        // Convert to lowercase
        return str.toLowerCase();
        
    } catch (error) {
        console.error("An error occurred in snakeCase():", error);
        return "";
    }
}

export default snakeCase