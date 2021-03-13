const { generateColorAssets } = require('./src/colorAssets.js');
const { buildSwatchPalette } = require('./src/swatchFactory.js');
// const { mountConfig } = require('./src/getConfig.js');


module.exports = {
  commands: {
    createColorAssets: generateColorAssets,
    createSwatchPalette: buildSwatchPalette,
  },
};
