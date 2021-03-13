const assets = require("assets");
const { Color } = require('scenegraph');
const { getTailwindColorPalette } = require('./colors.js');

/**
 * Generates a list of Tailwind color assets
 * @param {*} selection 
 */
function generateColorAssets(){
    const palette = getTailwindColorPalette();

    for (const [key, value] of Object.entries(palette)) {
        if (typeof value === 'string'){
                addColorAsset(key, value);
        } else {
            for (const [shade, hex] of Object.entries(value)) {
                addColorAsset(`${key}-${shade}`, hex);
            }
        }
    }
}

function addColorAsset(name, value){
    const colorValue = new Color(value);
    assets.colors.add([{name: name, color: colorValue}])
}

module.exports = { generateColorAssets };