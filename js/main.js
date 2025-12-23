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

    // Initialize Layer Manager
    this.view.initLayerManager({
        onSelect: (index) => this.handleLayerSelect(index),
        onAdd: () => this.handleLayerAdd(),
        onRemove: (index) => this.handleLayerRemove(index)
    });

    // Initial Render
    this.refreshView();

    // Bind events
    this.view.bindEvents(this.handleEvent.bind(this));
  }

  handleEvent(type, value) {
    if (type === 'reset') {
      this.model.reset();
      this.refreshView();
      return;
    }

    if (type === 'copy') {
      // Value passed from View is the 'activeTab' name string ('css' or 'dart' or 'tailwind')
      this.copyToClipboard(value);
      return;
    }

    if (type === 'preset') {
        this.applyPreset(value);
        return;
    }

    if (['canvasColor', 'backgroundColor'].includes(type)) {
        this.model.update(type, value);
        this.refreshView();
        return;
    }

    // Normal updates (Slider inputs)
    if (type === 'opacity') {
        value = value / 100;
    }
    
    if (['horizontal', 'vertical', 'blur', 'spread', 'borderRadius'].includes(type)) { 
        const intVal = parseInt(value);
        if (!isNaN(intVal)) {
            value = intVal;
        }
    }

    this.model.update(type, value);
    this.refreshView();
  }

  handleLayerSelect(index) {
      this.model.selectLayer(index);
      this.refreshView();
  }

  handleLayerAdd() {
      this.model.addLayer();
      this.refreshView();
  }

  handleLayerRemove(index) {
      this.model.removeLayer(index);
      this.refreshView();
  }

  applyPreset(presetName) {
      // Quick hardcoded presets for now
      // ideally this could be in a config file
      this.model.reset();
      
      if (presetName === 'soft') {
          this.model.update('blur', 10);
          this.model.update('opacity', 0.15);
          this.model.update('vertical', 4);
          this.model.update('horizontal', 0);
          this.model.update('spread', 0);
          this.model.update('canvasColor', '#f3f4f6');
          this.model.update('backgroundColor', '#ffffff');
      } else if (presetName === 'neumorphism') {
          this.model.reset(); // clear layers
          // Layer 1 - light
          this.model.update('horizontal', -5);
          this.model.update('vertical', -5);
          this.model.update('blur', 10);
          this.model.update('color', '#ffffff');
          this.model.update('opacity', 1);
          
          this.model.addLayer();
          // Layer 2 - dark
          this.model.update('horizontal', 5);
          this.model.update('vertical', 5);
          this.model.update('blur', 10);
          this.model.update('color', '#bebebe');
          this.model.update('opacity', 1);
          
          this.model.update('backgroundColor', '#e0e0e0');
          this.model.update('canvasColor', '#e0e0e0');
      } else if (presetName === 'cristal') {
          // Glassmorphism simulation (High Quality)
          this.model.reset(); 

          // Layer 1: Soft backdrop shadow (Glow)
          this.model.update('horizontal', 0);
          this.model.update('vertical', 8);
          this.model.update('blur', 32);
          this.model.update('spread', 0);
          this.model.update('color', '#1f2687'); // Deep blue ambient shadow
          this.model.update('opacity', 0.37);
          
          this.model.addLayer();
          
          // Layer 2: White rim light / border (Inset)
          // Simulates the light catching the glass edge
          this.model.update('horizontal', 0);
          this.model.update('vertical', 0);
          this.model.update('blur', 0);
          this.model.update('spread', 1); // 1px border
          this.model.update('color', '#ffffff');
          this.model.update('opacity', 0.18);
          this.model.update('inset', true);

          // Box and Canvas
          this.model.update('backgroundColor', 'rgba(255, 255, 255, 0.15)'); // Semi-transparent white
          this.model.update('canvasColor', '#0891b2'); // Nice cyan gradient base for glass to pop
      }

      this.refreshView();
  }

  refreshView() {
    const state = this.model.getState();
    const css = this.model.getCSS();
    const dart = this.model.getDart();
    const tailwind = this.model.getTailwind();

    this.view.updateInputs(state);
    this.view.updatePreview(css, dart, tailwind, state);
  }

  copyToClipboard(mode) {
    let textToCopy = "";
    const state = this.model.getState();
    
    if (mode === 'dart') {
        textToCopy = this.model.getDart();
    } else if (mode === 'tailwind') {
        textToCopy = this.model.getTailwind();
    } else {
        // CSS
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
