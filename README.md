
# 🧵 string-it

> Tiny yet powerful utilities to manipulate strings your way.

`string-it` is a lightweight JavaScript library that provides simple, chainable string manipulation utilities — perfect for cleaning and formatting text easily.

---

## 🚀 Installation

```bash
npm install string-it
```

or

```bash
yarn add string-it
```

---

## 🧠 Usage

### Import as individual functions

```js
import { trimAll, normalizeSpaces } from 'string-it';

console.log(trimAll('   Hello   world   '));
// → "Hello world"

console.log(normalizeSpaces('Hello		world

again'));
// → "Hello world again"
```

### Or use the chainable API

```js
import S from 'string-it';

const result = S('   Hello		world

again   ')
  .trimAll()
  .normalizeSpaces()
  .value();

console.log(result);
// → "Hello world again"
```

---

## ✨ Available utilities
| Function | Description |
|-----------|-------------|
| `trimAll(str)` | Removes extra spaces (leading, trailing, and multiple between words). |
| `normalizeSpaces(str)` | Replaces multiple spaces, tabs, or newlines with a single space. |

---

## 🧩 Coming soon
- `toTitleCase(str)`
- `reverse(str)`
- `countWords(str)`
- Chainable `.toTitleCase()` and `.reverse()` support.

---

## 🧑‍💻 Author
**Leonardo Garzon**  
📧 [lgarzonlc@gmail.com](mailto:lgarzonlc@gmail.com)  
🔗 [GitHub](https://github.com/Leonardo-Garzon-1995/string-it)

---

## 📜 License
MIT © Leonardo Garzon
