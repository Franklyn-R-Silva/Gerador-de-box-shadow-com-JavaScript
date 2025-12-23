import { TabManager } from '../components/TabManager.js';
import { NotificationManager } from '../components/NotificationManager.js';
import { ControlFactory } from '../components/ControlFactory.js';
import { shadowControls } from '../config/controlsConfig.js';

export class ShadowView {
    constructor() {
      // Containers
      this.shadowContainer = document.querySelector("#shadow-controls-container");
      this.shapeContainer = document.querySelector("#shape-controls-container");
      
      // Initialize dynamic controls
      this.initDynamicControls();

      // Bind dynamic elements
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
      this.borderRadius = document.querySelector("#borderRadius");
      this.borderRadiusRef = document.querySelector("#borderRadius-value");
  
      // Outputs
      this.previewBox = document.querySelector("#box");
      this.rule = document.querySelector("#rule span");
      this.webkitRule = document.querySelector("#webkit-rule span");
      this.mozRule = document.querySelector("#moz-rule span");
      this.borderRadiusRule = document.querySelector("#border-radius-rule");
      this.borderRadiusRuleSpan = document.querySelector("#border-radius-rule span");
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

    initDynamicControls() {
        shadowControls.forEach(config => {
            let control;
            if (config.type === 'checkbox') {
                control = ControlFactory.createCheckboxControl(config);
            } else {
                control = ControlFactory.createRangeControl(config);
            }

            if (config.category === 'shadow') {
                this.shadowContainer.appendChild(control);
            } else {
                this.shapeContainer.appendChild(control);
            }
        });
    }

    onTabChanged(newTab) {
        this.activeTab = newTab;
        this.notificationManager.updateCopyButtonText(newTab);
        this.checkInstallInfo();
    }
  
    bindEvents(handler) {
      const bindDualInput = (elem, type) => {
        if (!elem) return;
        elem.addEventListener("input", (e) => handler(type, e.target.value));
      };
  
      shadowControls.forEach(config => {
          if (config.type !== 'checkbox') {
              const slider = document.getElementById(config.id);
              const textInput = document.getElementById(`${config.id}-value`);
              bindDualInput(slider, config.id);
              bindDualInput(textInput, config.id);
          } else {
              const check = document.getElementById(config.id);
              check.addEventListener("change", (e) => handler(config.id, e.target.checked));
          }
      });
      
      this.resetBtn.addEventListener("click", () => handler("reset"));
      this.copyBtn.addEventListener("click", () => handler("copy", this.activeTab));
    }
  
    updatePreview(cssString, dartString, isInset, borderRadius) {
      this.previewBox.style.boxShadow = cssString;
      this.previewBox.style.borderRadius = `${borderRadius}px`;

      this.rule.innerText = cssString;
      this.webkitRule.innerText = cssString;
      this.mozRule.innerText = cssString;
      
      if (borderRadius > 0) {
          this.borderRadiusRule.style.display = 'block';
          this.borderRadiusRuleSpan.innerText = `${borderRadius}px`;
      } else {
          this.borderRadiusRule.style.display = 'none';
      }

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
        shadowControls.forEach(config => {
            const slider = document.getElementById(config.id);
            const textInput = document.getElementById(`${config.id}-value`);

            if (config.type === 'checkbox') {
                slider.checked = state[config.id];
            } else if (config.id === 'opacity') { // Fixed ID from previous step
                slider.value = state.opacity * 100;
                textInput.value = state.opacity;
            } else {
                slider.value = state[config.id];
                if (textInput) textInput.value = state[config.id];
            }
        });
    }
  
    showCopyFeedback() {
        this.notificationManager.showCopyFeedback(this.activeTab);
    }
}
