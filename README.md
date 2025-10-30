<div align="center">
  <img src="string_it_logo.svg" alt="string-pro Logo" width="400"/>
</div>

> Tiny yet powerful utilities to manipulate strings your way.

`string-pro` is a lightweight JavaScript library that provides simple, chainable string manipulation utilities — perfect for cleaning and formatting text easily.

---

## Installation

```bash
npm install string-pro
```

or

```bash
yarn add string-pro
```

---

## Usage

### Import as individual functions

```js
import { trimAll, normalizeSpaces } from 'string-pro';

console.log(trimAll('   Hello   world   '));
// → "Hello world"

console.log(normalizeSpaces(`
Hello		world  
again and
again`));
// → "Hello world again and again"
```

### Or use the chainable API

```js
import S from 'string-pro';

const result = S(`   Hello		world

again   `)
  .trimAll()
  .normalizeSpaces()
  .value();

console.log(result);
// → "Hello world again"
```

---

## Available utilities
| Function | Description |
|-----------|-------------|
| BASIC UTILITIES |
|`trimAll(str)` | Removes extra spaces (leading, trailing, and multiple between words). |
|`capitalizefirst(str)` | Capitalizes the first letter of a string. |
| `toTitleCase(str)` | Converts a string to title case. |
| `reverseStr(str)` | Reverses a string. |
| `isPalindrom(str)` | Checks if a string is a palindrome. |
| `countWords(str)` | Counts the number of words in a string. |
| CLEANING UTILITIES |  
| `removeSpecialChars(str)` | Removes special characters from a string. |
| `stripHtml(str)` | Removes all HTML tags from a string. |
| `slugify(str)` | Converts a string to a slug. |
| `keepOnlyLetters(str)` | Removes all non-letter characters from a string. |
| `keepOnlyNumbers(str)` | Removes all non-number characters from a string. |
| `normalizeSpaces(str)` | Replaces multiple spaces, tabs, or newlines with a single space. |
| FORMATTING UTILITIES |
| `camelCase(str)` | Converts a string to camelCase. |
| `pascalCase(str)` | Converts a string to PascalCase. |
| `snakeCase(str)` | Converts a string to snake_case. |
| `kebabCase(str)` | Converts a string to kebab-case. |
| `truncate(str, length)` | Truncates a string to a specified length. |
---

## Contributing

Want to contribute? Check out our [CONTRIBUTE](CONTRIBUTE.md) file for instructions on how to get started. Help us make **string-pro** even better!

## Author
**Leonardo Garzon**  
[lgarzonlc@gmail.com](mailto:lgarzonlc@gmail.com)  
[GitHub](https://github.com/Leonardo-Garzon-1995/string-pro)

---

##  License
MIT © Leonardo Garzon
