const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(
        _pr_idProducto,
        _pr_idEmpresa,
        _pr_IDW,
        _pr_sku,
        _pr_gtin,
        _pr_name,
        _pr_description,
        _pr_Slug,
        _pr_Permalinks,
        _pr_type,
        _pr_Status,
        _pr_sale_price,
        _pr_date_on_sale_from,
        _pr_date_on_sale_to,
        _pr_on_sale,
        _pr_shipping_required,
        _pr_shipping_taxable,
        _pr_shipping_class,
        _pr_shipping_class_id,
        _pr_cross_sell_ids,
        _pr_upsell_ids,
        _pr_grouped_products,
        _pr_stock_status,
        _pr_links,
        _pr_tax_status,
        _pr_tax_class,
        _pr_manage_stock,
        _pr_TasaEntrada , 
        _pr_TasaSalida , 
        _pr_Bloqueado , 
        _pr_ClaveProdServ , 
        _pr_ClaveUnidad , 
        _pr_Atributo , 
        _pr_Delete ,   
        )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {

                      "prod_pr_idProducto":_pr_idProducto, 
                      "prod_pr_idEmpresa":_pr_idEmpresa ,
                      "prod_pr_IDW":_pr_IDW,
                      "prod_pr_sku":_pr_sku,
                      "prod_pr_gtin":_pr_gtin,
                      "prod_pr_Titulo":_pr_name,
                      "prod_pr_description":_pr_description,
                      "prod_pr_Slug":_pr_Slug,  
                      "prod_pr_Atributos":_pr_Permalinks,                              
                      "prod_pr_type":_pr_type,
                      "prod_pr_Status":_pr_Status,                      
                      "prod_pr_sale_price":_pr_sale_price, 
                      "prod_pr_date_on_sale_from":_pr_date_on_sale_from ,
                      "prod_pr_date_on_sale_to":_pr_date_on_sale_to,                                 
                      "prod_pr_on_sale":_pr_on_sale,         
                      "prod_pr_shipping_required":_pr_shipping_required,            
                      "prod_pr_shipping_taxable":_pr_shipping_taxable,       
                      "prod_pr_shipping_class":_pr_shipping_class,    
                      "prod_pr_shipping_class_id":_pr_shipping_class_id,    
                      "prod_pr_cross_sell_ids":_pr_cross_sell_ids,
                      "prod_pr_upsell_ids":_pr_upsell_ids,
                      "prod_pr_grouped_products":_pr_grouped_products,             
                      "prod_pr_stock_status":_pr_stock_status,              
                      "prod_pr_links":_pr_links,
                      "prod_pr_tax_status":_pr_tax_status,
                      "prod_pr_tax_class":_pr_tax_class,
                      "prod_pr_manage_stock":_pr_manage_stock,
                      "prod_pr_delete":_pr_TasaEntrada , 
                      "prod_pr_delete":_pr_TasaSalida , 
                      "prod_pr_delete":_pr_Bloqueado , 
                      "prod_pr_delete":_pr_ClaveProdServ , 
                      "prod_pr_delete":_pr_ClaveUnidad , 
                      "prod_pr_delete":_pr_Atributo , 
                      "prod_pr_delete":_pr_Delete ,                

                };

                objDB.mv_Productos.create(
                    parametros)
                    .then(dbModel => {
                        resolve( { "Codigo" : "0", "Mensaje" : "", "id" : dbModel.dataValues.id } );
                    })
                    .catch(error => {
                        resolve( { "Codigo" : "-1", "Mensaje" : "Error al insertar la orden: " + error.message } );
                    });
            })();
        });
    },
    Actualizar(
        _pr_idProducto,
        _pr_idEmpresa,
        _pr_IDW,
        _pr_sku,
        _pr_gtin,
        _pr_name,
        _pr_description,
        _pr_Slug,
        _pr_Permalinks,
        _pr_type,
        _pr_Status,
        _pr_sale_price,
        _pr_date_on_sale_from,
        _pr_date_on_sale_to,
        _pr_on_sale,
        _pr_shipping_required,
        _pr_shipping_taxable,
        _pr_shipping_class,
        _pr_shipping_class_id,
        _pr_cross_sell_ids,
        _pr_upsell_ids,
        _pr_grouped_products,
        _pr_stock_status,
        _pr_links,
        _pr_tax_status,
        _pr_tax_class,
        _pr_manage_stock,
        _pr_TasaEntrada , 
        _pr_TasaSalida , 
        _pr_Bloqueado , 
        _pr_ClaveProdServ , 
        _pr_ClaveUnidad , 
        _pr_Atributo , 
        _pr_Delete ,  
        )
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    
                    "prod_pr_idProducto":_pr_idProducto, 
                    "prod_pr_idEmpresa":_pr_idEmpresa ,
                    "prod_pr_IDW":_pr_IDW,
                    "prod_pr_sku":_pr_sku,
                    "prod_pr_gtin":_pr_gtin,
                    "prod_pr_Titulo":_pr_name,
                    "prod_pr_description":_pr_description,
                    "prod_pr_Slug":_pr_Slug,  
                    "prod_pr_Atributos":_pr_Permalinks,                              
                    "prod_pr_type":_pr_type,
                    "prod_pr_Status":_pr_Status,                      
                    "prod_pr_sale_price":_pr_sale_price, 
                    "prod_pr_date_on_sale_from":_pr_date_on_sale_from ,
                    "prod_pr_date_on_sale_to":_pr_date_on_sale_to,                                 
                    "prod_pr_on_sale":_pr_on_sale,         
                    "prod_pr_shipping_required":_pr_shipping_required,            
                    "prod_pr_shipping_taxable":_pr_shipping_taxable,       
                    "prod_pr_shipping_class":_pr_shipping_class,    
                    "prod_pr_shipping_class_id":_pr_shipping_class_id,    
                    "prod_pr_cross_sell_ids":_pr_cross_sell_ids,
                    "prod_pr_upsell_ids":_pr_upsell_ids,
                    "prod_pr_grouped_products":_pr_grouped_products,             
                    "prod_pr_stock_status":_pr_stock_status,              
                    "prod_pr_links":_pr_links,
                    "prod_pr_tax_status":_pr_tax_status,
                    "prod_pr_tax_class":_pr_tax_class,
                    "prod_pr_manage_stock":_pr_manage_stock,
                    "prod_pr_delete":_pr_TasaEntrada , 
                    "prod_pr_delete":_pr_TasaSalida , 
                    "prod_pr_delete":_pr_Bloqueado , 
                    "prod_pr_delete":_pr_ClaveProdServ , 
                    "prod_pr_delete":_pr_ClaveUnidad , 
                    "prod_pr_delete":_pr_Atributo , 
                    "prod_pr_delete":_pr_Delete ,                

                                  

                };

                objDB.mv_Productos.update(
                    parametros,
                    { where : { id : _id }})
                    .then(dbModel => {
                        resolve( { "Codigo" : "0", "Mensaje" : "" } );
                    })
                    .catch(error => {
                        resolve( { "Codigo" : "-1", "Mensaje" : "Error al actualizar la orden: " + error.message } );
                });
            })();
        });
    },
    Buscar(_idCliente, _numorden)
    {
        return new Promise (resolve => {
            (async () => {
                objDB.mv_Productos.findAll({
                    where : { 
                        [Op.and]: [
                        { idCliente: { [Op.eq] : _idCliente } },
                        { numorden: { [Op.eq] : _numorden } }
                      ] 
                    },
                    order: [
                        ['id', 'DESC']
                    ]
                })
                .then(dbModel => {
                    let filasEncontradas = dbModel.length;
                      
                    if(filasEncontradas == 0)
                    {
                        resolve( { "Codigo" : "-1", "Mensaje" : "La categoria no existe" } );
                    }
                    else// if(filasEncontradas == 1)
                    {
                        let resultado = {
                            "Codigo" : "0",
                            "Mensaje" : "",
                            "pr_idProducto": dbModel[0].pr_idProducto, 
                            "pr_idEmpresa": dbModel[0].pr_idEmpresa ,
                            "pr_IDW": dbModel[0].pr_IDW,
                            "pr_sku": dbModel[0].pr_sku,
                            "pr_gtin": dbModel[0].pr_gtin,
                            "pr_name": dbModel[0].pr_name,
                            "pr_description":dbModel[0].pr_description,
                            "pr_Slug":dbModel[0].pr_Slug,  
                            "pr_Permalinks":dbModel[0].pr_Permalinks,                              
                            "pr_type":dbModel[0].pr_type,
                            "pr_Status":dbModel[0].pr_Status,                      
                            "pr_sale_price":dbModel[0].pr_sale_price, 
                            "pr_date_on_sale_from":dbModel[0].pr_date_on_sale_from ,
                            "pr_date_on_sale_to":dbModel[0].pr_date_on_sale_to,                                 
                            "pr_on_sale":dbModel[0].pr_on_sale,         
                            "pr_shipping_required":dbModel[0].pr_shipping_required,            
                            "pr_shipping_taxable":dbModel[0].pr_shipping_taxable,       
                            "pr_shipping_class":dbModel[0].pr_shipping_class,    
                            "pr_shipping_class_id":dbModel[0].pr_shipping_class_id,    
                            "pr_cross_sell_ids":dbModel[0].pr_cross_sell_ids,
                            "pr_upsell_ids":dbModel[0].pr_upsell_ids,
                            "pr_grouped_products":dbModel[0].pr_grouped_products,             
                            "pr_stock_status":dbModel[0].pr_stock_status,              
                            "pr_links":dbModel[0].pr_links,
                            "pr_tax_status":dbModel[0].pr_tax_status,
                            "pr_tax_class":dbModel[0].pr_tax_class,
                            "pr_manage_stock":dbModel[0].pr_manage_stock,
                            "pr_TasaEntrada":dbModel[0].pr_TasaEntrada,
                            "pr_TasaSalida":dbModel[0].pr_TasaSalida   ,
                            "pr_Bloqueado":dbModel[0].pr_Bloqueado , 
                            "pr_ClaveProdServ":dbModel[0].pr_ClaveProdServ   ,
                            "pr_ClaveUnidad":dbModel[0].pr_ClaveUnidad  , 
                            "pr_Atributo":dbModel[0].pr_Atributo   ,
                            "pr_Delete":dbModel[0].pr_Delete      
                                                                  
                        };

                        resolve( resultado );
                    }
                    /*else if(filasEncontradas > 1)
                    {
                        resolve( { "Codigo" : "-1", "Mensaje" : "La orden existe más de una vez" } );
                    }*/
                })
                .catch(error => {
                    resolve( { "Codigo" : "-1", "Mensaje" : "Error al buscar la orden: " + error.message } );
                });
            })();
        });
    }
};


