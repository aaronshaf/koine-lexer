var unorm = require('unorm');

function isCircumflex(character) {
  return character.charCodeAt(0) === 834;
}

module.exports = function(characters) {
  return unorm.nfd(characters).split('').some(isCircumflex);
};