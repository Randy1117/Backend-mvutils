module.exports = function(sequelize, DataTypes) {
    var mv_direccion = sequelize.define("mv_direccion", {
      dir_idDireccion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      dir_idEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dir_idCliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
      },
      dir_WooDirSt: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
      },
      dir_tipoDir: {
        type: DataTypes.STRING(30),
        allowNull: true,
        primaryKey: true,
      },
      dir_dirLine1: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      dir_dirLine2: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: ""
      },
      dir_ciudad: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: ""
      },
      dir_estado: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: ""
      },
      dir_CP: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: ""
      },
      dir_Pais: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: ""
      },
      dir_correo: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: ""
      },
      dir_tel: {
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
    return mv_direccion;
  };
  
