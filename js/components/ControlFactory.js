/**
 * ControlFactory.js
 */
export class ControlFactory {
    static createRangeControl(config) {
        const { id, label, min, max, value, step = 1, type = 'range' } = config;

        const container = document.createElement('div');
        container.className = 'form-control';
        
        container.innerHTML = `
            <div class="range-input">
                <label for="${id}">${label}:</label>
                <input
                    type="${type}"
                    id="${id}"
                    name="${id}"
                    ${type !== 'color' ? `min="${min}" max="${max}" step="${step}"` : ''}
                    value="${value || '#000000'}"
                />
            </div>
            <div class="reference-input">
                <input
                    type="text"
                    id="${id}-value"
                    name="${id}-value"
                    aria-label="Valor de ${label}"
                />
                ${type !== 'color' ? '<p>px</p>' : ''}
            </div>
        `;
        
        return container;
    }

    static createCheckboxControl(config) {
        const { id, label, checked } = config;

        const container = document.createElement('div');
        container.className = 'form-control';
        
        container.innerHTML = `
            <div class="range-input">
                <label for="${id}">${label}</label>
                <input
                    type="checkbox"
                    id="${id}"
                    name="${id}"
                    class="checkmark"
                    ${checked ? 'checked' : ''}
                />
            </div>
        `;
        
        return container;
    }
}
