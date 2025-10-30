// chaining 'methods' to S(tring) objects

// Basic utilities
import capitalizeFirst from "./src/capitalizeFirst.js";
import toTitleCase from "./src/toTitleCase.js";
import reverseStr from "./src/reverseStr.js";
import trimAll from "./src/trimAll.js";
import isPalindrome from "./src/isPalindrome.js";
import countWords from "./src/countWords.js";

// Cleaning and normalizing strings
import removeSpecialChars from "./src/removeSpecialChars.js";
import keepOnlyNumbers from "./src/keepOnlyNumbers.js";
import keepOnlyLetters from "./src/keepOnlyLetters.js";
import normalizeSpaces from "./src/normalizeSpaces.js";
import slugify from "./src/slugify.js";
import stripHtml from "./src/stripHtml.js";

// Formatting helpers
import camelCase from "./src/camelCase.js";
import snakeCase from "./src/snakeCase.js";
import kebabCase from "./src/kebabCase.js";
import pascalCase from "./src/pascalCase.js";
import truncate from "./src/truncate.js";

// More New features

const METHODS = {
    capitalizeFirst,
    toTitleCase,
    reverseStr,
    trimAll,
    isPalindrome,
    countWords,
    removeSpecialChars,
    keepOnlyNumbers,
    keepOnlyLetters,
    normalizeSpaces,
    slugify,
    stripHtml,
    camelCase,
    snakeCase,
    kebabCase,
    pascalCase,
    truncate,
};

export default function S(initial = "") {
    let value = initial == null ? "" : String(initial);

    const api = Object.create(null);

    // Dynamically create chainable methods
    Object.keys(METHODS).forEach((name) => {
        api[name] = function (...args) {
            const fn = METHODS[name];
            const result = fn(value, ...args);
            value = result;
            return api;
        };
    });
    
    // getter for the current value
    api.value = () => value;

    // Nicer console.log() in node.js
    api.toString = ()  => {
        return String(value);
    }
    api.valueOf = () => {
        return value;
    }

    return api;
}