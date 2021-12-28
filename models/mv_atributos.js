module.exports = function(sequelize, DataTypes) {
    var mv_atributos = sequelize.define("mv_atributos", {
     
      atr_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },

      atr_idatributo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      atr_idempresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      atr_idw: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      
      atr_nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      
      },
      atr_posicion: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      atr_visible: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      atr_variacion: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: "0"
      },
      atr_opcion: {
        type: DataTypes.TEXT,
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
    return mv_atributos;
  };
  