/**
 * ShadowModel.js
 * Responsible for holding the state of the box shadow generator.
 * Now supports multiple layers.
 */
export class ShadowModel {
    constructor() {
      // Default template for a new layer
      this.defaultLayerState = {
        horizontal: 5,
        vertical: 5,
        blur: 10,
        spread: 3,
        color: "#000000",
        opacity: 0.5, // Default opacity for new layers
        inset: false,
      };

      // Window/Box properties
      this.boxProperties = {
        borderRadius: 0,
        backgroundColor: "#ffdd00", // Default base color (bottom layer)
        canvasColor: "#ffffff",     // Preview workspace background
      };

      // Background Layers (Stacked on top of solid base color)
      // Type: 'linear' | 'radial'
      this.backgroundLayers = [
          // Example default: No extra layers, just base color.
      ];
      this.currentBgLayerIndex = -1; // -1 means editing base color, 0+ means layer

      this.layers = [ { ...this.defaultLayerState, opacity: 0.2 } ];
      this.currentLayerIndex = 0;
    }
  
    /**
     * Returns the full state for View rendering
     */
    getState() {
        const currentLayer = this.layers[this.currentLayerIndex] || this.defaultLayerState;
        
        return {
            ...this.boxProperties,
            ...currentLayer,
            layerCount: this.layers.length,
            currentLayerIndex: this.currentLayerIndex,
            backgroundLayers: this.backgroundLayers,
            currentBgLayerIndex: this.currentBgLayerIndex,
            currentBgLayer: this.currentBgLayerIndex >= 0 ? this.backgroundLayers[this.currentBgLayerIndex] : null
        };
    }

    /**
     * Updates the current layer or global box properties
     */
    update(key, value) {
      if (['borderRadius', 'backgroundColor', 'canvasColor'].includes(key)) {
        this.boxProperties[key] = value;
      } else if (key.startsWith('bgLayer')) {
          // Handle Background Layer Updates
          if (this.currentBgLayerIndex >= 0 && this.backgroundLayers[this.currentBgLayerIndex]) {
             const layer = this.backgroundLayers[this.currentBgLayerIndex];
             const param = key.replace('bgLayer', '').toLowerCase(); // e.g. 'type', 'angle'
             
             if (param === 'stops') { // special case for stops array
                 layer.stops = value;
             } else {
                 layer[param] = value; 
             }
          }
      } else {
        // Shadow specific property
        if (key === 'opacity') {
            // value is 0-1
            if (this.layers[this.currentLayerIndex]) {
                 this.layers[this.currentLayerIndex][key] = value;
            }
        } else {
            if (this.layers[this.currentLayerIndex]) {
                this.layers[this.currentLayerIndex][key] = value;
            }
        }
      }
    }

    /* Background Layer Management */
    addBackgroundLayer(type = 'linear') {
        this.backgroundLayers.push({
            type: type,
            angle: 90, // for linear
            shape: 'circle', // for radial
            stops: [
                { color: '#ffffff', position: 0 },
                { color: '#000000', position: 100 }
            ],
            opacity: 1
        });
        this.currentBgLayerIndex = this.backgroundLayers.length - 1;
    }

    removeBackgroundLayer(index) {
        this.backgroundLayers.splice(index, 1);
        this.currentBgLayerIndex = this.backgroundLayers.length > 0 ? 0 : -1;
    }

    selectBackgroundLayer(index) {
        this.currentBgLayerIndex = index;
    }

    /**
     * Helper to get the background CSS value (Layers + Base Color)
     */
    getBackgroundCSS() {
        const layersCSS = this.backgroundLayers.map(layer => {
            const stopsStr = layer.stops.map(s => `${s.color} ${s.position}%`).join(', ');
            
            if (layer.type === 'radial') {
                return `radial-gradient(${layer.shape}, ${stopsStr})`;
            }
            // Linear
            return `linear-gradient(${layer.angle}deg, ${stopsStr})`;
        });

        // Add base color at the end
        if (layersCSS.length > 0) {
            return `${layersCSS.join(', ')}, ${this.boxProperties.backgroundColor}`;
        }
        return this.boxProperties.backgroundColor;
    }

