'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    static associate(models) {
      Turma.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      })
      Turma.belongsTo(models.Pessoas, {
        foreignKey: 'docente_id'
      })
      Turma.belongsTo(models.Niveis, {
        foreignKey: 'nivel_id'
      })
    }
  }
  Turma.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};