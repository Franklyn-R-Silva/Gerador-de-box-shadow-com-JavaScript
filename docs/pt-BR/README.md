# 🎨 Layered Shade - Gerador de Box Shadow

Uma ferramenta web moderna e interativa para gerar sombras CSS (`box-shadow`) e código Dart/Flutter (`BoxShadow`) visualmente.

[🇺🇸 English](../../README.md)

[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://layeredshade.netlify.app/)
[![CI](https://github.com/Franklyn-R-Silva/Layered-Shade/actions/workflows/ci.yml/badge.svg)](https://github.com/Franklyn-R-Silva/Layered-Shade/actions/workflows/ci.yml)
[![Tests](https://img.shields.io/badge/Tests-125%20passing-success)](https://github.com/Franklyn-R-Silva/Layered-Shade/actions)
[![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen)](https://github.com/Franklyn-R-Silva/Layered-Shade)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

## 🛠️ Tecnologias

![Skills](https://go-skill-icons.vercel.app/api/icons?i=html,css,js&theme=dark&perline=3)

## 🚀 Demo

[👉 Acesse a ferramenta online](https://layeredshade.netlify.app/)

### Preview

![Preview](../../github/tela.png)

### Demo Animado

![Demo](../../github/demo.webp)

## ✨ Funcionalidades

### Sombras

- **Visualização em Tempo Real**: Preview instantâneo das alterações
- **Múltiplas Camadas**: Crie sombras complexas com várias camadas
- **Controle Completo**: Ajuste X, Y, blur, spread, cor e opacidade
- **Suporte a Inset**: Sombras internas com sugestão automática de pacote Flutter

### Fundo & Forma

- **Gradientes**: Linear e radial com múltiplos color stops
- **Forma Personalizada**: Ajuste border-radius e padding
- **Presets**: Templates prontos (Soft, Neumorphism, Glass)

### Exportação

- **CSS**: Código pronto com prefixos (-webkit, -moz)
- **Dart/Flutter**: BoxShadow e BoxDecoration formatados
- **Tailwind**: Classes utilitárias arbitrárias
- **Cópia Inteligente**: Botão sensível ao contexto (CSS/Dart/Tailwind)

## 📊 Stack Técnica

| Tecnologia     | Uso                                                  |
| -------------- | ---------------------------------------------------- |
| **HTML5**      | Estrutura semântica                                  |
| **CSS3**       | Variables, Grid, Flexbox, Animations, Glassmorphism  |
| **JavaScript** | ES6+, Modules, Classes (Vanilla - zero dependências) |

## ♿ Acessibilidade (A11y)

Este projeto foi desenvolvido com foco em acessibilidade:

- **Skip Link**: Navegação rápida para usuários de teclado
- **Landmarks Semânticos**: `main`, `header`, `footer`, `nav`, `aside`
- **ARIA Roles**: Tabs com `role="tablist"` e `role="tabpanel"`
- **Labels Descritivos**: Todos os botões e links com `aria-label`
- **Focus Visible**: Indicadores de foco aprimorados
- **Decorativos Ocultos**: `aria-hidden="true"` em elementos visuais

## 🚀 Como Usar

### Online

Acesse [layeredshade.netlify.app](https://layeredshade.netlify.app/)

### Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Franklyn-R-Silva/Layered-Shade.git
   ```

2. Abra a pasta no VS Code

3. Use a extensão **Live Server** para abrir o `index.html`

> ⚠️ O projeto usa ES Modules, então precisa ser servido via HTTP (não funciona abrindo diretamente o arquivo).

## 🧪 Testes

```bash
npm install        # Instalar dependências
npm test           # Rodar testes
npm run test:coverage  # Rodar com cobertura
npm run lint       # Verificar estilo do código
```

## 📝 Como Contribuir

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para guia detalhado.

## 👤 Autor

Franklyn R. Silva

- GitHub: [@Franklyn-R-Silva](https://github.com/Franklyn-R-Silva)
- LinkedIn: [franklyn-roberto-dev](https://www.linkedin.com/in/franklyn-roberto-dev/)

## 📄 Licença

Este projeto está licenciado sob a [MIT License](../../LICENSE).

---

⭐ Se este projeto foi útil, considere dar uma estrela!
