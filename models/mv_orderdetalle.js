module.exports = function(sequelize, DataTypes) {
  var mv_cotdetalle = sequelize.define("mv_cotdetalle", {
    
    ct_idcotDetalle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    ct_idordenes: {
      type: DataTypes.INTEGER,
      allowNull: true,      
    },
    ct_precio: {
      type: DataTypes.STRING(11),
      allowNull: true,
   
    },
    ord_subtotal: {
      type: DataTypes.STRING(11),
      allowNull: true,
   
    },
    ord_impSubtotal: {
      type: DataTypes.STRING(11),
      allowNull: true,
   
    },
    ct_prjconfirmarpedido: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    prjavisoentrega: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ct_tiempoentrega: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    ct_pedidoespecial: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    ct_vigenciacotizacion: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    ct_codreg: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "0"
    },
    ct_tiplib: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ct_tpcarga: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    ct_valida: {
      type: DataTypes.STRING(8),
      allowNull: true,
    },
    ct_status: {
      type: DataTypes.TEXT,
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
  return mv_cotdetalle;
};