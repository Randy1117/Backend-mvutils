module.exports = function(sequelize, DataTypes) {
  var mv_detallelpv = sequelize.define("mv_detallelpv", {
   lpv_IdDetalle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    lpv_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
   lpv_IdTab: {
      type: DataTypes.STRING(30),
      allowNull: true,   
    },
   lpv_IdProducto: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
   lpv_codLp: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    },
   lpv_prcBase: {
      type: DataTypes.STRING(11),
      allowNull: true, 
      defaultValue: "0"
    },
   lpv_factor: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "0"
    },  
   lpv_prcFin: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "0"
    },
   lpv_TipCalc: {
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
  return mv_detallelpv;
};
