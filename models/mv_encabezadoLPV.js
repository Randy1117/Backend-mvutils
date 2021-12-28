
  module.exports = function(sequelize, DataTypes) {
    var mv_encabezadolpv = sequelize.define("mv_encabezadolpv", {
      encab_IdEncabezado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      encab_idEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      encab_fechaInicio: {
        type: DataTypes.STRING(30),
        allowNull: true,      
      },
      encab_fechaFin: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      encab_timestamp: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },     
      delet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },

    },{
        freezeTableName: true
    });
    return mv_encabezadolpv;
  };
  

 
