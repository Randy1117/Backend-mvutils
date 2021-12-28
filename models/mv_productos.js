module.exports = function(sequelize, DataTypes) {
  var mv_productos = sequelize.define("mv_productos", {
    pr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    pr_idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pr_idw: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pr_idVariacionesWoo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
     pr_sku: {
      type: DataTypes.STRING(19),
      allowNull: true,
    },
    pr_gtin: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    pr_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
   
    },
    pr_description: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: ""
    },
    pr_slug: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    pr_perma_link: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: ""
    },
    
    pr_CuentaContable: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: ""
    },
   
    pr_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    pr_status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    pr_sale_price: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_date_on_sale_from: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_date_on_sale_to: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_on_sale: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_shipping_required: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },

    pr_shipping_taxable: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: ""
    },

    pr_shipping_class: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_shipping_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },

    pr_cross_sell_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },

    pr_upsell_ids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: '0'
    },

    pr_grouped_products: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_stock_status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_links: {
      type: DataTypes.STRING(300),
      allowNull: true,
      defaultValue: ""
    },

    pr_tax_status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_tax_class: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },

    pr_manage_stock: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: ""
    },
    pr_TasaEntrada: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    pr_TasaSalida: {
      type: DataTypes.STRING(3),
      allowNull: true,
    },
    pr_Bloqueado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0"
    },
    pr_ClaveProdServ: {
      type: DataTypes.STRING(19),
      allowNull: true,
    },
    pr_ClaveUnidad: {
      type: DataTypes.STRING(19),
      allowNull: true,
    },
    pr_Atributo: {
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
  return mv_productos;
};
