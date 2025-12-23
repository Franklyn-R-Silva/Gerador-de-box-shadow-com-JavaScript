/**
 * GradientManager.js
 * Manages the UI for the background (Solid Color vs Gradient).
 */
export class GradientManager {
    constructor(container, callbacks) {
        this.container = container;
        this.callbacks = callbacks; // { onUpdate }
        
        this.render();
        this.bindEvents();
    }

    render() {
        this.container.innerHTML = `
            <div class="gradient-controls-wrapper">
                <div class="gradient-toggle">
                    <label class="toggle-switch">
                        <input type="checkbox" id="use-gradient-toggle">
                        <span class="slider round"></span>
                    </label>
                    <span class="toggle-label">Usar Gradiente</span>
                </div>

                <div id="solid-controls" class="color-mode-section">
                    <label title="Cor Sólida" class="color-picker-label">
                        <span>Cor do Box</span>
                        <div class="color-input-wrapper">
                            <input type="color" id="bg-color-picker">
                        </div>
                    </label>
                </div>

                <div id="gradient-controls" class="color-mode-section hidden">
                    <div class="gradient-inputs">
                        <label title="Cor Inicial" class="color-picker-label">
                            <span>Início</span>
                            <div class="color-input-wrapper">
                                <input type="color" id="gradient-start-picker">
                            </div>
                        </label>
                        
                        <label title="Cor Final" class="color-picker-label">
                            <span>Fim</span>
                            <div class="color-input-wrapper">
                                <input type="color" id="gradient-end-picker">
                            </div>
                        </label>
                    </div>
                    
                    <div class="angle-control">
                        <label>Ângulo: <span id="angle-value">90</span>°</label>
                        <input type="range" id="gradient-angle" min="0" max="360" value="90">
                    </div>
                </div>
            </div>
        `;

        // Cache elements
        this.toggle = this.container.querySelector('#use-gradient-toggle');
        this.solidSection = this.container.querySelector('#solid-controls');
        this.gradientSection = this.container.querySelector('#gradient-controls');
        
        this.solidPicker = this.container.querySelector('#bg-color-picker');
        this.startPicker = this.container.querySelector('#gradient-start-picker');
        this.endPicker = this.container.querySelector('#gradient-end-picker');
        this.angleSlider = this.container.querySelector('#gradient-angle');
        this.angleValue = this.container.querySelector('#angle-value');
    }

    bindEvents() {
        // Toggle Switch
        this.toggle.addEventListener('change', (e) => {
            const isGradient = e.target.checked;
            this.toggleView(isGradient);
            this.callbacks.onUpdate('useGradient', isGradient);
        });

        // Solid Color
        this.solidPicker.addEventListener('input', (e) => {
            this.callbacks.onUpdate('backgroundColor', e.target.value);
        });

        // Gradient Inputs
        this.startPicker.addEventListener('input', (e) => {
            this.callbacks.onUpdate('gradientStart', e.target.value);
        });

        this.endPicker.addEventListener('input', (e) => {
            this.callbacks.onUpdate('gradientEnd', e.target.value);
        });

        this.angleSlider.addEventListener('input', (e) => {
            this.angleValue.textContent = e.target.value;
            this.callbacks.onUpdate('gradientAngle', e.target.value);
        });
    }

    toggleView(isGradient) {
        if (isGradient) {
            this.solidSection.classList.add('hidden');
            this.gradientSection.classList.remove('hidden');
        } else {
            this.solidSection.classList.remove('hidden');
            this.gradientSection.classList.add('hidden');
        }
    }

    update(state) {
        // Update DOM elements from state
        this.toggle.checked = state.useGradient;
        this.toggleView(state.useGradient);

        this.solidPicker.value = state.backgroundColor;
        this.startPicker.value = state.gradientStart;
        this.endPicker.value = state.gradientEnd;
        this.angleSlider.value = state.gradientAngle;
        this.angleValue.textContent = state.gradientAngle;
    }
}
