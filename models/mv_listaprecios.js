module.exports = function(sequelize, DataTypes) {
  var mv_listaprecios = sequelize.define("mv_listaprecios", {
    lp_IdListaPrecios: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    lp_codLp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lp_nomdLp: {
      type: DataTypes.STRING(30),
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
  return mv_listaprecios;
};


