const colorNameList = require("./colornames.json");

function getColorName(hex) {
  const match = colorNameList.find(color => color.hex.toLowerCase() === hex.toLowerCase());
  return match ? match.name : "Unknown color";
}

console.log("BP Color Lib is Configured :",getColorName("#FFFFFF")); // Output: Some color name (depends on the library)

module.exports = { getColorName };