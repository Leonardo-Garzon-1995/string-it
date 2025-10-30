# Contributing to string-pro

First off — thanks for taking the time to contribute!
Whether it’s fixing a typo, adding a new function, or improving documentation, every contribution helps make **string-pro** better.

This guide will help you get started.

---

##  Getting Started

### 1. Fork the repository

Click the **“Fork”** button at the top of this page.  
This will create a copy of the project under your own GitHub account.

### 2. Clone your fork

On your computer, open a terminal and run:

```bash
git clone https://github.com/<your-username>/string-pro.git
cd string-pro
```

Replace `<your-username>` with your GitHub username.

---

##  Setting Up the Project

### 1. Install dependencies

Make sure you have **Node.js** (version 18 or newer) installed.  
Then, in your project folder, run:

```bash
npm install
```

### 2. Run the tests

Before making changes, confirm everything works:

```bash
npm test
```

If all tests pass, you’re good to go.

---

## Making Changes

### 1. Create a new branch

Always make your changes in a new branch:

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b fix/truncate-edge-cases
```

### 2. Make your edits

You can:
- Add new utility functions  
- Fix bugs  
- Improve existing code  
- Write or update documentation

All source files live in the `src/` directory.

### 3. Test your changes locally

If you added or modified functions, make sure to test them:

```bash
npm test
```

You can also run quick examples with Node:

```bash
node
> import { kebabCase } from './src/index.js'
> kebabCase('Hello World')
'hello-world'
```

---

## Testing Your Local Package

You can test your package locally before publishing to npm:

```bash
npm link
```

Then, in another project:

```bash
npm link string-pro
```

This lets you use your local version of the package directly.

---

##  Commit Your Changes

When your code looks good, commit it with a clear message:

```bash
git add .
git commit -m "Add kebabCase function with edge case support"
```

---

##  Push and Open a Pull Request

Push your branch to your fork:

```bash
git push origin feature/your-feature-name
```

Then go to your fork on GitHub, and click **“Compare & pull request”**.

In your PR:
- Describe **what** you changed and **why**  
- Include examples or screenshots if possible

---

## Need Help?

If you get stuck or have questions:
- Open an [issue](https://github.com/Leonardo-Garzon-1995/string-pro/issues)
- Or start a discussion on GitHub

We’re happy to help — especially if this is your **first contribution**!

---

## Code Style Guidelines

To keep the code clean and consistent:
- Use **ES Modules (import/export)**
- Prefer **camelCase** for function names
- Add **JSDoc comments** for every new function
- Keep functions **pure** (no side effects)

---

## Thank You!!!

Your contributions make `string-pro` better for everyone.  
Every PR, issue, or suggestion means a lot — welcome to the project!
