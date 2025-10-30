// chaining 'methods' to S(tring) objects

// Basic utilities
import capitalizeFirst from "./capitalizeFirst.js";
import toTitleCase from "./toTitleCase.js";
import reverseStr from "./reverseStr.js";
import trimAll from "./trimAll.js";
import isPalindrome from "./isPalindrome.js";
import countWords from "./countWords.js";

// Cleaning and normalizing strings
import removeSpecialChars from "./removeSpecialChars.js";
import keepOnlyNumbers from "./keepOnlyNumbers.js";
import keepOnlyLetters from "./keepOnlyLetters.js";
import normalizeSpaces from "./normalizeSpaces.js";
import slugify from "./slugify.js";
import stripHtml from "./stripHtml.js";

// Formatting helpers
import camelCase from "./camelCase.js";
import snakeCase from "./snakeCase.js";
import kebabCase from "./kebabCase.js";
import pascalCase from "./pascalCase.js";
import truncate from "./truncate.js";

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