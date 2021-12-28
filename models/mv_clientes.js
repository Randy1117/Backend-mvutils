module.exports = function(sequelize, DataTypes) {
  var mv_clientes = sequelize.define("mv_clientes", {
    cte_idCLiente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    cte_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cte_idwoo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cte_razonSocial: {
      type: DataTypes.STRING(100),
      allowNull: true,
      primaryKey: true,
    },
    cte_rfc: {
      type: DataTypes.STRING(14),
      allowNull: true
    },
    cte_Correo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: ""
    },
    cte_tel: {
      type: DataTypes.STRING(11),
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
  return mv_clientes;
};
