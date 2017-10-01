const chromatism = require('chromatism');
const postcssJs = require('postcss-js');
const postcssCalc = require('postcss-calc');

const evalCalc = postcssJs.sync([postcssCalc]);

module.exports = {
  em(targetPx, base = 12) {
    if (isNaN(targetPx)) {
      targetPx = evalCalc({ targetPx }).targetPx;
    }
    return parseFloat(targetPx) / parseFloat(base) + 'em';
  },

  brightness(color, percent) {
    return chromatism.brightness(parseInt(percent), color).hex;
  },
};
