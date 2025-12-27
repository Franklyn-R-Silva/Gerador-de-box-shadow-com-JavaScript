# 🎨 Layered Shade - Box Shadow Generator

A modern and interactive web tool for generating CSS shadows (`box-shadow`) and Dart/Flutter code (`BoxShadow`) visually.

[🇧🇷 Português](docs/pt-BR/README.md)

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://layeredshade.netlify.app/)
[![CI](https://github.com/Franklyn-R-Silva/Layered-Shade/actions/workflows/ci.yml/badge.svg)](https://github.com/Franklyn-R-Silva/Layered-Shade/actions/workflows/ci.yml)
[![Tests](https://img.shields.io/badge/Tests-125%20passing-success)](https://github.com/Franklyn-R-Silva/Layered-Shade/actions)
[![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)](https://github.com/Franklyn-R-Silva/Layered-Shade)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Performance](https://img.shields.io/badge/Performance-98%25-success)](https://pagespeed.web.dev/analysis/https-layeredshade-netlify-app/1)
[![Accessibility](https://img.shields.io/badge/Accessibility-95%25-success)](https://pagespeed.web.dev/analysis/https-layeredshade-netlify-app/1)
[![Best Practices](https://img.shields.io/badge/Best%20Practices-100%25-success)](https://pagespeed.web.dev/analysis/https-layeredshade-netlify-app/1)
[![SEO](https://img.shields.io/badge/SEO-100%25-success)](https://pagespeed.web.dev/analysis/https-layeredshade-netlify-app/1)

## 🛠️ Technologies

![Skills](https://go-skill-icons.vercel.app/api/icons?i=html,css,js&theme=dark&perline=3)

## 🚀 Demo

[👉 Try it online](https://layeredshade.netlify.app/)

### Preview

![Preview](github/tela.png)

### Demo Animation

![Demo](github/demo.webp)

## ✨ Features

### Shadows

- **Real-time Preview**: Instant preview of changes
- **Multiple Layers**: Create complex shadows with multiple layers
- **Full Control**: Adjust X, Y, blur, spread, color and opacity
- **Inset Support**: Inner shadows with automatic Flutter package suggestion

### Background & Shape

- **Gradients**: Linear and radial with multiple color stops
- **Custom Shape**: Adjust border-radius and padding
- **Presets**: Ready-made templates (Soft, Neumorphism, Glass)

### Export

- **CSS**: Ready-to-use code with prefixes (-webkit, -moz)
- **Dart/Flutter**: Formatted BoxShadow and BoxDecoration
- **Tailwind**: Arbitrary utility classes
- **Smart Copy**: Context-sensitive button (CSS/Dart/Tailwind)

## 📊 Tech Stack

| Technology     | Usage                                                |
| -------------- | ---------------------------------------------------- |
| **HTML5**      | Semantic structure                                   |
| **CSS3**       | Variables, Grid, Flexbox, Animations, Glassmorphism  |
| **JavaScript** | ES6+, Modules, Classes (Vanilla - zero dependencies) |

## ♿ Accessibility (A11y)

This project was developed with accessibility in mind:

- **Skip Link**: Quick navigation for keyboard users
- **Semantic Landmarks**: `main`, `header`, `footer`, `nav`, `aside`
- **ARIA Roles**: Tabs with `role="tablist"` and `role="tabpanel"`
- **Descriptive Labels**: All buttons and links with `aria-label`
- **Focus Visible**: Enhanced focus indicators
- **Hidden Decoratives**: `aria-hidden="true"` on visual elements

## 📁 Architecture

The project follows the **MVC (Model-View-Controller)** pattern:

```text
js/
├── main.js              # Controller
├── model/
│   └── ShadowModel.js   # State and business logic
├── view/
│   └── ShadowView.js    # DOM manipulation
├── components/          # Auxiliary components
│   ├── LayerManager.js
│   ├── BackgroundManager.js
│   ├── GradientManager.js
│   └── ...
└── config/
    └── controlsConfig.js
```

For complete technical details, see [ARCHITECTURE.md](ARCHITECTURE.md).

## 🚀 Getting Started

### Online

Visit [layeredshade.netlify.app](https://layeredshade.netlify.app/)

### Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Franklyn-R-Silva/Layered-Shade.git
   ```

2. Open the folder in VS Code

3. Use the **Live Server** extension to open `index.html`

> ⚠️ The project uses ES Modules, so it needs to be served via HTTP (won't work by opening the file directly).

## 🧪 Testing

```bash
npm install        # Install dependencies
npm test           # Run tests
npm run test:coverage  # Run with coverage
npm run lint       # Check code style
```

## 📝 Contributing

1. Fork the project
2. Create your branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 👤 Author

Franklyn R. Silva

- GitHub: [@Franklyn-R-Silva](https://github.com/Franklyn-R-Silva)
- LinkedIn: [franklyn-roberto-dev](https://www.linkedin.com/in/franklyn-roberto-dev/)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

⭐ If this project was helpful, consider giving it a star!
