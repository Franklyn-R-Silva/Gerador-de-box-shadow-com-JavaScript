/**
 * BackgroundManager.js
 * Manages multiple background layers (Gradients).
 */
export class BackgroundManager {
    constructor(container, controlsContainer, callbacks) {
        this.container = container; // Layers list container
        this.controlsContainer = controlsContainer; // Controls for active layer
        this.callbacks = callbacks;
        
        // Base color picker (internal reference or bound in View? let's bind element here)
        this.baseColorPicker = document.querySelector('#base-bg-picker');
        if(this.baseColorPicker) {
            this.baseColorPicker.addEventListener('input', (e) => this.callbacks.onUpdate('backgroundColor', e.target.value));
        }

        this.renderControls = this.renderControls.bind(this);
    }

    update(state) {
        this.renderLayersList(state.backgroundLayers, state.currentBgLayerIndex);
        
        if (state.currentBgLayerIndex >= 0 && state.currentBgLayer) {
            this.renderControls(state.currentBgLayer);
            this.controlsContainer.style.display = 'block';
        } else {
            this.controlsContainer.innerHTML = '<p class="bg-empty-state">Adicione uma camada de gradiente acima ou edite a cor base.</p>';
        }
    }

    renderLayersList(layers, activeIndex) {
        let html = `
            <div class="layer-controls-header">
                <h3>Gradientes (${layers.length})</h3>
                <button class="layer-btn add" id="add-bg-layer" title="Adicionar Gradiente">+</button>
            </div>
            <div class="layers-list">
        `;

        layers.forEach((layer, index) => {
            const isActive = index === activeIndex ? 'active' : '';
            const typeLabel = layer.type === 'linear' ? 'Linear' : 'Radial';
            
            // Generate a mini preview of the gradient
            const previewGradient = layer.type === 'linear' 
                ? `linear-gradient(90deg, ${layer.stops[0].color}, ${layer.stops[layer.stops.length-1].color})`
                : `radial-gradient(circle, ${layer.stops[0].color}, ${layer.stops[layer.stops.length-1].color})`;

            html += `
                <div class="layer-item ${isActive}" data-index="${index}">
                    <div class="bg-preview-wrapper">
                        <div class="bg-preview-swatch" style="background:${previewGradient}"></div>
                        <span class="layer-name">${typeLabel}</span>
                    </div>
                    <button class="remove-layer-btn" data-index="${index}">×</button>
                </div>
            `;
        });

        html += `</div>`;
        this.container.innerHTML = html;

        // Bind Events
        this.container.querySelector('#add-bg-layer').addEventListener('click', () => this.callbacks.onAdd());
        
        this.container.querySelectorAll('.layer-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if(!e.target.classList.contains('remove-layer-btn')) {
                    this.callbacks.onSelect(parseInt(item.dataset.index));
                }
            });
        });

        this.container.querySelectorAll('.remove-layer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.callbacks.onRemove(parseInt(btn.dataset.index));
            });
        });
    }

    renderControls(layer) {
        // Controls for the ACTIVE layer
        this.controlsContainer.innerHTML = `
            <div class="bg-controls-group">
                <div class="control-header"><label>Tipo</label></div>
                <select id="bg-type-select" class="form-select bg-select-input">
                    <option value="linear" ${layer.type === 'linear' ? 'selected' : ''}>Linear</option>
                    <option value="radial" ${layer.type === 'radial' ? 'selected' : ''}>Radial</option>
                </select>

                ${layer.type === 'linear' ? `
                    <div class="control-header"><label>Ângulo: ${layer.angle}°</label></div>
                    <input type="range" id="bg-angle-range" min="0" max="360" value="${layer.angle}">
                ` : `
                   <!-- Radial specific params could go here -->
                `}
                
                <div class="control-header control-header-margin"><label>Cores (Stops)</label></div>
                <div class="bg-stops-container">
                   <input type="color" class="stop-color bg-stop-input" data-stop="0" value="${layer.stops[0].color}">
                   <input type="color" class="stop-color bg-stop-input" data-stop="1" value="${layer.stops[1].color}">
                </div>
            </div>
        `;

        // Bind control events
        const typeSelect = this.controlsContainer.querySelector('#bg-type-select');
        typeSelect.addEventListener('change', (e) => this.callbacks.onUpdateLayer('bgLayerType', e.target.value));

        if (layer.type === 'linear') {
            const angleRange = this.controlsContainer.querySelector('#bg-angle-range');
            angleRange.addEventListener('input', (e) => this.callbacks.onUpdateLayer('bgLayerAngle', e.target.value));
        }

        const stopPickers = this.controlsContainer.querySelectorAll('.stop-color');
        stopPickers.forEach(picker => {
            picker.addEventListener('input', (e) => {
                const stopIndex = parseInt(e.target.dataset.stop);
                const newStops = [...layer.stops];
                newStops[stopIndex].color = e.target.value;
                this.callbacks.onUpdateLayer('bgLayerStops', newStops);
            });
        });
    }
}
