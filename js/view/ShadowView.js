import { TabManager } from '../components/TabManager.js';
import { NotificationManager } from '../components/NotificationManager.js';

export class ShadowView {
    constructor() {
      // Inputs
      this.horizontal = document.querySelector("#horizontal");
      this.horizontalRef = document.querySelector("#horizontal-value");
      this.vertical = document.querySelector("#vertical");
      this.verticalRef = document.querySelector("#vertical-value");
      this.blur = document.querySelector("#blur");
      this.blurRef = document.querySelector("#blur-value");
      this.spread = document.querySelector("#spread");
      this.spreadRef = document.querySelector("#spread-value");
      this.color = document.querySelector("#cores");
      this.colorRef = document.querySelector("#color-value");
      this.opacity = document.querySelector("#opacidade");
      this.opacityRef = document.querySelector("#opacidade-value");
      this.inset = document.querySelector("#insetBox");
  
      // Outputs
      this.previewBox = document.querySelector("#box");
      this.rule = document.querySelector("#rule span");
      this.webkitRule = document.querySelector("#webkit-rule span");
      this.mozRule = document.querySelector("#moz-rule span");
      this.dartRule = document.querySelector("#dart-rule span");
      this.dartInstallInfo = document.querySelector("#dart-install-info");

      // Buttons
      this.copyBtn = document.querySelector("#copiarTexto");
      this.copyText = document.querySelector("#texto");
      this.resetBtn = document.querySelector("#resetButton");
      
      // Managers
      this.notificationManager = new NotificationManager(this.copyText, this.copyBtn);
      this.tabManager = new TabManager(this);
      
      // State
      this.activeTab = "css"; 
      this.isInset = false;
    }

    // Called by TabManager
    onTabChanged(newTab) {
        this.activeTab = newTab;
        this.notificationManager.updateCopyButtonText(newTab);
        this.checkInstallInfo();
    }
  
    bindEvents(handler) {
      // helper to bind input + change for range sliders
      const bindDualInput = (elem, type) => {
        elem.addEventListener("input", (e) => handler(type, e.target.value));
      };
  
      // Ranges
      bindDualInput(this.horizontal, "horizontal");
      bindDualInput(this.vertical, "vertical");
      bindDualInput(this.blur, "blur");
      bindDualInput(this.spread, "spread");
      bindDualInput(this.opacity, "opacity");
      
      // Other inputs
      bindDualInput(this.color, "color");
      this.inset.addEventListener("change", (e) => handler("inset", e.target.checked));
  
      // Reference inputs (Manual typing)
      this.horizontalRef.addEventListener("input", (e) => handler("horizontal", e.target.value));
      this.verticalRef.addEventListener("input", (e) => handler("vertical", e.target.value));
      this.blurRef.addEventListener("input", (e) => handler("blur", e.target.value));
      this.spreadRef.addEventListener("input", (e) => handler("spread", e.target.value));
      
      // Buttons
      this.resetBtn.addEventListener("click", () => handler("reset"));
      this.copyBtn.addEventListener("click", () => handler("copy", this.activeTab)); // Pass active tab
    }
  
    updatePreview(cssString, dartString, isInset) {
      this.previewBox.style.boxShadow = cssString;
      this.rule.innerText = cssString;
      this.webkitRule.innerText = cssString;
      this.mozRule.innerText = cssString;
      this.dartRule.innerText = dartString;
      
      this.isInset = isInset;
      this.checkInstallInfo();
    }

    checkInstallInfo() {
        if (this.activeTab === 'dart' && this.isInset) {
            this.dartInstallInfo.style.display = 'block';
        } else {
            this.dartInstallInfo.style.display = 'none';
        }
    }
  
    updateInputs(state) {
      this.horizontal.value = state.horizontal;
      this.horizontalRef.value = state.horizontal;
      
      this.vertical.value = state.vertical;
      this.verticalRef.value = state.vertical;
      
      this.blur.value = state.blur;
      this.blurRef.value = state.blur;
      
      this.spread.value = state.spread;
      this.spreadRef.value = state.spread;
      
      this.color.value = state.color;
      this.colorRef.value = state.color;
      
      // Opacity is 0-1 state, 0-100 input
      this.opacity.value = state.opacity * 100;
      this.opacityRef.value = state.opacity;
      
      this.inset.checked = state.inset;
    }
  
    showCopyFeedback() {
        this.notificationManager.showCopyFeedback(this.activeTab);
    }
}
