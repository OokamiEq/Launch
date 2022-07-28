const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CV_Skills extends Model {
    static associate(models) {
      // define association here
    }
  }
  CV_Skills.init({
    skill_id: DataTypes.INTEGER,
    cv_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CV_Skills',
  });
  return CV_Skills;
};
