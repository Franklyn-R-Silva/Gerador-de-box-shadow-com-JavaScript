class BoxShadowGenerator {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule,
    cores,
    coresRef,
    opacidade,
    opacidadeRef,
    insetBox,
    botaoCopiar,
    texto
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.previewBox = previewBox;
    this.rule = rule;
    this.webkitRule = webkitRule;
    this.mozRule = mozRule;
    this.cores = cores;
    this.coresRef = coresRef;
    this.opacidade = opacidade;
    this.opacidadeRef = opacidadeRef;
    this.insetBox = insetBox;
    this.botaoCopiar = botaoCopiar;

    // Valores padrão para reset
    this.defaultValues = {
      horizontal: 5,
      vertical: 5,
      blur: 10,
      spread: 3,
      color: "#000000",
      opacity: 100,
      inset: false,
    };

    // Bind do método de cópia para evitar memory leak
    this.handleCopy = this.copyToClipboard.bind(this);
  }

  initialize() {
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.spreadRef.value = this.spread.value;
    this.blurRef.value = this.blur.value;
    this.coresRef.value = this.cores.value;
    this.opacidadeRef.value = 1;

    this.applyRule();
    this.showRule();

    // Adiciona event listener apenas uma vez
    this.botaoCopiar.addEventListener("click", this.handleCopy);
  }

  applyRule() {
    const insetValue = this.insetBox.checked ? "inset" : "";
    const shadowColor = this.hex2rgba(
      this.coresRef.value,
      this.opacidadeRef.value
    );

    this.previewBox.style.boxShadow =
      `${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px ${shadowColor} ${insetValue}`.trim();
    this.currentRule = this.previewBox.style.boxShadow;
  }

  showRule() {
    this.rule.innerText = this.currentRule;
    this.webkitRule.innerText = this.currentRule;
    this.mozRule.innerText = this.currentRule;
  }

  copyToClipboard() {
    const cssRule = `box-shadow: ${this.currentRule};\n-webkit-box-shadow: ${this.currentRule};\n-moz-box-shadow: ${this.currentRule};`;

    navigator.clipboard
      .writeText(cssRule)
      .then(() => {
        this.showCopyFeedback();
      })
      .catch((err) => {
        console.error("Erro ao copiar:", err);
        // Fallback para navegadores antigos
        this.fallbackCopy(cssRule);
      });
  }

  fallbackCopy(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      this.showCopyFeedback();
    } catch (err) {
      console.error("Fallback: Erro ao copiar", err);
    }
    document.body.removeChild(textArea);
  }

  showCopyFeedback() {
    const textoElement = document.querySelector("#texto");
    textoElement.textContent = "Copiado com sucesso!";
    setTimeout(() => {
      textoElement.textContent = "Clique aqui para copiar as regras";
    }, 2000);
  }

  reset() {
    // Reseta todos os valores para o padrão
    this.horizontal.value = this.defaultValues.horizontal;
    this.vertical.value = this.defaultValues.vertical;
    this.blur.value = this.defaultValues.blur;
    this.spread.value = this.defaultValues.spread;
    this.cores.value = this.defaultValues.color;
    this.opacidade.value = this.defaultValues.opacity;
    this.insetBox.checked = this.defaultValues.inset;

    // Atualiza os campos de referência
    this.horizontalRef.value = this.defaultValues.horizontal;
    this.verticalRef.value = this.defaultValues.vertical;
    this.blurRef.value = this.defaultValues.blur;
    this.spreadRef.value = this.defaultValues.spread;
    this.coresRef.value = this.defaultValues.color;
    this.opacidadeRef.value = this.defaultValues.opacity / 100;

    this.applyRule();
    this.showRule();
  }

  // Gera CSS formatado para exibição
  getFormattedCSS() {
    return `box-shadow: ${this.currentRule};\n-webkit-box-shadow: ${this.currentRule};\n-moz-box-shadow: ${this.currentRule};`;
  }

  updateValue(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalRef.value = value;
        break;
      case "vertical":
        this.verticalRef.value = value;
        break;
      case "blur":
        this.blurRef.value = value;
        break;
      case "spread":
        this.spreadRef.value = value;
        break;
      case "cores":
        this.coresRef.value = value;
        break;
      case "opacidade":
        this.opacidadeRef.value = value / 100;
        break;
      case "insetBox":
        this.insetBox.value = value;
        break;
      case "botaoCopiar":
        this.botaoCopiar.value = value;
        break;
    }

    this.applyRule();
    this.showRule();
  }
  //converte rgb ou hex para rgba
  hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
}

// Selecao de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const cores = document.querySelector("#cores");
const coresRef = document.querySelector("#color-value");

const opacidade = document.querySelector("#opacidade");
const opacidadeRef = document.querySelector("#opacidade-value");

const insetBox = document.querySelector("#insetBox");

const botaoCopiar = document.querySelector("#copiarTexto");
const textoTela = document.querySelector("#texto");

const boxShadow = new BoxShadowGenerator(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  previewBox,
  rule,
  webkitRule,
  mozRule,
  cores,
  coresRef,
  opacidade,
  opacidadeRef,
  insetBox,
  botaoCopiar
);
boxShadow.initialize();

// Eventos
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("vertical", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("blur", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("spread", value);
});

cores.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("cores", value);
});

opacidade.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("opacidade", value);
});

insetBox.addEventListener("input", (e) => {
  const value = e.target.value;

  boxShadow.updateValue("insetBox", value);
});

// Botão de reset
const resetButton = document.querySelector("#resetButton");
if (resetButton) {
  resetButton.addEventListener("click", () => {
    boxShadow.reset();
  });
}

// Permitir edição manual dos campos de texto
horizontalRef.addEventListener("change", (e) => {
  const value = parseInt(e.target.value) || 0;
  horizontal.value = Math.max(-100, Math.min(100, value));
  boxShadow.updateValue("horizontal", horizontal.value);
});

verticalRef.addEventListener("change", (e) => {
  const value = parseInt(e.target.value) || 0;
  vertical.value = Math.max(-100, Math.min(100, value));
  boxShadow.updateValue("vertical", vertical.value);
});

blurRef.addEventListener("change", (e) => {
  const value = parseInt(e.target.value) || 0;
  blur.value = Math.max(0, Math.min(100, value));
  boxShadow.updateValue("blur", blur.value);
});

spreadRef.addEventListener("change", (e) => {
  const value = parseInt(e.target.value) || 0;
  spread.value = Math.max(-100, Math.min(100, value));
  boxShadow.updateValue("spread", spread.value);
});
