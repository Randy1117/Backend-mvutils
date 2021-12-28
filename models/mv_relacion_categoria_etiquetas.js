module.exports = function(sequelize, DataTypes) {
    var mv_relacion_categoria_etiquetas = sequelize.define("mv_relacion_categoria_etiquetas", {
     
      CodProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idEtiquetas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,

      },
    
    },{
        freezeTableName: true
    });
    return mv_relacion_categoria_etiquetas;
  };
  
