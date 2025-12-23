/**
 * main.js
 * Controller: Links Model and View
 */
import { ShadowModel } from './model/ShadowModel.js';
import { ShadowView } from './view/ShadowView.js';

class ShadowController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Initial Render
    {
        const state = this.model.getState();
        this.view.updateInputs(state);
        this.view.updatePreview(this.model.getCSS(), this.model.getDart(), state.inset, state.borderRadius);
    }

    // Bind events
    this.view.bindEvents(this.handleEvent.bind(this));
  }

  handleEvent(type, value) {
    if (type === 'reset') {
      this.model.reset();
      const state = this.model.getState();
      this.view.updateInputs(state);
      this.view.updatePreview(this.model.getCSS(), this.model.getDart(), state.inset, state.borderRadius);
      return;
    }

    if (type === 'copy') {
      // Value passed from View is the 'activeTab' name string ('css' or 'dart')
      this.copyToClipboard(value);
      return;
    }

    // Normal updates
    if (type === 'opacity') {
        value = value / 100;
    }
    
    if (['horizontal', 'vertical', 'blur', 'spread', 'borderRadius'].includes(type)) { // Padding removed
        const intVal = parseInt(value);
        if (!isNaN(intVal)) {
            value = intVal;
        }
    }

    this.model.update(type, value);
    
    const state = this.model.getState();
    this.view.updateInputs(state); 
    this.view.updatePreview(this.model.getCSS(), this.model.getDart(), state.inset, state.borderRadius);
  }

  copyToClipboard(mode) {
    let textToCopy = "";
    
    if (mode === 'dart') {
        textToCopy = this.model.getDart();
    } else {
        // Default to CSS
        // If border radius is > 0, we can include it.
        const state = this.model.getState();
        const shadowRule = this.model.getCSS();
        
        textToCopy = `box-shadow: ${shadowRule};\n-webkit-box-shadow: ${shadowRule};\n-moz-box-shadow: ${shadowRule};`;
        
        if (state.borderRadius > 0) {
            textToCopy += `\nborder-radius: ${state.borderRadius}px;`;
        }
    }
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        this.view.showCopyFeedback();
      })
      .catch(err => {
        console.error('Failed to copy', err);
      });
  }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    const app = new ShadowController(new ShadowModel(), new ShadowView());
});
