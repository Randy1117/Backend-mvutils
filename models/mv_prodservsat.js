module.exports = function(sequelize, DataTypes) {
    var mv_prodservsat = sequelize.define("mv_prodservsat", {
     
      Prod_ClaveProdServ: {
        type: DataTypes.STRING(10),
        allowNull: true,
        primaryKey: true,
      },
      Prod_Nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
        primaryKey: true,

      },
     delet: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },

    
    },{
        freezeTableName: true
    });
    return mv_prodservsat;
  };
  
