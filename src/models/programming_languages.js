const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programming_languages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    released_year: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    githut_rank: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    pypl_rank: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tiobe_rank: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'programming_languages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
