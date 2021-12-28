module.exports = function(sequelize, DataTypes) {
  var mv_ordenesdetalles = sequelize.define("mv_ordenesdetalles", {
    ord_ordenExt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    ord_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    ord_idWoo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ord_idorden: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ord_numItem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ord_idProducto: {
      type: DataTypes.INTEGER,
            allowNull: true
    },
   
    ord_idUnidad: {
      type: DataTypes.INTEGER,
            allowNull: true
    },
   
    ord_cantProducto: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
   
    ord_cantDIsp: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
    ord_impSubtotal: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
   
    ord_idTes: {
      type: DataTypes.INTEGER,
            allowNull: true
    },
   
    ord_precio: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
    ord_total: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
    ord_subtotal: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
   
    ord_desc: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
   
    ord_subdesc: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
   
    ord_numPV: {
      type: DataTypes.STRING(11),
            allowNull: true
    },
   
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },

  },{
      freezeTableName: true
  });
  return mv_ordenesdetalles;
};


