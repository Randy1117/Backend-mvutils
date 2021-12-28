module.exports = function(sequelize, DataTypes) {
    var mv_relacion_categoria_producto = sequelize.define("mv_relacion_categoria_producto", {
     
      CodProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      idCategorias: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,

      },
    
    },{
        freezeTableName: true
    });
    return mv_relacion_categoria_producto;
  };
  