    /**
     * Generates the CSS-compatible shadow string for ALL layers
     */
    getCSS() {
      const shadows = this.layers.map(layer => {
          const insetValue = layer.inset ? "inset" : "";
          const color = this.hexToRgba(layer.color, layer.opacity);
          return `${layer.horizontal}px ${layer.vertical}px ${layer.blur}px ${layer.spread}px ${color} ${insetValue}`.trim();
      });

      return shadows.join(', ');
    }
  
    /**
     * Generates Flutter BoxShadow code
     */
    getDart() {
        const { borderRadius } = this.boxProperties;
        let code = '';

        if (borderRadius > 0 || this.boxProperties.useGradient) {
            code += `// Container decoration\n`;
            code += `decoration: BoxDecoration(\n`;
            if (borderRadius > 0) code += `  borderRadius: BorderRadius.circular(${borderRadius}),\n`;
            
            if (this.boxProperties.useGradient) {
                 const start = this.hexToColorObj(this.boxProperties.gradientStart);
                 const end = this.hexToColorObj(this.boxProperties.gradientEnd);
                 // Convert degrees to Alignment vaguely
                 code += `  gradient: LinearGradient(\n`;
                 code += `    begin: Alignment.topLeft,\n`; 
                 code += `    end: Alignment.bottomRight,\n`;
                 code += `    colors: [\n`;
                 code += `      Color(0xFF${start.hex}),\n`;
                 code += `      Color(0xFF${end.hex}),\n`;
                 code += `    ],\n`;
                 code += `  ),\n`;
            } else {
                 const bg = this.hexToColorObj(this.boxProperties.backgroundColor);
                 code += `  color: Color(0xFF${bg.hex}),\n`;
            }

            code += `  boxShadow: [\n`;
        } else {
            code += `boxShadow: [\n`;
        }

        this.layers.forEach((layer) => {
            const { horizontal, vertical, blur, spread, color, opacity, inset } = layer;
            // Convert hex to rgb components
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            
            code += `    BoxShadow(\n`;
            code += `      color: Color.fromRGBO(${r}, ${g}, ${b}, ${opacity}),\n`;
            code += `      offset: Offset(${horizontal}, ${vertical}),\n`;
            code += `      blurRadius: ${blur},\n`;
            code += `      spreadRadius: ${spread},\n`;
            if (inset) {
                 code += `      // inset: true, // Requires flutter_inset_box_shadow\n`;
            }
            code += `    ),\n`;
        });

        code += `  ],\n`;
        
        if (borderRadius > 0) {
            code += `)`;
        }

        return code;
    }

    /**
     * Generates Tailwind CSS configuration/classes
     */
    getTailwind() {
        // Tailwind arbitrary value: shadow-[...]
        // We need to replace spaces with underscores for arbitrary values in Tailwind class names
        // But for multiple shadows, commas are used.
        // shadow-[0px_10px_20px_rgba(0,0,0,0.5),_0px_4px_6px_rgba(0,0,0,0.1)]
        
        let shadowString = this.getCSS();
        // Simple heuristic: replace spaces with underscores, but keep commas
        // Actually, for arbitrary values, spaces are often problematic if not escaped or underscored.
        // Let's allow spaces but in config it's a string.
        // If we want a CLASS name:
        // shadow-[...]
        
        const arbitraryValue = shadowString.replace(/, /g, ',').replace(/ /g, '_');
        
        return `shadow-[${arbitraryValue}]`;
    }

    /**
     * Helper to convert Hex + Alpha to RGBA string
     */
    hexToRgba(hex, alpha) {
       // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b) => {
        return r + r + g + g + b + b;
      });
  
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) return `rgba(0,0,0,${alpha})`;
      
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
  
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    hexToColorObj(hex) {
        let c = hex.substring(1);
        if(c.length === 3) {
            c = c.split('').map(char => char + char).join('');
        }
        return { hex: c.toUpperCase() };
    }
  }
