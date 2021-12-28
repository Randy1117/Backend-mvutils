module.exports = function(sequelize, DataTypes) {
    var mv_contactos = sequelize.define("mv_contactos", {
      con_idContacto: {
        type: DataTypes.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
      },
      con_idEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      con_nombre: {
        type: DataTypes.STRING(30),
        allowNull: true,
      
      },
      con_apellido: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      con_Correo: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: "0"
      },
      con_telefono: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: "0"
      },

      con_puesto: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: "0"
      },
      con_idExterna: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: "0"
      },
      con_fechaNac: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: "0"
      },
      con_Curp: {
        type: DataTypes.STRING(16),
        allowNull: true,
        
      },
      con_rfc: {
        type: DataTypes.STRING(14),
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
    return mv_contactos;
  };
  
