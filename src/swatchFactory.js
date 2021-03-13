const { Rectangle, Color, Text } = require('scenegraph');
const { getTailwindColorPalette } = require('./colors.js');

let x = 50;
let y = 50;

/**
 * Constructs a Tailwind color swatch palette in the project workspace
 * @param {*} selection 
 */
function buildSwatchPalette(selection) {
  const palette = getTailwindColorPalette();

  for (const [key, value] of Object.entries(palette)) {
    createPrimaryLabel(selection, key, x, y);
    x += 100;
    
    if (typeof value === 'string'){
      createSwatch(selection, value, x, y);
    } else {
      for (const [shade, hex] of Object.entries(value)) {
        createSwatch(selection, hex, x, y);
        createPrimaryLabel(selection, shade, x, y);
        x += 83;
      }
    }

    x = 50;
    y += 100;

  }
}

function createPrimaryLabel(selection, text, x, y){
  const label = new Text();
    label.text = text;
    label.styleRanges = [{
      length: label.text.length,
      fontFamily: 'Helvetica',
      fontStyle: 'Regular',
      fontSize: 18,
      charSpacing: 0,
      underline: false,
      fill: new Color("#333")
    }];
    label.visible = true;
    selection.insertionParent.addChild(label);
    label.moveInParentCoordinates(x, y);
}

function createSwatch(selection, color, x, y){
  const swatch = new Rectangle();
  swatch.width = 75;
  swatch.height = 75;
  swatch.cornerRadii = {
    topLeft: 2,
    topRight: 16,
    bottomRight: 16,
    bottomLeft: 16,
  };
  swatch.fill = new Color(color);
  selection.insertionParent.addChild(swatch);
  swatch.moveInParentCoordinates(x, y);
}

module.exports = { buildSwatchPalette };