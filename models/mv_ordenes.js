module.exports = function(sequelize, DataTypes) {
  var mv_ordenes = sequelize.define("mv_ordenes", {
    or_idorden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    or_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    or_idordenExt: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    or_idCLiente: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    or_ordenOrigen: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    },
    or_codMon: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    or_subtotal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_descTotal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_descImp: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_envioTotal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_envImp: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_totalImp: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_totalFinal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
   
    or_clienteIP: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: ""
    },
   
    or_agenteID: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
   
    or_dirEnvioID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_dirFactID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_idCondPago: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_idListaP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    or_mensaje: {
      type: DataTypes.TEXT,
      allowNull: false,
     
    },
    delet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },

  },{
      freezeTableName: true
  });
  return mv_ordenes;
};
