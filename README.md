# Gerador de Box Shadow (CSS & Flutter)

Uma ferramenta web moderna e interativa para gerar sombras CSS (`box-shadow`) e código Dart/Flutter (`BoxShadow`) visualmente.

![Preview](github/tela.png)

## Funcionalidades

-   **Visualização em Tempo Real**: Veja a sombra sendo aplicada instantaneamente.
-   **Controle Completo**: Ajuste deslocamento X/Y, desfoque, propagação, cor e opacidade.
-   **Novidade: Forma e Tamanho**: Ajuste o `border-radius` (arredondamento) e o `padding` do elemento.
-   **CSS & Dart**: Gera código pronto para copiar tanto para Web (CSS) quanto para Flutter (Dart).
-   **Suporte a Inset**: Suporta sombras internas (`inset`).
    -   *Nota para Flutter*: Sugere automaticamente o pacote `flutter_inset_box_shadow` quando sombras internas são usadas.
-   **Design Premium**: Interface moderna estilo "Glassmorphism" com animações suaves e tema escuro/vibrante.
-   **Cópia Inteligente**: Botão de cópia sensível ao contexto (copia CSS ou Dart dependendo da aba ativa).

## Como Usar

1.  Abra o arquivo `index.html` em qualquer navegador moderno.
2.  Use os sliders para ajustar a sombra.
3.  Alterne entre as abas "CSS" e "Dart" para ver o código gerado.
4.  Clique no botão "Clique aqui para copiar as regras" para levar o código para sua área de transferência.

## Instalação (Desenvolvimento)

Este projeto usa JavaScript puro (ES Modules), HTML5 e CSS3 moderno. Não requer build steps complexos (Webpack/Vite), mas precisa ser servido via HTTP devido aos módulos ES.

### Requisitos
-   Qualquer servidor estático simples (ex: `Live Server` do VS Code, `http-server` do NPM, ou Python `http.server`).

### Rodando Localmente
1.  Clone o repositório.
2.  Abra a pasta no VS Code.
3.  Use a extensão **Live Server** para abrir o `index.html`.

## Arquitetura
O projeto segue o padrão **MVC (Model-View-Controller)**. Para detalhes técnicos, consulte [ARCHITECTURE.md](ARCHITECTURE.md).

## Tecnologias
-   **HTML5 Semantic**
-   **CSS3** (Variables, Grid, Flexbox, Animations)
-   **JavaScript** (ES6+, Modules, Classes)
