module.exports = function(sequelize, DataTypes) {
    var mv_unidadsat = sequelize.define("mv_unidadsat", {
     
      Unid_ClaveUnidad: {
        type: DataTypes.STRING(5),
        allowNull: true,
        primaryKey: true,
      },
      Unid_Descripcion: {
        type: DataTypes.STRING(150),
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
    return mv_unidadsat;
  };
  
