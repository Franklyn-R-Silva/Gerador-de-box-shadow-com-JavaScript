# Contributing Guide

Thank you for considering contributing to **Layered Shade**! 🎉

[🇧🇷 Português](docs/pt-BR/CONTRIBUTING.md)

## 📋 How to Contribute

### 1. Fork and Clone

```bash
# Fork the project on GitHub, then:
git clone https://github.com/YOUR-USERNAME/Layered-Shade.git
cd Layered-Shade
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/my-new-feature
```

### 4. Make Your Changes

- Follow the existing code style
- Add tests for new features
- Ensure all tests pass: `npm test`

### 5. Commit and Push

```bash
git add .
git commit -m "feat: add new feature X"
git push origin feature/my-new-feature
```

### 6. Open a Pull Request

Go to the original repository and open a PR describing your changes.

---

## 📏 Code Standards

### JavaScript

- ES6+ (modules, arrow functions, destructuring)
- Variable names in `camelCase`
- Classes in `PascalCase`
- JSDoc comments for public functions

### CSS

- CSS Variables for colors and spacing
- BEM-like naming (when applicable)
- Mobile-first approach

### Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Type        | Description                  |
| ----------- | ---------------------------- |
| `feat:`     | New feature                  |
| `fix:`      | Bug fix                      |
| `docs:`     | Documentation                |
| `style:`    | Formatting (no logic change) |
| `refactor:` | Code refactoring             |
| `test:`     | Adding/fixing tests          |
| `chore:`    | Maintenance tasks            |

---

## 🧪 Running Tests

```bash
# Run tests
npm test

# Run in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage
```

---

## 🐛 Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/Franklyn-R-Silva/Layered-Shade/issues)
2. If not, open a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots (if applicable)

---

## 💡 Suggesting Features

Open an [Issue](https://github.com/Franklyn-R-Silva/Layered-Shade/issues) with the `enhancement` label describing:

- The problem the feature solves
- How you imagine it would work
- Alternatives considered

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
