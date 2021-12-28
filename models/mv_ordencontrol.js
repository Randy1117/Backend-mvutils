module.exports = function(sequelize, DataTypes) {
  var mv_ordencontrol = sequelize.define("mv_ordencontrol", {
    
    ctd_idcotDetalle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    ctd_idordenes: {
      type: DataTypes.INTEGER,
      allowNull: true,      
    },
    ctd_precioxvolumen: {
      type: DataTypes.INTEGER,
      allowNull: true,
   
    },
    ctd_prjconfirmarpedido: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    ctd_NumRequisi: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },

    ctd_prjavisoentrega: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ctd_tiempoentrega: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    ctd_pedidoespecial: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    ctd_vigenciacotizacion: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    ctd_codreg: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },
    ctd_tiplib: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ""
    },
    ctd_tpcarga: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ""
    },
    ctd_valida: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: ""
    },
    ctd_status: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ""
    },
    ctd_OrderUrl: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ""
    },
    ctd_clienteUrl: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: ""
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },

  },{
      freezeTableName: true
  });
  return mv_ordencontrol;
};


