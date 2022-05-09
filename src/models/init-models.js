var DataTypes = require("sequelize").DataTypes;
var _programming_languages = require("./programming_languages");

function initModels(sequelize) {
  var programming_languages = _programming_languages(sequelize, DataTypes);


  return {
    programming_languages,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
