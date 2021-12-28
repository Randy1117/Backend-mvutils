module.exports = function(sequelize, DataTypes) {
  var mv_etiquetas = sequelize.define("mv_etiquetas", {
    et_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    et_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    et_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    et_slug: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    et_description: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: ""
    },
    et_count: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    et_links: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: ""
    },
    et_self: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },

  },{
      freezeTableName: true
  });
  return mv_etiquetas;
};
