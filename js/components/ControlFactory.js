/**
 * ControlFactory.js
 */
export class ControlFactory {
    static createRangeControl(config) {
        const { id, label, min, max, value, step = 1, type = 'range' } = config;

        const container = document.createElement('div');
        container.className = 'form-control';
        
        container.innerHTML = `
            <div class="control-header">
                <label for="${id}">${label}</label>
                <div class="reference-input">
                    <input
                        type="text"
                        id="${id}-value"
                        name="${id}-value"
                        aria-label="Valor de ${label}"
                    />
                    ${type !== 'color' ? '<span class="unit">px</span>' : ''}
                </div>
            </div>
            <div class="control-body">
                <input
                    type="${type}"
                    id="${id}"
                    name="${id}"
                    ${type !== 'color' ? `min="${min}" max="${max}" step="${step}"` : ''}
                    value="${value || '#000000'}"
                />
            </div>
        `;
        
        return container;
    }

    static createCheckboxControl(config) {
        const { id, label, checked } = config;

        const container = document.createElement('div');
        container.className = 'form-control checkbox-control';
        
        container.innerHTML = `
            <label for="${id}">${label}</label>
            <input
                type="checkbox"
                id="${id}"
                name="${id}"
                class="checkmark"
                ${checked ? 'checked' : ''}
            />
        `;
        
        return container;
    }
}
