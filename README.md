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

again   `).trimAll().normalizeSpaces().value();

console.log(result);
// → "Hello world again"
```

---

## Available utilities
| Function | Description |
|-----------|-------------|
| `trimAll(str)` | Removes extra spaces (leading, trailing, and multiple between words). |
| `normalizeSpaces(str)` | Replaces multiple spaces, tabs, or newlines with a single space. |

---

## Author
**Leonardo Garzon**  
[lgarzonlc@gmail.com](mailto:lgarzonlc@gmail.com)  
[GitHub](https://github.com/Leonardo-Garzon-1995/string-pro)

---

##  License
MIT © Leonardo Garzon
