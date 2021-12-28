module.exports = function(sequelize, DataTypes) {
    var mv_clientedet = sequelize.define("mv_clientedet", {
      cd_idCLientedet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      cd_idEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cd_idCLiente: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cd_usoCfdi: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      cd_condPago: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      cd_limCred: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      cd_plaCred: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      cd_lp: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      cd_agente: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      cd_categoria: {
        type: DataTypes.STRING(30),
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
    return mv_clientedet;
  };
  



  
