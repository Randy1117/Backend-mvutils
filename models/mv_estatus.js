module.exports = function(sequelize, DataTypes) {
    var mv_estatus = sequelize.define("mv_estatus", {
      esta_idEstatus: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      esta_idEstatus: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,   
      },

      esta_descripcion: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      delet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },

    },{
        freezeTableName: true
    });
    return mv_estatus;
  };
  
