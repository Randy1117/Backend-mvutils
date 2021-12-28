module.exports = function(sequelize, DataTypes) {
    var mv_agentes = sequelize.define("mv_agentes", {
      agen_idAgente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      agen_idEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      agen_nombre: {
        type: DataTypes.STRING(30),
        allowNull: true,
      
      },
      agen_Apellido: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      agen_Puesto: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      agen_Uid: {
        type: DataTypes.STRING(11),
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
    return mv_agentes;
  };
  
