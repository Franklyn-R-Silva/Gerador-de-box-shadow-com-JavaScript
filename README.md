# Gerador-de-box-shadow-com-JavaScript

[![wakatime](https://wakatime.com/badge/user/268de5b9-4dbd-4873-9ede-a165e5745754/project/70693fc0-c377-471e-b887-98884db826cc.svg)](https://wakatime.com/badge/user/268de5b9-4dbd-4873-9ede-a165e5745754/project/70693fc0-c377-471e-b887-98884db826cc)

Projeto utilitário pode utilizar para criar uma box shadow com um auxílio gráfico permitindo ver a regra gerada de forma simples.

[Click para visualizar](https://gerador-de-box-shadow.netlify.app/)

![Imagem do Projeto](github/tela.png)

# Box Shadow Generator

## Descrição

O **Box Shadow Generator** é uma ferramenta interativa para criar sombras em elementos CSS de forma intuitiva. Com este gerador, é possível ajustar diversos parâmetros da sombra, visualizar o resultado em tempo real e copiar o código CSS gerado para uso imediato.

## Recursos

- ✅ Ajuste de deslocamento horizontal e vertical da sombra
- ✅ Controle da intensidade do desfoque (blur)
- ✅ Controle da expansão da sombra (spread)
- ✅ Escolha da cor da sombra com color picker
- ✅ Ajuste da opacidade da sombra
- ✅ Opção de ativar/desativar o modo `inset`
- ✅ Código CSS gerado automaticamente para `box-shadow`, `-webkit-box-shadow` e `-moz-box-shadow`
- ✅ Botão para copiar o código gerado
- ✅ **Novo:** Botão de reset para voltar aos valores padrão
- ✅ **Novo:** Edição manual dos valores nos campos de texto
- ✅ **Novo:** Design responsivo para dispositivos móveis
- ✅ **Novo:** Melhorias de acessibilidade (ARIA labels)
- ✅ **Novo:** Meta tags para SEO e redes sociais

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da interface do usuário
- **CSS3**: Estilização da aplicação com responsividade
- **JavaScript (ES6+)**: Manipulação dinâmica dos elementos e geração do código CSS

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Um navegador web moderno (Chrome, Firefox, Edge, Safari)
- Opcionalmente: um servidor local para desenvolvimento

### Opção 1: Abrindo diretamente no navegador

1. Clone este repositório:

   ```bash
   git clone https://github.com/Franklyn-R-Silva/Gerador-de-box-shadow-com-JavaScript.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd Gerador-de-box-shadow-com-JavaScript
   ```

3. Abra o arquivo `index.html` no seu navegador:
   - **Windows**: Clique duas vezes no arquivo `index.html` ou arraste-o para o navegador
   - **macOS/Linux**: Use o comando `open index.html` ou `xdg-open index.html`

### Opção 2: Usando um servidor local (recomendado para desenvolvimento)

#### Com VS Code Live Server:

1. Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code
2. Clique com o botão direito no `index.html`
3. Selecione "Open with Live Server"

#### Com Python:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Acesse: `http://localhost:8000`

#### Com Node.js (usando npx):

```bash
npx serve
```

Acesse o endereço exibido no terminal

#### Com PHP:

```bash
php -S localhost:8000
```

Acesse: `http://localhost:8000`

### Opção 3: Acesse online

Acesse diretamente pelo link: [https://gerador-de-box-shadow.netlify.app/](https://gerador-de-box-shadow.netlify.app/)

## 📖 Como Usar

1. Utilize os controles deslizantes para ajustar os parâmetros da sombra:

   - **Deslocamento horizontal**: Move a sombra para esquerda/direita (-100px a 100px)
   - **Deslocamento vertical**: Move a sombra para cima/baixo (-100px a 100px)
   - **Blur**: Ajusta o desfoque da sombra (0px a 100px)
   - **Spread**: Ajusta a expansão da sombra (-100px a 100px)
   - **Cor**: Selecione a cor da sombra
   - **Opacidade**: Ajuste a transparência da sombra (0 a 1)
   - **Inset**: Ative para criar sombra interna

2. Visualize o resultado em tempo real na área de preview

3. Clique no botão "Clique aqui para copiar as regras" para copiar o código CSS

4. Cole o código no seu arquivo CSS

## Exemplo de Uso

```css
box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.5);
-moz-box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.5);
```

## 📁 Estrutura do Projeto

```text
Gerador-de-box-shadow-com-JavaScript/
├── index.html          # Página principal
├── README.md           # Documentação
├── css/
│   └── styles.css      # Estilos da aplicação
├── js/
│   └── scripts.js      # Lógica JavaScript
└── github/
    └── tela.png        # Screenshot do projeto
```

## 🔧 Melhorias Recentes

- **Performance**: Correção de memory leak no event listener de cópia
- **UX**: Botão de reset para restaurar valores padrão
- **UX**: Campos de texto editáveis manualmente com validação
- **Responsividade**: Layout adaptável para dispositivos móveis
- **Acessibilidade**: Adição de ARIA labels e melhor navegação por teclado
- **SEO**: Meta tags para melhor indexação e compartilhamento em redes sociais
- **Código**: Refatoração para melhor organização e manutenibilidade

## Contribuição

Fique à vontade para contribuir com melhorias ou relatar problemas no projeto.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
