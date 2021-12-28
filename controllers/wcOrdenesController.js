const objDB = require("../models");
const { Op } = require("sequelize");

module.exports = {
    Insertar(_id,_parent_id,_status,_currency,_version,_prices_include_tax,_date_created,_date_modified,_discount_total,_discount_tax,shipping_total, _shipping_tax,cart_tax,_total,_total_tax,_customer_id,_order_key,_billing)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros =
                {
                    
                    "id" : _id,
                    "parent_id" :_parent_id,
                    "status" : _status,
                    "currency" : _currency,
                    "version" : _version,
                    "prices_include_tax" : _prices_include_tax,
                    "date_created" : _date_created,
                    "date_modified" : _date_modified,
                    "discount_total" : _discount_total,
                    "discount_tax" : _discount_tax,
                    "shipping_total" : shipping_total,
                    "shipping_tax" : _shipping_tax,
                    "cart_tax" : cart_tax,
                    "total" : _total,
                    "total_tax" : _total_tax,
                    "customer_id" : _customer_id,
                    "order_key" : _order_key,
                    "billing" : _billing,
_

                };

                objDB.wc_ordenes.create(
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
    Actualizar(_id, _idCliente, _numorden, _fechaRecepcion, _response)
    {
        return new Promise (resolve => {
            (async () => {
                var parametros = 
                {
                    "id" : _id,
                    "parent_id" :_parent_id,
                    "status" : _status,
                    "currency" : _currency,
                    "version" : _version,
                    "prices_include_tax" : _prices_include_tax,
                    "date_created" : _date_created,
                    "date_modified" : _date_modified,
                    "discount_total" : _discount_total,
                    "discount_tax" : _discount_tax,
                    "shipping_total" : shipping_total,
                    "shipping_tax" : _shipping_tax,
                    "cart_tax" : cart_tax,
                    "total" : _total,
                    "total_tax" : _total_tax,
                    "customer_id" : _customer_id,
                    "order_key" : _order_key,
                    "billing" : _billing,
                };

                objDB.wc_ordenes.update(
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
                objDB.wc_ordenes.findAll({
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
                        resolve( { "Codigo" : "-1", "Mensaje" : "La orden no existe" } );
                    }
                    else// if(filasEncontradas == 1)
                    {
                        let resultado = {
                            "Codigo" : "0",
                            "Mensaje" : "",
                            "id" : dbModel[0].id,
                            "parent_id" : dbModel[0].parent_id,
                            "status" : dbModel[0].status,
                            "currency" : dbModel[0].currency,
                            "version" : dbModel[0].version,
                            "prices_include_tax" : dbModel[0].prices_include_tax,
                            "date_created" : dbModel[0].date_created,
                            "date_modified" : dbModel[0].date_modified,
                            "discount_total" : dbModel[0].discount_total,
                            "discount_tax" : dbModel[0].discount_tax,
                            "shipping_total" : dbModel[0].shipping_total,
                            "shipping_tax" : dbModel[0].shipping_tax,
                            "cart_tax" : dbModel[0].cart_tax,
                            "total" : dbModel[0].total,
                            "total_tax" : dbModel[0].total_tax,
                            "customer_id" : dbModel[0].customer_id,
                            "order_key" : dbModel[0].order_key,
                            "billing" : dbModel[0].billing


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


